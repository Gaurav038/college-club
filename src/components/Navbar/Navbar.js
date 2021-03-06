import styled from "styled-components";
import img from "../../Images/club2.png"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsCalendar2EventFill} from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";


const Navbar = () => {
  let location = useLocation();
  const ActiveClr = (curr) => {
    if (location.pathname === curr) {
      return "active";
    }
  };
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/">
            <img src={img} alt="" />
          </Link>
        </Logo>
       
        <Nav>
          <NavListWrap>
            <NavList className={ActiveClr("/")}>
              <Link to='/'>
              <i className="fas fa-home fa-2x"></i>
                <span>Home</span>
              </Link>
            </NavList>

            <NavList className={ActiveClr("/event")}>
              <Link to='/event'>
                <BsCalendar2EventFill size={23} />
                <span>Events</span>
              </Link>
            </NavList>

            <NavList className={ActiveClr("/resource")}>
              <Link to='/resource'>
              <FaDatabase size={23} />
                <span>Project</span>
              </Link>
            </NavList>

            <NavList className={ActiveClr("/activity")}>
              <Link to='/activity'>
                <AiFillProject size={23} />              
              <span>Activity</span>
              </Link>
            </NavList>

            <NavList className={ActiveClr("/form")}>
              <Link to='/form'>
              <RiLoginCircleFill size={23} />
                <span>Registration</span>
              </Link>
            </NavList>

          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 3px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  img{
      width:21rem;
  }
`;


const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 650px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      color: black;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export default Navbar;