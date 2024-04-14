import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  EyeOutlined,
  SolutionOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Menu mode="horizontal" theme="dark" className="custom-navbar">
        <Menu.Item key="logo" className="logo" disabled>
          Company Logo
        </Menu.Item>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="find-jobs" icon={<SearchOutlined />}>
          Find Jobs
        </Menu.Item>
        <Menu.Item key="browse" icon={<EyeOutlined />}>
          Browse
        </Menu.Item>
        <Menu.Item key="success-stories" icon={<SolutionOutlined />}>
          Success Stories
        </Menu.Item>
        <Menu.Item
          key="contact-us"
          icon={<PhoneOutlined />}
          className="contact"
        >
          Contact Us
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
