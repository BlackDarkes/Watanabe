import type { LucideIcon } from "lucide-react";

interface IButtonNavProps {
  icon: LucideIcon;
}
  
export const ButtonNav = ({ icon: Icon }: IButtonNavProps) => {
  return (
    <button type="button" className={`p-3 rounded-[50%] cursor-pointer transition duration-400 hover:bg-(--third-color)`}>
      <Icon size={24} />
    </button>
  );
}