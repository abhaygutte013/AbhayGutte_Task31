import { useContext } from "react";
import { CartContext } from "/components/CartContext.jsx";

function ShoeCard({shoe}){
  const{cart,setCart}=useContext(CartContext);
  function addToCart(){
    const found=cart.find((item)=>item.id===shoe.id);
    if (found){
      const updated=cart.map((item)=>
        item.id===shoe.id
          ? {...item,quantity:item.quantity + 1 }
          :item
      );
      setCart(updated);
    } else {
      setCart([
        ...cart,
        {
          ...shoe,
          quantity: 1
        }
      ]);
    }
  }
  return (
    <div className="shoe-card">
      <img
        src={shoe.image}
        alt={shoe.name}
      />
      <h3>{shoe.name}</h3>
      <p>₹ {shoe.price}</p>
      <button onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}
export default ShoeCard;