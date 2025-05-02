import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FaBars, FaHamburger } from 'react-icons/fa';
import Sidebar from './Sidebar';
import SidebarMob from './SidebarMob';


export default function SiderBarMobile() {
  const [siderbar, setSidebar] = React.useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setSidebar(open);
    };

  return (
    <div>
        <Button onClick={toggleDrawer(true)}><FaBars className='text-white text-xl -ml-10' /></Button>
        <Drawer
        anchor='right'
        dir='rtl'
        open={siderbar}
        onClose={toggleDrawer(false)}
        >
            <SidebarMob />
        </Drawer>
    </div>
  );
}
