import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
