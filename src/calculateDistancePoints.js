class hillParams {
    constructor(basicPoints, hillMultiplier){
        this.basicPoints = basicPoints,
        this.hillMultiplier = hillMultiplier
    }
}
const hillPoints = {
    Nor: new hillParams(60, 2),
    L: new hillParams(60, 1.8),
    XL: new hillParams(120, 1.2)
    
}
    const calculateDistancePoints = (hillSize, distance, kPoint) => {
        if (hillPoints[hillSize]){

        const roundedDistance = Math.round(distance * 2) / 2;

        const { basicPoints, hillMultiplier } = hillPoints[hillSize];

        return ((basicPoints + (roundedDistance - kPoint) * hillMultiplier) * 100 )/100;
  
    }
};

module.exports = calculateDistancePoints;