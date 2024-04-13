// SearchBar.jsx
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: ""
    });

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const search = () => {
        props.fetchJobsCustom(jobCriteria);
    };

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ paddingTop: '1rem' }}>
            <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                    <InputLabel id="title-select-label" style={{ fontWeight: 'bold' }}>Job Role</InputLabel>
                    <Select
                        labelId="title-select-label"
                        id="title-select"
                        value={jobCriteria.title}
                        onChange={handleChange}
                        name="title"
                        style={{ backgroundColor: 'white' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="iOS Developer">iOS Developer</MenuItem>
                        <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
                        <MenuItem value="Backend Developer">Backend Developer</MenuItem>
                        <MenuItem value="Android Developer">Android Developer</MenuItem>
                        <MenuItem value="Developer Advocate">Developer Advocate</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                    <InputLabel id="type-select-label" style={{ fontWeight: 'bold' }}>Job Type</InputLabel>
                    <Select
                        labelId="type-select-label"
                        id="type-select"
                        value={jobCriteria.type}
                        onChange={handleChange}
                        name="type"
                        style={{ backgroundColor: 'white' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Full Time">Full Time</MenuItem>
                        <MenuItem value="Part Time">Part Time</MenuItem>
                        <MenuItem value="Contract">Contract</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                    <InputLabel id="location-select-label" style={{ fontWeight: 'bold' }}>Location</InputLabel>
                    <Select
                        labelId="location-select-label"
                        id="location-select"
                        value={jobCriteria.location}
                        onChange={handleChange}
                        name="location"
                        style={{ backgroundColor: 'white' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Remote">Remote</MenuItem>
                        <MenuItem value="In-Office">In-Office</MenuItem>
                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                    <InputLabel id="experience-select-label" style={{ fontWeight: 'bold' }}>Experience</InputLabel>
                    <Select
                        labelId="experience-select-label"
                        id="experience-select"
                        value={jobCriteria.experience}
                        onChange={handleChange}
                        name="experience"
                        style={{ backgroundColor: 'white' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Fresher">Fresher</MenuItem>
                        <MenuItem value="Junior Level">Junior Level</MenuItem>
                        <MenuItem value="Mid Level">Mid Level</MenuItem>
                        <MenuItem value="Senior Level">Senior Level</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Button variant="contained" color="primary" fullWidth onClick={search}>
                    Search
                </Button>
            </Grid>
        </Grid>
    );
}

export default SearchBar;
