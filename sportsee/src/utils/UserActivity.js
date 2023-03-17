/**
 * Get data and transform date property of array by index
 * Graph Barchart
 * @Class - UserActivity
 * @constructor data
 * @returns {object} (colors,legend,units,UserSession)
 */

class UserActivity {
  constructor(data) {
    this.userSession = [];
    data.map((session, index) =>
      this.userSession.push({
        index: index + 1,
        kilogram: session.kilogram,
        calories: session.calories,
      })
    );
    this.units = ["kg", "kcal"];
    this.legend = ["poids (kg) ", "Calories brûlées (kcal)"];
    this.colors = ["#282D30", "#E60000"];
  }
}

export default UserActivity;
