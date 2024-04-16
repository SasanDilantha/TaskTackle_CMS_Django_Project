import {
  IconAperture, IconCarCrane, IconCarCrash, IconCopy, IconCubeSend, IconHomeQuestion, IconLayoutDashboard, IconLogin, IconMenuOrder, IconMessage, IconMessageChatbot, IconMessageShare, IconMoodHappy, IconQuestionCircle, IconQuote, IconTruck, IconTypography, IconUserPlus,
  IconUsers
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Services',
  },
  {
    id: uniqueId(),
    title: 'Users Details',
    icon: IconUsers,
    href: '/service/users',
  },
  {
    id: uniqueId(),
    title: 'Add Users',
    icon: IconUserPlus,
    href: '/service/add',
  },
  {
    navlabel: true,
    subheader: 'Order',
  },
  {
    id: uniqueId(),
    title: 'Orders',
    icon: IconCubeSend,
    href: '/ord/order',
  },
  {
    id: uniqueId(),
    title: 'Order Tracking',
    icon: IconTruck,
    href: '/ord/track',
  },
  {
    navlabel: true,
    subheader: 'Customer request',
  },
  {
    id: uniqueId(),
    title: 'Customer Request',
    icon: IconHomeQuestion,
    href: '/rq/request',
  },
  {
    navlabel: true,
    subheader: 'Engaging',
  },
  {
    id: uniqueId(),
    title: 'Message',
    icon: IconMessageChatbot,
    href: '/eng/msg',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Typography',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Shadow',
    icon: IconCopy,
    href: '/ui/shadow',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    icon: IconMoodHappy,
    href: '/icons',
  },
];

export default Menuitems;
