import CartInfoTable from "./cart-info-table";
import CartEmpty from "./cart-empty";
import CartItem from "./cart-item";

export default function CheckoutCart() {
  return (
    <div className="px-6 py-4 rounded-xl bg-secondary-muted">
      <div className="mb-6 rounded-lg bg-white">
        <Cart />
      </div>
      <div className="text-secondary">
        <CartInfoTable />
      </div>
    </div>
  );
}

const Cart = () => {
  const items = [...Array(4)];

  if (items.length == 0) {
    return <CartEmpty />
  }

  return (
    <div className="overflow-y-auto">
      {items.map((item, index) => (
        <CartItem
          key={index}
        />
      ))}
    </div>
  );
}