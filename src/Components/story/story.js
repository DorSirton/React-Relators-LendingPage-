import Btn from '../Common/button/button';
import Title from '../Common/title/title';
import './story.scss';
function Story(){
    return(
        <section className="story">
        <div className="pictures">
            <img className="pic-2" src="img/story-1.jpeg"/>
            <img className="pic-3" src="img/story-2.jpeg"/>
        </div>
        <div className="paragraph-story">
            <Title text="Happy Costumers"></Title>
            <h1>"The Best Decision Of our Lives"</h1>
            <p>Undoubtedly the best decision we made regarding the purchase of this apartment,
                simply brings happiness.</p>
                <Btn title="Find Your Own Hom"></Btn>
        </div>
    </section>
    )
    
}
export default Story