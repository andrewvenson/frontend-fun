import {useState} from "react"
import './App.css';
import Heart from "./components/heart.jsx";
import StarContainer from "./components/star-container.jsx";
import styled, {css, keyframes} from "styled-components";
import { TypeAnimation } from 'react-type-animation';

const HeartContainer = styled.div`
    padding: 50px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: -100px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 500
`;

const TypeAnimationContainer = styled.div`
    position: absolute;
    width: 200px;
    height: 100px;
    color: white;
    z-index: 1000;
    position: absolute;
    top: -60%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 300px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column; 
`;

const ImageContainer = styled.div`
    padding: 10px;
    border: 1px solid whitesmoke;
    border-left: none;
    border-right: none;
    border-radius: 50%;
    margin-top: 30px
`;

const FloatArea = styled.div`
  height:200px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const floater = keyframes`
  0%{
    transition: ease 0.5s;
    transform: scale(1);
  }
  50%{
    transition: ease 0.5s;
    transform: scale(1.1) translateY(-5%);
  }
  100%{
    transition: ease 0.5s;
    transform: scale(1) translateY(5%)
  }
`;

const FloatingClickMe = styled.div`
  transform: translateY(-10%);
  animation: ${floater} 1.5s infinite;
  transition: ease 0.5s;
  font-size: 40px;
`;

const borderPulse = keyframes`
  0% {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
    opacity: 0.7;
    transform: scale(1);
  }
  50%{
    filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    filter: drop-shadow(4px 8px 16px rgba(0, 0, 0, 0.3));
    opacity: 0.7;
    transform: scale(1);
  }
`;

const CoverImage = styled.img`
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
    animation: ${props => props.pulse ? css`${borderPulse} 2s infinite` : "none"};
    margin-top: 50px;
`;

const BrightStar = styled.div`
    width: 4px;
    height: 4px;
    content: "";
    filter: drop-shadow(2px 2px 2px whitesmoke);
    margin: 10px;
    animation: ${floater} 3s infinite;
    transition: ease 1s;
    background-color: lightgray;
    border-radius: 50%;
`;

const BrightStarRight = styled.div`
    width: 5px;
    height: 5px;
    content: "";
    filter: drop-shadow(2px 2px 2px whitesmoke);
    margin: 10px;
    animation: ${floater} 3s infinite;
    transition: ease 1s;
    background-color: lightgray;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 0;
`;

const BrightStarBottomRight = styled.div`
    width: 3px;
    height: 3px;
    content: "";
    filter: drop-shadow(2px 2px 2px whitesmoke);
    margin: 10px;
    animation: ${floater} 3s infinite;
    transition: ease 1s;
    background-color: lightgray;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
`;

const BrightStarBottomLeft = styled.div`
    width: 2px;
    height: 2px;
    content: "";
    filter: drop-shadow(2px 2px 2px whitesmoke);
    margin: 10px;
    animation: ${floater} 3s infinite;
    transition: ease 1s;
    background-color: lightgray;
    border-radius: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
`;


function App() {
  const [showPointer, setShowPointer] = useState(false);

  return (
    <div className="App">
        <TypeAnimationContainer>
            <TypeAnimation
              sequence={[
                'Hello Humans🌍',
                1000,
              ]}
              wrapper="span"
              cursor={true}
              className="type-animation"
                style={{ fontSize: '2.5em', display: 'inline-block', color: "whitesmoke", textShadow: "3px 4px 7px black"}}
            />
            <CoverImage src={"https://www.transparentpng.com/thumb/alien/gKKqgz-smiley-green-alien-emoji-transparent-png.png"} pulse={showPointer} />
            <FloatArea>
              {showPointer && <FloatingClickMe>👆</FloatingClickMe>}
              <br/>
                <TypeAnimation
                  sequence={[
                      1000,
                    () => {
                        setShowPointer(true);
                    },
                      "Click me",
                  ]}
                  wrapper="span"
                  cursor={false}
                  style={{ fontSize: '1.5em', color: "whitesmoke", textShadow: "3px 4px 7px black"}}
                />
            </FloatArea>
        </TypeAnimationContainer>
        <HeartContainer>
            {
                Array.from({length: 50}).map((_, index) => {
                    return <Heart key={index}/>
                })
            }
        </HeartContainer>
        <StarContainer />
        <BrightStar />
        <BrightStarRight />
        <BrightStarBottomRight />
        <BrightStarBottomLeft />
    </div>
  );
}

export default App;
