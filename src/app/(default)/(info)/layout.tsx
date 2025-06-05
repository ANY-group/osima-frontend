import InfoNavigation from "./components/info-navigation";

export default function InfoLayout({ children }: {
  children: React.ReactNode,
}) {
  return (
    <>
      <div className="layout-container">
        <InfoNavigation />
      </div>
      {children}
    </>
  );
}