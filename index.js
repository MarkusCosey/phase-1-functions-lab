// Code your solution in this file!
let Hq = 42
let pickUp 
function distanceFromHqInBlocks(pickUp){
    return pickUp > Hq?pickUp - Hq: Hq - pickUp
};
function distanceFromHqInFeet(pickUp){
    return pickUp > Hq?(pickUp - Hq) * 264: (Hq - pickUp) * 264
};
function distanceTravelledInFeet(start, destination){
    return start > destination? (start - destination) * 264: (destination - start) * 264
};
function calculatesFarePrice(start, destination){
    const feetTravelled = Math.abs(start - destination)* 264;
        if (feetTravelled <= 400){
            return 0;
        }
        else if (feetTravelled > 400 && feetTravelled <= 2000){
            return 2.56;
        }
        else if (feetTravelled > 2000 && feetTravelled <= 2500){
            return 25;
        }
        else {
            return 'cannot travel that far';
    }
};