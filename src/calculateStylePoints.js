const calculateStylePoints = (styleNotes) => {
    const highest = Math.max(...styleNotes);
    const lowest = Math.min(...styleNotes);

    const sum = (sumSN) => sumSN.reduce((acc, val) => acc + val);
    return sum(styleNotes) - lowest - highest;
  };
  
  module.exports = calculateStylePoints;