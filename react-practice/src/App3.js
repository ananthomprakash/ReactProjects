import React,{useState,useEffect} from 'react';
function App3(){
    const [emotion, setEmotion]=useState("Happy");

useEffect(()=>{console.log(`It's ${emotion} around here`)});

    return(
        <>
        <h1>Current emotion is {emotion} </h1>
        <button onClick={()=>setEmotion("Happy")}>Happy</button>
        <button onClick={()=>setEmotion("Frustrated")}>Frustrate</button>
        <button onClick={()=>setEmotion("enthusiastic")}>enthusiastic</button>
        </>

    );
}

export default App3;