import React from 'react'
import { useState } from 'react'
import { Nav, Navbar, Container, Button } from  'react-bootstrap'
import SignUpModal from '../modals/SignUpModal'
import LogInModal from '../modals/LogInModal'

const Header = () => {
    //기본 모달창은 꺼진상태여야함
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    const [LogInModalOn, setLogInModalOn] = useState(false);
    return (
        <>
        <SignUpModal
          show={signUpModalOn}
          onHide={()=> setSignUpModalOn(false)} />
        <LogInModal
          show={LogInModalOn}
          onHide={()=> setLogInModalOn(false)} />
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand >CouCu</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link >
                                <Button variant="primary"
                                onClick={() => setLogInModalOn(true)}
                                >로그인</Button>
                            </Nav.Link>
                            <Nav.Link >
                                <Button 
                                variant="secondary" 
                                onClick={() => setSignUpModalOn(true)}
                                >
                                회원가입</Button>
                            </Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </header>
        </>
    )
}

export default Header;
