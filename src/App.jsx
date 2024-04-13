import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import SearchBar from "./Component/SearchBar";
import JobCard from "./Component/JobCard";
// import jobData from "./JobDummyData";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "./Component/firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async() => {
    setCustomSearch(false);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async(jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location) ,orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  useEffect(() => {
    fetchJobs()
  },[])

  const clearFilters = () => {
    fetchJobs();
  };

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom}/>
      {customSearch && 
        <Button onClick={clearFilters} variant="contained" color="primary" sx={{ mt: 2, ml: 2 }}>
          Clear Filters
        </Button>
      }
      {jobs.map((job)=> (
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  );
}

export default App;
