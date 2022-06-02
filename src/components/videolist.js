import React from 'react'
import VideoItem from './VideoItem'
import { Row,Col } from 'react-bootstrap';

const VideoList = (props) => {
    const renderedList = props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} vid={video} />
    })
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                    { renderedList }
                    </Col>
                ))}
            </Row>
        </div>)
}

export default VideoList