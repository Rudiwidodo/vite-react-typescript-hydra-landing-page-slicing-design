import heroImage from '../assets/images/hero-image.png';
import arrowIcon from '../assets/icons/arrow-small-right.png';
import vector1 from '../assets/images/Vector 1.png';
import vector2 from '../assets/images/Vector 2.png';
import Button from './button';

export default function Hero() {
  return (
    <section className="mt-24 max-sm:mt-12">
      <div className="grid grid-cols-12 items-center gap-6">
        <div className="col-span-7 max-md:row-start-2 max-md:col-span-full bg-vektor-4 bg-no-repeat bg-contain max-md:relative max-md:z-10">
          <div className="max-sm:text-center">
            <p className="bg-gradient-to-r from-linear-one to-linear-two bg-clip-text text-transparent text-4xl sm:text-5xl font-montserrat-bold">
              Dive{' '}
              <span className="text-2xl text-white sm:text-[40px]">
                Into The Depths
              </span>
            </p>
            <p className="text-white text-2xl sm:text-5xl  font-montserrat-bold">
              Of{' '}
              <span className="bg-gradient-to-r from-linear-one to-linear-two bg-clip-text text-transparent text-4xl sm:text-[40px]">
                Virtual Reality
              </span>
            </p>
          </div>
          <div className="max-sm:hidden">
            <p className="text-base text-white mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
          </div>
          <div className="flex items-center mt-9 max-sm:justify-center">
            <Button
              textColor="text-primary"
              textSize="text-xs"
              bgColor="bg-gradient-to-r from-linear-two to-linear-one"
              height="h-[48px]"
              width="w-[214px]"
            >
              BUILD YOUR WORLD
            </Button>
            <a href="#" className="max-sm:hidden">
              <img src={arrowIcon} alt="heydra hero icon arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-span-5 max-md:row-start-1 max-md:mx-auto max-md:col-span-full">
          <div className="bg-hero-image bg-no-repeat bg-center bg-contain object-fill relative p-2">
            <img
              src={vector1}
              alt="background vector one hero images"
              className="absolute z-0 top-1/2 -translate-y-1/2"
            />
            <img
              src={vector2}
              alt="background vector one hero images"
              className="absolute z-0 top-1/2 -translate-y-1/2"
            />
            <img
              src={vector2}
              alt="background vector one hero images"
              className="absolute z-0 top-1/2 -translate-y-1/2 rotate-90 w-3/4 left-0"
            />
            <img src={heroImage} alt="heydra hero image" className="relative" />
          </div>
        </div>
      </div>
    </section>
  );
}
