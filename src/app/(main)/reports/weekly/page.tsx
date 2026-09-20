'use client';

import AppDataGrid from '@/components/data-grid/app-data-grid';
import { AppColumnOrColumnGroup } from '@/components/data-grid/app-data-grid.type';
import { RowNumberColumn } from '@/components/data-grid/colums';
import AppCard from '@/components/ui/app-card';
import { Button, DatePicker, Flex } from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

export interface Row {
  id: string;

  // Công tác kiểm tra
  tuNgay: Date;
  denNgay: Date;
  tuan: string;

  tongBienBan: number;
  dinhKy: number;
  dotXuat: number;
  nhom1: number;
  nhom2: number;
  huongDan: number;
  soHoa: number;
}

/**
 * =========================
 * MOCK DATA
 * =========================
 */
const mockRows: Row[] = [
  {
    id: '1',
    tuNgay: new Date('2026-09-01'),
    denNgay: new Date('2026-09-07'),
    tuan: 'Tuần 1',
    tongBienBan: 25,
    dinhKy: 15,
    dotXuat: 10,
    nhom1: 8,
    nhom2: 7,
    huongDan: 6,
    soHoa: 20,
  },
  {
    id: '2',
    tuNgay: new Date('2026-09-08'),
    denNgay: new Date('2026-09-14'),
    tuan: 'Tuần 2',
    tongBienBan: 32,
    dinhKy: 20,
    dotXuat: 12,
    nhom1: 10,
    nhom2: 10,
    huongDan: 8,
    soHoa: 28,
  },
  {
    id: '3',
    tuNgay: new Date('2026-09-15'),
    denNgay: new Date('2026-09-21'),
    tuan: 'Tuần 3',
    tongBienBan: 28,
    dinhKy: 18,
    dotXuat: 10,
    nhom1: 9,
    nhom2: 9,
    huongDan: 7,
    soHoa: 24,
  },
  {
    id: '4',
    tuNgay: new Date('2026-09-22'),
    denNgay: new Date('2026-09-28'),
    tuan: 'Tuần 4',
    tongBienBan: 35,
    dinhKy: 22,
    dotXuat: 13,
    nhom1: 11,
    nhom2: 11,
    huongDan: 9,
    soHoa: 31,
  },
  {
    id: '5',
    tuNgay: new Date('2026-09-29'),
    denNgay: new Date('2026-10-05'),
    tuan: 'Tuần 5',
    tongBienBan: 30,
    dinhKy: 19,
    dotXuat: 11,
    nhom1: 10,
    nhom2: 9,
    huongDan: 8,
    soHoa: 26,
  },
  {
    id: '6',
    tuNgay: new Date('2026-10-06'),
    denNgay: new Date('2026-10-12'),
    tuan: 'Tuần 6',
    tongBienBan: 27,
    dinhKy: 17,
    dotXuat: 10,
    nhom1: 8,
    nhom2: 9,
    huongDan: 6,
    soHoa: 23,
  },
  {
    id: '7',
    tuNgay: new Date('2026-10-13'),
    denNgay: new Date('2026-10-19'),
    tuan: 'Tuần 7',
    tongBienBan: 40,
    dinhKy: 25,
    dotXuat: 15,
    nhom1: 13,
    nhom2: 12,
    huongDan: 10,
    soHoa: 36,
  },
  {
    id: '8',
    tuNgay: new Date('2026-10-20'),
    denNgay: new Date('2026-10-26'),
    tuan: 'Tuần 8',
    tongBienBan: 34,
    dinhKy: 21,
    dotXuat: 13,
    nhom1: 11,
    nhom2: 10,
    huongDan: 9,
    soHoa: 29,
  },
  {
    id: '9',
    tuNgay: new Date('2026-10-27'),
    denNgay: new Date('2026-11-02'),
    tuan: 'Tuần 9',
    tongBienBan: 29,
    dinhKy: 18,
    dotXuat: 11,
    nhom1: 9,
    nhom2: 8,
    huongDan: 7,
    soHoa: 25,
  },
  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '10',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: 'Tuần 10',
    tongBienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },
];

/**
 * =========================
 * COLUMNS
 * =========================
 */
const columns: readonly AppColumnOrColumnGroup<Row>[] = [
  RowNumberColumn,
  {
    key: 'tuNgay',
    name: 'Từ ngày',
    renderCell: ({ row }) => dayjs(row.tuNgay).format('DD/MM/YYYY'),
  },

  {
    key: 'denNgay',
    name: 'đến ngày',
    renderCell: ({ row }) => dayjs(row.denNgay).format('DD/MM/YYYY'),
  },

  {
    key: 'tuan',
    name: 'Tuần',
  },

  {
    name: 'Công tác kiểm tra',
    children: [
      {
        key: 'tongBienBan',
        name: 'Tổng biên bản',
      },

      {
        key: 'dinhKy',
        name: 'Định kỳ',
      },

      {
        key: 'dotXuat',
        name: 'Đột xuất',
      },

      {
        key: 'nhom1',
        name: 'nhóm 1',
      },

      {
        key: 'nhom2',
        name: 'nhóm 2',
      },

      {
        key: 'huongDan',
        name: 'Hướng dẫn',
      },

      {
        key: 'soHoa',
        name: 'Số Hóa',
      },
    ],
  },
];

/**
 * =========================
 * PAGE
 * =========================
 */
const WeeklyReportPage = () => {
  return (
    <Flex vertical gap={10}>
      {/* FILTER */}
      <AppCard>
        <Flex gap={6} wrap>
          <RangePicker
            placeholder={['Tuần bắt đầu', 'Tuần kết thúc']}
            format="DD-MM-YYYY"
            presets={[
              {
                label: 'Hôm nay',
                value: [dayjs(), dayjs()],
              },
              {
                label: 'Tuần này',
                value: [dayjs().startOf('week'), dayjs()],
              },
              {
                label: 'Tháng này',
                value: [dayjs().startOf('month'), dayjs()],
              },
              {
                label: '7 ngày trước',
                value: [dayjs().subtract(6, 'day'), dayjs()],
              },
              {
                label: '30 ngày trước',
                value: [dayjs().subtract(29, 'day'), dayjs()],
              },
            ]}
            defaultPickerValue={[
              dayjs().startOf('month'),
              dayjs().add(1, 'month').startOf('month'),
            ]}
          />

          <Button>Xóa lọc</Button>
        </Flex>
      </AppCard>

      {/* DATA GRID */}
      <AppDataGrid
        gridType="fill"
        columns={columns}
        rows={mockRows}
        defaultColumnOptions={{ textAlign: 'center' }}
      />
    </Flex>
  );
};

export default WeeklyReportPage;
