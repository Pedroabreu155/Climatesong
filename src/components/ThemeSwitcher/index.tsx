import React, { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';

type ThemeSwitcherProps = {
  toggleTheme(): void;
};

export function ThemeSwitcher({ toggleTheme }: ThemeSwitcherProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      onColor={colors.mainText}
    />
  );
}
