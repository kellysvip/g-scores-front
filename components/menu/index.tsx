import * as React from 'react';
import { List, Drawer, Divider, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import { MenuHolder } from './styled-components';
import { generateMenuItems } from '../helpers/generate-menu-items';

export default function MenuDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setState(open);
  };

  const menuListComponents: React.ReactNode[] = generateMenuItems(
    toggleDrawer,
  );

  return (
    <div>
      <React.Fragment key="left">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { width: '30%' },
          }}
        >
          <MenuHolder role="presentation">
            <Divider />
            <List>{menuListComponents}</List>
          </MenuHolder>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
