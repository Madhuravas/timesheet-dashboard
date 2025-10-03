import StatusCard from "../utils/StatusCard";

type TimesheetEntry = {
    week: number;
    dateRange: string;
    status: string;
    action: string;
};

function Table({ timesheetData, TimeSheetTableHeader }: { timesheetData: TimesheetEntry[]; TimeSheetTableHeader: string[] }) {
    return (
        <table className="w-[100%] border-collapse">
            <thead className="bg-[#F9FAFB]">
                <tr className="border-b border-gray-200">
                    {TimeSheetTableHeader.map((header, index) => (
                        <th key={index} className={`text-[#6B7280] px-4 text-[12px] py-4 ${index === TimeSheetTableHeader.length - 1 ? "text-center" : "text-left"} `}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {timesheetData.map(({ week, dateRange, status, action }) => (
                    <tr key={week} className="text-[14px] border-b border-gray-200">
                        <td className="px-4 py-4 bg-[#F9FAFB] w-[10%]">{week}</td>
                        <td className="px-4 py-4">{dateRange}</td>
                        <td className="px-4 py-4">
                            <StatusCard title={status}/>
                        </td>
                        <td className="px-4 py-4 text-center">
                            <a href={"/timesheetDetails/" + week} className="text-[#1C64F2] font-semibold  cursor-pointer">
                                {action}
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;