import { useTodos } from '../hooks/useTodos';
import { Flex, Heading } from '@aws-amplify/ui-react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { memo } from 'react';

const Todos = memo(() => {
    const { todos, createTodo, deleteTodo, toggleTodo } = useTodos();
    console.log('todos', todos);
    return (
        <Flex direction="column" alignItems="center" height="100vh">
            <Heading level={1}>TodoS</Heading>
            <TodoForm onSubmit={createTodo} />
            <TodoList
                todos={todos}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
            />
        </Flex>
    );
});

Todos.displayName = 'Todos';

export default Todos;
