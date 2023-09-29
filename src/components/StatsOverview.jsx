import React from 'react'
import ProgressBarChart from './ProgressBarChart'

const StatsOverview = () => {
  return (
    <div
    style={{border: "1px solid #000"}}
    >
        <h3>Stats Overview</h3>
        <ProgressBarChart />
    </div>
  )
}

export default StatsOverview