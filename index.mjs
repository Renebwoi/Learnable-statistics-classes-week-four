class stat {
    constructor(statArray) {
        this.statArray = statArray
    }

    sum(arr){
        let sumArray = 0;
        for(let x=0; x<arr.length;x++){
            sumArray += arr[x]
        }

        return sumArray
    }

    mean(arr){
        
        let theMean = this.sum(arr)/arr.length

        // console.log(`The mean is ${theMean}`)
        return theMean
    }

    median(arr){

        let theMedian = arr[Math.round((arr.length + 1)/2)]
        // console.log(`The Median is ${theMedian}`)

        return theMedian
    }

    mode(arr) {
        const frequencyMap = {};
        for (const num of arr) {
          frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        }
      
        let maxFrequency = 0;
        for (const count of Object.values(frequencyMap)) {
          maxFrequency = Math.max(maxFrequency, count);
        }
      
        const modes = [];
        for (const [num, count] of Object.entries(frequencyMap)) {
          if (count === maxFrequency) {
            modes.push(num);
          }
        }
      
        return modes;
      }

    range(arr){
        let HighCount = 0
        let LowCount = arr[0]
            for (let x=0;x<arr.length;x++){
                if(arr[x]>HighCount){
                    HighCount = arr[x]
                }
                if (LowCount>arr[x]){
                    LowCount = arr[x]
                }
            }
        let theRange = HighCount - LowCount

        return theRange
    }

    variance(arr){
        let total = this.sum(arr);
        let mean = this.mean(arr);
        let theVariance = 0

        for (let x=0;x<arr.length;x++){
            theVariance += ( (arr[x]-mean)**2/total )
        }

        return theVariance
    }

    standardDeviation(arr){
        let variance = this.variance(arr);
        let sDev = Math.sqrt(variance)

        return sDev
    }

    meanDeviation(arr){
        let total = this.sum(arr);
        let mean = this.mean(arr);
        let theMeanDev = 0

        for (let x=0;x<arr.length;x++){
            theMeanDev += ( ( Math.abs(arr[x]-mean) ) /total )
        }

        return theMeanDev
    }

    
    quartileDeviation(arr) {
    // Sort the array in ascending order
    const sortedArr = arr.sort((a, b) => a - b);

    const q1Index = Math.floor(sortedArr.length / 4);
    const q1 = sortedArr[q1Index];

    const q3Index = Math.floor(3 * sortedArr.length / 4);
    const q3 = sortedArr[q3Index];

    const qd = (q3 - q1) / 2;

    return qd;
    }


}

const testArr = [1,2,3,4,5,6,7,8,9,9,10]
const testArr2 = [1,2]

const calc = new stat(testArr)

console.log(calc.mode(testArr))
// console.log(Math.abs(-4))