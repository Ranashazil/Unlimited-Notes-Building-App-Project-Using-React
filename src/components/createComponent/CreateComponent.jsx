import React,{useState} from 'react';
function CreateComponent({ textHandler, SaveHandler, input, setInput ,editingId}) {

    // const [alert, setAlert] = useState('')
const [alert2 , setAlert2] = useState('')
    const HandleSave = ()=>{
        SaveHandler()
        // setAlert('')
        // setTimeout(() => {
        //     setAlert('')
        // }, 4000);

    }

    const clearInput = ()=>{
         setInput('')
         setAlert2('Data in texarea has been cleared successfully')
         setTimeout(() => {
            setAlert2('')
         }, 3000);
    }
    return (
        <div className="p-6 bg-blue-200 rounded-lg shadow-lg max-w-md mx-auto">
            {/* {alert && (
                <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded text-center">
                    {alert}
                </div>
            )} */}
            {alert2 && (
                <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded text-center">
                    {alert2}
                </div>
            )}

            <div className="mb-4">
                <textarea 
                    className="w-full p-3 border bg-slate-300   border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    cols={10} 
                    rows={5} 
                    maxLength={1000} 
                    placeholder="Write something to create notes..." 
                    value={input} 
                    onChange={textHandler} 
                ></textarea>
            </div>
            <div className="flex justify-between items-center mt-2">
                <span className="text-green-600 font-semibold">Characters left: {1000 - input.length}</span>
                <button 
                    className={`px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 ${
                        input.length === 0 
                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                            : editingId 
                            ? 'bg-green-500 text-white hover:bg-green-600' // Green for update mode
                            : 'bg-blue-500 text-white hover:bg-blue-600' 
                    }`} 
                    onClick={HandleSave}
                    disabled={input.length === 0}
                >
                   {editingId ? 'Update Note' : 'Save Note'}
                </button>
                <button 
                    className={`ml-2  px-4 py-2 font-semibold rounded-lg bg-red-400 text-white  focus:outline-none focus:ring-2 focus:ring-red-500${
                        input.length === 0 
                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                            : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                    onClick={clearInput}
                    disabled = {input.length === 0}
                >
                    Clear Text
                </button>
            </div>
        </div>
    );
}

export default CreateComponent;
