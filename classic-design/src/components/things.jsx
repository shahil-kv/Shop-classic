

const Things = ({ item }) => {
    return (
        <div className=" flex flex-row  pr-60 gap-3 pl-48 mt-44 mb-44">
            <div className="w-1/3 h-72  text-black rounded bg-red-200 flex flex-col justify-center gap-7 items-center">
                <div className="ml-10 w-20  rounded-full bg-white h-20 flex flex-col  justify-center items-center">
                    <img className='w-12 text-center' src={window.location.origin + '/Files/reviewIcon/libre-gui-shipping logo.svg'} alt="ratings" />
                </div>
                <h1 className="text-black">Super Fast and Free Delivary</h1>
            </div>
            <div className="w-1/3   text-black flex flex-col gap-2 ">
                <div className=" w-2/2 h-1/2 bg-red-200 rounded flex items-center gap-10 ">
                    <div className="ml-10 w-20  rounded-full bg-white h-20 flex flex-col  justify-center items-center">
                        <img className='w-8 text-center' src={window.location.origin + '/Files/reviewIcon/Google logo.svg'} alt="ratings" />
                    </div>
                    <h1>Non Contact Shipping</h1>
                </div>
                <div className="bg-red-200 w-2/2 h-1/2 rounded flex items-center gap-12">
                    <div className="ml-10 w-20  rounded-full bg-white h-20 flex flex-col  justify-center items-center">
                        <img className='w-8 text-center' src={window.location.origin + '/Files/reviewIcon/Budget logo.svg'} alt="ratings" />
                    </div>
                    <h1 className="text-black">Money back Gurrenty</h1>
                </div>
            </div>
            <div className="w-1/3  rounded bg-red-200 text-white flex flex-col justify-center items-center gap-7">
                <div className="ml-10 w-20  rounded-full bg-white h-20 flex flex-col  justify-center items-center">
                    <img className='w-8 text-center' src={window.location.origin + '/Files/reviewIcon/Layer 2.svg'} alt="ratings" />
                </div>
                <h1 className="text-black">Super Fast and Free Delivary</h1>

            </div>
        </div>
    )
}

export default Things;