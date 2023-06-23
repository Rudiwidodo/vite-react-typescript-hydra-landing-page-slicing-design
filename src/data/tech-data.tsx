import tech1 from '../assets/images/Hydra-Tech1 1.png';
import tech2 from '../assets/images/Hydra-Tech2 1.png';
import tech3 from '../assets/images/Hydra-Tech3 1.png';
import tech4 from '../assets/images/Hydra-Tech4 1.png';

interface IData {
  id: number;
  path: string;
  alt: string;
}

export const TechData: IData[] = [
  {
    id: 1,
    path: tech1,
    alt: 'hydra technologi 1',
  },
  {
    id: 2,
    path: tech2,
    alt: 'hydra technologi 2',
  },
  {
    id: 3,
    path: tech3,
    alt: 'hydra technologi 3',
  },
  {
    id: 4,
    path: tech4,
    alt: 'hydra technologi 4',
  },
];
