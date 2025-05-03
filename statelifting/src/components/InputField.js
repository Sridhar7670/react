function InputField(props){
    return(
        <input type="text" value={props.text} onChange={(e)=>props.setText(e.target.value)}  />

    )
}
export default InputField;