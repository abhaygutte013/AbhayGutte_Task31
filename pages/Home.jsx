import shoes from "/src/data.js";
import ShoeCard from "/components/ShoeCard.jsx";
import Cart from "/components/Cart.jsx";
function Home(){
  return(
    <div className="container">
      <div className="products">
        <h1>Online Shoe Store</h1>
        <div className="shoe-grid">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.id}
              shoe={shoe}
            />
          ))}
        </div>
      </div>
      <Cart />
    </div>
  );
}
export default Home;