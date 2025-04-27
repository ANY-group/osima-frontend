import ProfileNavigation from "./components/profile-navigation";
import ProfileInfoPage from "./info/page";

export default function ProfilePage() {
  return (
    <>
      <div className="contents md:hidden">
        <ProfileNavigation />
      </div>
      <div className="contents max-md:hidden">
        <ProfileInfoPage />
      </div>
    </>
  );
}