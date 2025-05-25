export default function SubscribeForm() {
  return (
    <div className="grid md:grid-cols-2 gap-8 p-8 lg:my-14 mx-auto w-full lg:max-w-4xl lg:rounded-xl bg-secondary-muted">
      <div className="h-full min-h-35 rounded-xl bg-divider">
      </div>
      <div>
        <p className="text-3xl font-bold">
          Скажи нам email<br />
          и получи ништяки
        </p>
        <p className="my-4">
          Получайте <span className="text-success">акции и спец.предложения!</span>
        </p>
        <form>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="e-mail"
            className="max-w-63 w-full p-1 pb-4 my-4 border-b border-divider-alt focus:border-success transition-colors outline-0"
            required
          />
          <button
            type="submit"
            className="py-3 my-4 w-full rounded-lg bg-success text-success-foreground text-center text-sm font-bold uppercase"
          >
            отправить
          </button>
        </form>
      </div>
    </div>
  );
}