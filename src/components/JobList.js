import React from "react";
import { List, Button, Pagination } from "antd";

const JobList = ({ jobs, currentPage, pageSize, onPageChange }) => {
  // pagination
  const indexOfLastJob = currentPage * pageSize;
  const indexOfFirstJob = indexOfLastJob - pageSize;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="job-list">
      <List
        itemLayout="vertical"
        size="large"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 4,
        }}
        dataSource={currentJobs}
        renderItem={(job) => (
          <List.Item key={job.id}>
            <div className="g">
              <div className="job-item">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <p>Location: {job.location}</p>
                <p>Years of Experience: {job.experience}</p>
                <p>Type: {job.type}</p>
                <p>Category: {job.category}</p>
                <Button type="primary" htmlType="submit">
                  Apply
                </Button>
              </div>
            </div>
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        total={jobs.length}
        pageSize={pageSize}
        onChange={onPageChange}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </div>
  );
};

export default JobList;
