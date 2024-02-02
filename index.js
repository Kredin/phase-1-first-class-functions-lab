// Code your solution in this file!

const returnFirstTwoDrivers = function(value){
    return [value[0], value[1]]
}

const returnLastTwoDrivers = function(value){
    return [value[2], value[3]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value){
    return function(fare){
        return fare * value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func){
    if(func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    }else if(func === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }
}