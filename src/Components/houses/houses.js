import "./houses.scss";
import { useEffect, useState } from 'react';

function Houses(){

    const [houses, setHouses] = useState([])
    useEffect(() =>{
    fetch("http://localhost:3030/Houses").then((respons) => respons.json()).then(data => setHouses(data));
    },[]);


    return(
        <section className="houses">
        {houses.map((item,index) => 
        <div className="house">
            <img src={item.image}/>
            <button className="btn-spec">{item.header}</button>
            <div className="details">
                <p>{item.country}</p>
                <p>{item.numberOfRooms}</p>
                <p>{item.meters}</p>
                <p>{item.price}</p>
           </div>
                <button className="btn-contact">Contact Relator</button>
        </div>
        )}
        </section>
    )
}
export default Houses;