interface ICatalogButtonShowProps {
  addLimit: () => void;
}
  
export const CatalogButtonShow = ({ addLimit }: ICatalogButtonShowProps) => {
  return (
    <button type="button" onClick={addLimit}>
      Больше товаров
    </button>
  );
}