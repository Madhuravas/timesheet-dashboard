import Dropdown from "../utils/Dropdown";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";

type timesheetDataType = {
    week: number;
    dateRange: string;
    status: string;
    action: string;
}[];

const DATE_RANGES = [
    { "id": 0, "label": "Today", "value": "today" },
    { "id": 1, "label": "This Week", "value": "this_week" },
    { "id": 2, "label": "This Month", "value": "this_month" },
    { "id": 3, "label": "Custom Range", "value": "custom" }
];

const STATUS_OPTIONS = [
    { "id": 0, "label": "Completed", "value": "Completed" },
    { "id": 1, "label": "In Completed", "value": "InCompleted" },
    { "id": 2, "label": "Missing", "value": "Missing" }
];

const TimeSheetTableHeader = ["WEEK #", "DATE", "STATUS", "ACTIONS"];

const PAGE_SIZE = 5;
const TOTAL_PAGES = 99;

function TimeSheetPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [timesheetData, setTimesheetData] = useState<timesheetDataType>([]);

    useEffect(() => {
        // Simulate fetching data from an API
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/timesheetEntries');
                const data = await response.json();
                setTimesheetData(data);
            } catch (error) {
                console.error("Error fetching timesheet data:", error);
            }
        }
        fetchData();
    }, []);

    const paginatedData = timesheetData.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    const handleDateRange = (option: string) => {
        console.log("Selected date range:", option);
        // Implement filtering logic based on selected date range
    };

    const handleStatus = (option: string) => {
        console.log("Selected status:", option);
        // Implement filtering logic based on selected status
    }

    return (
        <div className="bg-[#ffffff] shadow p-4 rounded-lg">
            <h2 className="text-[#111928] text-[24px] font-bold">Your Timesheets</h2>
            <div className="flex gap-4 mt-4">
                <Dropdown options={DATE_RANGES} onSelect={handleDateRange} label="Date Range" />
                <Dropdown options={STATUS_OPTIONS} onSelect={handleStatus} label="Status" />
            </div>
            <div className="mt-6 shadow rounded-lg overflow-hidden">
                <Table timesheetData={paginatedData} TimeSheetTableHeader={TimeSheetTableHeader} />
            </div>
            <div className="mt-4">
                <Pagination currentPage={currentPage} onPageChange={setCurrentPage} TOTAL_PAGES={TOTAL_PAGES} />
            </div>
        </div>
    )
};

export default TimeSheetPage;