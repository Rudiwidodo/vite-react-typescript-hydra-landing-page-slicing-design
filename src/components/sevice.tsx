// static images
import chevronRightIcon from '../assets/icons/chevron-small-right.png';
import chevronLeftIcon from '../assets/icons/chevron-small-left.png';
import arrowRightLargeIcon from '../assets/icons/arrow-right-large.png';
import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';
import service4 from '../assets/images/service-4.png';

// components
import GridColThree from './grid-col-3';
import ServiceRowOne from './service-row-one';

export default function Service() {
  return (
    <section className="mt-24">
      <div className="grid grid-cols-12 gap-14 max-md:gap-x-0">
        <ServiceRowOne
          title="WHY BUILD"
          subtitle="WITH HYDRA?"
          path={arrowRightLargeIcon}
        />
      </div>
      <div className="grid grid-cols-12 mt-28 gap-3 max-sm:gap-0 relative">
        <div className="col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-10 max-sm:col-start-2">
          <GridColThree title="SIMULATION" path={service1}>
            <p className="text-sm text-white font-normal">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
          </GridColThree>
        </div>
        <div className="col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:hidden">
          <GridColThree title="EDUCATION" path={service2}>
            <p className="text-sm text-white font-normal">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
          </GridColThree>
        </div>
        <div className="col-span-3 max-lg:col-span-4 max-md:hidden">
          <GridColThree title="SELF-CARE" path={service3}>
            <p className="text-sm text-white font-normal">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
          </GridColThree>
        </div>
        <div className="col-span-3 max-lg:hidden">
          <GridColThree title="OUTDOOR" path={service4}>
            <p className="text-sm text-white font-normal">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
          </GridColThree>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 hidden max-lg:block">
          <div className="bg-service-bg-icon bg-no-repeat bg-cover p-2">
            <img src={chevronLeftIcon} alt="heydra chevron left icon" />
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden max-lg:block">
          <div className="bg-service-bg-icon bg-no-repeat bg-cover p-2">
            <img src={chevronRightIcon} alt="heydra chevron right icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
