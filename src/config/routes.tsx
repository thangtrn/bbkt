import type { ReactNode } from 'react';
import { AiOutlineHome, AiOutlineBarChart } from 'react-icons/ai';

export type RouteItem = {
  id: string;
  label: string;
  url: string;
  icon?: ReactNode;
  children?: readonly RouteItem[];
};

export const ROUTES = [
  {
    id: 'home',
    label: 'Trang chủ',
    url: '/',
    icon: <AiOutlineHome size={18} />,
  },
  {
    id: 'report',
    label: 'Báo cáo',
    url: '/reports',
    icon: <AiOutlineBarChart size={18} />,
    children: [
      {
        id: 'weekly-report',
        label: 'Báo cáo tuần',
        url: '/weekly-report',
      },
      {
        id: 'monthly-report',
        label: 'Báo cáo tháng',
        url: '/monthly-report',
      },
      {
        id: 'quarterly-report',
        label: 'Báo cáo quý',
        url: '/quarterly-report',
      },
      {
        id: 'yearly-report',
        label: 'Báo cáo năm',
        url: '/yearly-report',
      },
    ],
  },
] satisfies readonly RouteItem[];
