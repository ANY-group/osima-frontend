import ProfileNavigation from "../../(footerless)/profile/components/profile-navigation";

export default function ProfileLayout({ children }: {
  children: React.ReactNode,
}) {
  return (
    <div className="bg-secondary-muted">
      <div className="layout-container flex gap-6 md:py-4">
        <div className="contents max-md:hidden">
          <ProfileNavigation />
        </div>
        {children}
      </div>
    </div>
  );
}