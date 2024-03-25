import { Switcher } from "@/components/Theme/Switcher";
import HeaderAuthButtons from "./HeaderAuthButtons";

export function Mheader() {
  const title = "FreeCareNet";
  return (
    <header className="dark:text-gray-200 dark:bg-netural-400 text-black border-b border-gray-300">
      <div className="border border-red-700 flex items-start justify-between pr-3 items-center ">
        <div className=" flex flex-row p-5 space-x-3 justify-between">
          <div className="flex text-center justify-center font-semibold text-2xl">
            {title}
          </div>
        </div>

        <div className="flex py-6 space-x-4">
          <HeaderAuthButtons />

          <Switcher />
        </div>
      </div>
    </header>
  );
}
