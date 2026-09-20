'use client';

import { Card } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(() => ({
  container: {
    '& .ant-card-body': {
      padding: 8,
    },
  },
}));

interface AppCardProps {
  children: React.ReactNode;
  className?: string;
}

const AppCard = ({ children, className }: AppCardProps) => {
  const { styles, cx } = useStyles();

  return <Card className={cx(styles.container, className)}>{children}</Card>;
};

export default AppCard;
