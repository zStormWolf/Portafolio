import React from 'react';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Tooltip,
  HStack,
  Text,
  Icon
} from '@chakra-ui/react';
import { 
  SunIcon, 
  MoonIcon, 
  ChevronDownIcon 
} from '@chakra-ui/icons';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { 
    colorMode, 
    isSystemTheme, 
    setTheme, 
    useSystemTheme, 
    systemTheme 
  } = useTheme();

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  const getCurrentIcon = () => {
    if (isSystemTheme) {
      return systemTheme === 'dark' ? <MoonIcon /> : <SunIcon />;
    }
    return colorMode === 'dark' ? <MoonIcon /> : <SunIcon />;
  };



  return (
    <Menu>
      <Tooltip label="Cambiar tema" placement="bottom">
        <MenuButton
          as={IconButton}
          icon={
            <HStack spacing={1}>
              {getCurrentIcon()}
              <ChevronDownIcon boxSize={3} />
            </HStack>
          }
          variant="ghost"
          size="md"
          bg={bgColor}
          border="1px"
          borderColor={borderColor}
          _hover={{ bg: hoverBg }}
          _active={{ bg: hoverBg }}
          aria-label="Cambiar tema"
        />
      </Tooltip>
      
      <MenuList
        bg={bgColor}
        borderColor={borderColor}
        shadow="lg"
      >
        <MenuItem
          icon={<Icon as={() => <span>🖥️</span>} />}
          onClick={useSystemTheme}
          bg={isSystemTheme ? hoverBg : 'transparent'}
          _hover={{ bg: hoverBg }}
        >
          <HStack justify="space-between" w="full">
            <Text>Sistema</Text>
            <Text fontSize="sm" color="gray.500">
              {systemTheme === 'dark' ? 'Oscuro' : 'Claro'}
            </Text>
          </HStack>
        </MenuItem>
        
        <MenuItem
          icon={<SunIcon />}
          onClick={() => setTheme('light')}
          bg={!isSystemTheme && colorMode === 'light' ? hoverBg : 'transparent'}
          _hover={{ bg: hoverBg }}
        >
          Claro
        </MenuItem>
        
        <MenuItem
          icon={<MoonIcon />}
          onClick={() => setTheme('dark')}
          bg={!isSystemTheme && colorMode === 'dark' ? hoverBg : 'transparent'}
          _hover={{ bg: hoverBg }}
        >
          Oscuro
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ThemeToggle;
