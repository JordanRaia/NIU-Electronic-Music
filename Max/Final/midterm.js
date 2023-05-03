autowatch = 1;

// // new Dict object
// var myDict = new Dict("synthDict");

// parses the data in the Dict object
// parsedDict - parsed Data
// parseDict - function to parse the data
function parseDict(parsedDictString, unparsedDictString) {
    // create a new Dict object to store the unparsed data
    var myDict = new Dict(unparsedDictString);

    // get the data from the Dict object as a string
    var dataAsString = myDict.get("body");

    // create a new Dict object to store the parsed data
    var parsedDict = new Dict(parsedDictString);

    // parse the data
    parsedDict.parse(dataAsString);
    outlet(0, parsedDict.name);
}

// remove the prepend from the string and convert to float
function getFloat(a, b) {
    var float;
    try {
        // attempt to remove quotes
        float = b.replace(/"/g, "");
    } catch (err) {
        // if it fails, just use the original value (assuming that means no quotes)
        float = b;
    }
    outlet(0, parseFloat(float));
}

// remove the prepend from the string and convert to float
function getInt(a, b) {
    var int;
    try {
        // attempt to remove quotes
        int = b.replace(/"/g, "");
    } catch (err) {
        // if it fails, just use the original value (assuming that means no quotes)
        int = b;
    }
    outlet(0, parseInt(int));
}

// just return b to get wave type
function getWaveType(a, b) {
    outlet(0, b);
}

// determines the note given a midi number
function getNoteFromMidi(a) {
    var midi = parseInt(a);
    var note = midi % 12;
    var octave = (midi - note) / 12 - 1;
    var noteNames = [
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
    ];
    outlet(0, noteNames[note]);
}

// gives the value of bottom of launchpad
function noteToBottomOfLaunchpad(note) {
    switch (note) {
        case "C":
            noteOnLaunchpad = 11;
            break;
        case "C#":
            noteOnLaunchpad = 11;
            break;
        case "D":
            noteOnLaunchpad = 12;
            break;
        case "D#":
            noteOnLaunchpad = 12;
            break;
        case "E":
            noteOnLaunchpad = 13;
            break;
        case "F":
            noteOnLaunchpad = 14;
            break;
        case "F#":
            noteOnLaunchpad = 14;
            break;
        case "G":
            noteOnLaunchpad = 15;
            break;
        case "G#":
            noteOnLaunchpad = 15;
            break;
        case "A":
            noteOnLaunchpad = 16;
            break;
        case "A#":
            noteOnLaunchpad = 16;
            break;
        case "B":
            noteOnLaunchpad = 17;
            break;
    }
    outlet(0, noteOnLaunchpad);
}

// converts bpm to ms
function bpmToMs(bpm) {
    var ms = (1000 * 60) / bpm;
    outlet(0, ms);
}

// converts int to chord name
function intToChordName(chord) {
    var chordNames = ["i", "ii°", "III", "iv", "v", "VI", "VII"];
    outlet(0, chordNames[chord - 1]);
}