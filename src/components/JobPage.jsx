import React, { useState } from "react";
import JobList from "./JobList";
import Filters from "./Filters";
import Navbar from "./Navbar";

// Array of job objects with all details specified
const jobsData = [
  {
    id: 1,
    title: "Software Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Kolkata, WB, India",
    experience: "2+",
    type: "Full-time",
    category: "Software Developer",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Noida, UP, India",
    experience: "0+",
    type: "Internship",
    category: "Frontend Engineer",
  },
  {
    id: 3,
    title: "Backend Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Bangalore, UP, India",
    experience: "5+",
    type: "Full-time",
    category: "Backend Engineer",
  },
  {
    id: 4,
    title: "QA Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Pune, Maharashtra, India",
    experience: "0+",
    type: "Full-time",
    category: "QA Engineer",
  },
  {
    id: 5,
    title: "Fullstack Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Remote",
    experience: "0+",
    type: "Internship",
    category: "Fullstack Engineer",
  },
  {
    id: 6,
    title: "Business Analyst",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Kolkata, WB, India",
    experience: "10+",
    type: "Full-time",
    category: "Business Analyst",
  },
  {
    id: 7,
    title: "Data Scientist",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Hyderabad, Telangana, India",
    experience: "0+",
    type: "Internship",
    category: "Data Scientist",
  },
  {
    id: 8,
    title: "Data Analyst",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Mumbai, Maharashtra, India",
    experience: "10+",
    type: "Full-time",
    category: "Data Analyst",
  },
  {
    id: 9,
    title: "Android Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Gurgaon, Haryana, India",
    experience: "0+",
    type: "Internship",
    category: "Android Developer",
  },
  {
    id: 10,
    title: "Fullstack Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Chennai, Tamil Nadu, India",
    experience: "1+",
    type: "Full-time",
    category: "Fullstack Engineer",
  },
  {
    id: 11,
    title: "iOS Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Gurgaon, Haryana, India",
    experience: "2+",
    type: "Full-time",
    category: "iOS Developer",
  },
  {
    id: 12,
    title: "Backend Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Mumbai, Maharashtra, India",
    experience: "2+",
    type: "Internship",
    category: "Backend Engineer",
  },
  {
    id: 13,
    title: "Fullstack Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "New Delhi, Delhi, India",
    experience: "1+",
    type: "Internship",
    category: "Fullstack Engineer",
  },
];

const JobPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  // handle filtering of jobs
  const handleFilter = (filters) => {
    const { location, experience, category, type } = filters;

    const filtered = jobsData.filter((job) => {
      let matchLocation = true;
      let matchExperience = true;
      let matchCategory = true;
      let matchType = true;

      if (location) {
        matchLocation = job.location
          .toLowerCase()
          .includes(location.toLowerCase());
      }

      if (experience) {
        matchExperience = job.experience === experience;
      }

      if (category) {
        matchCategory = job.category.toLowerCase() === category.toLowerCase();
      }

      if (type) {
        matchType = job.type.toLowerCase() === type.toLowerCase();
      }

      return matchLocation && matchExperience && matchCategory && matchType;
    });

    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1 style={{ paddingBottom: "10px" }}>Job Listings</h1>
        <Filters onFilter={handleFilter} />
        <h2
          style={{
            fontFamily: "Montserrat",
            color: "white",
            textAlign: "center",
            margin: "50px 0px",
          }}
        >
          Available Jobs
        </h2>
        <JobList
          jobs={filteredJobs}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default JobPage;
