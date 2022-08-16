import "./button.scss"
function Btn(props){
    return(
        <button className="btn">{props.title}</button>
    )
}
export default Btn;