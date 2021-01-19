import React,{useEffect,useState} from "react";

//https://api.github.com/users/ananthomprakash

function App5({login}){
    const[data,setData]=useState(null);
    
    useEffect(()=>{
        fetch(`https://api.github.com/users/${login}`)
        .then((response)=>response.json())
        .then(setData);

    },[]);

    if(data){
        return (<div>
            <h1>{data.name}</h1>
            <p>{data.location}</p>
            <img alt={data.login} src={data.avatar_url}></img>
        </div>);
    }
    return <div>No user Available</div>;
}

export default App5;