import LogoIcon from "./icons/logo-icon";

export default function Loader() {
  return (
    <div
      id="loader"
      className="loader hidden"
    >
      <div className="logo-animation">
        <LogoIcon />
      </div>
    </div>
  );
}