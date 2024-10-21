import React, { useState } from 'react';
import { Slider, Typography } from '@mui/material';

const VolumeSlider = () => {
  const [volume, setVolume] = useState(50);

  const handleSliderChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div>
      <Typography gutterBottom>Volume</Typography>
      <Slider
        value={volume}
        onChange={handleSliderChange}
        aria-labelledby="volume-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </div>
  );
};

export default VolumeSlider;
