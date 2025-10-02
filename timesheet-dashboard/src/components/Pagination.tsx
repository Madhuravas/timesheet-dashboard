function Pagination({currentPage, totalPages, onPageChange, TOTAL_PAGES}: {currentPage: number, totalPages: number, onPageChange: (page: number) => void; TOTAL_PAGES: number}) {

    // Ensure data is sliced correctly per page
   
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", margin: "16px 0" }}>
            <select style={{ marginRight: "16px" }}>
                <option>5 per page</option>
                {/* Add more options if needed */}
            </select>
            <button onClick={() => onPageChange(currentPage+1)}>Previous</button>
            {[...Array(8)].map((_, i) => (
                <button
                    key={i + 1}
                    style={{
                        margin: "0 2px",
                        fontWeight: currentPage === i + 1 ? "bold" : "normal",
                        color: currentPage === i + 1 ? "#2563eb" : "#000"
                    }}
                    onClick={() => onPageChange(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
            <span>...</span>
            <button >{TOTAL_PAGES}</button>
            <button >Next</button>
        </div>
    );
};

export default Pagination;