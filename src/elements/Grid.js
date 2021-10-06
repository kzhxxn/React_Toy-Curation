import React from 'react'
import styled from 'styled-components'

const Grid = (props) => {
    const {is_flex, width, margin, padding, bg, children} = props;
    const styles = {
        is_flex :  is_flex,
        width : width,
        margin: margin,
        padding: padding,
        bg : bg,
    }
    return (
        <>
        <GridBox {...styles}>
            {children}
        </GridBox>
        </>
    )
}

Grid.defaultProps = {
    children : null,
    is_flex: false,
    width: "100%",
    //false값을 주면 해당 인자에 값이 있으면 그 인자의 값으로 대체함.
    padding: false,
    margin: false,
    bg: false,
  }


const GridBox = styled.div`
//프롭스로 넘어오는 값을 그대로 전달
  width: ${(props) => props.width}; 
  height: 100%;
//선굵기까지 포함
  box-sizing :border-box;
//리터럴 표현식 값을가져올때 사용하는데 내부에서 함수표현도 가능.
  ${(props) => (props.padding ? `padding : ${props.padding};` : '')}
  ${(props) => (props.margin ? `margin :${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
  ${(props) => props.is_flex ? `display: flex; align-items: center; justify-content: space-between;` : ''}
`;

export default Grid
