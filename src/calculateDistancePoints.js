class hillParams {
    constructor(basicPoints, hillMultiplier){
        this.basicPoints = basicPoints,
        this.hillMultiplier = hillMultiplier
    }
}
const hillPoints = {
    N: new hillParams(60, 2),
    L: new hillParams(60, 1.8),
    XL: new hillParams(120, 1.2)
    
}
    const calculateDistancePoints = (distance, hillSize, kPoint) => {
        const roundedDistance = Math.round(distance * 2) / 2;

        const { basicPoints, hillMultiplier } = hillParameters[hillSize];

        return basicPoints + (roundedDistance - kPoint) * hillMultiplier;
  };
  
  module.exports = calculateDistancePoints;