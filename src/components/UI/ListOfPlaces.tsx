import { FC } from "react"
import { useLocation, useNavigate } from "react-router-dom"

type PlaceProps = {
    place_name?: string,
    imageUrl?: string,
    ubication?: string,
}


const ListOfPlaces: FC = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const places = state.places;
    const categoryName = state.category;

    return (
        <div className="mx-auto overflow-scroll max-w-2xl px-4 flex-1 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 z-10">
            <div className="flex mb-5">
                <button className="mr-10" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <h2 className="text-lg w-full text-left font-normal text-white">{categoryName}</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                {
                    places.map((place: PlaceProps) =>
                        <a target="_blank" key={place.place_name} href={place.ubication} className="group ease-in-out duration-300 hover:duration-300 hover:bg-gray-600/30">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    width={200}
                                    height={200}
                                    src={place.imageUrl}
                                    alt={place.place_name || ""}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm font-semibold text-white p-2">{place.place_name}</h3>
                            {/* <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta explicabo, molestias consequatur eaque.</p> */}
                        </a>
                    )
                }
            </div>
        </div>
    )
}

export default ListOfPlaces