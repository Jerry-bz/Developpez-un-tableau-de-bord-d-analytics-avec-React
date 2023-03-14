import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./LineChart.css";
import React from "react";
import PropTypes from "prop-types";

/**
 * Component that displays the graph LineChart
 * @Component UserLineChart
 * @param {object} dataAverage - get average duration of sessions data
 * @returns {JSX.component}
 */

export default function UserLineChart({ dataAverage }) {
  const { userAverageSession } = dataAverage;
  const unit = "min";

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="linechart__graph__tooltip">
          <p className="label">{`${payload[0].value} ${unit}`}</p>
        </div>
      );
    }
  };

  const CustomHover = ({ points }) => {
    return (
      <rect
        x={points[0].x}
        y={0}
        height="100%"
        width="100%"
        fill="rgba(0, 0, 0, 0.1)"
      />
    );
  };

  return (
    <div className="linechart">
      <div className="linechart__comment">
        <span>Durée moyenne des sessions</span>
      </div>
      <div className="linechart__graph">
        <ResponsiveContainer>
          <LineChart data={userAverageSession} margin={20} syncId="test">
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="value"
              stroke="#ffffff"
              dot={{ strokeWidth: 0, r: 0 }}
            />
            <Tooltip content={CustomTooltip} cursor={<CustomHover />} />
            <XAxis
              dataKey="day"
              padding={{ left: 12, right: 12 }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// The dataAverage property must be an object
UserLineChart.propTypes = {
  dataAverage: PropTypes.object,
};
