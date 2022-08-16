import { useEffect, useState } from 'react';
import './gallery.scss' ;
import {useParams, useNavigate} from  'react-router-dom';
import GalleryService from '../../Services/galleryService'; 


function Item(){

    let params = useParams(); 
    const [item, setItem] = useState([])
    const service = new GalleryService();
    const navigate = useNavigate();

        useEffect(() =>{
        service.getById(params.Id).then(data => setItem(data)) 
     },[params.Id]);

     function GoBack(){
        navigate("/gallery")
     }
     function Next(){
        navigate("/gallery/"+parseInt(item.id+1))
     }
     function Prev(){
        navigate("/gallery/"+parseInt(item.id-1))
     }

     return(
        <div>
            <button onClick={()=> GoBack()}>Go Back</button>
        <h1>{item && item.title}-{params.id}</h1>
        {item && <figure key={item.id}>
            <button onClick={()=> Prev()}>Previuose Picture</button>
            <img src={"/"+item.src} alt={item.title} className="gallery__img"/>
            <button onClick={()=> Next()}>Next Picture</button>
        </figure>}
        </div>
     )
}

export default Item