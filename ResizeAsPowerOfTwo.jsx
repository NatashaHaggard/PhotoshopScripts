// A Script that rounds up an image to the nearest power of 2.
// by Natasha Haggard

// get a reference to the current (active) document and store it in a variable named "doc"
var currentActiveDoc = app.activeDocument;  

// set units to pixels
var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

// change the color mode to RGB
currentActiveDoc.changeMode(ChangeMode.RGB);  

// these are our values for the current width and height (in pixels) of our image
var currentWidth = currentActiveDoc.width;
var currentHeight = currentActiveDoc.height;

// these are our values for the END RESULT width and height (in pixels) of our image
var newWidth = PowerOfTwo(currentWidth);
var newHeight = PowerOfTwo(currentHeight);

// do the resizing
function PowerOfTwo(value){

    var p = 1;
  
    while(p < value)
    {
        p*=2;
    }

    return p;
}

// Convert the canvas size as informed above for the END RESULT
app.activeDocument.resizeCanvas(UnitValue(newWidth,"px"),UnitValue(newHeight,"px"));

//To Do:
//Save file out as PNG