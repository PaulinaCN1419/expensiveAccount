import './Card.css'
function Card(props) {
    
    const stylesCard = 'card ' + props.className 
    return(
        // <div className="card">
        <div className={stylesCard}>
            {props.children}
        </div>

    )
}
 export default Card