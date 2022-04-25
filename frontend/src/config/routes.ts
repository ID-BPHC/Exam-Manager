import {
  MeetingRoomOutlined as Room,
  AirlineSeatReclineNormalOutlined as Seat,
  AssignmentIndOutlined as Invigilation,
  ArticleOutlined as Report,
  EmailOutlined as Email,
  InfoOutlined as Info,
  FileUploadOutlined as UploadIcon,
} from '@mui/icons-material';

import { RoomAllocation } from '../pages/RoomAllocation';
import { SeatingArrangement } from '../pages/SeatingArrangement';
import { Upload } from '../pages/Upload';
import { InvigilatorAllotment } from '../pages/InvigilatorAllotment';
import { InvigilationReport } from '../pages/InvigilationReport';

import { Route } from '../types/Route';

const routes: Array<Route> = [
  {
    key: 'room-allotment',
    title: 'Room Allotment',
    description: 'Room Allotment',
    component: RoomAllocation,
    path: '/room-allotment',
    isEnabled: true,
    icon: Room,
    appendDivider: true,
  },
  {
    key: 'seating-arrangement',
    title: 'Seating Arrangement',
    description: 'Seating Arrangement',
    component: SeatingArrangement,
    path: '/seating-arrangement',
    isEnabled: true,
    icon: Seat,
    appendDivider: true,
  },
  {
    key: 'invigilation',
    title: 'Invigilation',
    description: 'Invigilation',
    component: InvigilatorAllotment,
    path: '/invigilation',
    isEnabled: true,
    icon: Invigilation,
    appendDivider: true,
  },
  {
    key: 'reports',
    title: 'Reports',
    description: 'Reports',
    component: InvigilationReport,
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
    key: 'upload',
    title: 'Upload',
    description: 'Upload Data',
    component: Upload,
    path: '/upload',
    isEnabled: true,
    icon: UploadIcon,
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
