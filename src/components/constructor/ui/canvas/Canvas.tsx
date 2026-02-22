interface ICanvasProps {
  handleSelect: () => void;
}
  
export const Canvas = ({ handleSelect }: ICanvasProps) => {
  return (
    <div className="w-[min(100%,900px)] h-[clamp(400px,50vw,600px)] bg-(--card-bg) shadow-(--block-shadow) rounded-xl">

    </div>
  );
}