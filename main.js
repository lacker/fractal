import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { draw } from './draw.js'

document.querySelector('#app').innerHTML = `
  <canvas id="canvas" width="600" height="600" style="border:1px solid black;">
  </canvas>
`;

draw(document.querySelector('#canvas'))
