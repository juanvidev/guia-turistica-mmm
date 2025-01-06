import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { IListItem } from "../../types/types";

type ListItemsProps = {
    items?: IListItem[],
    type?: string
}

const ListItems: FC<ListItemsProps> = ({ items = [], type }) => {

    const { t } = useTranslation();
    const { city } = useParams();


    return (
        <ul className="w-full sm:w-[400px]" role="list">
            {
                items.map((item, index) => {

                    const nameCat = `c${index + 1}`;

                    return (

                        <Link to={`/${type === 'city' ? item.url : city + '/' + item.url}`} state={{ places: item.places, transports: item.transports, idCategory: nameCat, category: item.name }} key={index} className="animate__animated animate__slideInLeft animate__fast flex flex-col sm:flex-row justify-between items-center w-full gap-x-6 py-3 hover:bg-gray-600 hover:bg-gray-600/30 px-2 rounded ease-out duration-300 hover:duration-300 cursor-pointer">
                            <div className="flex min-w-0 gap-x-4 w-[60%]">
                                <div className="item-list h-12 w-12 rounded-full flex justify-center items-center">
                                    {item.icon}
                                </div>
                                <div className="min-w-0 flex justify-center items-center flex-1">
                                    <p className="text-sm md:text-md w-full font-semibold leading-6 text-gray-200 sm:text-white">{type === 'city' ? item.name.charAt(0).toUpperCase() + item.name.substring(1, item.name.length) : t(nameCat) }</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-200">{item.role}</p>
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

export default ListItems;