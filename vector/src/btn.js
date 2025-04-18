export default function Btn(props){
    return(
        <button className={props.CNAME} onClick={props.Behaviour}>{props.Name}</button>
    )
}

