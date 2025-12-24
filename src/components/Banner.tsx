import { useTranslation } from 'react-i18next'
import lema from '../assets/lema.svg'
import lemaEN from '../assets/lema-en.svg'
// import logocnc from '../assets/logocnc.svg'
import LogoMMM from '../assets/logommm.png'


const Banner = () => {
    const { i18n } = useTranslation();
    return (
        <div className="flex justify-center w-full h-[10%]">
            {/* <img className='animate__animated animate__fadeIn animate__fast animate__delay-1s md:w-[100px] z-10 object-contain' src={logocnc} alt="LogoCNC2025" /> */}
            <img className='animate__animated animate__fadeIn animate__delay-0.5s mb-1 object-contain' loading='lazy' width={50} src={LogoMMM} alt="LogoMMM" />
            {i18n.language === 'es' ? <img className='animate__animated animate__fadeIn animate__delay-0.5s z-10 md:w-[200px] ml-5' src={lema} alt="Lema2024" width={200} /> : <img className='animate__animated animate__fadeIn animate__fast animate__delay-.1s z-10 md:w-[200px] ml-5' src={lemaEN} alt="Lema2024" width={200} />}
        </div>
    )
}

export default Banner;