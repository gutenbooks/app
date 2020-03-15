import styled, { keyframes } from 'styled-components';

const fold = keyframes`
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
`

const Cube = styled.div`
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #007bff;
    -webkit-animation: ${fold} 2.4s infinite linear both;
            animation: ${fold} 2.4s infinite linear both;
    -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }


  &.cube-2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
            transform: scale(1.1) rotateZ(90deg);
  }
  &.cube-3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
            transform: scale(1.1) rotateZ(180deg);
  }
  &.cube-4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
            transform: scale(1.1) rotateZ(270deg);
  }
  &.cube-2:before {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }
  &.cube-3:before {
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
  }
  &.cube-4:before {
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
  }
`

export default Cube;
