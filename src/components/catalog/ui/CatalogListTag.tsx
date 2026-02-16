interface ICatalogListTagProps {
  tag: string;
}
  
export const CatalogListTag = ({ tag }: ICatalogListTagProps) => {
  return (
    <div className="w-fit border p-[2px_20px] rounded-sm text-[12px]">
      { tag.replace(/_/g, " ") }
    </div>
  );
}