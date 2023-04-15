import styled, {css, keyframes} from "styled-components";

const borderPulse = keyframes`
  0% {
    box-shadow: 3px 5px 10px black;
    opacity: 0.3;
  }
  50%{
    box-shadow: 3px 10px 20px black;
    opacity: 1;
  }
  100% {
    box-shadow: 3px 5px 10px black;
    opacity: 0.3;
  }
`;

const ShiningStar = styled.div`
    box-shadow: 3px 5px 10px black;
    background-color: white;
    content: none;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    top: ${props => props.randomHeightPosition}px;
    left: ${props => props.randomWidthPosition}px;
    position: absolute;
    animation: ${props => css`${borderPulse} ${props.randomAnimationTime}s`} infinite;
`;

const Star = () => {
    const animationTimeMin = 2;
    const animationTimeMax = 10;
    const randomAnimationTime = Math.floor(Math.random() * (animationTimeMax - animationTimeMin + 1)) + animationTimeMin;

    const innerHeightMin = 0;
    const innerHeightMax = window.innerHeight;
    const randomHeightPosition = Math.floor(Math.random() * (innerHeightMax - innerHeightMin + 1)) + innerHeightMin;

    const innerWidthMin = 0;
    const innerWidthMax = window.innerWidth;
    const randomWidthPosition = Math.floor(Math.random() * (innerWidthMax - innerWidthMin + 1)) + innerWidthMin;

    console.log(window.innerHeight, window.innerWidth)
    return <ShiningStar randomAnimationTime={randomAnimationTime} randomHeightPosition={randomHeightPosition} randomWidthPosition={randomWidthPosition}/>
}

export default Star;
