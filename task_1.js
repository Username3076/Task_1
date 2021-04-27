/**
 * 
 * @author @Username3076 Luca
 * @version 1.2.0
 */


/**
 * function "isPointInPolygon" to determine, whether a point is inside a polygon.
 * @param {Array} pPoint is a point with x- and y-coordinate.
 * @param {Array} pPolygon is the required polygon.
 * @return {boolean} isInside return, whether the point is in the polygon.
 */
function isPointInPolygon(pPoint, pPolygon){
    
    let isInside = false // My return is set to FALSE by default
    
    let x = pPoint[0] // longitude
    let y = pPoint[1] // lattidude

    for (var i = 0, j = in_polygon.length - 1; i < pPolygon.length; j = i++) { // I itterate trough the entire polygon
        var xi = pPolygon[i][0] //longitude i
        var yi = pPolygon[i][1] //latitude  i
        var xj = pPolygon[j][0] //longitude j
        var yj = pPolygon[j][1] //latitude  j

    }

    if(((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)){    // now I check, whether an intersection between the polygon and the point exists. 
        isInside = true                                                           // if so, I change our return to TRUE
    } 

    return isInside   // I return the result.
}

/**
 * function "distanceTwoPoints" calculates the distance between two given points.
 * @function distanceTwoPoints
 * @param {Array} point1 - point1 
 * @param {Array} point2 - point2
 * @return {float} distance - I return the distance in meters
 * I used an algorithm, which is based on the haversine formula, that i found on the following webside:
 * https://www.movable-type.co.uk/scripts/latlong.html
 */
function distanceTwoPoints(point1, point2){
    
    const R = 6371e3; // this is the mean radius of the earth

    var lat1 = point1[1] // latitude of point1
    var lon1 = point1[0] // longitude of point1
    var lat2 = point2[1] // latitude of point2
    var lon2 = point2[0] // longitude of point2
    
    const phi1 = lat1 * Math.PI/180      // now i multiplicate our latitudes of Point1 and Point2, 
    const phi2 = lat2 * Math.PI/180      // to change the square measure, so i can use trigonomic functions on the them.

    const deltaPhi = (lat2-lat1) * Math.PI/180    // deltaPhi is the difference of the lattitudes of our 2 points
    const deltaLambda = (lon2-lon1) * Math.PI/180     // deltaLambda is the difference of the longitudes of our 2 points
    
    const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2); // we use our variables to put them in the haversine formula
    const b = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a))  // now we use our calculated const a to put it in the next step of the haversine formula
    const distance = R * b // in the end, we use our const b and multiply it with the earth`s radius to get the distance of our two points

    return distance // I return the calculated distance of our 2 points
 }

 

 /**
  * function "createIsInsideArray" creates an Array, which is as long as the original array of points, that was used for the route.
  * In this Array every index is filled with the return of the "isInsidePolygon" function, so we can see for every point in the route, if it is inside or outside of the polygon.
  * @function createIsInsideArray
  * @param {Array} pRoute - the necessary points for our route, that are saved in an array
  * @param {Array} pPolygon - the polygon, saved in an array
  * @returns {Array} isInsideArray - the returned array
  */
 function createIsInsideArray(pRoute, pPolygon){
     
    var isInsideArray = [pRoute.length] // I create an array, which is as long as the route array

    for(let i=0; i<pRoute.length-1; i++){   // I itterate through the entire length of the route array
        isInsideArray[i] = isPointInPolygon(pRoute[i], pPolygon)    // I fill every index of the new array with true or false entries
    }

    return isInsideArray // das gefüllte array wird zurückgegeben
 }

 /**
  * function "createSectionArray" is used to count, how many different sections between beeing inside and outside the polygon there are and to create an array with this exact size.
  * @function createSectionArray
  * @param {Array} pIsInsideArray - this array is taken from the function "createIsInsideArray" and used to count the sections 
  * @returns {Array} sectionArray - this array is as big as there are sections
  */
 function createSectionArray(pIsInsideArray){
    
    var sections = 1 // this variable counts how many sections there are
    
    for(let i=0; i<pIsInsideArray.length-2; i++) {  // this loop iterates through the pIsInsideArray and inscreases the sections counter by one, whenever there is a switch from true to false or vise versa
        if (pIsInsideArray[i] != pIsInsideArray[i+1]) {
            sections++
        }
    }
    
    var sectionArray = [sections] // new array is created and as big, as there are sections
    
    return sectionArray // the new array gets returned
 }

