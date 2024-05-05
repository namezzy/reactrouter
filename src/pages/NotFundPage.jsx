import React from 'react';

const NotFoundPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            backgroundColor: '#f8f9fa'
        }}>
            <img src="https://www.hermchats.com/r2tb/f6501f94f49d4b019e0778364ef64914.jpg" alt="Not Found" style={{width: '300px'}} />
            <h1>Oops! Page not found.</h1>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href="/" style={{
                marginTop: '20px',
                textDecoration: 'none',
                color: 'white',
                backgroundColor: '#007bff',
                padding: '10px 20px',
                borderRadius: '5px'
            }}>Go Home</a>
        </div>
    );
}

export default NotFoundPage;