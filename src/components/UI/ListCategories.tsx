import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FaPersonHiking } from "react-icons/fa6";
import { FaBuildingFlag } from "react-icons/fa6";
import { MdOutlineRestaurant } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineLocalMall } from "react-icons/md";

const categories = [
    {
        name: 'Sitios turísticos - Cali',
        icon: <FaBuildingFlag className="text-gray-100 text-2xl" />,
        email: 'leslie.alexander@example.com',
        role: 'Actualizado',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        url: '',
    },
    {
        name: 'Sitios turísticos - Afueras de Cali',
        icon: <FaPersonHiking className="text-gray-100 text-2xl" />,
        email: 'michael.foster@example.com',
        role: 'Actualizado',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        url: '',
    },
    {
        name: 'Comederos',
        icon: <IoFastFoodOutline className="text-gray-100 text-2xl" />,
        email: 'dries.vincent@example.com',
        role: 'Actualizado',
        lastSeen: null,
    },
    {
        name: 'Restaurantes',
        icon: <MdOutlineRestaurant className="text-gray-100 text-2xl" />,
        email: 'lindsay.walton@example.com',
        role: 'Actualizado',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        url: '',
    },
    {
        name: 'Centros Comerciales',
        icon: <MdOutlineLocalMall className="text-gray-100 text-2xl" />,
        email: 'courtney.henry@example.com',
        role: 'Actualizado',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        url: '',
    },
    {
        name: 'Casas de Cambio',
        icon: <MdOutlineCurrencyExchange className="text-gray-100 text-2xl" />,
        email: 'courtney.shsenry@example.com',
        role: 'Actualizado',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        url: '',
    },
]

const ListCategories = () => {
    return (
        <ul role="list" className="divide-y divide-gray-600">
            {categories.map((cat) => (
                <li key={cat.email} className="flex justify-between gap-x-6 py-5 hover:bg-gray-600 hover:bg-gray-600/10 px-2 rounded ease-out duration-300 hover:duration-300 cursor-pointer">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="item-list h-12 w-12 rounded-full flex justify-center items-center">
                            {cat.icon}
                        </div>
                        <div className="min-w-0 flex justify-center items-center">
                            <p className="text-sm md:text-md font-semibold leading-6 text-white-900">{cat.name}</p>
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
                </li>
            ))}
        </ul>
    )
}

export default ListCategories