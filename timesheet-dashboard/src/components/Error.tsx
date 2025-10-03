function Error(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-xl mt-4">Page Not Found</p>
            <a href="/timesheet" className="mt-6 text-blue-600 underline">Go to Dashboard</a>
        </div>
    )
};

export default Error;