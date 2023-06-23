import arrowSmallRightIcon from '../assets/icons/arrow-small-right.png';

interface IData {
  id: number;
  path: string;
  process: string;
  title: string;
}

export const ProcessData: IData[] = [
  {
    id: 1,
    path: arrowSmallRightIcon,
    process: '01',
    title: '3D Conception & Design',
  },
  {
    id: 2,
    path: arrowSmallRightIcon,
    process: '02',
    title: 'Interaction Design',
  },
  {
    id: 3,
    path: arrowSmallRightIcon,
    process: '03',
    title: 'VR World User Testing',
  },
  {
    id: 4,
    path: arrowSmallRightIcon,
    process: '04',
    title: 'Hydra VR Deploy',
  },
];
