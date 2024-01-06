import { FC, useEffect, useState } from "react"
import logocnc from '../../assets/logocnc.svg'
import img from '../../assets/fondocnc.svg';

const Layout: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    // const { innerHeight: height } = window;
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });

    const handleLoadImg = () => {
        setIsLoaded(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        window.addEventListener("load", handleLoadImg);
        return () => {
            window.removeEventListener('resize', setDimension);
            window.removeEventListener("load", handleLoadImg);
        }
    }, [screenSize])


    return isLoading && !isLoaded ? (<h1>Cargando</h1>) : (
        <div style={{ height: screenSize.dynamicHeight }} className="relative w-full flex flex-col items-center bg-gray-900 overflow-hidden">
            <div className="absolute top-[30%] rotate-12 opacity-[.05] z-1">
                <img src={logocnc} alt="" width={300} />
            </div>

            <div className="glow-left z-[5]"></div>
            <div className="glow-right z-[5] opacity-60 md:opacity-100"></div>

            <img src={img} onLoad={handleLoadImg} className="absolute w-full object-cover z-[0] h-full block min-[641px]:hidden" alt="" />

            {children}
        </div>
    )
}

export default Layout;