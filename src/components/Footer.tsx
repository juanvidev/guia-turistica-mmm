import LogoMMM from '../assets/logommm.png'
import lema from '../assets/lema.svg'
import logocnc from '../assets/logocnc.svg'

const Footer = () => {
    return (
        <div className="flex justify-center w-full p-10 h-[20%]">
            <img className='md:w-[60px]' src={logocnc} alt="LogoCNC2024" width={50} />
            <img className='md:w-[200px] ml-5' src={lema} alt="Lema2024" width={200} />
            <img className='ml-5 object-contain' width={60} src={LogoMMM} alt="LogoMMM" />
        </div>
    )
}

export default Footer