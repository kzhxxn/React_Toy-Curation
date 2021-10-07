import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text} from "../elements";


const Post = (props) => {

    return (
      <React.Fragment>
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

export default Post;