import LogoMMM from '../assets/logommm.png'

const Header = () => {
    return (
        <div className="px-10 flex flex-col pt-5 justify-center items-center h-[20%] w-full">
            <div className='flex flex-col items-center'>
                <h1 className="text-md md:text-2xl text-center">Convención Nacional de Colombia 2024</h1>
                <img className='ml-5 object-contain' width={60} src={LogoMMM} alt="LogoMMM" />
                <h1 className="text-3xl md:text-4xl font-bold text-center">Guía Turística</h1>
            </div>
        </div>
    )
}

export default Header