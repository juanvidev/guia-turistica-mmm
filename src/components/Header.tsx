import { useLocation, useNavigate } from 'react-router'
import I18nWidget from './UI/I18nWidget';
import { useTranslation } from 'react-i18next';
import { MdOutlinePlace } from 'react-icons/md';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const { state } = useLocation();

    const city = location.pathname !== '/' ? location.pathname.split('/')[1] : '';

    const yearOnDisplay = new Date().getMonth() == 11 ? new Date().getFullYear() + 1 : new Date().getFullYear();

    const handleBack = () => {
        if (location.pathname === '/') return;
        navigate(-1);
    }

    return (
        <>
            <div className="px-10 flex flex-col pt-0 text-gray-200 sm:text-white justify-center items-center h-[18%] w-full z-10">
                <h1 className="animate__animated animate__fadeInDown font-custom font-normal text-sm md:text-2xl text-center">{t('subtitle-app') + " " + yearOnDisplay}</h1>
                <h1 className="animate__animated animate__fadeInDown font-custom font-normal text-2xl md:text-4xl text-center">{t('title-app')}</h1>
                <div className='flex justify-center items-center'>
                    <I18nWidget />
                    {
                        city
                            ? (

                                <div className='animate__animated animate__slow animate__flipInX mt-2 flex items-center'>
                                    <a className='text-xl' href={`${city === 'cali' ? "https://maps.app.goo.gl/xh3ZaQ5gErTK39vw6" : "https://maps.app.goo.gl/murvxkKN39KEYMd87"}`} target='_blank'>
                                        <MdOutlinePlace />
                                    </a>
                                    <h3 className='text-xs font-custom' >{t('coliseum')}</h3>
                                </div>
                            )
                            :
                            (
                                null
                            )
                    }
                </div>

            </div>
            {
                location.pathname !== '/' && location.pathname !== '/cali' && (
                    <div className="flex w-full sm:w-[40%] z-10 px-5 py-2">
                        <button className="mr-5" onClick={() => handleBack()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200 sm:text-white" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <h2 className="font-custom text-xs w-full text-left text-gray-200 sm:text-white">{state && state.places ? t(state.idCategory) : city.charAt(0).toUpperCase() + city.substring(1, city.length)}</h2>
                    </div>
                )
            }

        </>
    )
}

export default Header