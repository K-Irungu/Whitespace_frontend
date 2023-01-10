import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Tasks" />
    </ListItemButton>
  </React.Fragment>
);

export const mainListItems2 = (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItemButton>
    </React.Fragment>
  );

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Students" />
    </ListItemButton>

  </React.Fragment>
);


export const secondaryListItems2 = (
    <React.Fragment>
      {/* <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader> */}
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Supervisor" />
      </ListItemButton>
  
    </React.Fragment>
  );

export const avatar = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>
                Supervisor 1
            </ListItemText>
        </ListItemButton>

    </React.Fragment>
)

export const avatar2 = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>
                Student 1
            </ListItemText>
        </ListItemButton>

    </React.Fragment>

)