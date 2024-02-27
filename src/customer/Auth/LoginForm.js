import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { signInData } from '../../redux/feature/authslice';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.auth.signInError);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    }
    dispatch(signInData(userData));
    if (user_data?.[0].message == 'Request failed with status code 401' || user_data?.[0].message == 'Request failed with status code 400') {
      document.forms['id_form'].reset();
      console.log('data', data);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} id='id_form'>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <TextField required
              id='email'
              name='email'
              label='Email'
              fullWidth
              autoComplete='email' />
          </Grid>
          <Grid item xs={12} >
            <TextField required
              type='password'
              id='password'
              name='password'
              label='Password'
              fullWidth
              autoComplete='password' />
          </Grid>
          <Grid item xs={12}>
            <Button className='bg-[#9155FD] w-full' type='submit' variant='contained' size='large' sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center' >
          <p>if you don't have account?</p>
          <Button onClick={() => navigate("/register")} className='ml-5' size='small'>Register</Button>
        </div>
      </div>
    </div>
  )
}
