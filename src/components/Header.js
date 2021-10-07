import React from "react";
import styled from "styled-components";
import {Grid, Text, Button} from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

import {useSelector, useDispatch} from "react-redux"
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {

    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login)
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
    if(is_login){
        return (
            <React.Fragment>
                <Container>
                <Grid padding="20px">
                    <Grid is_flex padding="4px 16px">
                        <Grid>
                            <Text margin="0px" size="24px" bold>Coucu</Text>
                        </Grid>
                        
                        <Grid is_flex>
                            <Button text="내정보"></Button>
                            <Button text="알림"></Button>
                            {/* 쿠키를 지워줘도 업데이트가 되지않음
                            렌더링이 되는 조건은
                            프롭스가 바뀌거나 스테이트가 바뀌어야함 */}
                            <Button text="로그아웃" _onClick={() =>{dispatch(userActions.logOut({}))}}></Button>
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
                        <Button text="로그인"></Button>
                        <Button text="회원가입"></Button>
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
`;

Header.defaultProps = {}

export default Header;