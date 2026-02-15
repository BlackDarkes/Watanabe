interface IHeroListTagProps {
  tag: string;
}
  
export const HeroListTag = ({ tag }: IHeroListTagProps) => {
  return (
    <div className="w-fit border p-[2px_20px] rounded-sm text-[12px]">
      { tag }
    </div>
  );
}