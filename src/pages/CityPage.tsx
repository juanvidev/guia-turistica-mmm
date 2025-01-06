import { IListItem } from "../types/types";
import ListItems from '../components/UI/ListItems';


const citiesList: IListItem[] = [
    {
        name: "cali",
        url: "cali",
    },
    {
        name: "ibague",
        url: "ibague",
    },
    {
        name: "barranquilla",
        url: "barranquilla",
    }
]

const CityPage = () => {
    return (
        <div className="flex-1 h-[100%] w-full flex-col flex items-center z-10 overflow-scroll overflow-x-hidden" >
            <ListItems items={citiesList} type={"city"} />
        </div>
    )
}

export default CityPage