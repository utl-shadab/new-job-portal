import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Logo from "../../assets/logo.svg"
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from 'reactstrap';
import Avatar from "../../assets/small-icon/avatar.jpeg"
import Notification from "../../assets/small-icon/notification.png"
import Comment from "../../assets/small-icon/comment.png"
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import "./navbar.css"
const Navbar = () => {
    const [notificationCount, setNotificationCount] = useState(3);
    const [commentCount, setCommentCount] = useState(6);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const navigate = useNavigate();

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const [isDesigningOpen, setIsDesigningOpen] = useState(false);
    const [isDevelopmentOpen, setIsDevelopmentOpen] = useState(false);
    const [isMarketingOpen, setIsMarketingOpen] = useState(false);
    const [isITSupportOpen, setIsITSupportOpen] = useState(false);

    const toggleDesigning = () => setIsDesigningOpen(!isDesigningOpen);
    const toggleDevelopment = () => setIsDevelopmentOpen(!isDevelopmentOpen);
    const toggleMarketing = () => setIsMarketingOpen(!isMarketingOpen);
    const toggleITSupport = () => setIsITSupportOpen(!isITSupportOpen);
    const [isAuthenticated,setIsAuthenticated]=useState(false);

    useEffect(()=>{
        const auth=localStorage.getItem('isAuthenticate');
        console.log(auth)
        auth?'hello':'goog'
        setIsAuthenticated(auth?true:false);
    },[])
    return (
        <>
            <header className="main-header  ">
                <div className="main-box">
                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <a href="/" className='fw-bold fs-3'>
                                    {/* <img
                                        alt="brand"
                                        loading="lazy"
                                        width={154}
                                        height={50}
                                        decoding="async"
                                        data-nimg={1}
                                        src={Logo}
                                        style={{ color: "transparent" }}
                                    /> */}
                                    Prime Plum
                                </a>
                            </div>
                        </div>
                        
                        <Nav className="nav main-menu">
                            <ul className="navigation" id="navbar">
                                <li className="nav-item"> <a href="#">Home</a></li>
                                <Dropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Find Jobs
                                    </DropdownToggle>
                                    <DropdownMenu end className="mega-menu">
                                        <div className="mega-menu-bar row">
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <h3>Popular Categories </h3>
                                                <ul>
                                                    <li className="">
                                                        <a href="#">It Jobs </a>
                                                        <a href="#">Sales Jobs </a>
                                                        <a href="#">Marketing Jobs </a>
                                                        <a href="#">Data Science Jobs </a>
                                                        <a href="#">HR Jobs </a>

                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <h3>Jobs In Demand</h3>
                                                <ul>
                                                    <li className="">
                                                        <a href="#">Fresher Jobs</a>
                                                        <a href="#">MNC Jobs</a>
                                                        <a href="#">Remote Jobs</a>
                                                        <a href="#">Walk-in Jobs</a>
                                                        <a href="#">Part-time Jobs</a>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Registred Company
                                    </DropdownToggle>
                                    <DropdownMenu end className="mega-menu">
                                        <div className="mega-menu-bar row">
                                            <div className="column col-lg-6 col-md-6 col-sm-12">

                                                <ul>
                                                    <li className="">
                                                        <a href="#">Unicorn</a>
                                                        <a href="#">MNC</a>
                                                        <a href="#">Start Up</a>
                                                        <a href="#">Product Based</a>
                                                        <a href="#">Internet</a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">

                                                <ul>
                                                    <li className="">
                                                        <a href="#">Top Company </a>
                                                        <a href="#">IT Company</a>
                                                        <a href="#">Fin tech company</a>
                                                        <a href="#">Sponsored Company</a>
                                                        <a href="#">Feature company</a>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </DropdownMenu>
                                </Dropdown>

                                {/* <Dropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Employ Login
                                    </DropdownToggle>
                                    <DropdownMenu end className="mega-menu">
                                        <div className="mega-menu-bar row">
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <h3>Jobs Listing</h3>
                                                <ul>
                                                    <li className="">
                                                        <a href="#">link</a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <h3>Jobs Listing</h3>
                                                <ul>
                                                    <li className="">
                                                        <a href="#">link</a>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </DropdownMenu>
                                </Dropdown> */}


                                <Dropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Services
                                    </DropdownToggle>
                                    <DropdownMenu end className="mega-menu">
                                        <div className="mega-menu-bar row">
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <h3>Jobs Listing</h3>
                                                <ul>
                                                    <li className="">
                                                        <a href="#">link</a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <h3>Jobs Listing</h3>
                                                <ul>
                                                    <li className="">
                                                        <a href="#">link</a>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </DropdownMenu>
                                </Dropdown>


                                {/* <Dropdown nav inNavbar>
                                    <DropdownToggle nav >
                                        Staff Login
                                    </DropdownToggle>

                                </Dropdown> */}


                            </ul>
                        </Nav>
                        
                    </div>
                    {isAuthenticated && 
                    <div className="outer-box laptop-outer-box">
                        <a className="upload-cv " href="/dashboard">
                            {/* upload cv */}
                            Dashboard
                             <i className='fa fa-upload'></i>
                        </a>
                        {/* <div onClick={()=>{localStorage.setItem('isAuthenticate',false);navigate('/job-seeker-login');}}>Logout</div> */}
                        <div className="btn-box">
                            <a
                                href="#"
                                className="theme-btn btn-style-three call-modal"
                                data-bs-toggle="modal"
                                data-bs-target="#loginPopupModal"
                            >
                                <span className='avatar-img'><img src={Avatar} className='avatar rounded-circle' height={"48px"} width={"48px"} alt="" /></span>
                                <span className='avatar-img position-relative'>
                                    <img src={Notification} className='avatar rounded-circle' height={"48px"} width={"48px"} alt="" />
                                    {notificationCount > 0 && (
                                        <span className="badge bg-danger rounded-circle position-absolute top-0 end-0">{notificationCount}</span>
                                    )}
                                </span>
                                <span className='avatar-img position-relative'>
                                    <img src={Comment} className='avatar rounded-circle' height={"48px"} width={"48px"} alt="" />
                                    {commentCount > 0 && (
                                        <span className="badge bg-danger rounded-circle position-absolute top-0 end-0">{commentCount}</span>
                                    )}
                                </span>
                            </a>

                        </div>
                    </div>
                    }
                  { !isAuthenticated && 
                    <div className="outer-box laptop-outer-box">
                        <div className="btn-box">
                            {/* Login and Dropdown Button */}
                            <div className="dropdown dropdown-hover">
                                <button
                                    className=" dropdown-toggle fw-bold"
                                    type="button"
                                    id="loginDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Login / Register
                                </button>
                                <ul className="dropdown-menu " aria-labelledby="loginDropdown">

                                    <li><a className="dropdown-item" href="/employer-login">Employer Login</a></li>
                                    <li><a className="dropdown-item" href="/staff-login">Staff Login</a></li>
                                    <li><a className="dropdown-item" href="/job-seeker-login">Job Seeker Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </header>
            <header className="main-header main-header-mobile">
                <div className="auto-container">
                    <div className="inner-box">
                        <div className="nav-outer">
                            <div className="logo-box">
                                <div className="logo">
                                    <a href="/" className='fw-bold fs-3'>
                                        {/* <img
                                            alt="brand"
                                            loading="lazy"
                                            width={154}
                                            height={50}
                                            decoding="async"
                                            data-nimg={1}
                                            src={Logo}
                                            style={{ color: "transparent" }}
                                        /> */}
                                        Prime Plum
                                    </a>
                                    
                                </div>
                            </div>
                            {/* offcanvas  */}
                            <Offcanvas placement="start" isOpen={isOpen} toggle={toggle}>
                                <OffcanvasHeader closeButton>
                                    Logo
                                </OffcanvasHeader>
                                <OffcanvasBody>
                                    <div className="mobile-menu-list">
                                        <ul>
                                            <li>
                                                <a href="" className="active">
                                                    Home
                                                </a>
                                            </li>

                                            <li id="ServicesMenu">
                                                <p className="cat-name" onClick={toggleDesigning}>
                                                    Find Jobs {isDesigningOpen ? <i className="ri-arrow-up-s-line" /> : <i className="ri-arrow-down-s-line" />}
                                                </p>
                                                {isDesigningOpen && (
                                                   <div className='border'>

                                                    <ul className='mx-2'>
                                                    Popular Categories 
                                                        <li>
                                                        <a href="#">It Jobs </a>
                                                        <a href="#">Sales Jobs </a>
                                                        <a href="#">Marketing Jobs </a>
                                                        <a href="#">Data Science Jobs </a>
                                                        <a href="#">HR Jobs </a>
                                                        </li>
                                                       

                                                    </ul>
                                                    <ul className='mx-2'>
                                                    Jobs In Demand
                                                    <li>
                                                        <a href="#">Fresher Jobs</a>
                                                        <a href="#">MNC Jobs</a>
                                                        <a href="#">Remote Jobs</a>
                                                        <a href="#">Walk-in Jobs</a>
                                                        <a href="#">Part-time Jobs</a>
                                                            </li>

                                                    </ul>
                                                   </div>
                                                )}
                                                <p className="cat-name" onClick={toggleDevelopment}>
                                                    Registred Company {isDevelopmentOpen ? <i className="ri-arrow-up-s-line" /> : <i className="ri-arrow-down-s-line" />}
                                                </p>
                                                {isDevelopmentOpen && (
                                                    <div className='border'>
                                                        <ul >
                                                        <li className="">
                                                        <a href="#">Unicorn</a>
                                                        <a href="#">MNC</a>
                                                        <a href="#">Start Up</a>
                                                        <a href="#">Product Based</a>
                                                        <a href="#">Internet</a>
                                                    </li>
                                                    </ul>
                                                        <ul >
                                                        <li className="">
                                                        <a href="#">Top Company </a>
                                                        <a href="#">IT Company</a>
                                                        <a href="#">Fin tech company</a>
                                                        <a href="#">Sponsored Company</a>
                                                        <a href="#">Feature company</a>
                                                    </li>
                                                    </ul>
                                                        </div>
                                                )}
                                           
                                               
                                            </li>
                                           

                                        </ul>
                                        <div className="outer-box off-outer-box">
                                            {/* <a className="upload-cv mobile-cv" href="">
                                                Upload your CV <i className='fa fa-upload'></i>
                                            </a> */}
                                            <div className="btn-box small-box">
                                                {/* <a
                                                    href="#"
                                                    className="theme-btn btn-style-three call-modal"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#loginPopupModal"
                                                >
                                                    <span className='avatar-img'><img src={Avatar} className='avatar rounded-circle' height={"48px"} width={"48px"} alt="" /></span>
                                                    <span className='avatar-img position-relative'>
                                                        <img src={Notification} className='avatar rounded-circle' height={"48px"} width={"48px"} alt="" />
                                                        {notificationCount > 0 && (
                                                            <span className="badge bg-danger rounded-circle position-absolute top-0 end-0">{notificationCount}</span>
                                                        )}
                                                    </span>
                                                    <span className='avatar-img position-relative'>
                                                        <img src={Comment} className='avatar rounded-circle' height={"48px"} width={"48px"} alt="" />
                                                        {commentCount > 0 && (
                                                            <span className="badge bg-danger rounded-circle position-absolute top-0 end-0">{commentCount}</span>
                                                        )}
                                                    </span>
                                                </a> */}
                                                <div className="btn-box">
                                                    {/* Login and Dropdown Button */}
                                                    <div className="dropdown dropdown-hover">
                                                        <button
                                                            className=" dropdown-toggle fw-bold"
                                                            type="button"
                                                            id="loginDropdown"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            Login / Register
                                                        </button>
                                                        <ul className="dropdown-menu " aria-labelledby="loginDropdown">

                                                            <li><a className="dropdown-item" href="/employer-login">Employer Login</a></li>
                                                            <li><a className="dropdown-item" href="/staff-login">Staff Login</a></li>
                                                            <li><a className="dropdown-item" href="/job-seeker-login">Job Seeker Login</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </OffcanvasBody>
                            </Offcanvas>

                        </div>
                        <div className=" small-out-box">
                            <div className="login-box">
                                <a
                                    href="#"
                                    className="call-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginPopupModal"
                                >
                                    <span className='avatar-img'><img src={Avatar} className='avatar rounded-circle' height={"48px"} width={"48px"} alt="" /></span>
                                </a>
                            </div>

                            <a
                                href="#"
                                className="mobile-nav-toggler"
                                onClick={toggle}
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasMenu"
                            >
                                <span className="fa-solid fa-bars" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
