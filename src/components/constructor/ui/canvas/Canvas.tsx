import { ICanvasItems } from "@/constants/constructor-items";
import { useConstructorStore } from "../../model/constructor-store";

interface ICanvasProps {
  canvasItems: ICanvasItems[];
}

export const Canvas = ({ canvasItems }: ICanvasProps) => {
  const { type, color } = useConstructorStore();

  const itemIndex =
    type === "Футболки"
      ? 0
      : type === "Худи"
        ? 1
        : type === "Значки"
          ? 2
          : type === "Наклейки"
            ? 3
            : -1;
  const currentItem = canvasItems[itemIndex];

  return (
    <div className="w-[min(100%,900px)] h-[clamp(400px,50vw,600px)] bg-(--primary-color) shadow-(--block-shadow) rounded-xl flex items-center justify-center p-10 ">
      {currentItem && (
        <div
          style={{
            backgroundColor: color || "#ffffff",
            maskImage: `url(${currentItem.img.src || currentItem.img})`,
            WebkitMaskImage: `url(${currentItem.img.src || currentItem.img})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            width: "100%",
            height: "100%",
          }}
          className="transition-colors duration-300"
        />
      )}
    </div>
  );
};
