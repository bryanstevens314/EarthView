import {
  AreaChartComponent,
  RadarChartComponent,
  SatelliteView
} from '../components'
import ReactImageMagnify from 'react-image-magnify'
import panAndZoomHoc from 'react-pan-and-zoom-hoc'
import ReactImageZoom from 'react-image-zoom'
var Preload = require('react-preload').Preload
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import React from 'react'
import {fetchEarthViews, decrementView, incrementView} from '../store/earth'

class EarthView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      X: 0
    }
    this.mouseMove = this.mouseMove.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this._handleImageLoadSuccess = this._handleImageLoadSuccess.bind(this)
    this.interval
  }
  _handleImageLoadSuccess() {
    this.interval = setInterval(() => {
      this.props.decrement()
    }, 1100)
  }
  _handleImageLoadError() {
    console.log('ERROR!!')
  }
  mouseMove(event) {
    if (this.state.X - event.screenX < 0) {
      this.setState({
        X: event.screenX
      })
      this.props.decrement()
    }
    if (this.state.X - event.screenX > 0) {
      this.setState({
        X: event.screenX
      })
      this.props.increment()
    }
  }

  onMouseDown(event) {
    event.target.addEventListener('mousemove', this.mouseMove)
  }

  onMouseUp(event) {
    event.target.removeEventListener('mousemove', this.mouseMove)
  }

  componentDidMount() {
    this.props.fetchEarthViews()
  }

  render() {
    const {currentEarthImage, earthImagesArray} = this.props
    const loadingIndicator = <div className="earth_Div">Loading...</div>
    return (
      earthImagesArray.length !== 0 && (
        <div onClick={this._handleImageLoadSuccess}>
          <Preload
            loadingIndicator={loadingIndicator}
            images={earthImagesArray}
            onError={this._handleImageLoadError}
            resolveOnError={true}
            mountChildren={true}
          >
            <div
              className="earth_Image"
              onMouseDown={event => this.onMouseDown(event)}
              onMouseUp={event => this.onMouseUp(event)}
            >
              {currentEarthImage && (
                <img width="3000px" src={currentEarthImage} />
              )}
            </div>
          </Preload>
          <div className="left_Graphs">
            <AreaChartComponent />
          </div>
          <SatelliteView />
        </div>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    earth: state.earth.earth,
    satellite: state.earth.satellite,
    currentEarthImage: state.earth.currentImage,
    earthImagesArray: state.earth.earthImagesArray
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEarthViews: () => {
      dispatch(fetchEarthViews())
    },
    decrement: () => dispatch(decrementView()),
    increment: () => dispatch(incrementView())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EarthView)
