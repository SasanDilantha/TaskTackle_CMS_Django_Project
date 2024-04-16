import * as React from 'react';
import addUser from 'src/assets/images/svg/add_user.svg';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const UserForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '150%' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: '3rem',
        }}
      >
        <img src={addUser} alt="Add User" style={{ height: '50vh', marginLeft:'-10vw' }} />

        <Stack
          component="form"
          sx={{
            width: '25ch',
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField id="txtFirstName" label="First Name" />
          <TextField id="txtLastName" label="Last Name" />
          <TextField id="txtAddress" label="Address" />

          <TextField id="mobileNumber" label="Mobile Number" type="number" required/>
          <div>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                style={{ width: '160%' }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="customer"
                name="radRole"
              >
                <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                <FormControlLabel value="emp" control={<Radio />} label="Employee" />
              </RadioGroup>
            </FormControl>
          </div>
        </Stack>
      </Box>
    </Box>
  );
};

export default UserForm;
