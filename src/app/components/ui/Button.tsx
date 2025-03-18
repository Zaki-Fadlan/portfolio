import React from "react";
interface ButtonProps {
  text: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="flex border sm:w-1/3 p-3 hover:cursor-pointer rounded-xl justify-center hover:scale-102 hover:shadow-[0px_0px_10px_4px_rgba(47,255,0,0.6)] transition-all duration-250 space-x-4 glow"
      onClick={onClick}
    >
      <p className="hover:text-accent glow hover:glow-accent font-mono transition-all duration-250">
        {text}
      </p>
    </button>
  );
};

export default Button;
