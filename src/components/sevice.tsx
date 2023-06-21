// static images
import chevronRightIcon from '../assets/icons/chevron-small-right.png';
import chevronLeftIcon from '../assets/icons/chevron-small-left.png';
import arrowRightLargeIcon from '../assets/icons/arrow-right-large.png';
import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';
import service4 from '../assets/images/service-4.png';

// components
import ServiceRowTwo from './service-row-two';
import ServiceRowOne from './service-row-one';

export default function Service() {
  return (
    <section className="mt-24 max-sm:mt-14">
      <div className="grid grid-cols-12 gap-14 max-md:gap-x-0">
        <ServiceRowOne
          title="WHY BUILD"
          subtitle="WITH HYDRA?"
          path={arrowRightLargeIcon}
        />
      </div>
      <div className="grid grid-cols-12 mt-28 gap-3 max-sm:gap-0 max-sm:mt-6 relative">
        <div className="col-span-3 max-lg:col-span-5 max-lg:col-start-2 max-md:col-span-8 max-md:col-start-3 max-sm:col-span-10 max-sm:col-start-2">
          <ServiceRowTwo title="SIMULATION" path={service1}>
            <p className="text-sm text-white font-normal">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
          </ServiceRowTwo>
        </div>
        <div className="col-span-3 max-lg:col-span-5 max-md:hidden">
          <ServiceRowTwo title="EDUCATION" path={service2}>
            <p className="text-sm text-white font-normal">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
          </ServiceRowTwo>
        </div>
        <div className="col-span-3 max-lg:hidden">
          <ServiceRowTwo title="SELF-CARE" path={service3}>
            <p className="text-sm text-white font-normal">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
          </ServiceRowTwo>
        </div>
        <div className="col-span-3 max-lg:hidden">
          <ServiceRowTwo title="OUTDOOR" path={service4}>
            <p className="text-sm text-white font-normal">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
          </ServiceRowTwo>
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
