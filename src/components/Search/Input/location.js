import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from 'react-select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
//  debugger;
  const classes = useStyles();
  const [selectedOption, setselectedOption] = React.useState(null);


  const handleChange = (selectedOption ) => {
    setselectedOption(selectedOption );
  };

  const selectOption = [];

  const selectEle = props.data.forEach(element =>{
                        let city = {value: element.hCity, label: element.hCity }
                        selectOption.push(city)
                     })

  return (
    <div>
      <Select
        placeholder="Cities"
        value={selectedOption}
        onChange={handleChange}
        options={selectOption}
      />
    </div>
  );
}
