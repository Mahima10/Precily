import React, { useEffect, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SelectBox(props) {
  const [selectedOption, setSelectedOption] = useState("RedComponent");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    props.onChange(event.target.value)
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Components</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedOption}
          onChange={(event) => handleChange(event)}
          label={selectedOption}
        >
          <MenuItem value="RedComponent">
            <em>RedComponent</em>
          </MenuItem>
          <MenuItem value={"GreenComponent"}>GreenComponent</MenuItem>
          <MenuItem value={"PurpleComponent"}>PurpleComponent</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
