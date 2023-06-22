// static images
import footer1 from '../assets/images/Vector 18.png';
import footer2 from '../assets/images/Vector 19.png';
import footerLogo from '../assets/images/footer-logo.png';
import FooterIcon from './footer-icon';
import FooterLink from './footer-link';
import footerIconFb from '../assets/icons/facebook.png';
import footerIconIg from '../assets/icons/instagram.png';
import footerIconTw from '../assets/icons/twitter.png';
import footerIconIn from '../assets/icons/linkedin.png';
import footerIconYt from '../assets/icons/youtube.png';
import footerIconPi from '../assets/icons/pinterest.png';
import Button from './button';

export default function Footer() {
  return (
    <footer className="mt-28 mb-14 max-md:mt-20">
      <div className="relative">
        <img
          src={footer1}
          alt="hydra footer background one"
          className="absolute top-0 -translate-y-10 max-md:top-24 max-md:-translate-y-0 max-sm:top-36"
        />
        <img
          src={footer2}
          alt="hydra footer background two"
          className="absolute top-0 -translate-y-56 max-md:-translate-y-0 max-md:-top-12 max-sm:top-6"
        />
        <div className="grid grid-cols-12 divide-x-4 max-md:divide-x-0 max-md:gap-y-14">
          <div className="col-span-3 flex justify-center items-center max-md:col-span-full">
            <img src={footerLogo} alt="hydra footer logo" />
          </div>
          <div className="col-span-3 max-md:hidden">
            <div className="px-8">
              <div className="mt-0">
                <FooterLink>ABOUT</FooterLink>
              </div>
              <div className="mt-5">
                <FooterLink>SERVICES</FooterLink>
              </div>
              <div className="mt-5">
                <FooterLink>TECHNOLOGIES</FooterLink>
              </div>
              <div className="mt-5">
                <FooterLink>HOW TO</FooterLink>
              </div>
              <div className="mt-5">
                <FooterLink>JOIN HYDRA</FooterLink>
              </div>
            </div>
          </div>
          <div className="col-span-2 max-lg:hidden">
            <div className="px-8">
              <div className="mt-0">
                <FooterLink>F.A.Q</FooterLink>
              </div>
              <div className="mt-5">
                <FooterLink>SITEMAP</FooterLink>
              </div>
              <div className="mt-5">
                <FooterLink>CONDITIONS</FooterLink>
              </div>
              <div className="mt-5">
                <FooterLink>LICENSES</FooterLink>
              </div>
            </div>
          </div>
          <div className="col-span-4 max-lg:col-span-6 max-md:col-span-full max-md:flex max-md:justify-center">
            <div className="px-8 max-md:px-0">
              <h3 className="text-[16px] text-white font-montserrat-bold max-md:text-center">
                SOCIALIZE WITH HYDRA
              </h3>
              <div className="mt-9">
                <div className="flex gap-5 max-md:gap-10 max-sm:gap-0 max-sm:justify-between">
                  <FooterIcon
                    path={footerIconFb}
                    alt="hydra footer icon facebook"
                  />
                  <FooterIcon
                    path={footerIconTw}
                    alt="hydra footer icon twitter"
                  />
                  <FooterIcon
                    path={footerIconIn}
                    alt="hydra footer icon linkedin"
                  />
                  <FooterIcon
                    path={footerIconYt}
                    alt="hydra footer icon youtube"
                  />
                  <FooterIcon
                    path={footerIconIg}
                    alt="hydra footer icon instagram"
                  />
                  <FooterIcon
                    path={footerIconPi}
                    alt="hydra footer icon pinterest"
                  />
                </div>
                <div className="mt-12 max-md:text-center">
                  <Button
                    textSize="text-xs max-md:text-sm"
                    textColor="text-primary"
                    bgColor="bg-gradient-to-r from-linear-one to-linear-two"
                    height="h-[48px] max-md:h-[55px]"
                    width="w-[214px] max-md:w-[290px]"
                  >
                    BUILD YOUR WORLD
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-gradient-to-r from-linear-one to-linear-two w-full mt-16" />
        <div className="mt-12">
          <p className="text-sm text-white font-montserrat-bold text-center">
            2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
            RESERVED{' '}
          </p>
        </div>
      </div>
    </footer>
  );
}
