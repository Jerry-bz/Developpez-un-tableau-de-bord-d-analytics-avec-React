import React, { useState, useEffect } from "react";
import getUserData from "../util/GetUserData";
import Header from "../components/header/Header";
import Slidebar from "../components/slidebar/Slidebar";
import Infos from "../components/infos/InfosUser";
import styles from "./Home.module.css";
import BarCharts from "../components/barchart/BarChart";


export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    getUserData(18).then((data) =>
      setName(data.USER_MAIN_DATA.userInfos.firstName)
    );
  }, []);

  return (
    <>
      <Header />
      <main>
        <Slidebar />
        <section className={styles.user}>
          <Infos firstName={name} />
          <BarCharts />
        </section>
      </main>
    </>
  );
}
