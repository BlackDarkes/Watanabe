import { useEffect, useRef } from "react";

export const useScrollWheel = () => {
  const scrollWheelRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const el = scrollWheelRef.current;
    if (!el ) return;

    const onWheel = (e: globalThis.WheelEvent) => {
       if (e.deltaY === 0 || window.innerWidth < 1024) return;

      e.preventDefault();

      document.body.classList.remove("overflow-hidden");

      el.scrollTo({
        left: e.deltaY * 2,
        behavior: "smooth",
      });

    };
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return { scrollWheelRef }
};
