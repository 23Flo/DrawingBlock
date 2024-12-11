class FieldCanvas extends Blockly.Field {
    constructor(width, height) {
      super();
      this.width = width || 150;
      this.height = height || 150;
    }
  
    initView() {
      this.canvasElement = document.createElement('canvas');
      this.canvasElement.width = this.width;
      this.canvasElement.height = this.height;
      this.canvasElement.style.border = '1px solid black';
  
      const ctx = this.canvasElement.getContext('2d');
      let drawing = false;
  
      this.canvasElement.addEventListener('mousedown', (e) => {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
      });
  
      this.canvasElement.addEventListener('mousemove', (e) => {
        if (drawing) {
          ctx.lineTo(e.offsetX, e.offsetY);
          ctx.stroke();
        }
      });
  
      this.canvasElement.addEventListener('mouseup', () => (drawing = false));
      this.canvasElement.addEventListener('mouseout', () => (drawing = false));
  
      this.fieldGroup_.appendChild(this.canvasElement);
    }
  
    static fromJson(options) {
      return new FieldCanvas(options.width, options.height);
    }
  }
  
  Blockly.fieldRegistry.register('field_canvas', FieldCanvas);
  
  Blockly.JavaScript['drawing_canvas'] = function() {
    // The drawing canvas doesn't produce any runnable code since it is for visual interaction only.
    // You can optionally return an empty string or log some information.
  
    const code = '// Drawing canvas block does not generate executable code.\n';
    return code;
  };

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
  