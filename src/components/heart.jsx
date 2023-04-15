import React, {useEffect, useState} from "react"
import styled, {keyframes} from "styled-components"

const fall = keyframes`
  0% {
    transform: rotate(45deg) translateY(-100px);
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

const HeartShape = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  background-color: red;
  animation: ${fall} 5s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: inherit;
  }

  &::before {
    top: 0;
    left: -11px;
    border-radius: 50% 0 0 50%;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.2);
  }

  &::after {
    top: -4px;
    left: -6.2px;
    border-radius: 50% 50% 50% 0;
  }
`;

const EmptyHeart = styled.div`
    min-height: 15px;
    width: 15px;
`;

const Heart = () => {
    const [num,setNum] = useState(0)
    const [shouldSpawn, setShouldSpawn] = useState(false)

    useEffect(() => {
        const minTime = 2000;
        const maxTime = 5000;
        const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;

        setTimeout(() => {
            if(randomTime%2===0){
                setShouldSpawn(true)
            }else{
                setShouldSpawn(false)
            }
            setNum(num+1)
        },randomTime);

    }, [num, shouldSpawn])

    return shouldSpawn ? <HeartShape hide={shouldSpawn}/> : <EmptyHeart />
}

export default Heart
