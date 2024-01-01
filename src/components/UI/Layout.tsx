import { FC } from "react"
import logocnc from '../../assets/logocnc.svg'

const Layout: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
    return (
        <div className="relative h-dvh w-full flex flex-col items-center bg-gray-900 text-white overflow-hidden min-w-96 min-h-dvh">
            <div className="absolute top-[30%] rotate-12 opacity-[.01] z-1">
                <img src={logocnc} alt="" width={400} />
            </div>

            <div className="glow-left"></div>
            <div className="glow-right opacity-30 md:opacity-100"></div>
            {children}
        </div>
    )
}

export default Layout;