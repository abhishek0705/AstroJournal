import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ZODIAC_SIGNS, ZodiacSign } from '../utils/zodiac';
import { loadLanguage, loadSelectedSign, saveLanguage, saveSelectedSign } from '../services/storage';
import i18n from '../i18n';

type AppContextValue = {
  selectedSign: ZodiacSign;
  setSelectedSign: (sign: ZodiacSign) => void;
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSign, setSelectedSignState] = useState<ZodiacSign>('Aries');
  const [language, setLanguageState] = useState<'en' | 'hi'>('en');

  useEffect(() => {
    (async () => {
      const [savedLang, savedSign] = await Promise.all([loadLanguage(), loadSelectedSign()]);
      if (savedLang === 'hi' || savedLang === 'en') {
        setLanguageState(savedLang);
        i18n.changeLanguage(savedLang);
      }
      if (savedSign && (ZODIAC_SIGNS as readonly string[]).includes(savedSign)) {
        setSelectedSignState(savedSign as ZodiacSign);
      }
    })();
  }, []);

  const setSelectedSign = (sign: ZodiacSign) => {
    setSelectedSignState(sign);
    saveSelectedSign(sign);
  };

  const setLanguage = (lang: 'en' | 'hi') => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    saveLanguage(lang);
  };

  const value = useMemo(() => ({ selectedSign, setSelectedSign, language, setLanguage }), [selectedSign, language]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
};


