import Link from "@/app/components/ui/link";
import ChatIcon from "./ui/icons/chat-icon";
import CircleQuestionIcon from "./ui/icons/circle-question-icon";
import DeliveryCarIcon from "./ui/icons/delivery-car-icon";
import UserLikeIcon from "./ui/icons/user-like-icon";

export default function InfoLinks() {
  const items = [
    {
      title: "Покупателям",
      href: "/payment",
      icon: <ChatIcon />,
    },
    {
      title: "Доставка",
      href: "/delivery",
      icon: <DeliveryCarIcon />,
    },
    {
      title: "Как сделать заказ",
      href: "/how-to-order",
      icon: <CircleQuestionIcon />,
    },
    {
      title: "Бонусы",
      href: "/bonuses",
      icon: <UserLikeIcon />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-7">
      <h5 className="text-xl font-semibold leading-6">
        Покупателю
      </h5>
      <div className="flex flex-col md:flex-row md:items-center justify-end gap-7 md:gap-10 lg:gap-16">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-2"
          >
            {item.icon} {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}