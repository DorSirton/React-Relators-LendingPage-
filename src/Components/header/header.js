import Title from '../Common/title/title';
import { useEffect, useState } from 'react';

import './header.scss';

function Header(){

    const [realators, setrealators] = useState([])
    useEffect(() =>{
    fetch("http://localhost:3030/realators").then((respons) => respons.json()).then(data => setrealators(data));
    },[]);








    return(
        <section className="header">
        <div className="headline">
            <div className="logo">
                <img src="./img/logo.png"/>
            </div>
            <div className="title-container">
                <Title text="Your Own Home"></Title>
                <h1>The ultimate personal freedom website</h1>
                <button>view our properties</button>
            </div>
            <footer className="seen-on">
                <div>
                    <hr/>
                    <h3>seen on</h3>
                    <hr/>
                </div>
                <div>
                    <img src="img/logo-bi.png"/>
                    <img src="img/logo-forbes.png"/>
                    <img src="img/logo-techcrunch.png"/>
                    <img src="img/logo-bbc.png"/>
                </div>
            </footer>
        </div>

        <div className="top-realtore">
            <Title align="left" text="Top 3 Realators"></Title>
            <div className="relators-container">
            {realators.map((item,index) =>
                 <div className="realtore">
                 <img src={item.image}/>
                 <div>
                     <h4>{item.name}</h4>
                     <p>{item.numberOfSold}</p>
                 </div>
             </div> )}
            </div>
        </div>
    </section>
    )
}

export default Header;