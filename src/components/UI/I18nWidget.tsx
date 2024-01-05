import { useTranslation } from 'react-i18next'
import flagES from '../../assets/flag-es.svg'
import flagEN from '../../assets/flag-en.svg'

const I18nWidget = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={handleLanguageChange}
            aria-label='Selector de idioma'
            type='button'
            data-dropdown-toggle="dropdownSkidding"
            data-dropdown-offset-distance="10"
            className="inline-flex items-center font-medium text-gray-900 sm:text-white justify-center mt-2 px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <img height={16} width={16} src={i18n.language === 'es' ? flagES : flagEN} />
            <span className="mx-1 uppercase" >{i18n.language}</span>
        </button>
    )
}

export default I18nWidget;