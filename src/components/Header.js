import React from "react";
import styled from "styled-components";
import {Grid, Text, Button} from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

import {useSelector, useDispatch} from "react-redux"
import { actionCreators as userActions } from "../redux/modules/user";

import {history} from "../redux/configureStore"
import { apiKey } from "../shared/firebase"

const Header = (props) => {

    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login)
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key)? true : false;
    //쿠키 있없을 스테이트로 관리
    //const [갱신값, 갱신하려고 쓰는 함수] = useState(초기값);
    // const [is_login, setIsLogin] = React.useState(false);
    //is_login을 true,false확인해주는 useeffect확인
    //
    // React.useEffect(()=> {
    //     let cookie = getCookie("user_id");
    //     console.log(cookie);

    //     if(cookie){
    //         setIsLogin(true)
    //     }else{
    //         setIsLogin(false)
    //     }
    // })
    if(is_login && is_session){
        return (
            <React.Fragment>
                <Container>
                <Grid padding="20px">
                    <Grid is_flex padding="4px 16px">
                        <Grid>
                            <Text margin="0px" size="24px" bold>Coucu</Text>
                        </Grid>
                        
                        <Grid is_flex>
                            {/* 쿠키를 지워줘도 업데이트가 되지않음
                            렌더링이 되는 조건은
                            프롭스가 바뀌거나 스테이트가 바뀌어야함 */}
                            <Button width= " 20px" text="로그아웃" _onClick={() =>{dispatch(userActions.logoutFB())
                            }}></Button>
                        </Grid>
                    </Grid>
                </Grid>
                </Container>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <Container>
            <Grid padding="20px">
                <Grid is_flex padding="4px 16px">
                    <Grid>
                        <Text margin="0px" size="24px" bold>Coucu</Text>
                    </Grid>
                    
                    <Grid is_flex>
                        <Button text="로그인" _onClick={() => {
                            history.push('/login');
                        }}></Button>
                        <Button text="회원가입" _onClick={() => {
                            history.push('/signup');
                        }}></Button>
                    </Grid>
                </Grid>
            </Grid>
            </Container>
        </React.Fragment>
    )
}
const Container = styled.div`
display: flex;
align-items: center; 
background-color: #F8F9FA;
width: 100%;
position : fixed;
top: 0;
  left: 0;
  right: 0;
z-index: 9999;
`;

Header.defaultProps = {}

export default Header;