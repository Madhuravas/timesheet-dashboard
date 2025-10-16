import { useState, useEffect } from "react";
import Tooltip from "../utils/Tooltip";
import Model from "../utils/Model";
import Dialog from "../components/Dialog";

type Task = {
    id: string;
    title: string;
    hours: number;
    project: string;
};

type Day = {
    date: string;
    tasks: Task[];
};

type Timesheet = {
    week: string;
    totalHours: { logged: number; target: number };
    days: Day[];
};

 const weeklyTimesheets = {
    "week": "21 - 26 January, 2024",
    "totalHours": {
      "logged": 20,
      "target": 40
    },
    "days": [
      {
        "date": "Jan 21",
        "tasks": [
          {
            "id": "t1",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          },
          {
            "id": "t2",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          }
        ]
      },
      {
        "date": "Jan 22",
        "tasks": [
          {
            "id": "t3",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          },
          {
            "id": "t4",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          },
          {
            "id": "t5",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          }
        ]
      },
      {
        "date": "Jan 23",
        "tasks": [
          {
            "id": "t6",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          },
          {
            "id": "t7",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          },
          {
            "id": "t8",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          }
        ]
      },
      {
        "date": "Jan 24",
        "tasks": [
          {
            "id": "t9",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          },
          {
            "id": "t10",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          },
          {
            "id": "t11",
            "title": "Homepage Development",
            "hours": 4,
            "project": "Project Name"
          }
        ]
      },
      {
        "date": "Jan 25",
        "tasks": []
      },
      {
        "date": "Jan 26",
        "tasks": []
      }
    ]
}

const ModelOptions = ["Edit", "Delete"];

function WeekTimesheetDetailsPage() {
    const [data, setData] = useState<Timesheet>({
        week: "",
        totalHours: { logged: 0, target: 0 },
        days: [],
    });
    const [showModel, setShowModel] = useState<boolean>(false);
    const [selectedModel, setSelectedModel] = useState<string>("");
    const [showDialog, setShowDialog] = useState<boolean>(false);

    useEffect(() => {
        async function fetchWeekData() {
            try {
                const response = await fetch('http://localhost:5000/weeklyTimesheets');
                const weekData = await response.json();
                setData(weekData);
            } catch (error) {
                setData(weeklyTimesheets);
                console.error("Error fetching week data:", error);
            }
        };
        fetchWeekData();
    }, [])

    const handleShowModel = (id: string) => {
        if (!id) {
            setShowModel(false);
            setSelectedModel('');
            return;
        }
        setSelectedModel(id);
        setShowModel(prev => !prev);
    };

    const handleAddTask = (dayIndex: any) => {
        console.log("Add task for day index:", dayIndex);
        setShowDialog(prev => !prev);
    };

    return (
        <div className=" mx-auto bg-white p-6 rounded-lg shadow">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-semibold">This week’s timesheet</h2>
                    <p className="text-gray-500">{data.week}</p>
                </div>
                <div className="w-40">
                    <div className="text-sm text-right -mb-5">
                        <Tooltip text={`${data.totalHours.logged}/${data.totalHours.target} hrs`} />
                    </div>
                    <p className="text-right">100%</p>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-2 bg-orange-500"
                            style={{
                                width: `${(data.totalHours.logged / data.totalHours.target) * 100}%`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Days */}
            {data.days.map((day, dayIndex) => (
                <div key={day.date} className="mb-6 flex gap-12">
                    <h3 className="font-semibold text-gray-900 mb-2 w-[100px]">{day.date}</h3>
                    <div className="w-full">
                        {day.tasks.map(task => (
                            <div
                                key={task.id}
                                className="flex justify-between items-center border rounded p-3 mb-2"
                            >
                                <span className="text-[#111928]">{task.title}</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-gray-400">{task.hours} hrs</span>
                                    <span className="px-2 py-1 text-xs bg-[#E1EFFE] rounded text-[#1E429F]">
                                        {task.project}
                                    </span>
                                    <div>
                                        <button onClick={() => handleShowModel(task.id)} className="flex justify-center items-center gap-1 cursor-pointer">
                                            <div className="h-[5px] w-[5px] rounded-full bg-[#6B7280]"></div>
                                            <div className="h-[5px] w-[5px] rounded-full bg-[#6B7280]"></div>
                                            <div className="h-[5px] w-[5px] rounded-full bg-[#6B7280]"></div>
                                        </button>
                                        {showModel && selectedModel === task.id && <Model options={ModelOptions} onClose={() => handleShowModel("")} selectedItem={() =>{}}/>}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={() => handleAddTask(dayIndex)}
                            className="text-sm border  hover:border-[#1A56DB] border-[#D1D5DB] cursor-pointer border-dashed p-3 rounded hover:bg-[#E1EFFE] bg-[#ffffff] hover:text-[#1A56DB] text-[#6B7280] w-full"
                        >
                            + Add new task
                        </button>
                    </div>
                </div>
            ))}
            {showDialog && <Dialog onClose={() => handleAddTask("")} />}
        </div>
    );
};


export default WeekTimesheetDetailsPage;