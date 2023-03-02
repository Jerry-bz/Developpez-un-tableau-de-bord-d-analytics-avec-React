import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/data.js";



/**
 * Function that fetches user data using api otherwise it returns data mocks
 * @function getData
 * @param {number} idUser - Get user id
 * @returns {object} - Data of User
 */

const getUserData = async (idUser) => {
  const mainData = await fetch(`http://localhost:3000/user/${idUser}`)
    .then((res) => res.json()).then(data => data.data)
    .catch(() => USER_MAIN_DATA.find(({ id }) => id === idUser));

  const activity = await fetch(`http://localhost:3000/user/${idUser}/activity`)
    .then((res) => res.json()).then(data => data.data)
    .catch(() => USER_ACTIVITY.find(({ userId }) => userId === idUser));

  const average = await fetch(
    `http://localhost:3000/user/${idUser}/average-sessions`
  )
    .then((res) => res.json()).then(data => data.data)
    .catch(() => USER_AVERAGE_SESSIONS.find(({ userId }) => userId === idUser));

  const performance = await fetch(
    `http://localhost:3000/user/${idUser}/performance`
  )
    .then((res) => res.json()).then((data) => data.data)
    .catch(() => USER_PERFORMANCE.find(({ userId }) => userId === idUser));


  return {
    USER_MAIN_DATA: mainData,
    USER_ACTIVITY: activity,
    USER_AVERAGE_SESSIONS: average,
    USER_PERFORMANCE: performance,
  };
};

export default getUserData;
