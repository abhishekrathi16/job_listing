import React from 'react';
import { Form, Select, Button } from 'antd';

const { Option } = Select;

const Filters = ({ onFilter }) => {
  const onFinish = values => {
    onFilter(values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
    {/* location filter */}
      <Form.Item name="location" label="Location" >
      <Select placeholder="Select Location">
          <Option value="Remote">Remote</Option>
          <Option value="New Delhi, Delhi, India">New Delhi, Delhi, India</Option>
          <Option value="Chennai, Tamil Nadu, India">Chennai, Tamil Nadu, India</Option>
          <Option value="Hyderabad, Telangana, India">Hyderabad, Telangana, India</Option>
          <Option value="Bangalore, Karnataka, India">Bangalore, Karnataka, India</Option>
          <Option value="Mumbai, Maharashtra, India">Mumbai, Maharashtra, India</Option>
          <Option value="Pune, Maharashtra, India">Pune, Maharashtra, India</Option>
          <Option value="Gurgaon, Haryana, India">Gurgaon, Haryana, India</Option>
          <Option value="Noida, UP, India">Noida, UP, India</Option>
          <Option value="Kolkata, WB, India">Kolkata, WB, India</Option>
        </Select>
      </Form.Item>
      {/* Experience filter */}
      <Form.Item name="experience" label="Years of Experience" style={{fontWeight:600, color:"#fff", fontFamily:"Montserrat"}}>
        <Select placeholder="Select Experience">
          <Option value="0+">0+</Option>
          <Option value="1+">1+</Option>
          <Option value="2+">2+</Option>
          <Option value="5+">5+</Option>
          <Option value="10+">10+</Option>
        </Select>
      </Form.Item>
      {/* Category type */}
      <Form.Item name="category" label="Category" style={{fontWeight:600, color:"#fff", fontFamily:"Montserrat"}}>
        <Select placeholder="Select category">
          <Option value="Software Developer">Software Developer</Option>
          <Option value="Frontend Engineer">Frontend Engineer</Option>
          <Option value="Backend Engineer">Backend Engineer</Option>
          <Option value="Fullstack Engineer">Fullstack Engineer</Option>
          <Option value="QA Engineer">QA Engineer</Option>
          <Option value="Android Developer">Android Developer</Option>
          <Option value="iOS Developer">iOS Developer</Option>
          <Option value="Data Scientist">Data Scientist</Option>
          <Option value="Business Analyst">Business Analyst</Option>
          <Option value="Data Analyst">Data Analyst</Option>
          <Option value="Founding Engineer">Founding Engineer</Option>
        </Select>
      </Form.Item>
      {/* Employment Type */}
      <Form.Item name="type" label="Employment Type" style={{fontWeight:600, color:"#fff", fontFamily:"Montserrat"}}>
        <Select placeholder="Select employment type">
          <Option value="Full-time">Full-time</Option>k
          <Option value="Internship">Internship</Option>
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
