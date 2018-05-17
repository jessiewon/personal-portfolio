import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon } from "antd";

import * as PropShapes from "utils/propShapes";

const Wrapper = styled.div`
  ${props => props.theme.flex.center};
`;

const StyledLink = styled(Link)`
  ${props => props.theme.flex.center};
  background: ${props => props.primary};
  border-radius: 100%;
  width: 80px;
  height: 80px;
  color: ${props => props.theme.colors.text.white};
  :hover,
  :focus,
  :active {
    color: ${props => props.theme.colors.text.white};
    background: ${props =>
      props.primaryLight || props.theme.colors.primaryHover};
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  padding: ${props => props.theme.padding.sixteen};
`;

const Logo = styled.img`
  width: ${props => (props.small ? "35px" : "100%")};
`;

const ChangePage = props => (
  <Wrapper>
    {!props.next && <Icon type="caret-left" />}
    <StyledLink
      to={props.page.link}
      primary={props.page.primary}
      primaryLight={props.page.primaryLight}
    >
      <Logo
        small={props.page.title === "Path"}
        src={props.page.logo}
        alt={props.page.title}
      />
    </StyledLink>
    {props.next && <Icon type="caret-right" />}
  </Wrapper>
);

ChangePage.propTypes = {
  page: PropShapes.portfolioData.isRequired,
  next: PropTypes.bool
};

ChangePage.defaultProps = {
  next: false
};

export default ChangePage;
