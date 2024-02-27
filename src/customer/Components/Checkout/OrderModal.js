import { Box, Modal } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router';
export const OrderModal = ({ handleClose, open }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        height: 200,
        bgcolor: 'Green',
        outline: 'none',
        boxShadow: 24,
        p: 4,
        color: 'white'
    };
    const navigate=useNavigate();
    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='grid justify-items-center content-baseline'>

                    <CheckCircleOutlineIcon fontSize="large" className='mt-10' />
                    <p>Order Placed!</p>
                    <IconButton
                        aria-label="close"
                        onClick={()=>{navigate('/')}}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'white',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

            </Modal>
        </div>
    )
}
