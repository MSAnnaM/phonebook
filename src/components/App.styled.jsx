import styled from 'styled-components';
import Image from '../images/background3.jpg';

export const Background = styled.div`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.5),
      rgba(46, 47, 66, 0.3)
    ),
    url(${Image});
  background-size: cover;
  background-position: center;
  height: 200vh;
`;
