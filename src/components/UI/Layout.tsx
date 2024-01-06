import { FC, useEffect, useLayoutEffect, useState } from "react"
import logocnc from '../../assets/logocnc.svg'
import LogoMMM from '../../assets/logommm.png'
import img from '../../assets/fondocnc.svg';
import { PropagateLoader } from "react-spinners";

const Layout: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    // const { innerHeight: height } = window;
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });


    const handleLoad = () => {
        setIsLoaded(true)
    }

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        return () => {
            window.removeEventListener('resize', setDimension);
        }
    }, [screenSize])

    useLayoutEffect(() => {

        const timeout = setTimeout(() => {
            setIsLoading(!isLoaded)
        }, 1300);

        return () => {
            clearTimeout(timeout)
        }
    }, [isLoaded])

    return (
        <div style={{ height: screenSize.dynamicHeight }} className="relative bg-gray-900 w-full">

            <img src={img} onLoad={handleLoad} className={`absolute w-full object-cover z-[0] h-full block min-[641px]:hidden ${isLoading ? 'hidden' : 'block'}`} alt="FondoCNC" />
            {
                isLoading ?
                    (
                        <div style={{ height: screenSize.dynamicHeight }} className="bg-loader flex-col bg-gray-900 text-white w-full flex justify-center items-center">
                            <div className="flex flex-row w-[40%] items-center justify-center">
                                <img className='animate__animated animate__fadeIn animate__fast object-contain' width={80} src={LogoMMM} alt="LogoMMM" />
                                <img className='animate__animated animate__fadeIn animate__fast ml-7 md:w-[60px] z-10' src={logocnc} alt="LogoCNC2024" width={70} />
                            </div>
                            <PropagateLoader className="py-6" color="#111827" size={25} />
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