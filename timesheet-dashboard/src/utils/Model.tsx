import { useRef, useEffect} from "react";

function Model({options, onClose}: {options: string[]; onClose: () => void}) {
    const modelRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modelRef.current && !modelRef.current.contains(event.target as Node)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={modelRef} className="absolute bg-white border border-gray-300 rounded shadow-lg w-20 z-20 mt-2 -ml-6">
            {options.map((option, index) => (
                <div
                    key={index}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${option === "Delete" ? "text-red-500" : "text-gray-700"}`}
                >
                    {option}
                </div>
            ))}
        </div>  

    )
};

export default Model;