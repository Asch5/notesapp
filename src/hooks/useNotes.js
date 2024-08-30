import { useState, useEffect } from 'react';
import { getUrl, uploadData } from 'aws-amplify/storage';
import { generateClient } from 'aws-amplify/data';

const client = generateClient({
    authMode: 'userPool',
});

export function useNotes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const { data: fetchedNotes } = await client.models.Note.list();
        await Promise.all(
            fetchedNotes.map(async (note) => {
                if (note.image) {
                    const linkToStorageFile = await getUrl({
                        path: ({ identityId }) =>
                            `media/${identityId}/${note.image}`,
                    });
                    note.image = linkToStorageFile.url;
                }
                return note;
            })
        );
        setNotes(fetchedNotes);
    }

    async function createNote(form) {
        const { data: newNote } = await client.models.Note.create({
            name: form.get('name'),
            description: form.get('description'),
            image: form.get('image').name,
        });

        if (newNote.image) {
            await uploadData({
                path: ({ identityId }) =>
                    `media/${identityId}/${newNote.image}`,
                data: form.get('image'),
            }).result;
        }

        fetchNotes();
    }

    async function deleteNote(id) {
        await client.models.Note.delete({ id });
        fetchNotes();
    }

    return { notes, createNote, deleteNote };
}
