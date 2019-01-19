import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {
  fetchEarthViews,
  decrementView,
  incrementView,
  LineChartComponent
} from '../store/earth'
var Preload = require('react-preload').Preload
import axios from 'axios'
class EarthView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      X: 0,
      loading: false
    }
    this.mouseMove = this.mouseMove.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
  }
  mouseMove(event) {
    if (this.state.X - event.screenX < 0) {
      this.props.decrement()
    }
    if (this.state.X - event.screenX > 0) {
      this.props.increment()
    }
    this.setState({
      X: event.screenX
    })
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
    const loadingIndicator = <div className="loading">Loading...</div>
    return (
      earthImagesArray.length !== 0 && (
        <Preload
          loadingIndicator={loadingIndicator}
          images={earthImagesArray}
          onError={this._handleImageLoadError}
          onSuccess={this._handleImageLoadSuccess}
          resolveOnError={true}
          mountChildren={true}
        >
          <div
            className="earth_Div"
            onMouseDown={event => this.onMouseDown(event)}
            onMouseUp={event => this.onMouseUp(event)}
          >
            {currentEarthImage && (
              <img
                key={currentEarthImage}
                src={currentEarthImage}
                className="earth_Image"
              />
            )}
          </div>
        </Preload>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    earth: state.earth.earth,
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
