import {
    Authenticator,
    Flex,
    Heading,
    Button,
    Divider,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { useNotes } from './hooks/useNotes';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

export default function App() {
    const { notes, createNote, deleteNote } = useNotes();

    return (
        <Authenticator>
            {({ signOut }) => (
                <Flex
                    className="App"
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    width="70%"
                    margin="0 auto"
                >
                    <Heading level={1}>My Notes App</Heading>
                    <NoteForm onSubmit={createNote} />
                    <Divider />
                    <Heading level={2}>Current Notes</Heading>
                    <NoteList notes={notes} onDelete={deleteNote} />
                    <Button onClick={signOut}>Sign Out</Button>
                </Flex>
            )}
        </Authenticator>
    );
}
