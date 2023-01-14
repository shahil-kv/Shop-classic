import { useLocation } from "react-router-dom"

const Sucess = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            successfull
        </div>
    )
}

export default Sucess