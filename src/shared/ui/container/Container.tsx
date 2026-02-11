import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}
  
export const Container = ({ children, className }: IContainerProps) => {
  return (
    <div className={`flex mx-auto w-[min(1440px,100%-40px)] ${className ? className : ""}`}>
      { children }
    </div>
  );
}