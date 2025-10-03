import { SlArrowDown } from "react-icons/sl";

function Navbar() {
    return (
        <nav className="sticky w-full top-0 left-0 h-[68px] bg-[#ffffff] p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <h1 className="text-[24px]  font-[600] text-[hsl(219,40%,11%)]">ticktock</h1>
                <a href="/timesheet" className="text-[#111928] text-[16px]">Timesheets</a>
            </div>
            <div>
               <button className="flex items-center gap-2 rounded-lg px-3 h-[42px]">
                   <span>John Doe</span>
                   <SlArrowDown />
               </button>
            </div>
        </nav>
    )
};

export default Navbar;