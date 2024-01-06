import { FC, useLayoutEffect, useState } from "react"
import logocnc from '../../assets/logocnc.svg'
import img from '../../assets/fondocnc.svg';

const Layout: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    // const refImg = useRef<HTMLImageElement>(null);
    // const { innerHeight: height } = window;
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });


    const handleLoad = () => {
        setIsLoaded(true)
    }
    console.log(isLoaded)

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }
    useLayoutEffect(() => {

        const timeout = setTimeout(() => {
            setIsLoading(isLoaded ? false : true)
        }, 1300);

        window.addEventListener('resize', setDimension);

        return () => {
            window.removeEventListener('resize', setDimension);
            clearTimeout(timeout)
        }
    }, [isLoaded])

    return (
        <div className="relative bg-gray-900 w-full h-full">
            <img src={img} onLoad={handleLoad} className={`absolute w-full object-cover z-[0] h-full block min-[641px]:hidden ${isLoading ? 'hidden' : 'block'}`} alt="FondoCNC" />
            {isLoading ? (
                <div style={{ height: screenSize.dynamicHeight }} className="bg-gray-900 text-white w-full">
                    <h1>Cargando</h1>
                </div>

            ) : (
                <div style={{ height: screenSize.dynamicHeight }} className="relative w-full flex flex-col items-center overflow-hidden">
                    <div className="absolute top-[30%] rotate-12 opacity-[.05] z-1">
                        <img src={logocnc} alt="" width={300} />
                    </div>

                    <div className="glow-left z-[5]"></div>
                    <div className="glow-right z-[5] opacity-60 md:opacity-100"></div>


                    {children}
                </div>
            )}

        </div>
    )
}

export default Layout;