import { CardItem, ReportCardItem } from '@/type/type'

export const dataList: CardItem[] = [
  {
    id: 1,
    name: 'Agus Hidayat',
    location: 'Yogyakarta, Indonesia',
    phone: '0909-909-9090',
    image: require('assets/images/clients/client-1.jpg'),
  },
  {
    id: 2,
    name: 'Siti Aisyah',
    location: 'Bandung, Indonesia',
    phone: '0812-3456-7890',
    image: require('assets/images/clients/client-2.jpg'),
  },
  {
    id: 3,
    name: 'Budi Santoso',
    location: 'Jakarta, Indonesia',
    phone: '0821-6789-1234',
    image: require('assets/images/clients/client-3.jpg'),
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    location: 'Surabaya, Indonesia',
    phone: '0856-7890-4567',
    image: require('assets/images/clients/client-4.jpg'),
  },
]

export const reportCardData: ReportCardItem[] = [
  {
    id: 1,
    image: require('assets/images/reports/report-1.png'),
    name: 'Agus Hidayat',
    phone: '+62 812-3456-7890',
    plot: 'Paddy Demo Plot B',
    variety: 'Paddy-IR64',
    location: 'Yogyakarta, Indonesia',
    dateTime: '10 December 2023 | 14:35',
    landSize: 1000,
  },
  {
    id: 2,
    image: require('assets/images/reports/report-2.png'),
    name: 'Budi Santoso',
    phone: '+62 813-9876-5432',
    plot: 'Paddy Trial Field A',
    variety: 'Paddy-IR42',
    location: 'Bandung, Indonesia',
    dateTime: '12 December 2023 | 09:15',
    landSize: 1500,
  },
  {
    id: 3,
    image: require('assets/images/reports/report-3.png'),
    name: 'Dewi Lestari',
    phone: '+62 819-2233-4455',
    plot: 'Organic Rice Test Plot',
    variety: 'Paddy-IR64',
    location: 'Semarang, Indonesia',
    dateTime: '15 December 2023 | 16:45',
    landSize: 2000,
  },
  {
    id: 4,
    image: require('assets/images/reports/report-4.png'),
    name: 'Rizky Putra',
    phone: '+62 811-9988-7766',
    plot: 'Hybrid Paddy Experiment',
    variety: 'Paddy-IR70',
    location: 'Jakarta, Indonesia',
    dateTime: '18 December 2023 | 11:30',
    landSize: 1800,
  },
]
