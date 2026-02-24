import type { LucideIcon } from "lucide-react";

interface IButtonNavProps {
  icon: LucideIcon;
  onClick: () => void;
}

export const ButtonNav = ({ icon: Icon, onClick }: IButtonNavProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-3 rounded-[50%] cursor-pointer transition duration-400 hover:bg-(--third-color)`}
    >
      <Icon size={24} />
    </button>
  );
};
