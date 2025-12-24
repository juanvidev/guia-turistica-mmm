import { IListItem } from "../types/types";
import ListItems from '../components/UI/ListItems';

import { FaLocationDot } from "react-icons/fa6";

const citiesList: IListItem[] = [
    {
        name: "cali",
        url: "cali",
        icon: <FaLocationDot className="text-gray-100 text-2xl" />
    },
    // {
    //     name: "ibagué",
    //     url: "ibague",
    //     icon: <FaLocationDot className="text-gray-100 text-2xl" />
    // },
    // {
    //     name: "barranquilla",
    //     url: "barranquilla",
    // }
]

const CityPage = () => {
    return (
        <div className="flex-1 h-[100%] w-full flex-col flex items-center z-10 overflow-scroll overflow-x-hidden" >
            <h1 className="text-xl text-center text-gray-100">¿En donde te encuentras?</h1>
            <ListItems items={citiesList} type={"city"} />
        </div>
    )
}

export default CityPage