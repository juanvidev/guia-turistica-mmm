import { FC, useEffect, useState } from "react"
import logocnc from '../../assets/logocnc.svg'

const Layout: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
    // const { innerHeight: height } = window;
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])


    return (
        <div style={{ height: screenSize.dynamicHeight }} className="bg-cnc relative w-full flex flex-col items-center bg-gray-900 overflow-hidden">
            <div className="absolute top-[30%] rotate-12 opacity-[.05] z-1">
                <img src={logocnc} alt="" width={300} />
            </div>

            <div className="glow-left"></div>
            <div className="glow-right z-1 opacity-60 md:opacity-100"></div>

            {children}
        </div>
    )
}

export default Layout;