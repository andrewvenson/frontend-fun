import {useState} from "react"
import './App.css';
import Heart from "./components/heart.jsx";
import styled, {keyframes} from "styled-components";
import { TypeAnimation } from 'react-type-animation';
import CoverPhoto from "./images/coverphoto.png";

const HeartContainer = styled.div`
    padding: 50px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: -100px;
    left: 0px;
    width: 100%;
    height: 100%;
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
    border: 3px solid whitesmoke;
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

function App() {

  const [showPointer, setShowPointer] = useState(false);

  return (
    <div className="App">
        <TypeAnimationContainer>
            <TypeAnimation
              sequence={[
                'Hey baby girl!', // Types 'One'
                1000, // Waits 1s
                "I built this cause I'm broke...😅", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Peroooo, most importantly because I LOVE YOU!🥰', // Types 'Three' without deleting 'Two'
                2000, // Waits 2s
                'Happy Anniversary Nadaia 💘', // Types 'Three' without deleting 'Two'
                3000,
                () => {
                  console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="span"
              cursor={true}
              className="type-animation"
                style={{ fontSize: '2.5em', display: 'inline-block', color: "whitesmoke", textShadow: "3px 4px 7px black"}}
            />
            <ImageContainer>
                <img src={CoverPhoto} style={{borderRadius: "50%", boxShadow: "3px 10px 18px #39373b"}}/>
            </ImageContainer>
            <FloatArea>
              {showPointer && <FloatingClickMe>👆</FloatingClickMe>}
              <br/>
                <TypeAnimation
                  sequence={[
                    17000,
                    () => {
                        setShowPointer(true);
                    },
                    'Lets see how our past month went...', // Types 'One'
                      1000,
                      "Click us to 👀",
                    () => {
                      console.log('Sequence completed'); // Place optional callbacks anywhere in the array
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
    </div>
  );
}

export default App;
