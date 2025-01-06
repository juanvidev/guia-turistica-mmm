import { useTranslation } from 'react-i18next'
import lema from '../assets/lema.svg'
import lemaEN from '../assets/lema-en.svg'
import logocnc from '../assets/logocnc.svg'

const Footer = () => {
    const { i18n } = useTranslation();
    return (
        <div className="flex justify-center w-full h-[10%]">
            <img className='animate__animated animate__fadeIn animate__fast animate__delay-1s md:w-[100px] z-10 object-contain' src={logocnc} alt="LogoCNC2025" />
            {i18n.language === 'es' ? <img className='animate__animated animate__fadeIn animate__fast animate__delay-1s z-10 md:w-[200px] ml-5' src={lema} alt="Lema2024" width={200} /> : <img className='animate__animated animate__fadeIn animate__fast animate__delay-.1s z-10 md:w-[200px] ml-5' src={lemaEN} alt="Lema2024" width={200} />}
        </div>
    )
}

export default Footer;