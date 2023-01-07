

const Things = ({ item }) => {
    return (
        <div className=" flex flex-row  pr-60 gap-3 pl-48 mt-44 mb-44">
            <div className="w-1/3 h-72  text-white rounded bg-red-500 flex flex-col justify-center items-center">
            <div className="mb-10 w-20 rounded-3xl bg-white h-16"></div>
                <h1 className="text-white">Super Fast and Free Delivary</h1>
            </div>
            <div className="w-1/3   text-white flex flex-col gap-2 ">
                <div className=" w-2/2 h-1/2 bg-green-400 rounded flex items-center gap-10 ">
                    <div className="ml-10 w-20 rounded-3xl bg-white h-16"> </div>
                    <h1>Super Fast and Free Delivary</h1>
                </div>
                <div className="bg-red-500 w-2/2 h-1/2 rounded flex items-center">
                <div className="m-10 w-20 rounded-3xl bg-white h-16"> </div>
                    <h1 className="text-white">Non Contact shipping</h1>
             </div>
            </div>
            <div className="w-1/3  rounded bg-black text-white flex flex-col justify-center items-center">
            <div className="mb-10 w-20 rounded-3xl bg-white h-16 "></div>
                <h1 className="text-white">Super Fast and Free Delivary</h1>

            </div>
        </div>
    )
}

export default Things;