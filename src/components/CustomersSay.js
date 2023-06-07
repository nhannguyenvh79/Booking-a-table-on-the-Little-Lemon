const testinomialData = [
  {
    name:'Jim Reynor',
    comment:'The food here really refreshed me after a late night shift at the local supply depot',
    image:'GrilledfishB.jpg',
  },
  {
    name:'Brian Dean',
    comment:'The food here was fire!! Everyone should try this place out at least once if they live in Chicago.',
    image:'lemondessertB.jpg',
  },

  {
    name:'Alan Chen',
    comment:'My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.',
    image:'GrilledfishC.jpg'
  },
  {
    name:'Jack Hu',
    comment:'I have had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.',
    image:'pasta.jpg',
  },
  {
    name:'Micheal Caldwell',
    comment:'Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.',
    image:'lemondessertB.jpg',
  }
]

export default function CustomersSay() {

    return (
      <>        
          <section className="spaceSection backGround">
                <h2 className="titleSection">Testimonial</h2>

                <div className='testinomial'>
                {testinomialData.map( item =>(
                  <div className="cardRating">
                  <h5 className="yellowColor">Rating</h5>
                  <img className="imagecardRating"src={require('../assets/images/' + item.image)} alt={item.name} />
                  <p className='bolderTxt'>{item.name}</p>
                  <p>{item.comment}</p>
                </div>                
                ) )}
                </div>
            </section>
        </>
    );
};


