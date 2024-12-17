import type { Meta, StoryObj } from "@storybook/react";
// import { expect, userEvent, within } from '@storybook/test';

import AdminLayout from "@/components/layouts/admin";
import { DropdownGroupProps } from "@/components/types/dropdown-menu-props";
import { SidebarMenuItemProps } from "@/components/types/sidebar-menu-item-props";
import { SidebarUserProps } from "@/components/types/sidebar-user-props";
import { SidebarLogo } from "@/components/widgets/sidebar-logo";
import { SidebarUser } from "@/components/widgets/sidebar-user";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

const meta: Meta<typeof AdminLayout> = {
  title: "Sidebar",
  component: AdminLayout,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    sidebarProps: {
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof AdminLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: SidebarMenuItemProps[] = [
  {
    type: "item",
    label: "Home",
    url: "#",
    description: "Get To Home",
    icon: Home,
  },
  {
    type: "item",
    label: "Inbox",
    url: "#",
    description: "Get To Home",
    icon: Inbox,
  },
  {
    type: "item",
    label: "Calendar",
    url: "#",
    description: "Get To Home",
    icon: Calendar,
  },
  {
    type: "item",
    label: "Search",
    url: "#",
    description: "Get To Home",
    icon: Search,
  },
  {
    type: "item",
    label: "Settings",
    url: "#",
    description: "Get To Home",
    icon: Settings,
  },
];

const userActions: DropdownGroupProps[] = [
  {
    type: "item",
  },
];

export const Default: Story = {
  args: {
    sidebarProps: {
      header: <span>header</span>,
      footer: <span>footer</span>,
      menu: [
        {
          label: "Application",
          items: items,
          isCollapsible: true,
        },
      ],
    },
  },
};

const user: SidebarUserProps = {
  name: "Doofus",
  email: "test@example.com",
};

export const Standard: Story = {
  args: {
    sidebarProps: {
      header: <SidebarLogo name="ACME Corp." />,
      footer: <SidebarUser {...user} />,
      menu: [
        {
          label: "Application",
          items: items,
          isCollapsible: true,
        },
      ],
      collapsible: "icon",
    },
  },
};