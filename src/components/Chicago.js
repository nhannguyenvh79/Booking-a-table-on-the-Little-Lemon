const imagespecialsChef1 =  require('../assets/images/head_chef.jpg')  ;
const imagespecialsChef2 =  require('../assets/images/mario-and-adrian.jpg')  ;
function Chicago() {
  // about  image des chefs
    return (
      <>
        <section className='resto'>

                <div className='restoCard'>
                <h2 className="title">Little Lemon</h2>
                <h5 className="subtitle">Chicago</h5>
                <p className="txt">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                </div>

                <div className='restoCard'>
                  <img className="imagerestoCard" src={imagespecialsChef1} alt="head chef" />
                  <img className="imagerestoCard blocNew" src={imagespecialsChef2} alt="Mario and Adrian" />
                </div>
        </section>
        </>
    );
};

export default Chicago;