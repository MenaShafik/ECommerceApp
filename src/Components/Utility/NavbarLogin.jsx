import React, { useEffect, useState } from "react";
import { Navbar, Container, FormControl, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../images/LOGO.svg";
import { ProfileIcon, ShopingIcon } from "../Icons";
import NavbarSearchHook from "../../Hook/Search/NavbarSearchHook";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../Redux/Actions/AuthAction";
export default function NavbarLogin() {
  const [searchWord, onChangeSearch] = NavbarSearchHook();
  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");
  //
  const [user ,setUser] =useState('');

  //

//
// const dispatch = useDispatch()
useEffect(()=>{
  if (localStorage.getItem("user") != null)
setUser(JSON.parse(localStorage.getItem("user"))) ;
// dispatch(getLoggedUser())
},[])

// const res =useSelector(state=>state.createUser.currentUser)
//   if (res) {
//     console.log(res)
//   }
const logOut =()=>{
  localStorage.removeItem("user") ;
  setUser('')
   }
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            value={word}
            onChange={onChangeSearch}
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
          {
                            user != '' ? (                 <NavDropdown title={user.name} id="basic-nav-dropdown">                    {
user.role === "admin" ? (<NavDropdown.Item href="/admin/allproducts">لوحة التحكم</NavDropdown.Item>) : (<NavDropdown.Item href="/user/profile">الصفحه الشخصية</NavDropdown.Item>)
                     }                               <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut} href="/">تسجيل خروج</NavDropdown.Item>

                                </NavDropdown>
                            ) :
                                (<Nav.Link href='/login'
                                    className="nav-text d-flex mt-3 justify-content-center">
                                   {ProfileIcon()}
                                    <p style={{ color: "white" }}>دخول</p>
                                </Nav.Link>)
                        }
            
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              {ShopingIcon()}
              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
