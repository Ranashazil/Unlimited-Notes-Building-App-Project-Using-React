import React, { useState, useEffect } from 'react';
import CreateComponent from '../createComponent/CreateComponent';
import { v4 as uuid } from 'uuid';
import Display from '../Display/Display';

function Notes() {
    const [notes, setNotes] = useState(() => {
        const mine = JSON.parse(localStorage.getItem('myData'));
        return mine || [];
    });

    const [input, setInput] = useState('');
const [alert, setAlert] = useState('')
const [editingId, setEditingId] = useState(null);

    const textHandler = (e) => {
        setInput(e.target.value);
    };

    const SaveHandler = () => {
        if (editingId) {
            setNotes((prevState) =>
                prevState.map((note) =>
                    note.id === editingId ? { ...note, text: input } : note
                )
            );
            setEditingId(null);
        } else {
            // Add new note
            setNotes((prevState) => [
                ...prevState,
                {
                    id: uuid(),
                    text: input,
                },
            ]);
        }

        setInput('');
        setAlert(editingId ? 'Note has been updated successfully!' : 'Note has been saved successfully!');
        setTimeout(() => setAlert(''), 4000);
    };

    const deleteHandle = (id) => {
        const deleteItem = notes.filter((deleted) => deleted.id !== id);
        setNotes(deleteItem);
        setAlert('Note has been deleted successfully!')
        setTimeout(() => {
            setAlert('')
        }, 3000);
    };

    const editNote = (id) => {
        const noteToEdit = notes.find((note) => note.id === id);
        setInput(noteToEdit.text);
        setEditingId(id); // Store the id of the note being edited
    };

    useEffect(() => {
        localStorage.setItem('myData', JSON.stringify(notes));
    }, [notes]);

    return (
        <div className="min-h-screen bg-blue-100 flex rounded-sm flex-col items-center py-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">My Notes Creating Library</h1>
            {alert && (
                <div className="mb-4 p-2 bg-green-100 border border-green-400 text-red-700 rounded text-center">
                    {alert}
                </div>
            )}
            <div className="w-full max-w-md space-y-4">
                {notes.map((item) => (
                    <Display
                        id={item.id}
                        key={item.id}
                        text={item.text}
                        deleteHandle={deleteHandle}
                        editNote={editNote}
                    />
                ))}
                <CreateComponent
                    textHandler={textHandler}
                    SaveHandler={SaveHandler}
                    input={input}
                    setInput = {setInput}
                    editingId={editingId}
                />
            </div>
        </div>
    );
}

export default Notes;
