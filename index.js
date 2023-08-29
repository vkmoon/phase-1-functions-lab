function distanceFromHqInBlocks(blockNumber) {
    return blockNumber > 42 ? blockNumber - 42 : 42 - blockNumber;
}
function distanceFromHqInFeet(feetNumber) {
    return distanceFromHqInBlocks(feetNumber) * 264; 
}
function distanceTravelledInFeet(start, destination) {
    return start > destination ? (start - destination) * 264 : (destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
const farePrice = distanceTravelledInFeet(start, destination);
    if (farePrice <= 400) {
        return 0;
    }
    else if (farePrice > 400 && farePrice < 2000) {
        return (farePrice - 400) * 0.02;
    }
    else if (farePrice > 2000 && farePrice < 2500) {
        return 25;
    }
    else if (farePrice > 2500) {
        return 'cannot travel that far';
    }
  }