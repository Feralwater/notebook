import React, {useState} from 'react';
import Note from "./components/note/Note";
import AddForm from "./components/addForm/AddForm";

function App() {
    return (<>
            <AddForm/>
            <Note/>
        </>
    );
}

export default App;
