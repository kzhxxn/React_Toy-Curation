import React from "react";
import styled from "styled-components";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text} from "../elements";


const Post = (props) => {

    return (
      <React.Fragment>
        <Container>
        <Grid padding=" 20px">
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Text>{props.insert_dt}</Text>
            </Grid>
            </Grid>
            <Grid>
              <Image shape="rectangle" src={props.src} />
            </Grid>
            <Grid padding="16px" >
              <Text>{props.contents}</Text>
            </Grid>
            <Grid is_flex width="auto">
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>
              <Grid padding="16px">
              <Text bold>댓글 {props.comment_cnt}개</Text>
            </Grid>
            </Grid>
        </Grid>
        </Container>
      </React.Fragment>
    );
}

Post.defaultProps = {
  user_info: {
    user_name: "kzhxxn",
    user_profile: "https://res.cloudinary.com/hcu8jcnmr/image/upload/c_fit,w_600,h_600/pzkbqnspmzgllshwpuc6.jpg",
  },
  image_url: "https://res.cloudinary.com/hcu8jcnmr/image/upload/c_fit,w_600,h_600/pzkbqnspmzgllshwpuc6.jpg",
  contents: "POP 3x4 Instant Print Digital Camera",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

const Container = styled.div`
background-color: #ffffff;
padding: 10px;
margin: 15px;
border-radius : 30px 30px 30px 3px;
word-break:break-all;
border: 1px solid #eee;
opacity: 0.8;
&:hover {
    opacity: 1.0;
    border: 2px solid #3459e6;
    box-shadow: 0px 0px 20px 5px #ddd;
    transition : 0.5s
}
`;



export default Post;