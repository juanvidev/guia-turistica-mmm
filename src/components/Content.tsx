import { categoriesCali } from '../../data/categories_cali';
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FaPersonHiking } from "react-icons/fa6";
import { FaBuildingFlag } from "react-icons/fa6";
import { MdOutlineRestaurant } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineLocalMall } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { CategoryProps } from "../types/types";
import ListItems from "./UI/ListItems";


const icons = [
    <FaBuildingFlag className="text-gray-100 text-2xl" />,
    <FaPersonHiking className="text-gray-100 text-2xl" />,
    <IoFastFoodOutline className="text-gray-100 text-2xl" />,
    <MdOutlineRestaurant className="text-gray-100 text-2xl" />,
    <MdOutlineLocalMall className="text-gray-100 text-2xl" />,
    <MdOutlineCurrencyExchange className="text-gray-100 text-2xl" />,
    <FaCar className="text-gray-100 text-2xl" />,
    <FaHandsHelping className="text-gray-100 text-2xl" />,
]

const categoriesList: CategoryProps[] = categoriesCali.map((cat, index) => ({
    ...cat,
    icon: icons[index],
}));
const Content = () => {
    return (
        <div className="flex-1 h-[100%] w-full flex-col flex items-center z-10 overflow-scroll overflow-x-hidden" >
            <h2 className="text-2xl font-semibold text-gray-200">Categorias</h2>
            <ListItems items={categoriesList} type={"city"} />
        </div>
    )
}

export default Content;