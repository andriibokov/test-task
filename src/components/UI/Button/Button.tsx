import React from "react";

export interface ButtonProps {
  flag?: boolean;
  value?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>, value?: string | number| null) => void;
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