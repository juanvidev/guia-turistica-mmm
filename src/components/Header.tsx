import { useLocation, useNavigate } from 'react-router'
import LogoMMM from '../assets/logommm.png'
import I18nWidget from './UI/I18nWidget';
import { useTranslation } from 'react-i18next';
import { MdOutlinePlace } from "react-icons/md";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const { state } = useLocation();

    const city = location.pathname !== '/' ? location.pathname.split('/')[1] : '';

    const handleBack = () => {
        if (location.pathname === '/') return;
        navigate(-1);
    }

    return (
        <>
            <div className="px-10 flex flex-col pt-4 text-gray-200 sm:text-white justify-center items-center h-[22%] w-full z-10">
                <img className='animate__animated animate__fadeIn animate__delay-1s mb-5 object-contain' loading='lazy' width={50} src={LogoMMM} alt="LogoMMM" />
                <h1 className="animate__animated animate__fadeInDown text-md md:text-2xl font-semibold text-center">{t('subtitle-app') + " " + new Date().getFullYear()}</h1>
                <h1 className="animate__animated animate__fadeInDown text-3xl md:text-4xl font-bold text-center">{t('title-app')}</h1>
                <div className='flex justify-center items-center'>
                    <I18nWidget />
                    {/* <div className='mt-2 flex items-center'>
                        <a className='text-xl' href="https://maps.app.goo.gl/DEWe2tUXFfYsDtc9A" target='_blank'>
                            <MdOutlinePlace />
                        </a>
                        <h3>{t('coliseum')}</h3>
                    </div> */}
                </div>

            </div>
            {
                location.pathname !== '/' && (
                    <div className="flex w-full sm:w-[40%] z-10 px-5 py-2">
                        <button className="mr-5" onClick={() => handleBack()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200 sm:text-white" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <h2 className="text-md w-full text-left font-semibold text-gray-200 sm:text-white">{state && state.places ? t(state.idCategory) : city.charAt(0).toUpperCase() + city.substring(1, city.length)}</h2>
                    </div>
                )
            }

        </>
    )
}

export default Header