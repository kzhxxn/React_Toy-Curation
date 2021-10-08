import React from "react";
import Upload from "../shared/Upload";
import {Grid, Text, Button, Image, Input} from "../elements";

import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";


const PostWrite = (props) => {
    const is_login = useSelector((state) => state.user.is_login);
    const preview = useSelector((state) => state.image.preview);
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
//글아이디확인
    const post_id = props.match.params.id;
    //수정모드확인여부
    const is_edit = post_id ? true : false;

    const {history} = props;
    //수정모드이면 리스트에서 찾아서 p.id가 포스트 아이디랑 똑같니 안똑같니?
    let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

    const [contents, setContents] = React.useState(_post ? _post.contents : "");

    const [layout_type, setLayoutType] = React.useState(
      _post ? _post.layout_type : ""
    );

    //첫렌더링시 1회체크해서 뒤로가기 처리
    React.useEffect(() => {
      if (is_edit && !_post) {
        console.log("포스트 정보가 없어요!");
        history.goBack();
  
        return;
      }
  
      if (is_edit) {
        dispatch(imageActions.setPreview(_post.image_url));
      }
    }, []);

    // 레이아웃 타입을 정해주는 함수
  // useState를 이용해요!
    const changeLayoutType = (e) => {
      setLayoutType(e.target.value);
    };
    //   내용을 바꿔주는 함수
  // useState를 이용해요!

    const changeContents = (e) => {
      setContents(e.target.value);
    }
  //   게시글을 추가하는 함수
    const addPost = () => {
      dispatch(postActions.addPostFB(contents));
    }
  //   게시글을 수정하는 함수
    const editPost = () => {
      dispatch(postActions.editPostFB(post_id, {contents: contents}));
    }

    if(!is_login){
      return (
        <Grid margin="100px 0px" padding="16px" center>
          <Text size="32px" bold>
            앗! 잠깐!
          </Text>
          <Text size="16px">
            로그인 후에만 글을 쓸 수 있어요!
          </Text>
          <Button
            _onClick={() => {
              history.replace("/login");
            }}
          >
            로그인 하러가기
          </Button>
        </Grid>
      );
    }

    return (
      <React.Fragment>
        <Grid padding="16px">
          <Text margin="0px" size="36px" bold>
             {is_edit ? "게시글 수정" : "게시글 작성"}
          </Text>
          <Upload/>
        </Grid>

        <Grid>
          <Grid padding="16px">
            <Text margin="0px" size="24px" bold>
              미리보기
            </Text>
          </Grid>

          <Image
            shape="rectangle"
            src={preview ? preview : "http://via.placeholder.com/500x500"}
          />
        </Grid>

        <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        />
        </Grid>

        <Grid padding="16px">
        <Input
          type="text"
          value={layout_type}
          _onChange={changeLayoutType}
          label="레이아웃 타입"
          placeholder="a, b, c 중 하나를 골라주세요."
        />
      </Grid>

        <Grid padding="16px">
        {is_edit ? (
          <Button text="게시글 수정" _onClick={editPost}></Button>
        ) : (
          <Button text="게시글 작성" _onClick={addPost}></Button>
        )}
        </Grid>
      </React.Fragment>
    );
}

export default PostWrite;