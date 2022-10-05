import { useGlobalContext } from "../context";

const CartItem = (props) => {
  const { item } = props;
  const { addToCart, removeFromCart } = useGlobalContext();
  const price = item.amount * item.price;
  return (
    <article>
      <img src={item.image} alt="" width="50" height="50" />
      <h4>{item.title}</h4>
      <p>${price.toFixed(2)}</p>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-slate-900 p-1 rounded-sm text-white"
      >
        rem
      </button>
      <p>{item.amount}</p>
      <button
        onClick={() => addToCart(item)}
        className="bg-slate-900 p-1 rounded-sm text-white"
      >
        add
      </button>
    </article>
  );
};

export default CartItem;
