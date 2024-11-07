import React from 'react';

function Display({ id, text, deleteHandle, editNote }) {
  return (
    <div className="flex items-center justify-between bg-gray-200  p-4 rounded-lg shadow-md border border-gray-200 mb-3">
      <div className="text-gray-800  font-medium">{text}</div>
      <div className='space-x-2'>
      <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    onClick={() => editNote(id)} 
                >
                    Edit
                </button>
      <button 
        className="px-3 py-1 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        onClick={() => deleteHandle(id)}
      >
        Delete
      </button>
      </div>
    </div>
  );
}

export default Display;
