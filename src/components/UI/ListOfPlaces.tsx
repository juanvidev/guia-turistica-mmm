import { FC } from "react"
import { useLocation } from "react-router-dom"

type PlaceProps = {
    place_name?: string,
    imageUrl?: string,
    ubication?: string,
}


const ListOfPlaces: FC = () => {
    const { state } = useLocation();
    const places = state.places;

    return (
        <div className="mx-auto overflow-scroll max-w-2xl px-4 flex-1 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 z-10">

            <div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                {
                    places.map((place: PlaceProps) =>
                        <a target="_blank" key={place.place_name} href={place.ubication} className="group rounded-lg border-[1px] border-slate-500/10 ease-in-out duration-300 hover:duration-300 hover:bg-gray-600/30">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    width={200}
                                    height={200}
                                    src={place.imageUrl}
                                    alt={place.place_name || ""}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75 group-hover:duration-300 ease-in-out duration-300"
                                />
                            </div>
                            <h3 className="text-md font-semibold text-white p-2">{place.place_name}</h3>
                            {/* <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta explicabo, molestias consequatur eaque.</p> */}
                        </a>
                    )
                }
            </div>
        </div>
    )
}

export default ListOfPlaces