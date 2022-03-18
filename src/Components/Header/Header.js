import React, {useState} from 'react'
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
    //navbar color change on scroll

    const [color, setcolor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }
    window.addEventListener("scroll", changeColor)
  return (
 <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" className={color ? "navbar navbar-bg ": "navbar"}>
        <Container fluid>
        <Navbar.Brand className={color ? "navbar img navbar-size img" : "navbar img "}><Link to='/'><img src='/images/logo2.png' alt='logo'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars' } style={{color:'red',transform:'Scale(1.3)'}}/></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link href="#brand" onClick={closeMobileMenu}>OUR BRAND</Nav.Link>
            <Nav.Link as={Link} to="/Products" onClick={closeMobileMenu}>OUR PRODUCTS</Nav.Link>
            <NavDropdown title="OUR SERVICES" id="collasible-nav-dropdown">
              <NavDropdown.Item ><Link to="/import_and_distribution" onClick={closeMobileMenu}>IMPORTER AND DISTRIBUTER</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item > <Link to="/trading_and_contracting" onClick={closeMobileMenu}>TRADING AND CONTRACTING</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about" onClick={closeMobileMenu}>ABOUT US</Nav.Link>
            <Nav.Link  href="#contact" onClick={closeMobileMenu}>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

export default Header