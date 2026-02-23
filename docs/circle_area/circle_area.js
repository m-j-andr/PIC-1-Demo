const b = 88;     // boundary
const r = 256;    // radius
const c = b + r;  // center




const canvas = document.getElementById('riemann');
const context = canvas.getContext('2d');

canvas.width  = 2 * c + 1;
canvas.height = 2 * c + 1;




function draw_four_squares(x, y, m, color) {
  context.fillStyle = color;

  context.fillRect(c + x, c + y,  m,  m);
  context.fillRect(c - x, c + y, -m,  m);
  context.fillRect(c + x, c - y,  m, -m);
  context.fillRect(c - x, c - y, -m, -m);
}

function draw_line(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}




function draw(m) {
  context.fillStyle = 'white';
  context.fillRect(0, 0, 2 * c + 1, 2 * c + 1);


  for (let x = 0; x < r; x += m) {
    for (let y = 0; y < r; y += m) {
      const inner  =   x      *  x       +   y      *  y;
      const outer  =  (x + m) * (x + m)  +  (y + m) * (y + m);

      if (outer <= r * r) {
        draw_four_squares(x, y, m, 'blue');
      }
      else if (inner < r * r) {
        draw_four_squares(x, y, m, 'yellow');
      }
    }
  }


  if (m > 5) {
    for (let x = 0; x <= c; x += m) {
      draw_line(c - x, 0, c - x, 2 * c);
      draw_line(c + x, 0, c + x, 2 * c);
    }

    for (let y = 0; y <= c; y += m) {
      draw_line(0, c - y, 2 * c, c - y);
      draw_line(0, c + y, 2 * c, c + y);
    }
  }


  context.beginPath();
  context.ellipse(c, c, r, r, 0, 0, 2 * Math.PI);
  context.stroke();
}




function update_values(m) {
  let squares_lower = 0;
  let squares_upper = 0;

  for (let x = 0; x < r; x += m) {
    for (let y = 0; y < r; y += m) {
      const inner  =   x      *  x       +   y      *  y;
      const outer  =  (x + m) * (x + m)  +  (y + m) * (y + m);

      if (outer <= r * r) {
        squares_lower += 4;
      }
      if (inner < r * r) {
        squares_upper += 4;
      }
    }
  }

  const mesh_size = m / r;
  const area = mesh_size * mesh_size;

  document.getElementById('squares_lower').textContent = squares_lower;
  document.getElementById('squares_upper').textContent = squares_upper;
  document.getElementById('area'         ).textContent =                  area .toFixed(6);
  document.getElementById('area_lower'   ).textContent = (squares_lower * area).toFixed(4);
  document.getElementById('area_upper'   ).textContent = (squares_upper * area).toFixed(4);
}




const textbox = document.getElementById('mesh_textbox');
const button  = document.getElementById('mesh_button');
const slider  = document.getElementById('mesh_slider');


button.addEventListener('click', function() {
  const pattern = /(^\.[0-9]+$)|(^0\.[0-9]+$)|(^1$)|(^1\.0*$)/;

  const input = textbox.value;

  if (!pattern.test(input)) {
    alert('Make sure to enter a number **bigger than** 0.001 and less than 1, for example, 0.125');
    return;
  }

  const number = parseFloat(input);

  if (number < 0.001) {
    alert('Make sure to enter a number **bigger than** 0.001 and less than 1, for example, 0.125');
    return;
  }

  const m = number * r;

  slider.value = m;

  draw(m);
  update_values(m);
});


slider.addEventListener('input', function() {
  textbox.value = (this.valueAsNumber / r).toFixed(8);

  draw(this.valueAsNumber);
  update_values(this.valueAsNumber);
});




slider.value = 88;
textbox.value = (slider.valueAsNumber / r).toFixed(8);


draw(slider.valueAsNumber);
update_values(slider.valueAsNumber);

