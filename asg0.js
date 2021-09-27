// DrawRectangle.js
function main() {
  // Retrieve the <canvas> element
  var canvas = document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(black, 1.0)';  // Set a blue color
  ctx.fillRect(120, 10, 150, 150);        // Fill a rectangle with the color

  var v1 = new Vector3(2.5, 2.5, 0);
  console.log(v);

  function drawVector(v, color) {
    console.log(v);
    // scale v1 coordinates by 20
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(v.elements[0]*20, v.elements[1]*20);

    ctx.strokeStyle = color;
    ctx.stroke();
  }
  drawVector(v1, "red");
}
