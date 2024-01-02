import { useLocation, useNavigate } from 'react-router'
import LogoMMM from '../assets/logommm.png'

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { state } = useLocation();

    const handleBack = () => {
        if (location.pathname === '/') return;
        navigate(-1);
    }

    return (
        <>
            <div className="px-10 flex flex-col pt-4 justify-center items-center h-[22%] w-full">
                <img className='mb-5 object-contain' width={60} src={LogoMMM} alt="LogoMMM" />
                <h1 className="text-md md:text-2xl text-center">Convención Nacional de Colombia 2024</h1>
                <h1 className="text-3xl md:text-4xl font-bold text-center">Guía Turística</h1>
            </div>
            <div className="flex mb-5 w-full sm:w-[40%] z-10 px-5">
                {
                    location.pathname === '/places' && (
                        <>
                            <button className="mr-5" onClick={() => handleBack()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </button>
                            <h2 className="text-md w-full text-left font-normal text-white">{state ? state.category : ''}</h2>
                        </>
                    )
                }
            </div>

        </>
    )
}

export default Header