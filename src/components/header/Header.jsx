import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import { Authontication } from "../../context/AuthContext";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export default function Header() {
  const authValue = useContext(Authontication);
  console.log(authValue.cart);
  let AuthUser = JSON.parse(localStorage.getItem("user"));
  console.log(AuthUser);
  return (
    <header className="absolute w-full">
      <Navbar expand="lg" className="bg-[#FFFFFF33]">
        <Container>
          <div className="flex items-center gap-2">
            <div>
              <img src="./public/assets/book-bookmark 1 (1).png" alt="" />
            </div>
            <div dir="rtl">
              <Navbar.Brand href="/" className="text-white border-s-2 ps-2 ">
                BookShop
              </Navbar.Brand>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex justify-between w-full my-2 gap-2 items-center">
              <div className="flex flex-col text-center gap-3 lg:flex-row rounded items-center">
                <Link to={"/"} className="text-white text-decoration-none">
                  Home
                </Link>
                <Link to={"/shop"} className="text-white text-decoration-none">
                  Books
                </Link>
                <Link to={"/about"} className="text-white text-decoration-none">
                  About us
                </Link>
              </div>

              {authValue.token ? (
                <div className="flex items-center gap-4 flex-col md:flex-row">
                  <div className="flex items-center gap-2.5 md:gap-3">
                     <div className="flex flex-col md:flex-row gap-3 items-center">
                      <div className="flex justify-center gap-3 mt-3">
                        <span className="relative">
                          <Link to={"/wishList"}>
                            <CiHeart className="text-3xl text-black" />
                          </Link>
                          <p className="absolute m-0 -top-3 bg-[#D9176C] text-white px-2 -left-2 rounded-4xl">
                            {authValue.wishList.length}
                          </p>
                        </span>
                        <span className="relative">
                          <Link to={"/cart"}>
                            <FaCartArrowDown className="text-3xl text-black" />
                          </Link>
                          <p className="m-0 absolute -top-4 bg-[#D9176C] text-white px-2 -left-2 rounded-4xl">
                            {authValue.cart.length}
                          </p>
                        </span>
                      </div>
                      <div>
                        <Link
                          to={"/profile"}
                          className="flex gap-3 text-decoration-none text-black"
                        >
                          <div className=" flex items-center px-3  rounded-full bg-[#D9176C] text-white">
                            {AuthUser?.first_name?.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex flex-col">
                            <small className="text-white">
                              {AuthUser?.first_name} {AuthUser?.last_name}
                            </small>
                            <small className="text-[#FFFFFF80]">
                              {AuthUser?.email}
                            </small>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Link to={"/register"}>
                    <button
                      className=" py-2 px-3 rounded bg-[#D9176C] text-white"
                      onClick={() => authValue.handelLogOut()}
                    >
                      Log Out
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-2 flex-col lg:flex-row">
                  <Link to={"/login"}>
                    <button className="border-0 px-3 py-[10px] rounded bg-[#D9176C] text-white w-full">
                      Log In
                    </button>
                  </Link>
                  <Link to={"/register"}>
                    <button className="border-2 border-[#D9176C]  px-3 py-2 rounded text-[#D9176C] w-full bg-white">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
