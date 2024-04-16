import { Link } from 'react-router-dom';
import { ReactComponent as LogoDark } from 'src/assets/images/logos/dark-logo.svg';
import LogoTask from './LogoTask'
import { styled } from '@mui/material';


const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '250px',
  overflow: 'hidden',
  display: 'block',
}));


const Logo = () => {
  return (
    <LinkStyled to="/">
        <LogoTask />
    </LinkStyled>
  )
};

export default Logo;
