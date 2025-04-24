import Subheader from "@/app/components/subheader";
import PhoneIcon from "@/app/components/ui/icons/phone-icon";
import PinIcon from "@/app/components/ui/icons/pin-icon";

export default function ContactsPage() {
  return (
    <main>
      <section className="layout-container">
        <Subheader title="Контакты" />
      </section>
      <section className="layout-container">
        <div className="grid md:grid-cols-2 gap-16 my-5">
          <Contacts />
          <div className="w-full aspect-square bg-divider"></div>
        </div>
      </section>
    </main>
  );
}

const Contacts = () => {
  return (
    <div className="flex flex-col gap-10">
      <Block title="Если у Вас возникнут вопросы, Вы можете задать по телефону:" icon={<PhoneIcon />}>
        <a href="tel:+77756742244">+ 7 775 674 22 44</a><br />
        <a href="mailto:vegasbeauty@gmail.com">vegasbeauty@gmail.com</a>
      </Block>
      <Block title="Ареса наших магазинов:" icon={<PinIcon />}>
        Алматы, пр. Абылай хана 127<br />
        График работы:<br />
        Работаем каждый день с 9:00 до 21:00<br />
        Консультация интернет-магазина с 9:00 до 21:00<br />
      </Block>
    </div>
  );
}

const Block = ({ title, icon, children }: {
  title: string,
  icon: React.ReactNode,
  children: React.ReactNode,
}) => {
  return (
    <div className="flex gap-4">
      <div className="max-md:hidden mt-1">
        {icon}
      </div>
      <div>
        <div className="text-3xl">
          {title}
        </div>
        <div className="mt-5 text-xl raw-content">
          {children}
        </div>
      </div>
    </div>
  );
}