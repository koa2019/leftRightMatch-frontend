// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Image from "../components/Image/Image"
import logoImg from "../images/leftRightMatch3.png"
import Nav from "../components/Nav/Nav"
import Roll from 'react-reveal/Roll';

class FrontPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            show: true
        }
    }
    handleThisClick = () => {
        console.log('handleClick hit')
        
        this.props.history.push("/quiz")
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Row fluid>
                        <Col size="mx-auto">
                            <div onClick={this.handleThisClick}>
                                <Roll bottom opposite>
                                {/* <Roll bottom opposite when={this.state.show}> */}
                                    <Image
                                        image={logoImg}
                                        name={logoImg.name}
                                    >
                                        {/* Need to position text closer to logo */}
                                        <h1>Which Political Candidate Are You Most Like?</h1>
                                    </Image>
                                </Roll>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </div>
        );
    }
}

export default FrontPage;