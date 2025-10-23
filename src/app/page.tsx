import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home(){
  return(
    <div className="flex flex-col">
      <Navbar />
      <div className="flex min-h-screen "></div>
      <Footer />
    </div>
  );
}