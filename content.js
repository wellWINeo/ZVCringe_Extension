function replaceOnDocument({ target = document.body } = {}) {
    [
        target,
        ...target.querySelectorAll("*:not(script):not(noscript):not(style)")
    ].forEach(({ childNodes: [...nodes] }) => nodes
        .filter(({ nodeType }) => nodeType === document.TEXT_NODE)
        .forEach((textNode) => {
            textNode.textContent = textNode.textContent.replace(/[зЗ]/g, 'Z')
            textNode.textContent = textNode.textContent.replace(/[вВ]/g, 'V')
        }));
};

replaceOnDocument()