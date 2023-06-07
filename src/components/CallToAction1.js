import { Link } from 'react-router-dom';
const plat =  require('../assets/images/restaurant food B.jpg')  ;

export default function CallToAction1() {
   

    return (
      <>
       <section className="callactionCard">
        
        <div className="textActionCard">
            <h1 className="title">Little Lemon</h1>
                <h3 className="subtitle">Chicago</h3>
                <p className="textaction">Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

                               
                <Link to={"./booking"} className="heroButton">Book your table now !</Link>
                

        </div>
        <div className="imageActionCard">
            <img src={plat} alt="plat" className='imageAction deplaceImage' />
        </div>

            
        </section>
        </>
    );
};
