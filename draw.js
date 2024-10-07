export function draw(canvas) {
  const ctx = canvas.getContext("2d");

  // Set the color for the rectangle
  ctx.fillStyle = "blue";

  let size = 600;

  // x and y are in [0, 1]
  let x = Math.random();
  let y = Math.random();

  for (let i = 0; i < 100000; ++i) {
    x = x / 2;
    y = y / 2;
    
    // TODO: animate this
    let shift = 0.1;

    let r = Math.random();
    if (r < 0.33) {
      x += shift;
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
