document.addEventListener('DOMContentLoaded', function () {
    // Initialize toolbox
    const toolbox = {
      kind: 'flyoutToolbox',
      contents: [
        {
          kind: 'block',
          type: 'drawing_canvas',
        },
      ],
    };
  
    // Inject Blockly workspace
    const workspace = Blockly.inject('blocklyDiv', {
      toolbox: toolbox,
      scrollbars: true,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true,
      },
    });
  
    // Update code when workspace changes
    function updateCode() {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      document.getElementById('codeArea').value = code;
    }
  
    workspace.addChangeListener(updateCode);
  
    // Run code when the button is clicked
    document.getElementById('runButton').addEventListener('click', function () {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      try {
        eval(code);
      } catch (error) {
        console.error(error);
      }
    });
  });
  