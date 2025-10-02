function Calender(){
    return(
         <div>
            <label htmlFor="datePicker" className="block mb-1 text-gray-700">Select Date</label>
            <input
                id="datePicker"
                type="date"
                className="border border-gray-300 rounded px-2 py-1"
            />
        </div>
    )
};

export default Calender;