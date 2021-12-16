import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import PrimaryButton from '../PrimaryButton';

function OneClickApplyButton({ job }) {
  const handleOneClick = () => {
    const data = { job };
    axios({
      method: 'POST',
      url: '/applyToJob',
      withCredentials: true,
      data,
    });
  };

  return (
    <PrimaryButton text="One Click Apply" onClick={handleOneClick} />
  );
}

export default OneClickApplyButton;
