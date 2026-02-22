interface ISettingFileProps {
  value: string
}
  
export const SettingFile = ({  }: ISettingFileProps) => {
  return (
    <label className="p-[2px_24px] w-fit border border-[--navbar-color] text-[--navbar-color] text-[16px] rounded-lg font-medium cursor-pointer uppercase">
      файл
      <input type="file" className="hidden" />
    </label>
  );
}