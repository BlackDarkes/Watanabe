"use client";

import { ChangeEvent, HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";

interface IFieldProps {
  label: string;
  name: string;
  id: string;
  type: HTMLInputTypeAttribute;
  value: string;
  style?: string;
  isFocus?: boolean;
  handleValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Field = ({
  label,
  name,
  id,
  type,
  value,
  style,
  isFocus,
  handleValue,
}: IFieldProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocus && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [isFocus]);

  const handleFocus = () => {
    if (isFocus) {
      setFocused(true);
      return;
    }

    setFocused(false);
  };

  return (
    <div className="relative mt-[clamp(40px,4vw,60px)] w-[min(100%,750px)]">
      <label
        htmlFor={id}
        className={`
          absolute left-2.5  transition-all text-[clamp(18px,4vw,20px)] text-(--secondary-bg) duration-600 pointer-events-none 
          ${focused || value ? "-translate-y-full scale-90" : "translate-y-0 scale-100 text-(--secondary-bg-opacity)"}
          ${hover ? "text-(color:--secondary-bg)" : ""}
        `}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        onFocus={handleFocus}
        onBlur={() => setFocused(false)}
        onChange={(e) => handleValue(e)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        value={value}
        ref={inputRef}
        className={`
          w-full p-[12px_10px] h-full  transition duration-400 outline-none border
          ${
            focused || value
              ? "border-(--secondary-bg) rounded-xl"
              : "border-t-transparent border-x-transparent border-b-(--secondary-bg) rounded-none"
          }
          ${style}
        `}
      />
    </div>
  );
};
