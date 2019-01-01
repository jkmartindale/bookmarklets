function handler(e) {
    // Reset event handler
    document.body.style.cursor = "default";
    document.removeEventListener('click', handler, false);
    
    // Get selected element
    e = e || window.event;
    let target = e.target || e.srcElement;

    // Find the nearest element with `id` or `name` attribute
    target = ((target) => {
        // Check selected element
        if (target == document.body) {
            return null;
        }
        if (target.id) {
            return target.id;
        }
        if (target.name) {
            return target.name;
        }

        // Recursively check an element's children
        function findChildTarget(node, step) {
            if (node.id || node.name) {
                return node.id || node.name;
            }
        }

        // Recursively check current element's children, starting from the front

    })(target);

    // Do something with that element
    console.log("I think the ideal target would be " + target.id);

    while (!target.id) {
        console.log(target);
        if (target == document.body) {
            return;
        }
        target = target.previousElementSibling || target.parentNode;
    }
    console.log(target);
}
document.addEventListener('click', handler, false);
document.body.style.cursor = "crosshair";
