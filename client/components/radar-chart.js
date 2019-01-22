import {fetchEarthViews, decrementView, incrementView} from '../store/earth'
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
  linearGradient,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from 'recharts'
var Preload = require('react-preload').Preload
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import React from 'react'

class RadarChartComponent extends React.Component {
  render() {
    const data = [
      {subject: 'A', value: 300, time: 150},
      {subject: 'A', value: 500, time: 100},
      {subject: 'A', value: 100, time: 1000},
      {subject: 'A', value: 1000, time: 200},
      {subject: 'A', value: 2000, time: 700}
    ]

    return (
      <ResponsiveContainer width={1300} height={1000}>
        <RadarChart
          outerRadius={500}
          width={600}
          height={600}
          margin-top={350}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Mike"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Lily"
            dataKey="time"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
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

export default connect(mapToProps, mapToDispatch)(RadarChartComponent)
