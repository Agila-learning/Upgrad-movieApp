import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const BookingPopup = ({ open, handleClose }) => {
    const [confirmed, setConfirmed] = useState(false);

    const handleConfirm = () => {
        setConfirmed(true);
        setTimeout(() => {
            handleClose();
            alert('Booking Confirmed');
        }, 1000); // Delay for user to see the confirmation
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Book Show</DialogTitle>
            <DialogContent>
                {/* Booking details */}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleConfirm}>Confirm Booking</Button>
            </DialogActions>
        </Dialog>
    );
};

export default BookingPopup;
