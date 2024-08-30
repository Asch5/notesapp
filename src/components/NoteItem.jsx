import {
    Flex,
    View,
    Heading,
    Text,
    Image,
    Button,
} from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';

export default function NoteItem({ note, onDelete }) {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            border="1px solid #ccc"
            padding="2rem"
            borderRadius="5%"
            className="box"
        >
            <View>
                <Heading level="3">{note.name}</Heading>
            </View>
            <Text fontStyle="italic">{note.description}</Text>
            {note.image && (
                <Image
                    src={note.image}
                    alt={`visual aid for ${note.name}`}
                    style={{ width: 400 }}
                />
            )}
            <Button variation="destructive" onClick={() => onDelete(note.id)}>
                Delete note
            </Button>
        </Flex>
    );
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};
