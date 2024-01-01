import lema from '../assets/lema.svg'
import logocnc from '../assets/logocnc.svg'

const Footer = () => {
    return (
        <div className="flex justify-center w-full h-[15%]">
            <img className='md:w-[60px]' src={logocnc} alt="LogoCNC2024" width={50} />
            <img className='md:w-[200px] ml-5' src={lema} alt="Lema2024" width={200} />

        </div>
    )
}

export default Footer