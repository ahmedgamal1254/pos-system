import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { FaBars } from 'react-icons/fa';
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
