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
  getUserInfosM,
  getUserActivitiesM,
  getUserAverageSessionsM,
  getUserPerformanceM,
} from "../utils/GetUserData";
import UserActivity from "../utils/UserActivity";
import UserAverageSessions from "../utils/UserAverageSessions";

export default function User() {
  const { id } = useParams();
  const [userInfosDatas, setUserInfosDatas] = useState({});
  const [userActivitiesDatas, setUserActivitiesDatas] = useState([]);
  const [userSessionsDatas, setUserSessionsDatas] = useState([]);
  const [userPerformanceDatas, setUserPerformanceDatas] = useState({});

  async function fetchData(userId) {
  
    try {
      let userInfosResult = await getUserInfos(userId)
      userInfosResult === undefined &&
        (userInfosResult = await getUserInfosM(userId));
      setUserInfosDatas(userInfosResult);

      let userActivitiesResult = await getUserActivities(userId);
      userActivitiesResult === undefined &&
        (userActivitiesResult = await getUserActivitiesM(userId));
      setUserActivitiesDatas(userActivitiesResult);

      let userSessionsResult = await getUserAverageSessions(userId);
      userSessionsResult === undefined &&
        (userSessionsResult = await getUserAverageSessionsM(userId));
      setUserSessionsDatas(userSessionsResult);

      let userPerformanceResult = await getUserPerformance(userId);
      userPerformanceResult === undefined &&
        (userPerformanceResult = await getUserPerformanceM(userId));
      setUserPerformanceDatas(userPerformanceResult);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const username =
    userInfosDatas &&
    userInfosDatas.userInfos &&
    userInfosDatas.userInfos.firstName;

  const dataActivity =
    userActivitiesDatas && new UserActivity(userActivitiesDatas);

  const dataAverage =
    userSessionsDatas && new UserAverageSessions(userSessionsDatas);
  const keyData = userInfosDatas && userInfosDatas.keyData;

  return (
    <>
      <Header />
      <main>
        <Slidebar />
        <section className="user">
          <div>
            <Infos firstName={username} />
          </div>
          <div className="graph">
            <div className="global_graphs">
              <BarChart dataActivity={dataActivity} />

              <div className="graph3">
                <LineChart dataAverage={dataAverage} />
                <RadarChart />
                <PeiChart />
              </div>
            </div>
            <Metabolisme keyData={keyData} />
          </div>
        </section>
      </main>
    </>
  );
}
