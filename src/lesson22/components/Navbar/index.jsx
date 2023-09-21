import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
  background-color: black;
`;

const Link = styled(NavLink)`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: coral;
  }
`;

export const index = () => {
  return (
    <React.Fragment>
      <Container>
        <Link to={"/"} exact>
          Logo
        </Link>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/templates"}>Templates</Link>
      </Container>
      <Outlet />
    </React.Fragment>
  );
};

export default index;
