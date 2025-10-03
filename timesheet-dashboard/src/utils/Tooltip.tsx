function Tooltip({text}: {text:string}) {
    return (
        <div className="relative flex flex-col items-center group">
            <span className="absolute bottom-full mb-3 px-3 py-1 bg-[#fff] text-[#111928] text-xs rounded shadow-lg z-10 whitespace-nowrap">
                {text}
                <span className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#ffffff]"></span>
            </span>
        </div>
    );
};

export default Tooltip;