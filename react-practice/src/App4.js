import React,{useState,useEffect, useReducer} from 'react';
function App4(){
    const [checked,toggle]=useReducer(
        (checked)=>!checked,
        false
        );

    //reducer takes in current state and gives new state

    return(
        <>
        <input type="checkbox"
        value={checked}
        onChange={toggle}
        />
        <p>{ checked ? "checked" : "not checked"}</p>
        </>

    );
}

export default App4;