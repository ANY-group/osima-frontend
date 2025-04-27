import Header from "../../components/header";
import ProfileNavigation from "./components/profile-navigation";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <div className="flex-grow bg-secondary-muted">
        <div className="layout-container flex gap-6 md:py-4">
          <div className="contents max-md:hidden">
            <ProfileNavigation />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
