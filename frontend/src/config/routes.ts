import {
  Home as HomeIcon,
  CodeOutlined as CodeIcon,
  MeetingRoomOutlined as Room,
  AirlineSeatReclineNormalOutlined as Seat,
  AssignmentIndOutlined as Invigilation,
  ArticleOutlined as Report,
  EmailOutlined as Email,
  InfoOutlined as Info,
} from '@mui/icons-material';

import { RoomAllocation } from '../pages/RoomAllocation';

import { Route } from '../types/Route';

const routes: Array<Route> = [
  {
    key: 'room-allotment',
    title: 'Room Allotment',
    description: 'Room Allotment',
    component: RoomAllocation,
    path: '/',
    isEnabled: true,
    icon: Room,
    appendDivider: true,
  },
  {
    key: 'seating-arrangement',
    title: 'Seating Arrangement',
    description: 'Seating Arrangement',
    path: '/seating-arrangement',
    isEnabled: true,
    icon: Seat,
    appendDivider: true,
  },
  {
    key: 'invigilation',
    title: 'Invigilation',
    description: 'Invigilation',
    path: '/invigilation',
    isEnabled: true,
    icon: Invigilation,
    appendDivider: true,
  },
  {
    key: 'reports',
    title: 'Reports',
    description: 'Reports',
    path: '/reports',
    isEnabled: true,
    icon: Report,
    appendDivider: true,
  },
  {
    key: 'mailer',
    title: 'Mailer',
    description: 'Mailer',
    path: '/mailer',
    isEnabled: true,
    icon: Email,
    appendDivider: true,
  },
  {
    key: 'about',
    title: 'About',
    description: 'About',
    path: '/about',
    isEnabled: true,
    icon: Info,
    appendDivider: true,
  },
];

export default routes;
