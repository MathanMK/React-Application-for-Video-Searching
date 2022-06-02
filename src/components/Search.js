import React, { Component } from 'react'
import { Container, Row, Col, InputGroup, FormControl,Button } from 'react-bootstrap';
import './Videoitem.css'
import Logo from './../images/logo.png';

export default class Search extends Component {

    state = { term: '' }


    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }



    render() {
        return (
            <div className="ui fluid action input">
                <form onSubmit={this.onFormSubmit} className="ui form head">
                    <img className="logo-img" src={Logo} />
                    <div className="search-bar">
                        <Container>
                            <Row className="justify-content-lg-center">
                                
                                    <InputGroup className="mb-8">
                                        <FormControl
                                            value={this.state.term}
                                            onChange={this.onInputChange}
                                            placeholder="Search here"
                                            aria-label="Search Here"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="outline-secondary" id="button-addon2" onClick={this.onFormSubmit}>
                                            Search
                                        </Button>
                                    </InputGroup>
                                
                            </Row>
                        </Container>
                    </div>

                </form>
            </div>
        )
    }
}


