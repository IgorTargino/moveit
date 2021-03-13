import { useState, useEffect, createContext } from 'react'
import { THEMES } from '../utils/constants';

const defaultSettings = {
  theme: THEMES.LIGHT,
};

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: () => { },
});


export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData);
    }
  } catch (err) {
    console.error(err);
  }

  return settings;
}

export const storeSettings = (settings) => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
}

export const SettingsProviders = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings,
  );

  const handleSaveSettings = (update = {}) => {
    const mergedSettings = update;

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  }

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setCurrentSettings(restoredSettings);
    }
  }, []);


  return (
    <SettingsContext.Provider value={{
      settings: currentSettings,
      saveSettings: handleSaveSettings,
    }}>
      {children}
    </SettingsContext.Provider>
  )
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;