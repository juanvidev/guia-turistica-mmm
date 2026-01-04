import { FC } from "react"
import { useLocation, Navigate } from "react-router-dom"
import { IoOpenOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { useTranslation } from "react-i18next";

type PlaceProps = {
    place_name?: string,
    imageUrl?: string,
    ubication?: string,
    page?: string,
}

type TransportProps = {
    name: string,
    appUrl: string,
    appImage: string
}

const ListOfItems: FC = () => {

    const { t } = useTranslation();
    const { state = {} } = useLocation();

    if (!state) return <Navigate to="/" replace />;

    const { idCategory, places, transports } = state;

    const handleClick = (place: PlaceProps) => {
        if (place.page) return;
        window.open(place.ubication, "_blank")
    }

    const handleClickTransport = (transport: TransportProps) => {
        window.open(transport.appUrl, "_blank")
    }


    return (
        <div className="mx-auto overflow-scroll max-w-2xl px-4 flex-1 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 z-10">

            <div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                {
                    places.length !== 0 ? places.map(({ page, ...place }: PlaceProps, index: number) =>
                        <div key={place.place_name} onClick={() => handleClick({ ...place, page: page })} className="animate__animated animate__fadeIn group cursor-pointer h-[200px] bg-white/5 sm:bg-transparent md:h-auto overflow-hidden rounded-lg border-[1px] border-slate-500/50 ease-in-out duration-300 hover:duration-300 hover:bg-gray-600/30">
                            <div className="aspect-h-1 h-[75%] aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
                                <img
                                    width={200}
                                    height={200}
                                    src={place.imageUrl}
                                    alt={place.place_name || ""}
                                    loading="lazy"
                                    className="h-full w-full object-cover object-center group-hover:opacity-75 group-hover:duration-300 ease-in-out duration-300"
                                />
                            </div>
                            <div className="flex p-1 sm:p-2 ">
                                <h3 className="text-xs p-1 sm:p-2 sm:text-lg flex-1 font-custom text-gray-200 sm:text-white">{t(`${idCategory}-place-name-${index + 1}`)}</h3>
                                {page && (
                                    <>
                                        <a className="mr-4" target="_blank" href={page} >
                                            <IoOpenOutline className="text-lg sm:text-2xl text-gray-400" />
                                        </a>
                                        {
                                            place.ubication && (<a target="_blank" href={place.ubication} className="text-lg sm:text-2xl text-gray-400">
                                                <FiMapPin />
                                            </a>
                                            )
                                        }
                                    </>
                                )}
                            </div>
                            {/* <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta explicabo, molestias consequatur eaque.</p> */}
                        </div>
                    )

                        : (

                            transports.map((transport: { name: string, appUrl: string, appImage: string }) =>
                                <div key={transport.appUrl} onClick={() => handleClickTransport(transport)} className="group h-[200px] md:h-auto overflow-hidden rounded-lg border-[1px] border-slate-500/50 ease-in-out duration-300 hover:duration-300 hover:bg-gray-600/30">
                                    <div className="aspect-h-1 h-[75%] aspect-w-1 w-full overflow-hidden rounded-t-lg animate__animated animate__fadeIn bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            width={200}
                                            height={200}
                                            src={transport.appImage}
                                            alt={transport.name || ""}
                                            loading="lazy"
                                            className="h-full w-full object-cover object-center group-hover:opacity-75 group-hover:duration-300 ease-in-out duration-300"
                                        />
                                    </div>
                                    <div className="flex p-1 sm:p-2 ">
                                        <h3 className="text-xs text-center p-1 sm:p-2 sm:text-lg flex-1 font-custom text-gray-200 sm:text-white">{transport.name}</h3>
                                    </div>
                                </div>
                            )

                        )
                }
            </div>
        </div>
    )
}

export default ListOfItems