import React from 'react'
import ProgressBarChart from './ProgressBarChart'

const StatsOverview = () => {
  return (
    <div
    className="stats__overview"
    >
        <h3 className="customer__heading">Stats Overview</h3>
        <ProgressBarChart />
    </div>
  )
}

export default StatsOverview