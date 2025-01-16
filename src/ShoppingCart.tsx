import { useAtom } from "jotai";
import { cartAtom, totalAtom } from "./shopping-cart-atoms";

function ShoppingCart() {
  const [cart, setCart] = useAtom(cartAtom);
  const [total] = useAtom(totalAtom);

  const addItem = (item: { name: string; price: number }) => {
    setCart([...cart, item]);
  };

  const removeItem = (item: { name: string; price: number }) => {
    setCart(cart.filter((_, index) => index !== cart.indexOf(item)));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ₹ {item.price}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ₹ {total}</p>
      <button onClick={() => addItem({ name: "Banana", price: 30 })}>
        Add Banana
      </button>
      <button onClick={() => addItem({ name: "Apple", price: 150 })}>
        Add Apple
      </button>
      <button onClick={() => addItem({ name: "Orange", price: 60 })}>
        Add Orange
      </button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default ShoppingCart;
