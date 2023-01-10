import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
    return (
        <div style={{ height: '50vh' }} className="flex-1  relative ">
            <Link to={`/products/${item.cat}`}>
                <img src={item.img} alt="" className="w-full h-full object-cover " />
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col">
                    <h1 className="font-semibold text-2xl m-12 text-white">{item.title}</h1>
                    <button className=" text-black p-4 rounded-md bg-white">SHOP NOW</button>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem;