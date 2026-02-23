import { ICanvasItems } from "@/constants/constructor-items";
import Image from "next/image";
import { useConstructorStore } from "../../model/constructor-store";

interface ICanvasProps {
  canvasItems: ICanvasItems[]
}
  
export const Canvas = ({ canvasItems }: ICanvasProps) => {
  const { type } = useConstructorStore();

  const image = type === "Футболки" ? canvasItems[0].img : type === "Худи" ? canvasItems[1].img : type === "Значки" ? canvasItems[2].img :  type === "Наклейки" ? canvasItems[3].img : null;

  return (
    <div className="w-[min(100%,900px)] h-[clamp(400px,50vw,600px)] bg-(--card-bg) shadow-(--block-shadow) rounded-xl">
      { image && <Image src={image} alt={type || ""} width={900} height={600} className="w-[min(100%,900px)] h-[clamp(400px,50vw,600px)]" /> }
    </div>
  );
}