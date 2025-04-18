import React from 'react';
let elem=<p>i am elem content</p>
let span=<span>hello i am span tag </span>
export const App=()=>{
    return (
        <div>
            <p>hellow world</p>
            <h1>bye world</h1>
        </div>) 

}
export let Apk=(props)=>{
    console.log(props)
    console.log({props})
    
    let x="sun"
    let fun=()=>{alert('f clicked')}
    return(
    <div>
        <p>hellow world</p>
        <p>{10+20}</p>
        <p>{x}</p>
        {elem}
        <button className='some' onClick={fun}>Click me</button>
        <p id={props.id}>i am props id :{props.id}</p>
        <p className={props.className}>i am props class:{props.className}</p>
    </div>
    )
}

export const app=(
    
    <div>
        i am app content 
        {elem}
        <p>{[span,span]}</p>
    </div>
    
    
)
//template string:${}  -> in jsx {}
//jsx =>reactElement
//In native HTML: <button onclick="fun()">click me </button> 
//for binding dynamic dta ainside jsx we use {}:  ->example: <p>{[span,span]}</p>

export const Card=({id,text,lastseen})=>{
    return(
    <div className='card' style={styles.card}>
        <h3>{id}</h3>
        <p>{text}</p>
        <p style={styles.time}>{lastseen}</p>
    </div>
    )
}
const styles={
    card:{
        boxShadow:"2px 2px 4px gray",
        padding:'12px',
        display:"flex",
        flexDirection:'column',
        gap:"2px",
        lineHeight:"2px"
    },
    time:{
        alignSelf:"flex-end",
        fontSize:'1rem',
        opacity:'0.7',
    }
}


