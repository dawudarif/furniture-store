import purchaseSecurely from '../../assets/purchase-securely.jpg';
import warehouse from '../../assets/warehouse.svg';
import room from '../../assets/room.svg';

export const HowItWorksData: Array<{
  id: number;
  img: string;
  title: string;
  desc: string;
}> = [
  {
    id: 1,
    img: purchaseSecurely,
    title: 'Purchase Securely',
    desc: 'Safe and easy online shopping experience.',
  },
  {
    id: 2,
    img: warehouse,
    title: 'Ships From Warehouse',
    desc: 'Efficient shipping from our reliable warehouse.',
  },
  {
    id: 3,
    img: room,
    title: 'Style Your Room',
    desc: 'Transform your space with our stylish furniture.',
  },
];
