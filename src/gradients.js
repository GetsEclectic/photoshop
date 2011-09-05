/**
 * Created by IntelliJ IDEA.
 * User: NotALamer
 * Date: 9/4/11
 * Time: 7:28 PM
 * To change this template use File | Settings | File Templates.
 */

var ad = activeDocument;
var numColors = 32;
var swatchWidth = 64;
var swatchHeight = 64;
var spacing = 1.2;

var gradientColor = new SolidColor;
gradientColor.hsb.brightness = 0;
gradientColor.hsb.hue = 0;
gradientColor.hsb.saturation = 0;

function getBWGradientColor(colorIndex, numColors){
    var gradientColor = new SolidColor;
    gradientColor.hsb.brightness = 100 * (colorIndex / numColors);
    return gradientColor;
}

var numSquaresPerRow = Math.floor(ad.width.value / (spacing * swatchWidth));
var rowIndex = 0;
var columnIndex = 0;

for(var i = 0; i <= numColors; i++){
    var newColor = getBWGradientColor(i, numColors);

    var xCoord = swatchWidth * spacing * columnIndex;
    var yCoord = swatchHeight * spacing * rowIndex;

    ad.selection.select([[xCoord,yCoord],[xCoord+swatchWidth,yCoord],[xCoord+swatchWidth,yCoord+swatchHeight],[xCoord,yCoord+swatchHeight]],
        SelectionType.REPLACE, 0, false);
    ad.selection.stroke(newColor, 1);

    columnIndex++;
    if( columnIndex >= numSquaresPerRow ){
        rowIndex++;
        columnIndex = 0;
    }
}
