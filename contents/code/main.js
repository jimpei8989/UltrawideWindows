function newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
    var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
    var width;
    if (x == numberXslots) {
        width = maxArea.width / numberXslots;
    } else {
        width = maxArea.width / numberXslots;
    }

    var height;
    if (y == numberYslots) {
        height = maxArea.height / numberYslots;
    } else {
        height = maxArea.height / numberYslots;
    }

    var newX = maxArea.x + width * x;
    var newY = maxArea.y + height * y;
    return [newX, newY, width * xSlotToFill, height * ySlotToFill]
}
function reposition(client, newX, newY, w, h) {
    client.geometry = {
        x: Math.round(newX),
        y: Math.round(newY),
        width: Math.round(w),
        height: Math.round(h)
    };
}

function move(workspace, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
    var client = workspace.activeClient;
    if (client.moveable) {
        arr = newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill);
        var newX = arr[0],
            newY = arr[1],
            w = arr[2],
            h = arr[3];
        reposition(client, newX, newY, w, h)
    }
}

function center(workspace) {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var newX = maxArea.x + ((maxArea.width - client.width) / 2);
        var newY = maxArea.y + ((maxArea.height - client.height) / 2);
        reposition(client, newX, newY, client.width, client.height)
    }
}

// GRID 1/2 width, full height
registerShortcut("Resize to [1/2,1] and place on left", "UltrawideWindows: 1/2 width and full height, on left", "Ctrl+Meta+Left", function () {
    move(workspace, 2, 1, 0, 0, 1, 1)
});
registerShortcut("Resize to [1/2,1] and place on right", "UltrawideWindows: 1/2 width and full height, on right", "Ctrl+Meta+Right", function () {
    move(workspace, 2, 1, 1, 0, 1, 1)
});

// GRID 2/3 width, full height
registerShortcut("Resize to [2/3,1] and place on left", "UltrawideWindows: 2/3 width and full height, on left", "Ctrl+Meta+E", function () {
    move(workspace, 3, 1, 0, 0, 2, 1)
});
registerShortcut("Resize to [2/3,1] and place on center", "UltrawideWindows: 2/3 width and full height, on center", "Ctrl+Meta+R", function () {
    move(workspace, 3, 1, 0.5, 0, 2, 1)
});
registerShortcut("Resize to [2/3,1] and place on right", "UltrawideWindows: 2/3 width and full height, on right", "Ctrl+Meta+T", function () {
    move(workspace, 3, 1, 1, 0, 2, 1)
});

// GRID 1/3 width, full height
registerShortcut("Resize to [1/3,1] and place on left", "UltrawideWindows: 1/3 width and full height, on left", "Ctrl+Meta+D", function () {
    move(workspace, 3, 1, 0, 0, 1, 1)
});
registerShortcut("Resize to [1/3,1] and place on center", "UltrawideWindows: 1/3 width and full height, on center", "Ctrl+Meta+F", function () {
    move(workspace, 3, 1, 1, 0, 1, 1)
});
registerShortcut("Resize to [1/3,1] and place on right", "UltrawideWindows: 1/3 width and full height, on right", "Ctrl+Meta+G", function () {
    move(workspace, 3, 1, 2, 0, 1, 1)
});

// GRID 1/3 width, 1/2 height
registerShortcut("Resize to [1/3,1/2] and place on upper left", "UltrawideWindows: 1/3 width and 1/2 height, on upper left", "Ctrl+Meta+1", function () {
    move(workspace, 3, 2, 0, 0, 1, 1)
});
registerShortcut("Resize to [1/3,1/2] and place on upper center", "UltrawideWindows: 1/3 width and 1/2 height, on upper center", "Ctrl+Meta+2", function () {
    move(workspace, 3, 2, 1, 0, 1, 1)
});
registerShortcut("Resize to [1/3,1/2] and place on upper right", "UltrawideWindows: 1/3 width and 1/2 height, on upper right", "Ctrl+Meta+3", function () {
    move(workspace, 3, 2, 2, 0, 1, 1)
});
registerShortcut("Resize to [1/3,1/2] and place on lower left", "UltrawideWindows: 1/3 width and 1/2 height, on lower left", "Ctrl+Meta+4", function () {
    move(workspace, 3, 2, 0, 1, 1, 1)
});
registerShortcut("Resize to [1/3,1/2] and place on lower center", "UltrawideWindows: 1/3 width and 1/2 height, on lower center", "Ctrl+Meta+5", function () {
    move(workspace, 3, 2, 1, 1, 1, 1)
});
registerShortcut("Resize to [1/3,1/2] and place on lower right", "UltrawideWindows: 1/3 width and 1/2 height, on lower right", "Ctrl+Meta+6", function () {
    move(workspace, 3, 2, 2, 1, 1, 1)
});

// GRID 1/2 width, 1/2 height
registerShortcut("Resize to [1/2,1/2] and place on upper left", "UltrawideWindows: 1/2 width and full height, on upper left", "Ctrl+Meta+7", function () {
    move(workspace, 2, 2, 0, 0, 1, 1)
});
registerShortcut("Resize to [1/2,1/2] and place on upper right", "UltrawideWindows: 1/2 width and full height, on upper right", "Ctrl+Meta+8", function () {
    move(workspace, 2, 2, 1, 0, 1, 1)
});
registerShortcut("Resize to [1/2,1/2] and place on lower left", "UltrawideWindows: 1/2 width and full height, on lower left", "Ctrl+Meta+9", function () {
    move(workspace, 2, 2, 0, 1, 1, 1)
});
registerShortcut("Resize to [1/2,1/2] and place on lower right", "UltrawideWindows: 1/2 width and full height, on lower right", "Ctrl+Meta+0", function () {
    move(workspace, 2, 1, 1, 1, 1, 1)
});


// Place on center
registerShortcut("MoveWindowToCenter", "UltrawideWindows: Center Window", "Ctrl+Meta+C", function () {
    center(workspace)
});

// Place on center, 2/3 width and 2/3 height
registerShortcut("Resize to [2/3,2/3] and place on center", "UltrawideWindows: 2/3 width and 2/3 height, on center", "Ctrl+Meta+V", function () {
    move(workspace, 6,6,1,1,4,4)
    center(workspace)
});

