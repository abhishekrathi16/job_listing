import React from "react";
import { Form, Select, Button } from "antd";

const { Option } = Select;

const locations = [
  "Remote",
  "New Delhi, Delhi, India",
  "Chennai, Tamil Nadu, India",
  "Hyderabad, Telangana, India",
  "Bangalore, Karnataka, India",
  "Mumbai, Maharashtra, India",
  "Pune, Maharashtra, India",
  "Gurgaon, Haryana, India",
  "Noida, UP, India",
  "Kolkata, WB, India",
];

const experiences = ["0+", "1+", "2+", "5+", "10+"];

const categories = [
  "Software Developer",
  "Frontend Engineer",
  "Backend Engineer",
  "Fullstack Engineer",
  "QA Engineer",
  "Android Developer",
  "iOS Developer",
  "Data Scientist",
  "Business Analyst",
  "Data Analyst",
  "Founding Engineer",
];

const types = ["Full-time", "Internship"];

const Filters = ({ onFilter }) => {
  const onFinish = (values) => {
    onFilter(values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      {/* location filter */}
      <Form.Item
        name="location"
        label="Location"
        style={{ fontWeight: 600, color: "#fff", fontFamily: "Montserrat" }}
      >
        <Select
          placeholder="Select Location"
          style={{ fontFamily: "Montserrat" }}
        >
          <Option value="">None</Option>
          {locations.map((location) => (
            <Option value={location}>{location}</Option>
          ))}
        </Select>
      </Form.Item>
      {/* Experience filter */}
      <Form.Item
        name="experience"
        label="Years of Experience"
        style={{ fontWeight: 600, color: "#fff", fontFamily: "Montserrat" }}
      >
        <Select
          placeholder="Select Experience"
          style={{ fontFamily: "Montserrat" }}
        >
          <Option value="">None</Option>
          {experiences.map((experience) => {
            return <Option value={experience}>{experience}</Option>;
          })}
        </Select>
      </Form.Item>
      {/* Category type */}
      <Form.Item
        name="category"
        label="Category"
        style={{ fontWeight: 600, color: "#fff", fontFamily: "Montserrat" }}
      >
        <Select
          placeholder="Select category"
          style={{ fontFamily: "Montserrat" }}
        >
          <Option value="">None</Option>
          {categories.map((category) => {
            return <Option value={category}>{category}</Option>;
          })}
        </Select>
      </Form.Item>
      {/* Employment Type */}
      <Form.Item
        name="type"
        label="Employment Type"
        style={{ fontWeight: 600, color: "#fff", fontFamily: "Montserrat" }}
      >
        <Select
          placeholder="Select employment type"
          style={{ fontFamily: "Montserrat" }}
        >
          <Option value="">None</Option>
          {types.map((type) => {
            return <Option value={type}>{type}</Option>;
          })}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Apply Filters
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Filters;
