import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';
import service4 from '../assets/images/service-4.png';

interface IData {
  id: number;
  path: string;
  title: string;
  content: string;
}

export const ServiceData: IData[] = [
  {
    id: 1,
    path: service1,
    title: 'SIMULATION',
    content:
      'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.',
  },
  {
    id: 2,
    path: service2,
    title: 'EDUCATION',
    content:
      'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.',
  },
  {
    id: 3,
    path: service3,
    title: 'SELF-CARE',
    content:
      'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.',
  },
  {
    id: 4,
    path: service4,
    title: 'OUTDOOR',
    content:
      'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.',
  },
];
