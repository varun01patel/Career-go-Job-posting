import React from 'react';
import dayjs from 'dayjs';
import { Typography, Button, Grid, Paper } from '@mui/material';

function JobCard(props) {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{ marginBottom: '16px', paddingTop: '16px' }}>
            <Paper elevation={3} style={{ padding: '16px', height: 'fit-content', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ marginBottom: '10px' }}>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>{props.title} - {props.company}</Typography>
                    <Typography variant="body1">{props.type} &#x2022; {props.experience} &#x2022; {props.location}</Typography>
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                        {props.skills.map((skill, i) => (
                            <Typography key={i} variant="body2" style={{ backgroundColor: '#E5E5E5', padding: '5px', borderRadius: '4px', border: '1px solid #000' }}>{skill}</Typography>
                        ))}
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" style={{ color: '#808080' }}>Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</Typography>
                    <a href={props.job_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary" size="medium">Apply</Button>
                    </a>
                </div>
            </Paper>
        </Grid>
    );
}

export default JobCard;
