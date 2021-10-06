import React from 'react'
import Grid from '../elements/Grid'

const Post = (props) => {

    return (
        <>
         <Grid padding="16px">
            <div> insert_dt / like / price </div>
            <div> contents </div>
            <div> image  </div>
            <div> user profile / user name / comment_cnt  </div>
         </Grid>
        </>
        
    )
}

//포스트들은 각각의 정보를 담고있지않고 리스트형태의 데이터에서 포스트로 변환해서 가져오는 형태
//페이지를 그리는데 꼭 필요한 데이터를 담아두면 데이터가 없어서 나는 오류를 방지할 수 있다. (initialState랑 유사함)

Post.defaultProps = {
    user_info: {
      user_name: 'coucu',
      user_profile: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    },
    img_url: "https://res.cloudinary.com/hcu8jcnmr/image/upload/c_fit,w_600,h_600/pzkbqnspmzgllshwpuc6.jpg",
    contents: 'POP 3x4" Instant Print Digital Camera',
    comment_cnt: 10,
    insert_dt: '2021-10-06 20:44:00',
  }

export default Post
