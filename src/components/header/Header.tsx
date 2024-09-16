import { Hero } from "./Hero";
import Navbar from "./Navbar";
export const Header = () => {
  return (
    <header className="bg-[url('../hero.png')] bg-cover bg-center bg-no-repeat w-[100vw] h-screen">
      <Navbar />
      <Hero />
    </header>
  );
};
