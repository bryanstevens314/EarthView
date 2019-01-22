var Preload = require('react-preload').Preload
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  linearGradient
} from 'recharts'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchEarthViews, decrementView, incrementView} from '../store/earth'

class LineChartComponent extends React.Component {
  render() {
    const data = [
      {value: 300, time: 150},
      {value: 500, time: 100},
      {value: 100, time: 1000},
      {value: 1000, time: 200},
      {value: 2000, time: 700}
    ]

    return (
      <ResponsiveContainer width={1300} height={600}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="time"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}

const mapToProps = state => {
  return {}
}

const mapToDispatch = dispatch => {
  return {}
}

export default connect(mapToProps, mapToDispatch)(LineChartComponent)
