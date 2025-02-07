'use strict';

// Всё в мм
const horizontal = 450;
const vertical = 320;
const diameter = 168;
 
console.log (
    plotterCuttingCircles(horizontal, vertical, diameter)
)




function plotterCuttingCircles(horizontal, vertical, diameter){
    const rootOfRhree = 1.74; // Корень из трёх
    const radius = diameter / 2;

    if (horizontal < vertical) [horizontal, vertical] = [vertical, horizontal];

    //simplePackaging


    const horizontalSimplePackaging = Math.floor(horizontal / diameter);
    const verticalSimplePackaging = Math.floor(vertical / diameter);


    //tightPacking

    const verticalShift = radius * rootOfRhree;
    const verticalShiftDifference = diameter - verticalShift;

    let verticalTightPackaging = verticalSimplePackaging; // Начальная точка отсчета вертикального количества кругов

    let verticalSizeForTightPacking; // длина кругов при плотной упаковке
    verticalSizeForTightPacking = verticalSimplePackaging * diameter - verticalShiftDifference * (verticalSimplePackaging - 1);

    verticalSizeForTightPacking += verticalShift;
    while (verticalSizeForTightPacking < vertical) {
        verticalTightPackaging += 1;
        verticalSizeForTightPacking += verticalShift;
    }

    if (verticalTightPackaging <= verticalSimplePackaging) 
        return {"Простая упаковка": verticalSimplePackaging * horizontalSimplePackaging};

    if (horizontalSimplePackaging * diameter + radius < horizontal) 
        return {"Плотная упаковка": verticalTightPackaging * horizontalSimplePackaging};

    const horizontalTightPackagingEven  = horizontalSimplePackaging - 1; // Чётный ряд
    const horizontalTightPackagingOdd  = horizontalSimplePackaging; // Нечётный ряд
    
    if (verticalTightPackaging % 2 == 0) {
        return {"Плотная упаковка": 
            verticalTightPackaging / 2 * (horizontalTightPackagingEven + horizontalTightPackagingOdd)};
        }
    return {"Плотная упаковка": 
        (verticalTightPackaging + 1) / 2 * horizontalTightPackagingOdd + (verticalTightPackaging - 1) / 2 * horizontalTightPackagingEven}
}