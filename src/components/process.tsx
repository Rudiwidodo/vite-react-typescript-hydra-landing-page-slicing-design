// static images
import arrowRightLargeIcon from '../assets/icons/arrow-right-large.png';
import arrowSmallRightIcon from '../assets/icons/arrow-small-right.png';
import chevronRightIcon from '../assets/icons/chevron-small-right.png';
import chevronLeftIcon from '../assets/icons/chevron-small-left.png';

// components
import SectionHeader from './section-header';
import ProcessCard from './process-card';

export default function Process() {
  return (
    <section className="mt-20" id="process">
      <div className="grid grid-cols-12 gap-14 max-sm:gap-0">
        <SectionHeader
          title="HOW WE BUILD"
          subtitle="WITH HYDRA VR?"
          path={arrowRightLargeIcon}
        />
      </div>
      <div className="flex mt-28 justify-evenly bg-process-bg-icon-3 bg-no-repeat bg-contain bg-top max-lg:bg-center max-md:bg-none max-sm:justify-center max-sm:mt-14 relative">
        <ProcessCard
          process="01"
          path={arrowSmallRightIcon}
          title="3D Conception & Design"
          hidden=""
        />
        <ProcessCard
          process="02"
          path={arrowSmallRightIcon}
          title="Interaction Design"
          hidden="max-md:hidden"
        />
        <ProcessCard
          process="03"
          path={arrowSmallRightIcon}
          title="VR World User Testing"
          hidden="max-lg:hidden"
        />
        <ProcessCard
          process="04"
          path={arrowSmallRightIcon}
          title="Hydra VR Deploy"
          hidden="max-lg:hidden"
        />
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
