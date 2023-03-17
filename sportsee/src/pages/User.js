import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Slidebar from "../components/slidebar/Slidebar";
import Infos from "../components/infos/UserInfos";
import "./User.css";
import BarChart from "../components/barchart/BarChart";
import LineChart from "../components/linechart/LineChart";
import RadarChart from "../components/radarchart/RadarChart";
import PeiChart from "../components/peichart/PeiChart";
import Metabolisme from "../components/metabolisme/Metabolisme";
import {
  getUserInfos,
  getUserActivities,
  getUserAverageSessions,
  getUserPerformance,
} from "../utils/GetUserData";
import UserActivity from "../utils/UserActivity";
import UserAverageSessions from "../utils/UserAverageSessions";
import UserPerformance from "../utils/UserPerformance";

/**
 * Show User Page
 * @returns {JSX.component} Dashbord of User
 */

export default function User() {
  // Get id of url
  const { id } = useParams();

  const [userInfos, setUserInfos] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [userKeyData, setUserKeyData] = useState({});
  const [userActivities, setUserActivities] = useState([]);
  const [userSessions, setUserSessions] = useState({});
  const [userPerfomance, setUserPerfomance] = useState({});

  // Get data Api with id of the User

  async function fetchData(userId) {
    try {
      // Get firstame of User
      let userInfosResult = await getUserInfos(userId);
      setUserInfos(userInfosResult.userInfos.firstName);

      //  Get property score or todayScore
      let userScoreResult = await getUserInfos(userId);
      setUserScore(() =>
        userScoreResult.score
          ? userScoreResult.score
          : userScoreResult.todayScore
      );

      let userKeyDataResult = await getUserInfos(userId);
      setUserKeyData(userKeyDataResult.keyData);

      let userActivitiesResult = await getUserActivities(userId);
      setUserActivities(userActivitiesResult);

      let userSessionsResult = await getUserAverageSessions(userId);
      setUserSessions(new UserAverageSessions(userSessionsResult));

      let userPerformanceResult = await getUserPerformance(userId);
      setUserPerfomance(new UserPerformance(userPerformanceResult.data));
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <>
      <Header />
      <main>
        <Slidebar />
        <section className="user">
          <Infos firstName={userInfos} />
          <div className="user_graph">
            <div className="user_global_graphs">
              <BarChart dataActivity={new UserActivity(userActivities)} />

              <div className="user_graph3">
                <LineChart dataAverage={userSessions} />

                <RadarChart performance={userPerfomance.performance} />

                <PeiChart dayScore={userScore} />
              </div>
            </div>
            <Metabolisme keyData={userKeyData} />
          </div>
        </section>
      </main>
    </>
  );
}
