var Preload = require('react-preload').Preload
import {LineChart, Line} from 'recharts'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchEarthViews, decrementView, incrementView} from '../store/earth'

class LineChartComponent extends React.Component {
  render() {
    ;<LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  }
}

const mapToProps = state => {
  return {}
}

const mapToDispatch = dispatch => {
  return {}
}

export default connect(mapToProps, mapToDispatch)(LineChartComponent)
