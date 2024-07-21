import React, { useState } from 'react';
import LoginPopup from './components/LoginPopup';
import BookingPopup from './components/BookingPopup';
import axios from 'axios';

const App = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [bookingOpen, setBookingOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.post('/auth/logout', {}, {
                headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
            });
            sessionStorage.removeItem('token');
            window.location.href = '/'; // Redirect to home page
        } catch (error) {
            alert('Logout failed');
        }
    };

    return (
        <div>
            <header>
                <button onClick={() => setLoginOpen(true)}>Login</button>
                {sessionStorage.getItem('token') && (
                    <>
                        <button onClick={() => setBookingOpen(true)}>Book Show</button>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </header>
            <LoginPopup open={loginOpen} handleClose={() => setLoginOpen(false)} />
            <BookingPopup open={bookingOpen} handleClose={() => setBookingOpen(false)} />
        </div>
    );
};

export default App;
