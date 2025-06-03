import fetchUser from "@/lib/auth/usecases/fetch-user";
import Header from "../../components/header";
import ProfileNavigation from "./components/profile-navigation";
import { redirect } from "next/navigation";

export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const user = await fetchUser()
    .catch(() => null);

  if (!user) {
    redirect('/');
  }

  return (
    <div className="min-h-lvh flex flex-col">
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
