import React from "react";
import styled from "styled-components";

const Button = (props) => {

    const {text, _onClick, is_float, children, margin, width, padding} = props;

    if(is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text: children}</FloatButton>
      </React.Fragment>
    );
  }
  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

    return (
      <React.Fragment>
        <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
      </React.Fragment>
    );
}


Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
  padding: "12px 0px",
}

const ElButton = styled.button`
    width: 100%;
    background-color: #3459e6;
    color: #ffffff;
    box-sizing: border-box;
    border: none;
    border-radius: 1px;
    padding: ${(props) => props.padding};
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    font-size: ${(props) => props.size};
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: ${(props) => (props.bold? "600" : "400")};
`;

const FloatButton = styled.div`
  width : 50px;
  height: 50px;
  background-color: #3459e6;
  color: #ffffff;
  box-sizing: border-box;
  font-family: 'Noto Sans CJK KR';
  font-size: 36px;
  font-weight: 900;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;

`;

export default Button;