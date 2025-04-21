import Image from "next/image";

export default function BrandDescription() {
  return (
    <div className="pb-10">
      <Image
        src="/images/tmp/brand.png"
        alt="Brand name"
        width={280}
        height={140}
        className="mx-auto max-w-70 max-h-30 object-contain rounded-lg mix-blend-multiply"
      />
      {/* <h1 className="text-center text-4xl font-bold">
        Amuse
      </h1> */}
      <p className="md:max-w-2/3 mx-auto text-center mt-4">
        Хотим представить Вам новый бренд примяком из Сингапура! Продукты Allies of skin разработаны с учетом активного образа жизни, чтобы их было легко использовать, а также максимально использовать функции умных составов, поддерживающих здоровье вашей кожи. Цель состоит в том, чтобы помочь вашей коже восстановить и регенерировать себя, чтобы она могла работать наилучшим образом. Вот почему Allies of skin никогда не включает наполнители или потенциальные раздражители, которые могут нарушить оптимальные функциональные возможности кожи.
      </p>
    </div>
  );
}