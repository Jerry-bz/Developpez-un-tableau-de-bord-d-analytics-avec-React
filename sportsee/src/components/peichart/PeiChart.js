import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import "./PieChart.css";
import PropTypes from "prop-types";

/**
 * component that displays the graph UserPiechart
 * @Component - UserPieChart
 * @param {object} dayScore - get user activity score data
 * @returns {JSX.element}
 */

export default function UserPieChart({ dayScore }) {
  const [todayScore, setTodayScore] = useState(0);
  const COLORS = ["#FF0000", "#FFFFFF"];

  useEffect(() => {
    if (dayScore) {
      setTodayScore(dayScore * 100);
    }
  }, [dayScore]);

  const data = [{ total: todayScore }, { total: 100 - todayScore }];

  function CustomLegend({ payload }) {
    if (payload && payload.length) {
      return (
        <div className="peichart_legend-score">
          <p className="peichart_score-result">{payload[0].payload.value}%</p>
          <p className="peichart_score-text">de votre</p>
          <p className="peichart_score-text">objectif</p>
        </div>
      );
    }
  }

  return (
    <div className="peichart">
      <h3 className="peichart_score">Score</h3>
      <ResponsiveContainer>
        <PieChart className="peichart_container">
          <Pie
            data={data}
            dataKey="total"
            cx="center"
            cy="center"
            innerRadius={90}
            outerRadius={100}
            paddingAngle={5}
            startAngle={90}
            endAngle={450}
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Legend verticalAlign="middle" content={CustomLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// The dayScore property must be a Number
UserPieChart.propTypes = {
  dayScore: PropTypes.number,
};
