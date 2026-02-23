interface ISettingFileProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export const SettingFile = ({ file, setFile }: ISettingFileProps) => {
  return (
    <div className="flex items-center gap-2.5 flex-wrap">
      <label
        className="p-[2px_24px] w-fit border border-[--navbar-color] text-[--navbar-color] text-[16px] rounded-lg font-medium cursor-pointer uppercase transition duration-400 hover:opacity-80"
        style={{
          backgroundColor: file ? "var(--accent-color)" : "transparent",
          borderColor: file
            ? "var(--accent-color)"
            : "var(--border-constructor)",
        }}
      >
        файл
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            const selectedFile: File | null = e.target.files?.[0] || null;
            setFile(selectedFile);
          }}
        />
      </label>

      {file ? file.name : ""}
    </div>
  );
};
