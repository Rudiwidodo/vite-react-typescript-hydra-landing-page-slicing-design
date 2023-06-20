import locationIcon from '../assets/icons/Location-Icon.png';
import phoneIcon from '../assets/icons/phone-call.png';
import mailIcon from '../assets/icons/mail.png';
import leftIcon from '../assets/icons/chevron-circle-left.png';
import rightIcon from '../assets/icons/chevron-circle-right.png';
import ContactChild from './contact-child';

export default function Contact() {
  return (
    <section className="mt-12">
      <div className="px-9 py-6 rounded-full bg-gradient-to-r from-radial-two via-radial-one to-radial-two relative">
        <div className="absolute top-2/4 -translate-y-1/2 left-3 lg:hidden">
          <button>
            <img src={leftIcon} alt="heydra small circle left icon" />
          </button>
        </div>
        <div className="grid max-sm:columns-1 sm:columns-2 md:columns-3 divide-x divide-slate-600 gap-4">
          <div className="col-start-1">
            <ContactChild path={locationIcon} alt={'location icon'}>
              Pay Us a Visit <br />
              <small className="text-xs font-normal">
                Union St, Seattle, WA 98101, United States
              </small>
            </ContactChild>
          </div>
          <div className="col-start-2 max-md:hidden">
            <ContactChild path={phoneIcon} alt={'location icon'}>
              Give Us a Call <br />
              <small className="text-xs font-normal">(110) 1111-1010</small>
            </ContactChild>
          </div>
          <div className="col-start-3 max-lg:hidden lg:block">
            <ContactChild path={mailIcon} alt={'location icon'}>
              Send Us a Message <br />
              <small className="text-xs font-normal">
                Contact@HydraVTech.com
              </small>
            </ContactChild>
          </div>
        </div>
        <div className="absolute top-2/4 -translate-y-1/2 right-3 lg:hidden">
          <button>
            <img src={rightIcon} alt="heydra small circle right icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
