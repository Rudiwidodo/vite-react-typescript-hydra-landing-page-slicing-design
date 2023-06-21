// static images
import arrowRightLargeIcon from '../assets/icons/arrow-right-large.png';
import aboutImage from '../assets/images/about-image.png';
import vector7 from '../assets/images/Vector 7.png';
import vector8 from '../assets/images/Vector 8.png';

// components
import SectionHeader from './section-header';
import AboutContent from './about-content';

export default function About() {
  return (
    <section className="mt-[90px] max-sm:mt-14">
      <div className="grid grid-cols-12 gap-14 relative max-md:gap-x-0 max-sm:gap-y-12">
        <SectionHeader
          title="INTRODUCTION"
          subtitle="TO HYDRA VR"
          path={arrowRightLargeIcon}
        />
        <AboutContent
          title="ABOUT"
          subtitle="HYDRA VR"
          path1={aboutImage}
          path2={vector7}
          path3={vector8}
        />
      </div>
    </section>
  );
}
