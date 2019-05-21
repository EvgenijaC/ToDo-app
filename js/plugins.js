//Drag and Drop
var dd1 = document.getElementById('drag&drop1');
var dd2 = document.getElementById('drag&drop2');

//var sortable = Sortable.create(el);
new Sortable(dd1, {
    group: {
        sort: true,
        name: 'shared' 
    },
    animation: 150
});

new Sortable(dd2, {
    group: {
        sort: true,
        name: 'shared'
    },
    animation: 150
});