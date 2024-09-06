import { Authenticator, Flex, Heading, Divider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { useNotes } from './hooks/useNotes';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Forum from './pages/Forum';
import './App.css';

Amplify.configure(outputs);

function Features() {
    return <div>Features</div>;
}

export default function App() {
    const { notes, createNote, deleteNote } = useNotes();

    return (
        <Authenticator>
            {({ signOut }) => (
                <Router>
                    <Flex
                        direction="column"
                        width="100%"
                        minHeight="100vh"
                        alignItems="center"
                    >
                        <Header signOut={signOut} />

                        <Flex
                            className="App"
                            justifyContent="flex-start"
                            alignItems="center"
                            direction="column"
                            width="100%"
                            margin="0 auto"
                            flex="1"
                        >
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <>
                                            <Heading level={1}>
                                                My Notes App
                                            </Heading>
                                            <NoteForm onSubmit={createNote} />
                                            <Divider />
                                            <Heading level={2}>
                                                Current Notes
                                            </Heading>
                                            <NoteList
                                                notes={notes}
                                                onDelete={deleteNote}
                                            />
                                        </>
                                    }
                                />
                                <Route
                                    path="/features"
                                    element={<Features />}
                                />
                                <Route path="/forum" element={<Forum />} />
                                {/* Add more routes for other pages */}
                            </Routes>
                        </Flex>
                    </Flex>
                </Router>
            )}
        </Authenticator>
    );
}
