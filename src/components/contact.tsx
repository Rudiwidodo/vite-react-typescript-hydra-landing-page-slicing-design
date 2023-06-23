// static images
import leftIcon from '../assets/icons/chevron-circle-left.png';
import rightIcon from '../assets/icons/chevron-circle-right.png';
// data
import { ContactData } from '../data/contact-data';
// react
import { useState } from 'react';
// components
import ContactCard from './contact-card';
import Carousel from './carousel';

function CarouselItems() {
  return (
    <>
      {ContactData.map((val) => {
        return (
          <div key={val.id} className={`w-full max-lg:flex-none`}>
            <ContactCard path={val.path} alt={val.alt}>
              <p className="text-sm font-normal text-white sm:text-2xl sm:font-bold">
                {val.title} <br />
                <small className="text-xs font-normal">{val.subtitle}</small>
              </p>
            </ContactCard>
          </div>
        );
      })}
    </>
  );
}

export default function Contact() {
  const [items, setItems] = useState(0);

  const prev = (item: number) => {
    setItems(item == 0 ? ContactData.length - 1 : item - 1);
  };

  const next = (item: number) => {
    setItems(item == ContactData.length - 1 ? 0 : item + 1);
  };

  return (
    <section className="mt-12" id="contact">
      <div className="px-9 py-6 rounded-full bg-gradient-to-r from-radial-two via-radial-one to-radial-two relative overflow-hidden">
        <Carousel>
          <div
            className="flex items-center justify-between divide-x transition duration-500 ease-in max-lg:divide-x-0"
            style={{ transform: `translateX(-${items * 100}%)` }}
          >
            <CarouselItems />
          </div>
        </Carousel>

        {/* button slider icon */}
        <div className="absolute top-2/4 -translate-y-1/2 left-3 lg:hidden">
          <button onClick={() => prev(items)}>
            <img src={leftIcon} alt="heydra small circle left icon" />
          </button>
        </div>
        <div className="absolute top-2/4 -translate-y-1/2 right-3 lg:hidden">
          <button onClick={() => next(items)}>
            <img src={rightIcon} alt="heydra small circle right icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
