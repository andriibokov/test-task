import React from "react";

interface ButtonProps {
  value?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>, value?: string | null) => void;
  className?: string;
  children?: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export default Button;