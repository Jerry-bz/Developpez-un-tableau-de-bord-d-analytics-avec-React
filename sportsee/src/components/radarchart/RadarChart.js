import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  Radar,
} from "recharts";
import "./radarChart.css";
import PropTypes from "prop-types";

/**
 * component that displays the graph UserRadarChart
 * @Component - UserRadarChart
 * @param {object} performance - get user performance data
 * @returns {JSX.element}
 */

function UserRadarChart({ performance }) {
  if (performance) {
    return (
      <div className="radarchart">
        <ResponsiveContainer>
          <RadarChart data={performance} outerRadius={80}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="subject"
              stroke="#FFFFFF"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Radar
              name="valeur"
              dataKey="value"
              stroke="#FF0101"
              fill="#FF0101"
              fillOpacity={0.7}
              connectNulls
            ></Radar>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

// The performance property must be an array
UserRadarChart.propTypes = {
  performance: PropTypes.array,
};

export default UserRadarChart;
