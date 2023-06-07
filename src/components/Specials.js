import { Link } from 'react-router-dom';

const menus = [
  {
      name:'Greek salad',
      price:12.90,
      description: 'Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.',
      image: 'GreekSalad.jpg',
  },
  {
      name:'Bruschetta',
      price:16.90,
      description: 'Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.',
      image: 'Bruschetta.jpg',
  },
  {
      name:'Lemon Dessert',
      price:8.50,
      description: 'Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.',      
      image: 'Lemondessert.jpg',
  },
];

function Specials() {
    return (  
      <>        
        <section className="spaceSection">
           <h2 className="titleSection">Specials <span className="buttonLink"><Link to={"./menu"} class="linkPage">Choose your menu !</Link></span></h2>

            <div className='specials'>
            {menus.map(item =>(
              <div className="card"  key={item.name}>        
                <img src={require('../assets/images/menu_items/' + item.image)} alt={item.name} className="imageCard"  />
                <h3>{item.name} <span className="price"> ${item.price}</span></h3>
                <p>{item.description}</p>
              </div>
               ))}
              
            </div>
              
        </section>
      </>
    );
};

export default Specials;
