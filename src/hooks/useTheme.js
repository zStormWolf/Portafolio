import { useState, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';

export const useTheme = () => {
  const { colorMode, setColorMode } = useColorMode();
  const [isSystemTheme, setIsSystemTheme] = useState(false);

  // Detectar tema del sistema
  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  // Inicializar tema basado en preferencias guardadas o sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('chakra-ui-color-mode');
    const savedIsSystemTheme = localStorage.getItem('use-system-theme') === 'true';
    
    if (!savedTheme || savedIsSystemTheme) {
      // Si no hay tema guardado o el usuario prefiere usar el del sistema
      const systemTheme = getSystemTheme();
      setColorMode(systemTheme);
      setIsSystemTheme(true);
      localStorage.setItem('use-system-theme', 'true');
    } else {
      setIsSystemTheme(false);
    }
  }, [setColorMode]);

  // Escuchar cambios en el tema del sistema
  useEffect(() => {
    if (isSystemTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleSystemThemeChange = (e) => {
        setColorMode(e.matches ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handleSystemThemeChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    }
  }, [isSystemTheme, setColorMode]);

  // Función para cambiar al tema del sistema
  const useSystemTheme = () => {
    const systemTheme = getSystemTheme();
    setColorMode(systemTheme);
    setIsSystemTheme(true);
    localStorage.setItem('use-system-theme', 'true');
  };

  // Función para cambiar tema manualmente
  const setManualTheme = (theme) => {
    setColorMode(theme);
    setIsSystemTheme(false);
    localStorage.setItem('use-system-theme', 'false');
  };

  // Toggle entre light/dark manualmente
  const toggleManualTheme = () => {
    const newTheme = colorMode === 'light' ? 'dark' : 'light';
    setManualTheme(newTheme);
  };

  return {
    colorMode,
    isSystemTheme,
    toggleColorMode: toggleManualTheme,
    setTheme: setManualTheme,
    useSystemTheme,
    systemTheme: getSystemTheme()
  };
};
