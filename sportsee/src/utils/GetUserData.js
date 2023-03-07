import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/data";

/**
 * Get user information
 * Data Mock
 * @function getUserInfosM
 * @param {string} userId - Id of user
 * @returns {object} {id,keyData,(todayScore||score),userInfos}
 */

async function getUserInfosM(userId) {
  const data = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
  return data;
}

/**
 * Get user activity
 * Data Mock
 * @function getUserActivitiesM
 * @param {string} userId - Id of user
 * @returns {object} {userId,sessions}
 */

async function getUserActivitiesM(userId) {
  const data = USER_ACTIVITY.find((user) => user.userId === parseInt(userId));
  return data.sessions;
}

/**
 * Get user averageSessions
 * Data Mock
 * @function getUserAverageSessionsM
 * @param {string} userId - Id of user
 * @returns {object} {userId,sessions}
 */

async function getUserAverageSessionsM(userId) {
  const data = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === parseInt(userId)
  );
  return data.sessions;
}

/**
 * Get user performance
 * Data Mock
 * @function getUserPerformanceM
 * @param {string} userId - Id of user
 * @returns {object} {userId,kind,data}
 */

async function getUserPerformanceM(userId) {
  const data = USER_PERFORMANCE.find(
    (user) => user.userId === parseInt(userId)
  );
  return data;
}

/**
 * Get user information
 * Data Api
 * @function getUserInfos
 * @param {string} userId - Id of user
 * @returns {Promise} {id,keyData,(todayScore||score),userInfos}
 */

async function getUserInfos(userId) {
  let data = "";
  try {
    let response = await fetch(`http://localhost:3001/user/${userId}`);
    // console.log(response)
    if (response.ok) {
      data = await response.json();
      return data.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Error: no data found (getUserInfos)");
  }
}

/**
 * Get user activity
 * Data Api
 * @function getUserActivities
 * @param {string} userId - Id of user
 * @returns {Promise} {userId,sessions}
 */

async function getUserActivities(userId) {
  let data = "";
  try {
    let response = await fetch(`http://localhost:3001/user/${userId}/activity`);
    if (response.ok) {
      data = await response.json();
      return data.data.sessions;
    } else {
      throw new Error();
    }
  } catch (error) {
    // console.log(error)
    console.log("Error: no data found (getUserActivities)");
  }
}

/**
 * Get user averageSessions
 * Data Api
 * @function getUserAverageSessions
 * @param {string} userId - Id of user
 * @returns {Promise} {userId,sessions}
 */

async function getUserAverageSessions(userId) {
  let data = "";
  try {
    let response = await fetch(
      `http://localhost:3001/user/${userId}/average-sessions`
    );
    if (response.ok) {
      data = await response.json();
      return data.data.sessions;
    } else {
      throw new Error();
    }
  } catch (error) {
    // console.log(error)
    console.log("Error: no data found (getUserAvergeSessions)");
  }
}

/**
 * Get user performance
 * Data Api
 * @function getUserPerformance
 * @param {string} userId - Id of user
 * @returns {Promise} {userId,kind,data}
 */

async function getUserPerformance(userId) {
  let data = "";
  try {
    let response = await fetch(
      `http://localhost:3001/user/${userId}/performance`
    );
    if (response.ok) {
      data = await response.json();
      return data.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    // console.log(error)
    return "Error: no data found (getUserPerformance)";
  }
}

export {
  getUserInfos,
  getUserActivities,
  getUserAverageSessions,
  getUserPerformance,
  getUserInfosM,
  getUserActivitiesM,
  getUserAverageSessionsM,
  getUserPerformanceM,
};
