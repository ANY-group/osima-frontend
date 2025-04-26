import CartInfoTable from "./cart-info-table";
import CartEmpty from "./cart-empty";
import CartItem from "./cart-item";

export default function CheckoutCart() {
  return (
    <div className="md:p-3 lg:px-6 lg:py-4 md:rounded-xl md:bg-secondary-muted">
      <div className="mb-6 rounded-lg bg-white">
        <Cart />
      </div>
      <div className={`${false && 'text-secondary'}`}>
        <CartInfoTable />
      </div>
    </div>
  );
}

const Cart = () => {
  const items = [...Array(2)];

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