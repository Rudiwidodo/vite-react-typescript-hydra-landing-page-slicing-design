import locationIcon from '../assets/icons/Location-Icon.png';
import phoneIcon from '../assets/icons/phone-call.png';
import mailIcon from '../assets/icons/mail.png';

export default interface IContactData {
  id: number;
  path: string;
  alt: string;
  title: string;
  subtitle: string;
}
export const ContactData: IContactData[] = [
  {
    id: 1,
    path: locationIcon,
    alt: 'hydra contact location icon',
    title: 'Pay Us a Visit',
    subtitle: 'Union St, Seattle, WA 98101, United States',
  },
  {
    id: 2,
    path: phoneIcon,
    alt: 'hydra contact phone icon',
    title: 'Give Us a Call',
    subtitle: '(110) 1111-1010',
  },
  {
    id: 3,
    path: mailIcon,
    alt: 'hydra contact mail icon',
    title: 'Send Us a Message',
    subtitle: 'Contact@HydraVTech.com',
  },
];
