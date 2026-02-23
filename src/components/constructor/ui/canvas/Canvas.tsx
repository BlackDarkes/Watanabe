import { ICanvasItems } from "@/constants/constructor-items";
import { useConstructorStore } from "../../model/constructor-store";
import { useMemo } from "react";
import Image from "next/image";

interface ICanvasProps {
  canvasItems: ICanvasItems[];
}

export const Canvas = ({ canvasItems }: ICanvasProps) => {
  const { type, color, file } = useConstructorStore();
  
  const previewUrl = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

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

  const imageSrc = currentItem?.img && (typeof currentItem.img === 'string' ? currentItem.img : (currentItem.img).src);

  return (
    <div className="w-[min(100%,900px)] h-[clamp(400px,50vw,600px)] bg-(--navbar-color)/40 shadow-(--block-shadow) rounded-xl flex items-center justify-center p-10 ">
      {currentItem && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div 
            style={{ 
              backgroundColor: color || "#ffffff",
              maskImage: `url(${imageSrc})`,
              WebkitMaskImage: `url(${imageSrc})`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              width: '100%',
              height: '100%'
            }}
            className="transition-colors duration-300 absolute inset-0 z-0"
          />

          {previewUrl && (
            <div className="relative z-20 w-[30%] h-[40%] mt-[-10%] flex items-center justify-center"> 
              <Image 
                src={previewUrl} 
                fill
                alt="User Print" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

