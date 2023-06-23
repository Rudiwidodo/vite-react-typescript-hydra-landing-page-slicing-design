// static images
import arrowDownIcon from '../assets/icons/chevron-small-down.png';
import techImage from '../assets/images/tech-image.png';
import chevronRightIcon from '../assets/icons/chevron-small-right.png';
import chevronLeftIcon from '../assets/icons/chevron-small-left.png';
import Carousel from './carousel';

// static data interface
import { TechData } from '../data/tech-data';
import { useState } from 'react';

function CraouselItems() {
  return (
    <>
      {TechData.map((val) => {
        return (
          <div
            key={val.id}
            className="flex justify-center items-center max-lg:flex-none max-lg:w-full"
          >
            <img src={val.path} alt={val.alt} className="max-sm:w-1/2" />
          </div>
        );
      })}
    </>
  );
}

export default function Tech() {
  const [currentVal, setCurrentVal] = useState<number>(0);

  const prev = (currentIndex: number) => {
    currentVal == 0
      ? setCurrentVal(TechData.length - 1)
      : setCurrentVal(currentIndex - 1);
  };

  const next = (currentIndex: number) => {
    currentIndex == TechData.length - 1
      ? setCurrentVal(0)
      : setCurrentVal(currentIndex + 1);
  };

  return (
    <section className="mt-28 max-sm:mt-14" id="technologies">
      <div className="h-[303px] max-md:h-40 relative">
        <img src={techImage} alt="hydra tech image" className="h-full" />
        <div className="absolute h-full w-full flex items-center justify-center flex-col top-0">
          <h3 className="text-4xl text-white font-montserrat-bold max-md:text-[16px]">
            TECHNOLOGIES & HARDWARE
          </h3>
          <p className="text-4xl text-slate-300 font-light max-md:text-2xl">
            USED BY HYDRA VR.
          </p>
        </div>
        <div className="absolute bg-service-bg-icon bg-no-repeat bg-contain -bottom-8 left-1/2 -translate-x-1/2 max-md:hidden">
          <div className="bg-slider-icon-1 bg-no-repeat bg-cover p-1">
            <div className="bg-slider-icon-2 bg-no-repeat bg-cover">
              <img src={arrowDownIcon} alt="heydra chevron left icon" />
            </div>
          </div>
        </div>
      </div>
      <Carousel>
        <div
          className="mt-11 flex justify-between max-lg:gap-0 max-sm:mt-6 relative trasition duration-500 ease-in"
          style={{ transform: `translateX(-${currentVal * 100}%)` }}
        >
          <CraouselItems />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 hidden max-lg:block">
          <button type="button" onClick={() => prev(currentVal)}>
            <div className="bg-slider-icon-1 bg-no-repeat bg-cover p-2">
              <div className="bg-slider-icon-2 bg-no-repeat bg-cover">
                <img src={chevronLeftIcon} alt="heydra chevron left icon" />
              </div>
            </div>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden max-lg:block">
          <button type="button" onClick={() => next(currentVal)}>
            <div className="bg-slider-icon-1 bg-no-repeat bg-cover p-2">
              <div className="bg-slider-icon-2 bg-no-repeat bg-cover">
                <img src={chevronRightIcon} alt="heydra chevron right icon" />
              </div>
            </div>
          </button>
        </div>
      </Carousel>
      {/* arrow right and left button slider */}
    </section>
  );
}
