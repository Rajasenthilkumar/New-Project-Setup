// import React, { useState, useEffect } from 'react';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import ApiService from '../Service/Api';
// import EmailIcon from '@mui/icons-material/Email';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { Checkbox, Button, Link } from '@mui/material';

// const MyForm = () => {
//   const [email, setEmail] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [user, setUser] = useState({ password: '' });
//   const handleChange = (event) => {
//     if (event.target.name === 'email') {
//       setEmail(event.target.value);
//     } else if (event.target.name === 'password') {
//       setUser({ ...user, password: event.target.value });
//     }
//   };
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleRememberMeChange = () => {
//     setRememberMe(!rememberMe);
//   };

//   const handleSubmit = async () => {
//     try {
//       const payload = {
//         "email": "email",
//         "password": "user.password"
//       };
//       const Respone = await ApiService(payload);
//       console.log('dddd', Response);
//       if (Response) {
//         //const notify = () => toast("Wow so easy!");
//       }
//     } catch (error) {
//       console.log('dddd', error);
//     }
//   };
//   const handleTogglePasswordVisibility = (field) => {
//     if (field === 'password') {
//       setShowPassword(!showPassword);
//     }
//   };
//   useEffect(() => {
//     ValidatorForm.addValidationRule('isPasswordValid', (value) => {
//       if (value.length > 10) {
//         return false;
//       }
//       if (!/[A-Z]/.test(value)) {
//         return false;
//       }
//       if (!/[!@#$%^&*(),.?":{}|<>]/g.test(value)) {
//         return false;
//       }
//       return true;
//     });
//     ValidatorForm.addValidationRule('isPasswordLengthValid', (value) => {
//       if (value.length > 10) {
//         return false;
//       }
//       return true;
//     })
//     return () => {
//       ValidatorForm.removeValidationRule('isPasswordValid');
//       ValidatorForm.removeValidationRule('isPasswordLengthValid');
//     };
//   }, []);
//   return (

//     <Grid className="Layout">
//       <Box className="Background">
//         <Box className="innerbox">
//           <h2 className="centerhead" >Welcome To Land  Revenue</h2>
//           <h1 className="subhead">Register</h1>
//           <ValidatorForm onError={(errors) => console.log(errors)}>
//             <label htmlFor="email">Email</label>
//             <TextValidator
//               id="outlined-basic" variant="outlined"
//               margin="normal"
//               fullWidth
//               onChange={handleChange}
//               name="email"
//               value={email}
//               validators={['required', 'isEmail']}
//               errorMessages={['This field is required', 'Email is not valid']}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">   
//                     <EmailIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <label htmlFor="email">Password</label>

//             <TextValidator
//               id="outlined-basic" variant="outlined"
//               margin="normal"
//               fullWidth
//               onChange={handleChange}
//               name="password"
//               type={showPassword ? "text" : "password"}
//               validators={[
//                 "required",
//                 `matchRegexp:^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{6,10})`,
//                 "isPasswordValid", // Add the custom validation rule here
//               ]}
//               errorMessages={[
//                 "This field is required",
//                 "Password must be between 6 and 10 characters and contain at least one uppercase letter and one special character",
//                 "Password must be 10 characters or less", // Add the custom error message here
//               ]}
//               value={user.password}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={() => handleTogglePasswordVisibility("password")}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <span className="Space">
//               <span>
//                 <Checkbox
//                   checked={rememberMe}
//                   onChange={handleRememberMeChange}
//                   color="primary"
//                 />
//                 <label>Remember Me</label>
//               </span>
//               <Link href="/forgot-password" variant="body2">Forgot Password?</Link></span>
//             <Button fullWidth type="submit" className='Button'  >Login</Button>
//           </ValidatorForm>
//         </Box>
//       </Box>
//     </Grid>

//   );
// }
// export default MyForm
import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ApiService from '../Service/Api';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Checkbox, Button, Link } from '@mui/material';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ password: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setUser({ ...user, password: value });
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        email: email,
        password: user.password,
      };
      const Response = await ApiService(payload);
      console.log('Response', Response);
      if (Response) {
        // Handle success
      }
    } catch (error) {
      console.log('Error', error);
      // Handle error
    }
  };

  useEffect(() => {
    // Custom validation rule for password match
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      return value === user.password;
    });

    // Custom password validation rule
    ValidatorForm.addValidationRule('isPasswordValid', (value) => {
      // Implement your password validation logic here
      // Example: return /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{6,})/.test(value);
      return true;
    });

    return () => {
      ValidatorForm.removeValidationRule('isPasswordMatch');
      ValidatorForm.removeValidationRule('isPasswordValid');
    };
  }, [user.password]);

  return (
    <Grid className="Layout">
      <Box className="Background">
        <Box className="innerbox">
          <h2 className="centerhead">Welcome To Land Revenue</h2>
          <h1 className="subhead">Register</h1>
          <ValidatorForm onError={(errors) => console.log(errors)}>
            <label htmlFor="email">Email</label>
            <TextValidator
              id="email"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={handleChange}
              name="email"
              value={email}
              validators={['required', 'isEmail']}
              errorMessages={['This field is required', 'Email is not valid']}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <label htmlFor="password">Password</label>
            <TextValidator
              id="password"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={handleChange}
              name="password"
              type={showPassword ? 'text' : 'password'}
              validators={[
                'required',
                'isPasswordValid',
              ]}
              errorMessages={[
                'This field is required',
                'Password must meet the validation criteria',
              ]}
              value={user.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <TextValidator
              id="confirmPassword"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={handleChange}
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              validators={[
                'required',
                'isPasswordMatch',
              ]}
              errorMessages={[
                'This field is required',
                'Passwords do not match',
              ]}
              value={confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <span className="Space">
              <span>
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  color="primary"
                />
                <label>Remember Me</label>
              </span>
              <Link href="/forgot-password" variant="body2">
                Forgot Password?
              </Link>
            </span>
            <Button fullWidth type="submit" className="Button" onClick={handleSubmit}>
              Register
            </Button>
          </ValidatorForm>
        </Box>
      </Box>
    </Grid>
  );
};

export default MyForm;
