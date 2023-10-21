import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from '@mui/material/Divider';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import QuizIcon from '@mui/icons-material/Quiz';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Logo from '../../Assert/Layer_1.png';

function SideBar() {
  const menuItems = [
    {
      id: 1,
      name: 'Dashboard',
      link: '/Dashboard',
      iconActive: DashboardIcon,
      iconInactive: DashboardIcon,
    },
    {
      id: 2,
      name: 'Client List',
      link: '/Clientlisttable ',
      iconActive: ReceiptLongIcon,
      iconInactive: ReceiptLongIcon,
    },
    {
      id: 3,
      name: 'Test Master',
      link: '/Testmastertable',
      iconActive: FactCheckIcon,
      iconInactive: FactCheckIcon,
    },
    {
      id: 4,
      name: 'Test Tips',
      link: '/Testtipstable',
      iconActive: QuizIcon,
      iconInactive: QuizIcon,
    },
    {
      id: 5,
      name: 'Roles and Permission',
      link: '/Roles',
      iconActive: AdminPanelSettingsIcon,
      iconInactive: AdminPanelSettingsIcon,
    },
    {
      id: 6,
      name: 'User Management',
      link: '/User',
      iconActive: ManageAccountsIcon,
      iconInactive: ManageAccountsIcon,
    },
  ];

  const [selectMenu, setSelectMenu] = useState(1);
  const [selectSubMenu, setselectsubmenu] = useState(null);
  const { drawerWidth } = 0;

  const handleSubMenuClick = (id) => {
    setselectsubmenu(id);
  };

  const handleclicked = (id) => {
    setSelectMenu(id);
  };

  return (
    <Drawer
      className="menus admin-sidenav"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "transparent",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List className="dashb-logo">
        <Link to="/" target="_blank">
          <img style={{ width: "180px" }} src={Logo}></img>
        </Link>
      </List>
      <Divider />

      <List className="sidemenu-list navbar-list">
        {menuItems.map((item, key) => (
          <div key={key}>
            <ListItem
              // disabled={item.id==5}
              disablePadding


            >
              <Link
                to={item.link}
                onClick={() => handleclicked(item.id)}
                active="true"
                style={{
                  borderRight:
                    selectMenu === item.id ? "7px solid #08a7b7" : null,
                  color:
                    selectMenu === item.id ? "#5bcdf947" : "#005D85",
                  backgroundColor:
                    selectMenu === item.id && "rgb(91 205 249 / 28%)",
                  display: "block",
                  textDecoration: "none",
                  width: "100%"
                }}
              >
                <ListItemButton className="sidemenus">
                  <ListItemIcon className="sidebar-icon">
                    {selectMenu === item.id ? (
                      <item.iconActive />
                    ) : (
                      <item.iconInactive />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    className="side-list"
                    style={{
                      color: selectMenu !== item.id ? "#121212" : "#10C0E7",
                    }}
                    primary={item.name}
                    selected={item.link === window.location.href}
                  />
                </ListItemButton>
              </Link>
              {item.subItems && selectMenu === item.id && (
                <List className="sub-items">
                  {item.subItems.map((subItem, index) => (
                    <Link
                      to={subItem.link}
                      key={subItem.id}
                      onClick={() => handleSubMenuClick(subItem.id)}
                    >
                      <ListItem
                        className="sub-item"
                        button
                        selected={subItem.link === window.location.href}
                        style={{
                          backgroundColor: "#eaebeb",
                        }}
                      >
                        <ListItemIcon>
                          {selectMenu === item.id ? (
                            <subItem.iconActive />
                          ) : (
                            <subItem.iconInactive />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.name}
                          style={{
                            color: selectSubMenu == subItem.id ? "#1a93cd" : "#000000",
                          }}
                        />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              )}
            </ListItem>
          </div>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;