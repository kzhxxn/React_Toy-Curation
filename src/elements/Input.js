import React from "react";
import styled from "styled-components";

import {Text, Grid} from "./index";

const Input = (props) => {
    const {label, placeholder, _onChange} = props;
    return (
      <React.Fragment>
        <Grid>
          <Text margin="0px">{label}</Text>
          <ElInput placeholder={placeholder} onChange={_onChange} />
        </Grid>
      </React.Fragment>
    );
}

Input.defaultProps = {
    label: '텍스트',
    placeholder: '텍스트를 입력해주세요.',
    _onChange: () => {}
}

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 10px;
    box-sizing: border-box;
    font-size: ${(props) => props.size};
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: ${(props) => (props.bold? "600" : "400")};
`;

export default Input;