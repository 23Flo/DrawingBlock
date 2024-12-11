Blockly.defineBlocksWithJsonArray([
    {
      "type": "drawing_canvas",
      "message0": "Drawing Canvas %1",
      "args0": [
        {
          "type": "field_canvas",
          "width": 200,
          "height": 200
        }
      ],
      "colour": 160,
      "tooltip": "A block with an embedded canvas for drawing.",
      "helpUrl": ""
    }
  ]);

    javascript.javascriptGenerator.forBlock['drawing_canvas'] = function(block) {
        var code = `
          (function() {
            var canvas = document.createElement('canvas');
            canvas.id = '';
            canvas.width = 200;
            canvas.height = 200;
            canvas.style.border = "1px solid black";
            document.body.appendChild(canvas);
      
            var ctx = canvas.getContext('2d');
            var drawing = false;
        
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'white';
            ctx.fillsyle = "black";

            clearBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            predictionSpan.textContent = '?';
            });

            canvas.addEventListener('mousedown', function(e) {
              drawing = true;
              ctx.beginPath();
              ctx.moveTo(e.offsetX, e.offsetY);
            });
      
            canvas.addEventListener('mousemove', function(e) {
              if (drawing) {
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
              }
            });
      
            canvas.addEventListener('mouseup', function() {
              drawing = false;
            });
      
            canvas.addEventListener('mouseout', function() {
              drawing = false;
            });
          })();
        `;
        return code;
      };