import React, { useState } from "react";
import Link from "next/link";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import ActiveLink from "./ActiveLink";

const BsNavLink = (props) => {
  const { href, title } = props;
  // console.log("BsNavLink render", { href, title }); // Debugging log
  return (
    <ActiveLink activeClassName="active" href={href}>
      <span className="nav-link port-navbar-link">{title}</span>
    </ActiveLink>
  );
};

const BsNavBrand = () => (
  <div className="navbar-brand">
    <Link href="/" className="port-navbar-brand">
      Yohanes Hubert
    </Link>
  </div>
);

const LoginLink = () => <BsNavLink href="/api/v1/login" title="Login" />;

const LogoutLink = () => <span className="nav-link port-navbar-link">Logout</span>;

const Header = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // console.log("Header render", { isOpen }); // Debugging log

  return (
    <Navbar className={`port-navbar port-default absolute ${className} ${isOpen ? "is-open" : "is-close"}`} dark expand="md">
      <BsNavBrand />
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/" title="Home" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/about" title="About" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/portofolios" title="Portfolios" />
          </NavItem>
          {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem> */}
          {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem> */}
        </Nav>
        {/* <Nav navbar>
            <NavItem className="port-navbar-item clickable">
              <LoginLink />
            </NavItem>
            <NavItem className="port-navbar-item clickable">
              <LogoutLink />
            </NavItem>
          </Nav> */}
      </Collapse>
    </Navbar>
  );
};

export default Header;
