import ListItems from "../components/UI/ListItems"
import { categoriesCali } from '../../data/categories_cali';
import { categoriesIbague } from '../../data/categories_ibague';
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FaPersonHiking } from "react-icons/fa6";
import { FaBuildingFlag } from "react-icons/fa6";
import { MdOutlineRestaurant } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineLocalMall } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { useParams } from "react-router";
import { IListItem } from "../types/types";

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



const CategoryPage = () => {
    const { city } = useParams();
    let categories: IListItem[] = [];

    switch (city) {
        case "cali":
            categories = categoriesCali.map((cat, index) => ({
                ...cat,
                icon: icons[index],
            }));
            break;
        case "ibague":
            categories = categoriesIbague.map((cat, index) => ({
                ...cat,
                icon: icons[index],
            }));

            break;
        case "barranquilla":
            break;
        default:
            break;
    }

        return (
            <div className="flex-1 h-[100%] w-full flex-col flex items-center z-10 overflow-scroll overflow-x-hidden" >
                <ListItems items={categories} />
            </div>
        )
}

export default CategoryPage