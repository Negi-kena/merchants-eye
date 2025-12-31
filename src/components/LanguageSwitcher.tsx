import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'am', lang: 'አማርኛ' },
  { code: 'om', lang: 'Afaan Oromoo' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4">
        {languages.map((lng) => (
          <button
            key={lng.code}
            className={`${i18n.language === lng.code ? 'font-bold underline' : ''}`}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
