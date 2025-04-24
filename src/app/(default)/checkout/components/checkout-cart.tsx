import Link from "next/link";

export default function CheckoutCart() {
  return (
    <div className="px-6 py-4 rounded-xl bg-secondary-muted">
      <CartItemsWrapper>
        <CartEmpty />
      </CartItemsWrapper>
      <CartInfoTable />
    </div>
  );
}

const CartItems = () => {
  return (
    <div>

    </div>
  );
}

const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full min-h-42">
      <p className="text-xl font-bold">
        В корзине пока ничего нет :(
      </p>
      <Link
        href="/catalog"
        className="max-w-50 w-full py-3 rounded-lg bg-success text-success-foreground text-center text-xs font-bold uppercase"
      >
        Начать покупки
      </Link>
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

const CartInfoTable = () => {
  return (
    <div>
      <CartInfoTableRow>
        <span>Всего товаров на сумму:</span>
        <span>0 C</span>
      </CartInfoTableRow>
      <CartInfoTableRow>
        <span>Доставка:</span>
        <span>1500 C</span>
      </CartInfoTableRow>
      <CartInfoTableRow>
        <span className="text-xl font-bold">Итого:</span>
        <span className="text-xl font-bold">1500 C</span>
      </CartInfoTableRow>
    </div>
  );
}

const CartInfoTableRow = ({ children }: {
  children
  : React.ReactNode,
}) => {
  return (
    <div className="flex items-center justify-between gap-2 text-sm text-secondary">
      {children}
    </div>
  );
}