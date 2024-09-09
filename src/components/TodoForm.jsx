import { useState } from 'react';
import { Flex, TextField, Button, View } from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';

const TodoForm = ({ onSubmit }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            console.log('content', content);
            onSubmit(content);
            setContent('');
        }
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
                    label="New Todo"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter a new todo"
                />
                <Button type="submit" variation="primary">
                    Add Todo
                </Button>
            </Flex>
        </View>
    );
};

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
