import { useState, useRef, useEffect } from "react";

type Option = {
    id: number;
    label: string;
    value: string;
};

function Dropdown({ options, onSelect, label }: { options: Option[]; onSelect: (option: string) => void; label: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(label); 
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left min-w-[152px]">
            <div>   
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                    {selected || "Select an option"}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"  
                    >
                        <path
                            fillRule="evenodd"      
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => {
                                    setSelected(option.value);
                                    onSelect(option.value);
                                    setIsOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                {option.label}
                            </button>
                        ))} 
                    </div>
                </div>
            )}
        </div>
    );
}
export default Dropdown;