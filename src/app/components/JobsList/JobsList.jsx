import *  as React from 'react';
import { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import JobItem from "./JobItem.jsx";
import Container from '@mui/material/Container';

const JobsList = (props) => {
  let {listOfJobs = []} = props

  const handleFocusItem = (targetJobItem) => {
    props.mainFocusFunction(targetJobItem);
  }
  return (

      <Container >
      {listOfJobs.map((job) =>
        <JobItem  key ={job.url} job={job} handleFocus={handleFocusItem}/>
      )}
      </Container>
  )
}

export default JobsList;