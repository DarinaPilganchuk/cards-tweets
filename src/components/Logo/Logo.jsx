import { LogoWrapper } from './Logo.styled';
import logotype from 'images/logotype.png';

export default function Logotype() {
  return (
    <LogoWrapper>
      <img src={logotype} width="308" height="168" alt="Logo" />
    </LogoWrapper>
  );
}