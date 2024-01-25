// Custom HTML Input Component
grapesjs.plugins.add('custom-html', editor => {
  editor.Components.addType('custom-html', {
    model: {
      defaults: {
        tagName: 'div',
        content: 'Custom HTML Content',
        traits: [
          {
            type: 'button',
            label: 'Edit HTML',
            name: 'edit-html',
          },
        ],
      },
    },
  });
});

// Register a custom modal for HTML input
editor.Panels.addButton('options', {
  id: 'open-html-popup',
  className: 'fa fa-code',
  command: 'open-html-popup',
  attributes: { title: 'Edit HTML' },
});

editor.Commands.add('open-html-popup', {
  run: (editor, sender) => {
    // Open a modal for HTML input
    const htmlInput = prompt('Enter HTML code:', editor.getSelected().get('content'));

    if (htmlInput !== null) {
      // Update the content with the entered HTML
      editor.getSelected().set('content', htmlInput);
    }
  },
});
