// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42)
}

function distanceFromHqInFeet(blocks){
   return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, finish){
  return(Math.abs(finish-start)*264)
}

function calculatesFarePrice(start, destination){
    let distanceTravelled = distanceTravelledInFeet(start, destination)
    if(distanceTravelled<400){
        return 0
    }
     else if (distanceTravelled > 400 && distanceTravelled < 2000 ){
         return .02 * (distanceTravelled - 400)
     }
     else if (distanceTravelled >= 2000 && distanceTravelled < 2500){
         return 25
     }
     else{
         return "cannot travel that far"
     }
}

