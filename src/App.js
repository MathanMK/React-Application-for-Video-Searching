import React, { Component } from 'react'
import Search from './components/Search'
import youtube from './api/yt'
import VideoList from './components/videolist'
import VideoDetail from './components/VideoDetail'
import { Col, Container, Row } from 'react-bootstrap'


const key = 'AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM'
export default class App extends Component {
  state = { videos: [], selectedVideo: null };


  componentDidMount() {
    this.onTermSubmit('entertainments');
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 30,
        key: key
      }
    });
    this.setState({
      videos: response.data.items, selectedVideo: response.data.items[4]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });

  }

  render() {
    return (
      <div className="ui container">
        <Container>
          <Search onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <Row>
                <div className="eleven wide column">
                <Col>
                  <VideoDetail video={this.state.selectedVideo} />
                </Col>
                </div>
                <Col>
                <div className="five wide column">
                  <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}