import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function SobreMiPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <About />
      </main>
      <Footer />
    </>
  );
}
