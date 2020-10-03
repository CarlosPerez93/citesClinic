import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'



export default function Registre() {
    return (
        <Col lg={{span:24}} className="Main">
            <Col lg={{ span: 12, offset: 6 }} className="mainRegister">
                <Col className="mainRegister_cont1" >
                    <img src="logoR.png" alt="img" />
                    <Col lg={{ span: 4, offset: 20 }} xs={{ span: 4, offset: 18 }}><h4>Register</h4></Col>
                </Col>
                <Col  >
                    <Form className="mainRegister_Form">
                        <Form.Item>
                            <Input placeholder="username"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="e-mail"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="phone"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="password"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button>Register</Button>
                        </Form.Item>


                        <Row justify>
                            <p>Already a member?</p>
                            <a href="/">Login</a>
                        </Row>
                    </Form>

                </Col>
            </Col>

        </Col>
    )
}
