'use client';

import AppCard from '@/components/ui/card';
import { Button, Flex } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;

const WeeklyReportPage = () => {
  return (
    <Flex orientation="vertical" gap={10}>
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
      <AppCard>123</AppCard>
    </Flex>
  );
};

export default WeeklyReportPage;
