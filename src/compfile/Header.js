import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, Dropdown, Form, FormControl } from 'react-bootstrap';

function Navigation() {
    return (
        <div>
            <Navbar bg="warning text-center" expand="lg">
                <Navbar.Brand href="#home"><p className='mx-3'>  Escom</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="What are you looking for?" className="mr-sm-6" id="SearchBar" />
                    </Form>
                    <Nav className="mr-auto d-flex flex-row flex-wrap">
                        <Nav.Link href="#" className="ml-3 mx-3">Hello, Peter</Nav.Link>
                        <Nav.Link href="#link" className="ml-3"><Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                <span>Language</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#"> <span> English <input type="radio" checked /> </span></Dropdown.Item>
                                <Dropdown.Item href="#"> <span> Hindi <input type="radio" /></span></Dropdown.Item>
                                <Dropdown.Item href="#"> <span> Gujarati <input type="radio" /></span></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></Nav.Link>
                        <Nav.Link href="#link" className="ml-3"> Sign in <FontAwesomeIcon icon={faUser} size={'sm'} /></Nav.Link>
                        <Nav.Link href="#link" className="ml-3"> Cart <FontAwesomeIcon icon={faShoppingCart} size={'sm'} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation

