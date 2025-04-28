import Subheader from "@/app/components/subheader";
import Link from "@/app/components/ui/link";

export default function BonusesPage() {
  return (
    <main className="w-full">
      <section className="md:hidden py-3">
        <Subheader title="Бонусы" />
      </section>
      <section className="px-4 py-10 mb-4 rounded-lg bg-background">
        <h2 className="text-xl font-bold">
          Мой баланс
        </h2>
        <p className="font-medium">
          У вас <span className="text-success font-bold">3 100 бонусов</span> с покупок
        </p>
        <p className="text-xs font-bold">
          <Link href="#" className="text-success">
            Подробнее о бонусах
          </Link>
        </p>

        <hr className="border-divider my-6" />

        <h2 className="text-xl font-bold">
          История операций
        </h2>
        <BonusesTable />
      </section>
    </main>
  );
}

const BonusesTable = () => {
  const bonuses = [...Array(8)];

  return (
    <table className="w-full text-left">
      <thead className="text-secondary text-xs font-bold uppercase">
        <tr>
          <th className="py-3">Время</th>
          <th className="p-3">Описание</th>
          <th className="py-3">Сумма</th>
        </tr>
      </thead>
      <tbody className="text-xs">
        {bonuses.map((bonus, index) => (
          <tr
            key={index}
            className="border-t border-divider"
          >
            <td className="py-3 whitespace-nowrap">
              27.07.2020 / 17:51
            </td>
            <td className="p-3">
              Заказ #3: Шампунь для волос Natural care series silky smooth (Xiaimoxuan) (1 шт.)
            </td>
            <td className="py-3 font-bold whitespace-nowrap">
              +4 112 Б
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}