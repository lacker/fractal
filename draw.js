export function draw(canvas) {
  // Set the color for the rectangle
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  let fraction = 0.0;
  setInterval(() => {
    fraction += 0.01;
    if (fraction > 1) {
      fraction -= 1;
    }
    drawOneStep(ctx, fraction);
  }, 1000);
}

function drawOneStep(ctx, fraction) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let size = 600;

  // x and y are in [0, 1]
  let x = Math.random();
  let y = Math.random();

  for (let i = 0; i < 100000; ++i) {
    x = x / 2;
    y = y / 2;
    
    let r = Math.random();
    if (r < 0.33) {
      x += fraction;
    } else if (r > 0.66) {
      // Bottom left
      y += 0.5;
    } else {
      // Bottom right
      x += 0.5;
      y += 0.5;
    }

    if (i < 100) {
      continue;
    }
    ctx.fillRect(x * size, y * size, 1, 1);
  }
}
