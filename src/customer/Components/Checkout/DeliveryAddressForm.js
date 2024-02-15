import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { createOrder } from '../../../redux/feature/orderslice'

const DeliveryAddressForm = ({ handleNext }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt=localStorage.getItem("jwt");
  // const jwt = useSelector((state) => state.auth.signInResponse?.[0]?.jwt);
  const address = useSelector((state) => state.user.userData);
  const [selectedAddress, setSelectedAdress] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userAddress = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      streetAddress: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      pinCode: data.get('pinCode'),
      mobile: data.get('mobile'),
    }
    const orderData = { userAddress, navigate, jwt };
    ;
    dispatch(createOrder(orderData));
    handleNext();
  }
  const handleCreateOrder = (item) => {
    dispatch(createOrder({ userAddress: item, jwt, navigate }));
    handleNext();
  };
  return (
    <div>
      <Grid container spacing={4}>
      {address?.[0]?.address?.length >0 &&  <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
            { address?.[0]?.address.map((item) => (
              <div
                onClick={() => setSelectedAdress(item)}
                className="p-5 py-7 border-b cursor-pointer"
              >
                {" "}
                <AddressCard address={item} />
                {selectedAddress?.id === item.id && (
                  <Button
                    sx={{ mt: 2 }}
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={() => handleCreateOrder(item)}
                  >
                    Deliver Here
                  </Button>
                )}
              </div>
            ))}
          </Box>
        </Grid>}

        <Grid item xs={12} lg={7}>
          <Box className='border rounded-s-md shadow-md p-5'>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='firstName'
                    name='firstName'
                    label='First Name'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='lastName'
                    name='lastName'
                    label='Last Name'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    id='address'
                    name='address'
                    label='Address'
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='city'
                    name='city'
                    label='City'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='state'
                    name='state'
                    label='State'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='pinCode'
                    name='pinCode'
                    label='Zip Code'
                    fullWidth
                    autoComplete='shipping postal-code'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='mobile'
                    name='mobile'
                    label='Phone Number'
                    fullWidth
                  // autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button sx={{ py: 1.5, mt: 2, bgcolor: 'RGB(145 85 253' }} size='large' variant='contained' type='submit'>Deliver Here</Button>
                </Grid>
              </Grid>
            </form>
          </Box>

        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm