autowatch = 1;

// queue for which samples will play
var queue = [0, 0, 0, 0, 0];
var playing = [0, 0, 0, 0, 0];

function printQueue() {
    outlet(0, queue);
}

function printPlaying() {
    outlet(0, playing);
}

function setQueue(a, b) {
    queue[a] = b;
    outlet(0, queue);
}

function setPlaying(a, b) {
    playing[a] = b;
}