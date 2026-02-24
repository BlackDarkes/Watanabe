interface IFieldCloceButtonProps {
  handleOpen: () => void;
  isOpen: boolean;
}
  
export const FieldCloceButton = ({ handleOpen, isOpen }: IFieldCloceButtonProps) => {
  return (
    <button
      type="button"
      className={`
        absolute 
        top-10 right-10
        flex items-center justify-center w-7.5 h-6 
        before:content-[''] before:absolute before:top-0 before:w-full before:h-px before:bg-(--secondary-bg) before:transition before:duration-400 
        after:content-[''] after:absolute after:bottom-0 after:w-full after:h-px after:bg-(--secondary-bg) after:transition after:duration-400 
        cursor-pointer 
        ${isOpen ? "before:rotate-45 before:translate-y-2.5 after:-rotate-45 after:-translate-y-3" : ""} 
        z-500
      `}
      onClick={handleOpen}
    >
      <span
        className={`
          w-full h-px 
          bg-(--secondary-bg) 
          transition duration-400
          ${isOpen ? "scale-x-0" : "scale-x-100"}
        `}
      />
    </button>
  );
}