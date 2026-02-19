import { IFooterItem } from "@/constants/footer-items";
import Link from "next/link";

interface IFooterBlockListItemProps {
  item: IFooterItem;
}

export const FooterBlockListItem = ({ item }: IFooterBlockListItemProps) => {
  return (
    <li>
      {item.isTitle && (
        <h3 className="font-bold mb-3.75 text-[clamp(16px,4vw,18px)] text-(--navbar-color)">
          {item.message}
        </h3>
      )}
      {item.isLink && (
        <Link
          href={item.link ?? "#"}
          className={`
            relative 
            text-(--navbar-color) transition duration-400
            hover:text-(--second-color)
            before:content-[''] before:absolute before:w-full before:h-px before:-bottom-0.5 before:left-0 before:bg-(--second-color) before:scale-x-0 before:origin-left before:transition before:duration-400 
            hover:before:origin-left hover:before:scale-x-100 z-10
          `}
        >
          {item.message}
        </Link>
      )}
      {item.isText && (
        <p className="text-[clamp(12px,4vw,16px)] text-(--navbar-color)">
          {item.message}
        </p>
      )}
    </li>
  );
};
