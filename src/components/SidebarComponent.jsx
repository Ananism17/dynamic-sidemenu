// REACT
import React from "react";

// Sidebar Import
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import data from "../data";

// Process data array
function buildTree(data, parent_id = null) {
  const tree = [];

  for (const item of data) {
    if (item.parent_id === parent_id) {
      const children = buildTree(data, item.id);
      if (children.length > 0) {
        item.children = children;
      }
      tree.push(item);
    }
  }

  return tree;
}

// Generate items for sidebar
function generateMenuItems(nodes) {
  return nodes.map((node) => {
    const hasChildren = node.children && node.children.length > 0;

    if (hasChildren) {
      return (
        <SubMenu key={node.id} icon={<HomeOutlinedIcon />} label={node.name}>
          {generateMenuItems(node.children)}
        </SubMenu>
      );
    } else {
      return (
        <MenuItem key={node.id} icon={<PeopleOutlinedIcon />}>
          {node.name}
        </MenuItem>
      );
    }
  });
}

const SidebarComponent = () => {
  // Data Process
  const treeData = buildTree(data);

  // Sidebar Variables
  const { collapseSidebar, toggleSidebar, toggled, broken } = useProSidebar();

  // Sidebar Toggle
  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      collapseSidebar();
    } else {
      collapseSidebar();
    }
  };

  console.log(toggled, broken);

  return (
    <>
      <Sidebar
        breakPoint="md"
        transitionDuration={400}
        backgroundColor="white"
        rtl={false}
        style={{ height: "100vh" }}
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              toggle();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>

          {generateMenuItems(treeData)}
        </Menu>
      </Sidebar>
      {broken && (
        <button onClick={toggle} style={{ float: "right", margin: "15px" }}>
          <MenuOutlinedIcon />
        </button>
      )}
    </>
  );
};

export default SidebarComponent;
