import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function PortafolioPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
