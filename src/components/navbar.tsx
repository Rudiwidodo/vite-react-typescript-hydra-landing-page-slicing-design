import brand from '../assets/images/Vector.png';
import brandName from '../assets/images/Frame.png';
import hamburgerIcon from '../assets/images/Hamburger-Button.png';
import NavbarResponsive from './navbar-responsive';
import { useState } from 'react';
import NavLink from './navlink';

export default function Navbar() {
  const [closeNav, setCloseNav] = useState(false);
  return (
    <>
      <header className="min-w-full mt-6">
        <nav className="h-full p-1 flex items-center justify-between max-sm:items-end relative z-10">
          <div className="flex items-end">
            <img src={brand} alt="brand heydra" className="h-14 w-16" />
            <img
              src={brandName}
              alt="brand hyedra name"
              className="h-7 w-11 ml-3"
            />
          </div>
          <ul className="text-white text-xs font-montserrat-bold flex gap-10 max-sm:hidden">
            <NavLink to="#about">ABOUT</NavLink>
            <NavLink to="#services">SERVICES</NavLink>
            <NavLink to="#technologies">TECHNOLOGIES</NavLink>
            <NavLink to="#process">HOW TO</NavLink>
          </ul>
          <div className="flex font-montserrat-bold gap-9 items-end max-lg:hidden">
            <a
              href="#contact"
              className="text-white text-sm font-montserrat-bold h-[48px] w-[154px] ring-1 ring-white no-underline rounded-full flex justify-center items-center"
            >
              CONTACT US
            </a>
            <a
              href="#join"
              className="text-primary text-sm font-montserrat-bold h-[48px] w-[154px] bg-gradient-to-r from-linear-two to-linear-one no-underline rounded-full flex justify-center items-center"
            >
              JOIN HYDRA
            </a>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() =>
                closeNav ? setCloseNav(false) : setCloseNav(true)
              }
            >
              <img src={hamburgerIcon} alt="hamburger icon navbar" />
            </button>
          </div>
          {/* navbar responsive */}
          <NavbarResponsive
            pathBarand={brand}
            pathName={brandName}
            close={closeNav}
            handleClose={() =>
              closeNav ? setCloseNav(false) : setCloseNav(true)
            }
          />
        </nav>
      </header>
    </>
  );
}
