import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import List from "./views/List/List";
import Detail from "./views/Detail/Detail";
import {LinkContainer} from "react-router-bootstrap";

function App() {
    return (
        <BrowserRouter>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to={"/"}>
                        <Navbar.Brand>Oleix</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={"/"}>
                                <Nav.Link>List</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={"/advert"}>
                                <Nav.Link>Advert</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Routes>
                    <Route path="/" element={<List/>}/>
                    <Route path="/advert" element={<Detail/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
