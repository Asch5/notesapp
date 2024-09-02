import { View, Flex, TextField, Button } from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';

export default function NoteForm({ onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        onSubmit(form);
        event.target.reset();
    };

    return (
        <View as="form" margin="3rem 0" onSubmit={handleSubmit}>
            <Flex
                direction="column"
                justifyContent="center"
                gap="2rem"
                padding="2rem"
                backgroundColor="#ffffff"
            >
                <TextField
                    name="name"
                    placeholder="Note Name"
                    label="Note Name"
                    labelHidden
                    variation="quiet"
                    required
                />
                <TextField
                    name="description"
                    placeholder="Note Description"
                    label="Note Description"
                    labelHidden
                    variation="quiet"
                    required
                />
                <View
                    name="image"
                    as="input"
                    type="file"
                    alignSelf={'end'}
                    accept="image/png, image/jpeg"
                />
                <Button type="submit" variation="primary">
                    Create Note
                </Button>
            </Flex>
        </View>
    );
}

NoteForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
