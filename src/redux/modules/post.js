import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";


//액션타입
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

//액션생성함수
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
    list: [],
}

// 게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어둡시다! :)
const initialPost = {
  id:0,
  user_info: {
    user_name: "kzhxxn",
    user_profile: "https://res.cloudinary.com/hcu8jcnmr/image/upload/c_fit,w_600,h_600/pzkbqnspmzgllshwpuc6.jpg",
  },
  image_url: "https://res.cloudinary.com/hcu8jcnmr/image/upload/c_fit,w_600,h_600/pzkbqnspmzgllshwpuc6.jpg",
  contents: "POP 3x4 Instant Print Digital Camera",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};
//포스트 가져오기
const getPostFB = () => {
    return function (dispatch, getState, { history }) {
      const postDB = firestore.collection("post");
  
      postDB.get().then((docs) => {
        let post_list = [];
  
        docs.forEach((doc) => {
          // 잘 가져왔나 확인하기! :)
          // 앗! DB에서 가져온 것하고 우리가 Post 컴포넌트에서 쓰는 데이터 모양새가 다르네요!
          // console.log(doc.id, doc.data());
  
          // 데이터 모양을 맞춰주자!
          let _post = doc.data();
          let post = {
              id: doc.id,
              user_info: {
                  user_name: _post.user_name,
                  user_profile: _post.user_profile,
                  user_id: _post.user_id,
              },
              contents: _post.contents,
              image_url: _post.image_url,
              comment_cnt: _post.comment_cnt,
              imsert_dt: _post.insert_dt
          }
  
          post_list.push(post);
        });
  
        // 리스트 확인하기!
        console.log(post_list);
  
        dispatch(setPost(post_list));
      });
    };
  };
   //   let post = {
        //       id: doc.id,
        //       user_info: {
        //           user_name: _post.user_name,
        //           user_profile: _post.user_profile,
        //           user_id: _post.user_id,
        //       },
        //       contents: _post.contents,
        //       image_url: _post.image_url,
        //       comment_cnt: _post.comment_cnt,
        //       imsert_dt: _post.insert_dt
        //   }
  
        //   post_list.push(post);
        // });

//리듀서
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
          draft.list = action.payload.post_list;
        }),
  
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            
        })
    },
    initialState
  );

//액션생성 export
const actionCreators = {
    setPost,
    addPost,
    getPostFB,
  };
  
  export { actionCreators };