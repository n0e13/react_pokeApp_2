import React, {useState} from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
  const [value, setValue] = useState(0);

  return (
    <nav>
      <Box>
        <BottomNavigation
          sx={{ width: 'auto' }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to='/' ><BottomNavigationAction icon={<HomeIcon />} /></Link>
          <Link to='/new' ><BottomNavigationAction icon={<AddCircleOutlineIcon />} /></Link>
          <Link to='/search' ><BottomNavigationAction icon={<ManageSearchIcon />} /></Link>
        </BottomNavigation>
      </Box>
    </nav>
  );
};

export default NavBar;
