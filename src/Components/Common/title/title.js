import "./title.scss"
function Title(props) {
    return(
        <h2 className="title" style={{"textAlign": props.align}}>{props.text}</h2>
    )
}
export default Title;