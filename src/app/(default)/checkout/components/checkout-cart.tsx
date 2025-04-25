import CartInfoTable from "./cart-info-table";
import CartEmpty from "./cart-empty";

export default function CheckoutCart() {
  return (
    <div className="px-6 py-4 rounded-xl bg-secondary-muted">
      <CartItemsWrapper>
        <CartEmpty />
      </CartItemsWrapper>
      <div className="text-secondary">
        <CartInfoTable />
      </div>
    </div>
  );
}

const CartItemsWrapper = ({ children }: {
  children: React.ReactNode,
}) => {
  return (
    <div className="mb-6 rounded-lg bg-white">
      {children}
    </div>
  );
}