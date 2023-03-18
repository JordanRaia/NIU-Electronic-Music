autowatch = 1;
outlets = 4;

// converts a number representing a chord to individual midi notes
// currently hardcoded for c minor
function getMidiNotesForChord(chord) {
    var midiNotes1 = 0;
    var midiNotes2 = 0;
    var midiNotes3 = 0;

    switch (chord) {
        case 1:
            midiNotes1 = 48;
            midiNotes2 = 51;
            midiNotes3 = 55;
            break;
        case 2:
            midiNotes1 = 50;
            midiNotes2 = 53;
            midiNotes3 = 56;
            break;
        case 3:
            midiNotes1 = 51;
            midiNotes2 = 55;
            midiNotes3 = 58;
            break;
        case 4:
            midiNotes1 = 53;
            midiNotes2 = 56;
            midiNotes3 = 60;
            break;
        case 5:
            midiNotes1 = 55;
            midiNotes2 = 58;
            midiNotes3 = 62;
            break;
        case 6:
            midiNotes1 = 56;
            midiNotes2 = 60;
            midiNotes3 = 63;
            break;
        case 7:
            midiNotes1 = 58;
            midiNotes2 = 62;
            midiNotes3 = 65;
            break;
    }

    var midiNotes1List = [midiNotes1];
    var midiNotes2List = [midiNotes2];
    var midiNotes3List = [midiNotes3];

    // post(midiNotes1List, midiNotes2List, midiNotes3List);

    outlet(0, midiNotes1List);
    outlet(1, midiNotes2List);
    outlet(2, midiNotes3List);
    outlet(3, "bang");
}
