'use client';

import React, { useMemo } from 'react';
import { Avatar, Breadcrumb, Flex, Layout, Space, Typography } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { LogoutOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Text } = Typography;

const userData = {
  profileImage:
    'https://i.pinimg.com/736x/9d/44/e8/9d44e8cea3432c943a11c88ce9cd28ca.jpg',
  firstName: 'Thắng',
  lastName: 'Trần',
  emailId: 'thangtrn01@gmail.com',
};

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const settingItems = useMemo(
    (): MenuProps['items'] => [
      {
        key: 'profile',
        icon: <UsergroupDeleteOutlined />,
        label: <Link href="/account/settings">Xem hồ sơ</Link>,
      },
      {
        type: 'divider' as const,
      },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'Đăng xuất',
        danger: true,
      },
    ],
    [],
  );

  return (
    <Layout className="app-layout">
      <Header>
        <Link href={'/'} className="app-logo">
          <Image
            src="/images/pccc-logo.png"
            alt="app logo"
            width={180}
            height={180}
            loading="eager"
          />
          <Text style={{ fontSize: 20 }} strong>
            PCCC&CNCH
          </Text>
        </Link>

        <Dropdown
          styles={{ root: { width: 200 } }}
          arrow
          menu={{
            items: settingItems,
          }}
          trigger={['click']}
        >
          <Flex align="center" gap={6}>
            <Avatar size={40} src={userData.profileImage} />
            <Flex orientation="vertical" gap={4}>
              <Text strong style={{ lineHeight: 1 }}>
                {userData.firstName} {userData.lastName}
              </Text>
              <Text type="secondary" style={{ fontSize: 12, lineHeight: 1 }}>
                {userData.emailId}
              </Text>
            </Flex>
          </Flex>
        </Dropdown>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <div
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default AppLayout;
