import Footer from "./Footer";
import Navbar from "./Navbar";
import {useState} from "react";
import Menu from "./Menu";

const Layout = ({ children }) => {

    //hamburger
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
