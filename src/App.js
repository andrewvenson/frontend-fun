import {useState} from "react"
import './App.css';
import Heart from "./components/heart.jsx";
import StarContainer from "./components/star-container.jsx";
import styled, {css, keyframes} from "styled-components";
import { TypeAnimation } from 'react-type-animation';
import CoverPhoto from "./images/coverphoto.png";
import Rose from "./images/rose.png";

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
    margin-top: 30px
`;

const FloatArea = styled.div`
  height:200px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const floater = keyframes`
  0%{transform: translateY(-10%);transition: ease 0.5s;}
  50%{transform: translateY(10%);transition: ease 0.5s;}
`;

const FloatingClickMe = styled.div`
  transform: translateY(-10%);
  animation: ${floater} 1.5s infinite;
  transition: ease 0.5s;
  font-size: 40px;
`;

const borderPulse = keyframes`
  0% {
    box-shadow: 3px 5px 10px #39373b;
    opacity: 0.7;
  }
  50%{
    box-shadow: 3px 10px 20px #39373b;
    opacity: 1;
  }
  100% {
    box-shadow: 3px 5px 10px #39373b;
    opacity: 0.7;
  }
`;

const CoverImage = styled.img`
    border-radius: 50%;
    box-shadow: 3px 5px 10px #39373b;
    border: 1px solid white;
    animation: ${props => props.pulse ? css`${borderPulse} 2s infinite` : "none"};
`;

const RoseImage = styled.img`
    width: 75px;
    height: 75px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
    margin: 10px;
    transform: translateY(-10%);
    animation: ${floater} 3s infinite;
    transition: ease 1s;
`;

const RoseImageRight = styled.img`
    width: 75px;
    height: 75px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
    margin: 10px;
    position: absolute;
    right: 0;
    transform: translateY(-10%);
    animation: ${floater} 3s infinite;
    transition: ease 1s;
`;

const RoseImageBottomLeft = styled.img`
    width: 75px;
    height: 75px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
    margin: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-10%);
    animation: ${floater} 3s infinite;
    transition: ease 1s;
`;

const RoseImageBottomRight = styled.img`
    width: 75px;
    height: 75px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
    margin: 10px;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(-10%);
    animation: ${floater} 3s infinite;
    transition: ease 1s;
`;


function App() {
  const [showPointer, setShowPointer] = useState(false);

  return (
    <div className="App">
        <TypeAnimationContainer>
            <TypeAnimation
              sequence={[
                'Hey baby girl!',
                1000,
                "I built this cause I'm broke...😅",
                2000,
                'Peroooo, most importantly because I LOVE YOU!🥰',
                2000,
                'Happy Anniversary Nadaia 💘',
                3000,
                () => {
                  console.log('Done');
                }
              ]}
              wrapper="span"
              cursor={true}
              className="type-animation"
                style={{ fontSize: '2.5em', display: 'inline-block', color: "whitesmoke", textShadow: "3px 4px 7px black"}}
            />
            <ImageContainer>
                <CoverImage src={CoverPhoto} pulse={showPointer} />
            </ImageContainer>
            <FloatArea>
              {showPointer && <FloatingClickMe>👆</FloatingClickMe>}
              <br/>
                <TypeAnimation
                  sequence={[
                    18000,
                    () => {
                        setShowPointer(true);
                    },
                    'Lets see how our past month went...',
                      2000,
                      "Click us to 👀",
                    () => {
                      console.log('Done');
                    }
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
        <RoseImage src={Rose} />
        <RoseImageRight src={Rose} />
        <RoseImageBottomLeft src={Rose} />
        <RoseImageBottomRight src={Rose} />
    </div>
  );
}

export default App;
