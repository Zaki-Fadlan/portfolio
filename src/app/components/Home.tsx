import React from "react";
import Button from "./ui/Button";
const menu = [
  { title: "Home", link: "home" },
  { title: "About", link: "about" },
  { title: "Projects", link: "projects" },
  { title: "Contact", link: "contact" },
]; // Tambahkan props untuk menerima state dari Homes
interface HomeProps {
  activeContent: string;
  setActiveContent: (content: string) => void;
}
const Home: React.FC<HomeProps> = ({ setActiveContent }) => {
  return (
    <div className="items-center w-full justify-center flex  flex-col sm:h-[55vh] backdrop-blur-sm">
      <div className="text-center w-full  flex rounded-2xl justify-center items-center flex-col space-y-8 p-3 bg-background/95  supports-[backdrop-filter]:bg-background/60 border-none ">
        <h1 className="text-3xl md:text-5xl font-mono font-bold glow-accent">
          <span className="glow text-primary font-sans">Hello, I’m </span> Zaki
          Fadlan!
        </h1>
        <p className="md:text-lg text-md font-mono text-accent glow-accent max-w-2xl mx-auto mb-2">
          Welcome to my digital space! I’m a{" "}
          <span className="font-semibold glow text-primary">
            Software Engineer
          </span>{" "}
          passionate about creating immersive and interactive experiences.
          Discover my work, explore my skills, and let’s connect!
        </p>
      </div>
      {/* Container untuk button */}
      <div className="flex gap-4 justify-center">
        {menu.slice(1).map((item, index) => (
          <Button
            key={index + 1} // Menyesuaikan indeks agar tetap unik
            text={item.title}
            onClick={() => setActiveContent(item.link)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
