/**
 * Data model for UserRadarChart
 */
export default class UserPerformance {
  constructor(data) {
    this.dataP = [
      { subject: "Intensité", value: null, kind: 6 },
      { subject: "Vitesse", value: null, kind: 5 },
      { subject: "Force", value: null, kind: 4 },
      { subject: "Endurance", value: null, kind: 3 },
      { subject: "Energie", value: null, kind: 2 },
      { subject: "Cardio", value: null, kind: 1 },
    ];

    this.dataP.map((d) => {
      return (d.value = data.filter((perf) => perf.kind === d.kind)[0].value);
    });
  }
}
