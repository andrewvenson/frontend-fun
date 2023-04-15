import styled, {css, keyframes} from "styled-components";
import Star from "./star"

const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    padding: 25px;
`;

const StarContainer = () => {
    return (
        <Container>
            {Array.from({length: 100}).map((_, index) => <Star key={index}/>)}
        </Container>
    );
}

export default StarContainer;
