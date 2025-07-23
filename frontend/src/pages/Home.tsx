import { useTranslation } from 'react-i18next';
import { ChatWidget } from '../components/ChatWidget';

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-6">
      <div className="flex justify-end gap-2 mb-4">
        <button onClick={() => changeLanguage('en')} className="px-2 py-1 rounded bg-indigo-600 text-white text-xs">EN</button>
        <button onClick={() => changeLanguage('hi')} className="px-2 py-1 rounded bg-indigo-600 text-white text-xs">हिंदी</button>
      </div>
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">{t('welcome')}</h1>
      <ChatWidget />
    </div>
  );
}
