/**
 * Get data and transform property of array index by dayWeek
 * Graph LineChart
 * @Class - UserAverageSessions
 * @constructor data
 * @returns {object}
 */

export default class UserAverageSessions {
  constructor(data) {
    this.userAverageSession = [];
    const dayWeek = ["L", "M", "M", "J", "V", "S", "D"];
    data.map((element, index) =>
      this.userAverageSession.push({
        day: dayWeek[index],
        value: element.sessionLength,
      })
    );
  }
}
