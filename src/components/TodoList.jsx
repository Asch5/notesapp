import { Collection, Flex, Button, CheckboxField } from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onDelete, onToggle }) => {
    return (
        <Collection
            items={todos}
            type="list"
            direction="column"
            gap="1rem"
            wrap="nowrap"
        >
            {(todo, index) => (
                <Flex
                    key={todo.id}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Flex alignItems="center">
                        <CheckboxField
                            label={todo.content}
                            name={`todo-${index}`}
                            value={todo.id}
                            checked={todo.isDone}
                            onChange={() => onToggle(todo.id)}
                        />
                    </Flex>
                    <Button onClick={() => onDelete(todo.id)} variation="link">
                        Delete
                    </Button>
                </Flex>
            )}
        </Collection>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default TodoList;
