/**
 * Get data and add subject property
 * Graph RadarChart
 * @Class - UserPerformance
 * @constructor data
 * @returns {object}
 */


export default class UserPerformance {
  constructor(data) {
   
    this.performance = [
      { subject: "Intensité", value: null, kind: 6 },
      { subject: "Vitesse", value: null, kind: 5 },
      { subject: "Force", value: null, kind: 4 },
      { subject: "Endurance", value: null, kind: 3 },
      { subject: "Energie", value: null, kind: 2 },
      { subject: "Cardio", value: null, kind: 1 },
    ];
    this.updateData(data);
  }

   // Get value of data for performance
   updateData(data) {
    data.forEach((element) => {
      const index = this.performance.findIndex((perf) => perf.kind === element.kind);
      if (index !== -1) {
        this.performance[index].value = element.value;
      }
    });
  } 
}



