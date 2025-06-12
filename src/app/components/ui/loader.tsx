import Image from "next/image";

export default function Loader() {
  return (
    <div
      id="loader"
      className="loader hidden"
    >
      <div className="logo-animation">
        <Image
          src="/images/osima-logo.png"
          alt="Osima"
          fill
          className="object-contain p-1 max-w-40 mx-auto"
          style={{
            filter: 'brightness(0) saturate(100%)',
          }}
          priority
        />
      </div>
    </div>
  );
}