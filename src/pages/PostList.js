// PostList.js
import React from "react";

import {actionCreators as postActions} from "../redux/modules/post";
import {useSelector, useDispatch} from "react-redux";
import Post from "../components/Post";

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    console.log(post_list);

    React.useEffect(() => {
        dispatch(postActions.getPostFB());

    }, []);

    return (
        <React.Fragment>
            {post_list.map((p, idx) => {
                return <Post key={p.id} {...p}/>
            })}
        </React.Fragment>
        )
}

export default PostList;

