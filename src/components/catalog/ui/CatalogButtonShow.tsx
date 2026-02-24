interface ICatalogButtonShowProps {
  addLimit: () => void;
  isDisable: boolean;
}

export const CatalogButtonShow = ({
  addLimit,
  isDisable,
}: ICatalogButtonShowProps) => {
  return (
    <button
      type="button"
      onClick={addLimit}
      disabled={isDisable}
      className={`w-[clamp(280px,40vw,320px)] py-2.5 bg-(--accent-color) text-[--second-color] uppercase font-bold rounded-xl transition duration-400 ${isDisable ? "opacity-50 cursor-not-allowed" : "hover:bg-(--third-color) cursor-pointer"}`}
    >
      Больше товаров
    </button>
  );
};
