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
 * User Main Page
 * @returns {JSX.component} Dashbord of User
 */
export default function User() {
  const { id } = useParams();
  const [userInfosDatas, setUserInfosDatas] = useState({});
  const [userActivitiesDatas, setUserActivitiesDatas] = useState([]);
  const [userSessionsDatas, setUserSessionsDatas] = useState([]);
  const [userPerformanceDatas, setUserPerformanceDatas] = useState([]);

  // Get data Api of the User, update State
  async function fetchData(userId) {
    try {
      let userInfosResult = await getUserInfos(userId);
      setUserInfosDatas(userInfosResult);

      let userActivitiesResult = await getUserActivities(userId);
      setUserActivitiesDatas(userActivitiesResult);

      let userSessionsResult = await getUserAverageSessions(userId);
      setUserSessionsDatas(userSessionsResult);

      let userPerformanceResult = await getUserPerformance(userId);
      setUserPerformanceDatas(new UserPerformance(userPerformanceResult.data));
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);

  // Call the classes that form the data
  const username =
    userInfosDatas &&
    userInfosDatas.userInfos &&
    userInfosDatas.userInfos.firstName;
  
  const dataActivity =
    userActivitiesDatas && new UserActivity(userActivitiesDatas);

  const dataAverage =
    userSessionsDatas && new UserAverageSessions(userSessionsDatas);
  const keyData = userInfosDatas && userInfosDatas.keyData;

  const dayScore =
    userInfosDatas && userInfosDatas.todayScore
      ? userInfosDatas.todayScore
      : userInfosDatas.score;
  
  return (
    <>
      <Header />
      <main>
        <Slidebar />
        <section className="user">
          <Infos firstName={username} />
          <div className="user_graph">
            <div className="user_global_graphs">
              <BarChart dataActivity={dataActivity} />

              <div className="user_graph3">
                <LineChart dataAverage={dataAverage} />

                <RadarChart performance={userPerformanceDatas.dataP} />

                <PeiChart dayScore={dayScore} />
              </div>
            </div>
            <Metabolisme keyData={keyData} />
          </div>
        </section>
      </main>
    </>
  );
}
