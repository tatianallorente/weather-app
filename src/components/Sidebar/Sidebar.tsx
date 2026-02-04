import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ChartSpline, CloudSunRain, Map, Settings2 } from 'lucide-react';
import { NavLink } from 'react-router';
import { DRAWER_WIDTH, NAVBAR_HEIGTH } from '@/common/constants';
import { SvgIcon } from '@/common/types';

interface SidebarItemProps {
  id: string;
  label: string;
  Icon: SvgIcon;
  pathname: string;
}

const sidebarItems = [
  { id: 'home', label: 'Home', Icon: CloudSunRain, pathname: '/' },
  { id: 'map', label: 'Map', Icon: Map, pathname: '/map' },
  { id: 'charts', label: 'Charts', Icon: ChartSpline, pathname: '/chart' },
  { id: 'settings', label: 'Settings', Icon: Settings2, pathname: '/settings' },
] as SidebarItemProps[];

export function Sidebar() {
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      slotProps={{
        paper: {
          sx: {
            width: DRAWER_WIDTH,
            paddingTop: NAVBAR_HEIGTH,
          },
        },
      }}
    >
      <List className="pt-0!">
        {sidebarItems.map(({ id, label, Icon, pathname }) => (
          <ListItem key={id} component={NavLink} to={pathname} disablePadding>
            <ListItemButton className="gap-2">
              <Icon className="size-5 shrink-0" />
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
