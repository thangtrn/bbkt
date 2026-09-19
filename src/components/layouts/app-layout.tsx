"use client";

import React from "react";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <div>{children}</div>;
};

export default AppLayout;
