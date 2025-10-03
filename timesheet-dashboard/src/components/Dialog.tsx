import { useEffect, useState } from "react";


function Dialog({ onClose }: { onClose: () => void }) {
    const [project, setProject] = useState("");
    const [typeOfWork, setTypeOfWork] = useState("Bug fixes");
    const [taskDescription, setTaskDescription] = useState("");
    const [hours, setHours] = useState(12);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const entry = { project, typeOfWork, taskDescription, hours };
        console.log("New Entry:", entry);
        // Submit logic here
        onClose();
    };

    useEffect(() => {
        // Disable background scroll
        document.body.style.overflow = "hidden";

        return () => {
            // Re-enable scroll when modal closes
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-300 px-4 py-3">
                    <h2 className="text-lg text-[#111928] font-semibold">Add New Entry</h2>
                    <button
                        className="text-[#9CA3AF] cursor-pointer"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    {/* Select Project */}
                    <div>
                        <label className="block text-sm text-[#111928] font-medium">
                            Select Project <span className="text-[#111928]">*</span>
                        </label>
                        <select
                            value={project}
                            onChange={(e) => setProject(e.target.value)}
                            className="w-full border border-[#D1D5DB] rounded px-3 py-2 mt-1 cursor-pointer"
                            required
                        >
                            <option value="">Project Name</option>
                            <option value="Project A">Project A</option>
                            <option value="Project B">Project B</option>
                        </select>
                    </div>

                    {/* Type of Work */}
                    <div>
                        <label className="block text-sm font-medium">
                            Type of Work <span className="text-[#111928]">*</span>
                        </label>
                        <select
                            value={typeOfWork}
                            onChange={(e) => setTypeOfWork(e.target.value)}
                            className="w-full border border-[#D1D5DB] rounded px-3 py-2 mt-1 cursor-pointer"
                            required
                        >
                            <option>Bug fixes</option>
                            <option>Feature development</option>
                            <option>Code review</option>
                            <option>Documentation</option>
                        </select>
                    </div>

                    {/* Task Description */}
                    <div>
                        <label className="block text-sm font-medium text-[#6B7280]">
                            Task description <span className="text-[#111928]">*</span>
                        </label>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1 h-28 resize-none"
                            placeholder="Write text here ..."
                            required
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">
                            A note for extra info
                        </p>
                    </div>

                    {/* Hours */}
                    <div>
                        <label className="block text-sm font-medium">
                            Hours <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center mt-1 border border-[#D1D5DB] rounded w-max">
                            <button
                                type="button"
                                onClick={() => setHours(Math.max(0, hours - 1))}
                                className="px-3 border-r h-[40px] border-[#D1D5DB] bg-[#F3F4F6] cursor-pointer"
                            >
                                −
                            </button>
                            <span className="px-3 h-[40px] flex items-center border-r border-[#D1D5DB]">{hours}</span>
                            <button
                                type="button"
                                onClick={() => setHours(hours + 1)}
                                className="px-3 h-[40px] bg-[#F3F4F6] cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-3 pt-2">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 cursor-pointer"
                        >
                            Add entry
                        </button>
                        <button
                            type="button"
                            className="border px-5 py-2 rounded cursor-pointer"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Dialog;