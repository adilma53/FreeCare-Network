import { Switcher } from "@/components/Theme/Switcher";
export function Mheader() {
  const title = "FreeCareNet";
  return (
    <header className="dark:text-gray-200 dark:bg-netural-400 text-black border-b border-gray-300">
      <div className="flex items-start justify-between pr-3">
        <div className="flex flex-row p-5 space-x-3">
          <div className="flex text-center justify-center font-semibold text-2xl">
            {title}
          </div>
        </div>
        <div className="py-6">
    <Switcher />
        </div>
      </div>
    </header>
  );
}
