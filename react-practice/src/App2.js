import React from 'react';
function SecretComponent(){
    return<h1>Super secret component for auth </h1>;
}

function RegularComponent(){
    return<h1>Everyone can see</h1>;
}

function App2(props){
   return <>{props.authorized? <SecretComponent/>:<RegularComponent/>} </>
}

export default App2;