// static images
import arrowRightLargeIcon from '../assets/icons/arrow-right-large.png';
import arrowSmallRightIcon from '../assets/icons/arrow-small-right.png';
import chevronRightIcon from '../assets/icons/chevron-small-right.png';
import chevronLeftIcon from '../assets/icons/chevron-small-left.png';

// components
import ProcessRowOne from './process-row-one';

export default function Process() {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-12 gap-14 max-sm:gap-0">
        <ProcessRowOne
          title="HOW WE BUILD"
          subtitle="WITH HYDRA VR?"
          path={arrowRightLargeIcon}
        />
      </div>
      <div className="flex mt-28 justify-evenly bg-process-bg-icon-3 bg-no-repeat bg-contain bg-top max-lg:bg-center max-md:bg-none max-sm:justify-center max-sm:mt-14 relative">
        <div className="flex flex-col items-center">
          <div className="bg-process-bg-icon-1 bg-no-repeat bg-cover h-44 w-44 p-2">
            <div className="bg-process-bg-icon-2 bg-no-repeat bg-cover h-40 w-40 flex justify-center items-center">
              <h3 className="text-6xl font-montserrat-bold text-primary">01</h3>
            </div>
          </div>
          <button type="button" className="flex mt-6">
            <img
              src={arrowSmallRightIcon}
              alt="hydra arrow small right icon"
              className="h-16 w-16 max-sm:hidden"
            />
            <p className="text-2xl text-white font-montserrat-bold w-[187px]">
              3D Conception & Design
            </p>
          </button>
        </div>
        <div className="flex flex-col items-center max-md:hidden">
          <div className="bg-process-bg-icon-1 bg-no-repeat bg-cover h-44 w-44 p-2">
            <div className="bg-process-bg-icon-2 bg-no-repeat bg-cover h-40 w-40 flex justify-center items-center">
              <h3 className="text-6xl font-montserrat-bold text-primary">02</h3>
            </div>
          </div>
          <button type="button" className="flex mt-6">
            <img
              src={arrowSmallRightIcon}
              alt="hydra arrow small right icon"
              className="h-16 w-16"
            />
            <p className="text-2xl text-white font-montserrat-bold w-[187px]">
              Interaction Design
            </p>
          </button>
        </div>
        <div className="flex flex-col items-center max-lg:hidden">
          <div className="bg-process-bg-icon-1 bg-no-repeat bg-cover h-44 w-44 p-2">
            <div className="bg-process-bg-icon-2 bg-no-repeat bg-cover h-40 w-40 flex justify-center items-center">
              <h3 className="text-6xl font-montserrat-bold text-primary">03</h3>
            </div>
          </div>
          <button type="button" className="flex mt-6">
            <img
              src={arrowSmallRightIcon}
              alt="hydra arrow small right icon"
              className="h-16 w-16"
            />
            <p className="text-2xl text-white font-montserrat-bold w-[187px]">
              VR World User Testing
            </p>
          </button>
        </div>
        <div className="flex flex-col items-center max-lg:hidden">
          <div className="bg-process-bg-icon-1 bg-no-repeat bg-cover h-44 w-44 p-2">
            <div className="bg-process-bg-icon-2 bg-no-repeat bg-cover h-40 w-40 flex justify-center items-center">
              <h3 className="text-6xl font-montserrat-bold text-primary">04</h3>
            </div>
          </div>
          <button type="button" className="flex mt-6">
            <img
              src={arrowSmallRightIcon}
              alt="hydra arrow small right icon"
              className="h-16 w-16"
            />
            <p className="text-2xl text-white font-montserrat-bold w-[187px]">
              VHydra VR Deploy
            </p>
          </button>
        </div>
        {/* arrow right and left button slider */}
        <div className="absolute bottom-0 left-0 hidden max-lg:block">
          <button type="button">
            <div className="bg-slider-icon-1 bg-no-repeat bg-cover p-2">
              <div className="bg-slider-icon-2 bg-no-repeat bg-cover">
                <img src={chevronLeftIcon} alt="heydra chevron left icon" />
              </div>
            </div>
          </button>
        </div>
        <div className="absolute bottom-0 right-0 hidden max-lg:block">
          <button type="button">
            <div className="bg-slider-icon-1 bg-no-repeat bg-cover p-2">
              <div className="bg-slider-icon-2 bg-no-repeat bg-cover">
                <img src={chevronRightIcon} alt="heydra chevron right icon" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
