import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import SearchBar from "./Component/SearchBar";
import JobCard from "./Component/JobCard";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "./Component/firebase.config";
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    let jobsRef = collection(db, "jobs");
    let q;

    // Check if any of the job criteria fields are not empty
    const filterCriteriaPresent = Object.values(jobCriteria).some(criteria => criteria !== "");
    if (filterCriteriaPresent) {
      jobsRef = query(jobsRef, where("type", "==", jobCriteria.type));
      if (jobCriteria.title !== "") {
        jobsRef = query(jobsRef, where("title", "==", jobCriteria.title));
      }
      if (jobCriteria.experience !== "") {
        jobsRef = query(jobsRef, where("experience", "==", jobCriteria.experience));
      }
      if (jobCriteria.location !== "") {
        jobsRef = query(jobsRef, where("location", "==", jobCriteria.location));
      }
      q = query(jobsRef, orderBy("postedOn", "desc"));
    } else {
      q = query(jobsRef, orderBy("postedOn", "desc"));
    }

    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const clearFilters = () => {
    fetchJobs();
  };

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customSearch && (
        <Button
          onClick={clearFilters}
          variant="contained"
          color="primary"
          sx={{ mt: 2, ml: 2 }}
        >
          Clear Filters
        </Button>
      )}

      <Routes>
        <Route path="/" element={<Home jobs={jobs} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
