export default function CartInfoTable() {
  return (
    <>
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
    </>
  );
}

const CartInfoTableRow = ({ children }: {
  children
  : React.ReactNode,
}) => {
  return (
    <div className="flex items-center justify-between gap-2 text-sm">
      {children}
    </div>
  );
}