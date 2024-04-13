import React from 'react';
import JobCard from '../JobCard';

const Home = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};
export default Home;