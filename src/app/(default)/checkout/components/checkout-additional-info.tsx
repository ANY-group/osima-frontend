export default function CheckoutAdditionalInfo() {
  return (
    <div className="my-9">
      <h5 className="mb-4 text-lg font-bold">
        Дополнительно
      </h5>
      <CertificateInfo />
      <Comment />
    </div>
  );
}

const CertificateInfo = () => {
  return (
    <label className="flex items-center gap-4 px-6 min-h-22 rounded-xl border-2 border-divider-alt cursor-pointer">
      <input
        type="checkbox"
        name="use_certificate"
        value="use_certificate"
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 outline-success peer-focus:outline rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
      <p className="text-sm">
        У меня есть подарочный сертификат
      </p>
    </label>
  );
}

const Comment = () => {
  return (
    <div className="mt-14 mb-9">
      <h5 className="mb-4 text-lg font-bold">
        Комментарий к заказу
      </h5>
      <textarea
        name="comment"
        placeholder="Введите здесь комментарий..."
        className="w-full p-1 pb-3 border-b border-divider-alt outline-0"
      />
    </div>
  );
}