import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DownloadButton = ({ filePath, downloadFilename }) => {
    const handleDownload = () => {
        fetch(filePath) // Replace with your PDF file URL
            .then(response => response.blob())
            .then(blob => {
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = downloadFilename; // Specify the filename
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => console.error('Error downloading the file:', error));
    };

    return (
        <Button variant="primary" style={{
            fontSize: '0.875rem',
            fontFamily: 'DM Sans, sans-serif',
            borderRadius: '70px',
            padding: '5px 24px',
            margin: '10px 0',
        }} onClick={handleDownload}>Download</Button>
    );
};

const NotesCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleView = () => {
        window.open(props.ViewNotes, '_blank');
    };

    return (
        <Card
            style={{
                width: '100%',
                maxWidth: '29rem',
                height: 'auto',
                background: '#B4B0E5',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                border: isHovered ? '1px solid #ccc' : 'none'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Card.Img variant="top" src={props.ImageURL} style={{
                borderRadius: '10px',
                padding: '20px',
                height: 'auto',
                width: '100%'
            }} />
            <Card.Body>
                <Card.Title style={{
                    color: '#2D3748',
                    fontSize: '1.25rem',
                    textAlign: 'center',
                    cursor: 'default'
                }}>{props.title}</Card.Title>
                <Card.Text style={{
                    color: '#718096',
                    fontSize: '0.875rem',
                    textAlign: 'center'
                }}>
                    {props.description}
                </Card.Text>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <DownloadButton filePath={props.filePath} downloadFilename={props.downloadFilename} />
                    <Button variant="primary" style={{
                        fontSize: '0.875rem',
                        fontFamily: 'DM Sans, sans-serif',
                        borderRadius: '70px',
                        padding: '5px 24px',
                        margin: '10px 0'
                    }} onClick={handleView}>View</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default NotesCard;
