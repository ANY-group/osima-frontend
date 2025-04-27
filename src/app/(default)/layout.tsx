import Footer from "../components/footer";
import Header from "../components/header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className="min-h-svh">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
