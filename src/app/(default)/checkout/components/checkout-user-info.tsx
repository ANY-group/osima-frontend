export default function CheckoutUserInfo() {
  return (
    <div className="mb-6 md:mb-14">
      <h5 className="mb-4 text-lg font-bold">
        Ваши данные
      </h5>
      <input
        type="tel"
        name="phone"
        autoComplete="tel"
        placeholder="Номер телефона *"
        className="w-full p-1 pb-3 border-b border-divider-alt focus:border-success transition-colors outline-0"
        required
      />
      <input
        type="text"
        name="name"
        autoComplete="given-name"
        placeholder="ФИО *"
        className="w-full p-1 pb-3 mt-9 border-b border-divider-alt focus:border-success transition-colors outline-0"
        required
      />
      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="E-mail *"
        className="w-full p-1 pb-3 mt-9 border-b border-divider-alt focus:border-success transition-colors outline-0"
      />
    </div>
  );
}