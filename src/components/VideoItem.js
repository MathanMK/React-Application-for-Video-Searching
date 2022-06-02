import React from 'react';
import { Card } from 'react-bootstrap';
import './Videoitem.css'

const VideoItem = props => {

    return (
        <div onClick={() => props.onVideoSelect(props.vid)}>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.vid.snippet.thumbnails.medium.url} />
                <Card.Body>
                    <Card.Title>{props.vid.snippet.title}</Card.Title>
                    <Card.Text>{props.vid.snippet.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}





export default VideoItem;

