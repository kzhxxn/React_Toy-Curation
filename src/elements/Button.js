import React from "react";
import styled from "styled-components";

const Button = (props) => {

    const {text, _onClick} = props;

    return (
      <React.Fragment>
        <ElButton onClick={_onClick}>{text}</ElButton>
      </React.Fragment>
    );
}

Button.defaultProps = {
    text: "텍스트",
    _onClick: () => {}
}

const ElButton = styled.button`
    width: 100%;
    background-color: #3459e6;
    color: #ffffff;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    font-size: ${(props) => props.size};
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: ${(props) => (props.bold? "600" : "400")};
`;

export default Button;