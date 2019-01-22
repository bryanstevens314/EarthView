import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchEarthViews, decrementView, incrementView} from '../store/earth'

class SatelliteView extends React.Component {
  render() {
    const {satellite} = this.props
    return (
      <table className="satellites">
        <tbody>
          <tr>
            <th>Satellite Positions (GSE Coordinates)</th>
          </tr>
          {satellite.map(coord => {
            return (
              <tr key={coord.X}>
                <th>{`${coord.X}, ${coord.Y}, ${coord.Z}`}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

const mapToProps = state => {
  return {
    satellite: state.earth.satellite
  }
}

export default connect(mapToProps)(SatelliteView)
