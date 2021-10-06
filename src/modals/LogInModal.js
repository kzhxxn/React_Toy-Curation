import React from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'
import  GoogleLogin from 'react-google-login'
import HorizonLIne from '../components/HorizonLIne'

const LogInModal = ( {show, onHide} ) => {
    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" >
            로그인
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" placeholder="이메일을 입력해주세요 :)" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호를 확인해주세요!" />
                    </Form.Group>

                    <div className="d-grid mt-4 mb-4">
                    <Button variant="primary" type="button">로그인</Button>
                    </div>
                    <HorizonLIne text={"OR"} />
                    <GoogleLogin
                        render={(renderProps) => {
                            return <div className="d-grid mt-4 mb-4"><Button
                            variant="danger"
                            onClick = {renderProps.onClick}
                            disabled = {renderProps.disabled}
                            // style = {{backgroundColor : "#D7352A"}}
                            >
                                <i className = "fab fa-google"></i>&nbsp; 구글로 로그인하기
                            </Button></div>
                        }}
                    />
                    {/* <Button variant="secondary" onClick={onHide}>Close</Button> */}
                </Form>
            </Modal.Body>

            </Container>
            </Modal>
    )
}

export default LogInModal
