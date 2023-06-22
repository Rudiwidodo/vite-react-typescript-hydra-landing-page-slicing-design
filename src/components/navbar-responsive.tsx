import { NavbarProps } from '../interface/navbar-interface';
import NavLink from './navlink';

export default function NavbarResponsive({ ...props }: NavbarProps) {
  return (
    <>
      {props.close && (
        <div
          className="fixed top-0 bottom-0 left-0 w-full bg-gradient-to-b from-radial-two via-radial-one to-radial-two"
          onClick={props.handleClose}
        >
          {/* responsive navbrand and button close */}
          <div className="flex justify-between items-center p-2">
            <div className="h-20 flex items-center gap-5 max-md:h-full">
              <img src={props.pathBarand} alt="brand heydra" />
              <img src={props.pathName} alt="brand hyedra name" />
            </div>
            {/* close button */}
            <button type="button" onClick={props.handleClose}>
              <div className="bg-slider-icon-1 bg-cover bg-no-repeat w-[40px] h-[40px]">
                <div className="bg-slider-icon-2 bg-cover bg-no-repeat h-full flex justify-center items-center">
                  <h3 className="text-2xl text-white font-montserrat-bold">
                    ✖
                  </h3>
                </div>
              </div>
            </button>
            {/* end close button */}
          </div>
          {/* end navbrand and button close */}
          {/* navlink */}
          <div className="mt-10 flex flex-col items-center gap-y-10 text-white text-4xl font-montserrat-bold max-md:text-lg">
            <NavLink to="#about">ABOUT</NavLink>
            <NavLink to="#services">SERVICES</NavLink>
            <NavLink to="#technologies">TECHNOLOGIES</NavLink>
            <NavLink to="#process">HOW TO</NavLink>
            <div className="flex font-montserrat-bold gap-6 max-md:flex-col max-md:gap-10">
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
          </div>
          {/* end navlink */}
        </div>
      )}
    </>
  );
}
