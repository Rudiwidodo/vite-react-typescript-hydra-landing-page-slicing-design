import brand from '../assets/images/Vector.png';
import brandName from '../assets/images/Frame.png';
import hamburgerIcon from '../assets/images/Hamburger-Button.png';
import Button from './button';

export default function Navbar() {
  return (
    <>
      <header className="min-w-full mt-6">
        <nav className="h-full p-1 flex items-center justify-between max-sm:items-end">
          <div className="flex items-end">
            <img src={brand} alt="brand heydra" className="h-14 w-16" />
            <img
              src={brandName}
              alt="brand hyedra name"
              className="h-7 w-11 ml-3"
            />
          </div>
          <ul className="text-white text-xs font-montserrat-bold flex gap-10 max-sm:hidden">
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">TECHNOLOGIES</a>
            </li>
            <li>
              <a href="#">HOW TO</a>
            </li>
          </ul>
          <div className="flex font-montserrat-bold gap-9 items-end max-lg:hidden">
            <Button
              textColor="text-white"
              ring="ring-1 ring-white"
              textSize="text-xs"
              height="h-[48px]"
              width="w-[154px]"
            >
              CONTACT US
            </Button>
            <Button
              textColor="text-primary"
              textSize="text-xs"
              bgColor="bg-gradient-to-r from-linear-two to-linear-one"
              height="h-[48px]"
              width="w-[154px]"
            >
              JOIN HYDRA
            </Button>
          </div>
          <div className="lg:hidden">
            <img src={hamburgerIcon} alt="hamburger icon navbar" />
          </div>
        </nav>
      </header>
    </>
  );
}
