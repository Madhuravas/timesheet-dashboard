function Pagination({ currentPage, onPageChange, TOTAL_PAGES }: { currentPage: number, onPageChange: (page: number) => void; TOTAL_PAGES: number }) {

    // Ensure data is sliced correctly per page

    return (
        <div className="flex justify-between items-center p-4">
            <select className="border border-gray-300 rounded-lg px-2 py-2">
                <option>5 per page</option>
                {/* Add more options if needed */}
            </select>
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg text-[#4A5565]">
                <button className="border-r font-[600] border-gray-300 px-2 py-2" onClick={() => onPageChange(currentPage + 1)}>Previous</button>
                {[...Array(8)].map((_, i) => (
                    <button
                        key={i + 1}
                        className={`cursor-pointer border-r border-gray-300 px-2 py-2 ${ currentPage === i + 1 ? 'font-bold text-[#2563eb]' : 'font-normal text-[#000]'}`}
                        onClick={() => onPageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <span className=" border-r border-gray-300 px-2 py-2">...</span>
                <button className="cursor-pointer border-r border-gray-300 px-2 py-2 font-normal text-[#000]">{TOTAL_PAGES}</button>
                <button className="cursor-pointer font-[600] px-2 py-2">Next</button>
            </div>
        </div>
    );
};

export default Pagination;