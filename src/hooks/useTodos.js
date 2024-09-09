import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';

const client = generateClient({
    authMode: 'userPool',
});

const CACHE_KEY = 'todos_cache';
const CACHE_EXPIRATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
            const { data, timestamp } = JSON.parse(cachedData);
            if (Date.now() - timestamp < CACHE_EXPIRATION) {
                setTodos(data);
                return;
            }
        }

        const { data: fetchedTodos } = await client.models.Todo.list();
        setTodos(fetchedTodos);
        localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
                data: fetchedTodos,
                timestamp: Date.now(),
            })
        );
    }

    async function createTodo(content) {
        const { data: newTodo } = await client.models.Todo.create({
            content,
            isDone: false,
        });

        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        updateCache(updatedTodos);
    }

    async function toggleTodo(id) {
        const todoToUpdate = todos.find((todo) => todo.id === id);
        if (todoToUpdate) {
            const { data: updatedTodo } = await client.models.Todo.update({
                id: todoToUpdate.id,
                isDone: !todoToUpdate.isDone,
            });
            const updatedTodos = todos.map((todo) =>
                todo.id === id ? updatedTodo : todo
            );
            setTodos(updatedTodos);
            updateCache(updatedTodos);
        }
    }

    async function deleteTodo(id) {
        await client.models.Todo.delete({ id });
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        console.log('updatedTodos', updatedTodos);
        setTodos(updatedTodos);
        updateCache(updatedTodos);
    }

    function updateCache(updatedTodos) {
        localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
                data: updatedTodos,
                timestamp: Date.now(),
            })
        );
    }

    return { todos, createTodo, deleteTodo, toggleTodo };
}
