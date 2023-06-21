// static images
import arrowDownIcon from '../assets/icons/chevron-small-down.png';
import techImage from '../assets/images/tech-image.png';
import tech1 from '../assets/images/Hydra-Tech1 1.png';
import tech2 from '../assets/images/Hydra-Tech2 1.png';
import tech3 from '../assets/images/Hydra-Tech3 1.png';
import tech4 from '../assets/images/Hydra-Tech4 1.png';
import chevronRightIcon from '../assets/icons/chevron-small-right.png';
import chevronLeftIcon from '../assets/icons/chevron-small-left.png';

export default function Tech() {
  return (
    <section className="mt-28 max-sm:mt-14">
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
          <button type="button">
            <img src={arrowDownIcon} alt="hydra arrow down icon" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-11 gap-16 relative max-lg:gap-0">
        <div className="col-span-3 flex justify-center items-center max-lg:col-span-5 max-lg:col-start-2 max-md:col-start-1 max-md:col-span-12">
          <img src={tech1} alt="hydra tech one" />
        </div>
        <div className="col-span-3 flex justify-center items-center max-lg:col-span-5 max-md:hidden">
          <img src={tech3} alt="hydra tech two" />
        </div>
        <div className="col-span-3 flex justify-center items-center max-lg:hidden">
          <img src={tech2} alt="hydra tech three" />
        </div>
        <div className="col-span-3 flex justify-center items-center max-lg:hidden">
          <img src={tech4} alt="hydra tech four" />
        </div>
        {/* arrow right and left button slider */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 hidden max-lg:block">
          <button type="button">
            <div className="bg-slider-icon-1 bg-no-repeat bg-cover p-2">
              <div className="bg-slider-icon-2 bg-no-repeat bg-cover">
                <img src={chevronLeftIcon} alt="heydra chevron left icon" />
              </div>
            </div>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden max-lg:block">
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
