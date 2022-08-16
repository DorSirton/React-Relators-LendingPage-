import { useEffect, useState} from 'react';
import {useNavigate} from  'react-router-dom';
import './gallery.scss' ;
import { Save } from '../../Store/Reducers/gallerySlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import GalleryService from '../../Services/galleryService'; 

function Gallery(){
        const gallery = useSelector((state) => state.gallerySlice.gallery)
        const dispatche = useDispatch();
        // const [gallery, setGallery] = useState([])
        const service = new GalleryService();
        const navigate = new useNavigate();
        useEffect(() =>{
        service.get().then(data => {
                if(data){
                        dispatche(Save(data))
                }
        }) 
     },[]);

     function GoToImage(id){
        navigate("/gallery/" +id)
     }

//      function Addimages(){
//         service.post({src : `img/gal-${gallery.length+1}.jpeg`, title:`Gallery image ${gallery.length+1}`})
//         .then(data =>{
//                 let images = [...gallery];
//                 images.push(data);
//                 setGallery(images);
//         })
//      }
//      function DeleteImage(id){
//         service.delete(id)
//         .then(data =>{
//                 let images = [...gallery];
//                 images = images.filter(i => i.id != id);
//                 setGallery(images);
//         })

//      }
     
     return(
        <section className="gallery">
                {gallery.map((item,index) =>
                 <figure key={item.id} onClick={()=> GoToImage(item.id)} className={"gallery__item gallery__item--"+(index +1)}>
                        <img src={item.src} alt={item.title} className="gallery__img" />
                        {/* <button onClick={()=>DeleteImage(item.id)}>Remove Image</button> */}
                </figure>) }
                <div>
                        <br></br>
                        {/* <button onClick={Addimages} >Click to AddImage</button> */}
                </div>
        </section>
       
     )



//         <section className="gallery">
//         <figure className="gallery__item gallery__item--1"><img src="img/gal-1.jpeg" alt="Gallery image 1"
//                 className="gallery__img" /></figure>
//         <figure className="gallery__item gallery__item--2"><img src="img/gal-2.jpeg" alt="Gallery image 2"
//                 className="gallery__img" /></figure>
//         <figure className="gallery__item gallery__item--3"><img src="img/gal-3.jpeg" alt="Gallery image 3"
//                 className="gallery__img" /></figure>
//         <figure className="gallery__item gallery__item--4"><img src="img/gal-4.jpeg" alt="Gallery image 4"
//                 className="gallery__img" /></figure>
//         <figure className="gallery__item gallery__item--5"><img src="img/gal-5.jpeg" alt="Gallery image 5"
//                 className="gallery__img" /></figure>
//         <figure className="gallery__item gallery__item--6"><img src="img/gal-6.jpeg" alt="Gallery image 6"
//                 className="gallery__img" /></figure>
//         <figure className="gallery__item gallery__item--7"><img src="img/gal-7.jpeg" alt="Gallery image 7"
//                 className="gallery__img"/></figure>
//         <figure className="gallery__item gallery__item--8"><img src="img/gal-8.jpeg" alt="Gallery image 8"
//                 className="gallery__img"/></figure>
//         <figure className="gallery__item gallery__item--9"><img src="img/gal-9.jpeg" alt="Gallery image 9"
//                 className="gallery__img"/></figure>
//         <figure className="gallery__item gallery__item--10"><img src="img/gal-10.jpeg" alt="Gallery image 10"
//                 className="gallery__img"/></figure>
//         <figure className="gallery__item gallery__item--11"><img src="img/gal-11.jpeg" alt="Gallery image 11"
//                 className="gallery__img"/></figure>
//         <figure className="gallery__item gallery__item--12"><img src="img/gal-12.jpeg" alt="Gallery image 12"
//                 className="gallery__img"/></figure>
//         <figure className="gallery__item gallery__item--13"><img src="img/gal-13.jpeg" alt="Gallery image 13"
//                 className="gallery__img"/></figure>
//         <figure className="gallery__item gallery__item--14"><img src="img/gal-14.jpeg" alt="Gallery image 14"
//                 className="gallery__img"/></figure>
//     </section>
    
}
export default Gallery;