// static images
import arrowRightLargeIcon from '../assets/icons/arrow-right-large.png';
import chevronRightIcon from '../assets/icons/chevron-small-right.png';
import chevronLeftIcon from '../assets/icons/chevron-small-left.png';

// components
import SectionHeader from './section-header';
import ProcessCard from './process-card';
import Carousel from './carousel';
import { ProcessData } from '../data/process-data';
import { useState } from 'react';

function CraouselItems() {
  return (
    <>
      {ProcessData.map((val) => {
        return (
          <ProcessCard
            key={val.id}
            process={val.process}
            path={val.path}
            title={val.title}
          />
        );
      })}
    </>
  );
}

export default function Process() {
  const [currentVal, setCurrentVal] = useState<number>(0);

  const prev = (currenIndex: number) => {
    if (window.innerWidth > 765) {
      currenIndex == 0
        ? setCurrentVal(ProcessData.length - 3)
        : setCurrentVal(currenIndex - 1);
    } else {
      currenIndex == 0
        ? setCurrentVal(ProcessData.length - 1)
        : setCurrentVal(currenIndex - 1);
    }
  };

  const next = (currentIndex: number) => {
    if (window.innerWidth > 765) {
      currentIndex == 1 ? setCurrentVal(0) : setCurrentVal(currentIndex + 1);
    } else {
      currentIndex == ProcessData.length - 1
        ? setCurrentVal(0)
        : setCurrentVal(currentIndex + 1);
    }
  };

  console.log(currentVal);

  return (
    <section className="mt-20 max-sm:mt-12" id="process">
      <div className="grid grid-cols-12 gap-14 max-sm:gap-0">
        <SectionHeader
          title="HOW WE BUILD"
          subtitle="WITH HYDRA VR?"
          path={arrowRightLargeIcon}
        />
      </div>
      <Carousel>
        <div
          className="flex mt-28 justify-evenly bg-process-bg-icon-3 bg-no-repeat bg-contain bg-top max-lg:justify-between max-lg:bg-none max-sm:mt-14 relative transition duration-500 ease-in"
          style={{ transform: `translateX(-${currentVal * 100}%)` }}
        >
          <CraouselItems />
        </div>
        {/* arrow right and left button slider */}
        <div className="absolute bottom-14 left-0 hidden max-lg:block">
          <button type="button" onClick={() => prev(currentVal)}>
            <div className="bg-slider-icon-1 bg-no-repeat bg-cover p-2">
              <div className="bg-slider-icon-2 bg-no-repeat bg-cover">
                <img src={chevronLeftIcon} alt="heydra chevron left icon" />
              </div>
            </div>
          </button>
        </div>
        <div className="absolute bottom-14 right-0 hidden max-lg:block">
          <button type="button" onClick={() => next(currentVal)}>
            <div className="bg-slider-icon-1 bg-no-repeat bg-cover p-2">
              <div className="bg-slider-icon-2 bg-no-repeat bg-cover">
                <img src={chevronRightIcon} alt="heydra chevron right icon" />
              </div>
            </div>
          </button>
        </div>
      </Carousel>
    </section>
  );
}
