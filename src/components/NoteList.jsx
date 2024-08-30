import { Grid } from '@aws-amplify/ui-react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

export default function NoteList({ notes, onDelete }) {
    return (
        <Grid
            margin="3rem 0"
            autoFlow="column"
            justifyContent="center"
            gap="2rem"
            alignContent="center"
        >
            {notes.map((note) => (
                <NoteItem
                    key={note.id || note.name}
                    note={note}
                    onDelete={onDelete}
                />
            ))}
        </Grid>
    );
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};
