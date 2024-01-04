import { Link } from "react-router-dom";
import { categories } from '../../../data/categories';
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FaPersonHiking } from "react-icons/fa6";
import { FaBuildingFlag } from "react-icons/fa6";
import { MdOutlineRestaurant } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineLocalMall } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const icons = [
    <FaBuildingFlag className="text-gray-100 text-2xl" />,
    <FaPersonHiking className="text-gray-100 text-2xl" />,
    <IoFastFoodOutline className="text-gray-100 text-2xl" />,
    <MdOutlineRestaurant className="text-gray-100 text-2xl" />,
    <MdOutlineLocalMall className="text-gray-100 text-2xl" />,
    <MdOutlineCurrencyExchange className="text-gray-100 text-2xl" />,
    <FaCar className="text-gray-100 text-2xl" />,
]

const categoriesWithIcons = categories.map((cat, index) => ({
    ...cat,
    icon: icons[index],
}));

const ListCategories = () => {

    const { t } = useTranslation();


    return (
        <ul className="w-full sm:w-[400px]" role="list">
            {
                categoriesWithIcons.map((cat, index) => {

                    const nameCat = `c${index + 1}`;

                    return (
                        <Link to={`/${cat.url}`} state={{ places: cat.places, transports: cat.transports, idCategory: nameCat, category: cat.name }} key={cat.email} className="flex flex-col sm:flex-row justify-between items-center w-full gap-x-6 py-3 hover:bg-gray-600 hover:bg-gray-600/30 px-2 rounded ease-out duration-300 hover:duration-300 cursor-pointer">
                            <div className="flex min-w-0 gap-x-4 w-[60%]">
                                <div className="item-list h-12 w-12 rounded-full flex justify-center items-center">
                                    {cat.icon}
                                </div>
                                <div className="min-w-0 flex justify-center items-center flex-1">
                                    <p className="text-sm md:text-md w-full leading-6 text-white-900">{t(nameCat)}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-500">{cat.role}</p>
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">Activo</p>
                                </div>
                            </div>
                        </Link>
                    )
                }
                )}
        </ul>
    )
}

export default ListCategories