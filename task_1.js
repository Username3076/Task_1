/**
 * 
 * @author @Username3076 Luca
 * @version 1.1.0
 */


/**
 * function "isPointInPolygon" to determine, whether a point is inside a polygon.
 * @param {Array} pPoint is a point with x- and y-coordinate.
 * @param {Array} pPolygon is the required polygon.
 * @return {boolean} isInside return, whether the point is in the polygon.
 */
function isPointInPolygon(pPoint, pPolygon){
    
    let isInside = false // our return is set to FALSE by default
    
    let x = pPoint[0] // longitude
    let y = pPoint[1] // lattidude

    for (var i = 0, j = in_polygon.length - 1; i < pPolygon.length; j = i++) { // we itterate trough the entire polygon
        var xi = pPolygon[i][0] //longitude i
        var yi = pPolygon[i][1] //latitude  i
        var xj = pPolygon[j][0] //longitude j
        var yj = pPolygon[j][1] //latitude  j

    }

    if(((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)){    // now we check, whether an intersection between the polygon and the point exists. 
        isInside = true                                                           // if so, we change our return to TRUE
    } 

    return isInside   // we return our result.
}