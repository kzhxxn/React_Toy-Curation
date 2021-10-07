import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}

Image.defaultProps = {
  shape: "circle",
  src: "https://res.cloudinary.com/hcu8jcnmr/image/upload/c_fit,w_600,h_600/pzkbqnspmzgllshwpuc6.jpg",
  size: 36,
};

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
    max-width: 550px;
    display: block;
    margin: auto;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;