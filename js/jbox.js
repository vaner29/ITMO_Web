new jBox('Tooltip', {
    attach: '.tooltip'
});

new jBox('Modal', {
    attach: '#inventory-button',
    content: $('#modal-inventory')
});

new jBox('Modal', {
    attach: '#crafting-button',
    content: $('#modal-crafting'),
    color: 'green'
});

new jBox('Modal', {
    attach: '#journal-button',
    content: $('#modal-journal')
});