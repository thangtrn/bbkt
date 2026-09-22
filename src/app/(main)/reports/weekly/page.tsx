'use client';

import AppDataGrid from '@/components/data-grid/app-data-grid';
import { AppColumnOrColumnGroup } from '@/components/data-grid/app-data-grid.type';
import { RowNumberColumn } from '@/components/data-grid/colums';
import AppCard from '@/components/ui/app-card';
import { StatisticCard } from '@/components/ui/statistic-card';
import { Button, DatePicker, Flex } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { CiBoxes } from 'react-icons/ci';
import {
  HiOutlineClipboardDocument,
  HiOutlineClipboardDocumentList,
} from 'react-icons/hi2';
import { LuClipboardCheck } from 'react-icons/lu';

const { RangePicker } = DatePicker;

export interface Row {
  id: string;

  // Công tác kiểm tra
  tuNgay: Date;
  denNgay: Date;
  tuan: string;

  bienBan: number;
  dinhKy: number;
  dotXuat: number;
  nhom1: number;
  nhom2: number;
  huongDan: number;
  soHoa: number;
}

interface SummaryRow {
  tongBienBan: number;
  tongDinhKy: number;
  tongDotXuat: number;
  tongNhom1: number;
  tongNhom2: number;
  tongHuongDan: number;
  tongSoHoa: number;
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
    tuan: '1',
    bienBan: 25,
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
    tuan: '2',
    bienBan: 32,
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
    tuan: '3',
    bienBan: 28,
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
    tuan: '4',
    bienBan: 35,
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
    tuan: '5',
    bienBan: 30,
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
    tuan: '6',
    bienBan: 27,
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
    tuan: '7',
    bienBan: 40,
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
    tuan: '8',
    bienBan: 34,
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
    tuan: '9',
    bienBan: 29,
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
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '11',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '12',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '13',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '14',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '15',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '16',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '17',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '18',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '19',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '20',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '21',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '22',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '23',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '24',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },

  {
    id: '25',
    tuNgay: new Date('2026-11-03'),
    denNgay: new Date('2026-11-09'),
    tuan: '10',
    bienBan: 38,
    dinhKy: 24,
    dotXuat: 14,
    nhom1: 12,
    nhom2: 12,
    huongDan: 10,
    soHoa: 34,
  },
];

const mockSummaryRows: SummaryRow[] = [
  {
    tongBienBan: 2747,
    tongDinhKy: 2716,
    tongDotXuat: 31,
    tongNhom1: 1588,
    tongNhom2: 1159,
    tongHuongDan: 10611,
    tongSoHoa: 2710,
  },
];

const statistics = [
  {
    title: 'Tổng đơn hàng',
    value: 379,
    icon: <CiBoxes size={28} color="#0970B8" />,
  },
  {
    title: 'Đơn đã thực hiện',
    value: 165,
    icon: <LuClipboardCheck size={28} color="#0970B8" />,
  },
  {
    title: 'Đơn đang thực hiện',
    value: 175,
    icon: <HiOutlineClipboardDocumentList size={28} color="#0970B8" />,
  },
  {
    title: 'Đơn chưa thực hiện',
    value: 39,
    icon: <HiOutlineClipboardDocument size={28} color="#0970B8" />,
  },
];

/**
 * =========================
 * COLUMNS
 * =========================
 */
const columns: readonly AppColumnOrColumnGroup<Row, SummaryRow>[] = [
  RowNumberColumn,
  {
    key: 'tuNgay',
    name: 'Từ ngày',
    frozen: true,
    renderCell: ({ row }) => dayjs(row.tuNgay).format('DD/MM/YYYY'),
  },

  {
    key: 'denNgay',
    name: 'đến ngày',
    frozen: true,
    renderCell: ({ row }) => dayjs(row.denNgay).format('DD/MM/YYYY'),
  },

  {
    key: 'tuan',
    name: 'Tuần',
    frozen: true,
  },

  {
    name: 'Công tác kiểm tra',
    children: [
      {
        key: 'bienBan',
        name: 'Tổng biên bản',
        renderSummaryCell({ row }) {
          return row.tongBienBan;
        },
      },

      {
        key: 'dinhKy',
        name: 'Định kỳ',
        renderSummaryCell({ row }) {
          return row.tongDinhKy;
        },
      },

      {
        key: 'dotXuat',
        name: 'Đột xuất',
        renderSummaryCell({ row }) {
          return row.tongDotXuat;
        },
      },

      {
        key: 'nhom1',
        name: 'nhóm 1',
        renderSummaryCell({ row }) {
          return row.tongNhom1;
        },
      },

      {
        key: 'nhom2',
        name: 'nhóm 2',
        renderSummaryCell({ row }) {
          return row.tongNhom2;
        },
      },

      {
        key: 'huongDan',
        name: 'Hướng dẫn',
        renderSummaryCell({ row }) {
          return row.tongHuongDan;
        },
      },

      {
        key: 'soHoa',
        name: 'Số Hóa',
        renderSummaryCell({ row }) {
          return row.tongSoHoa;
        },
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
  const [selectedRows, setSelectedRows] = useState(
    (): ReadonlySet<string> => new Set(),
  );

  return (
    <Flex gap={12} align="flex-start">
      {/* FILTER */}
      <AppCard width={320}>
        <Flex gap={6} wrap>
          <RangePicker
            placeholder={['bắt đầu', 'kết thúc']}
            format="DD-MM-YYYY"
            presets={[
              {
                label: 'Hôm nay',
                value: [dayjs(), dayjs()],
              },
              {
                label: 'này',
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

      <Flex orientation="vertical" gap={12} flex={1}>
        <Flex gap={12}>
          {statistics.map((item) => (
            <StatisticCard
              key={item.title}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </Flex>

        {/* DATA GRID */}
        <AppDataGrid
          style={{
            height: 555,
          }}
          rowKeyGetter={(row) => row.id}
          columns={columns}
          rows={mockRows}
          topSummaryRows={mockSummaryRows}
          selectedRows={selectedRows}
          onSelectedRowsChange={setSelectedRows}
          defaultColumnOptions={{ textAlign: 'center' }}
        />
      </Flex>
    </Flex>
  );
};

export default WeeklyReportPage;
