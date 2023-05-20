import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { HeaderContain } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContain>
      <Logo />
      <Navigation />
    </HeaderContain>
  );
};
