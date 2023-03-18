import React, { useState, useEffect } from "react";
//firebase
import { db } from "../firebase";
import { onValue, ref, set } from "firebase/database";
//css
import "./Chords.css";

function Chords() {
    // state
    const [beat1, setBeat1] = useState(1);
    const [beat2, setBeat2] = useState(1);
    const [beat3, setBeat3] = useState(1);
    const [beat4, setBeat4] = useState(1);
    const [beat5, setBeat5] = useState(1);
    const [beat6, setBeat6] = useState(1);
    const [beat7, setBeat7] = useState(1);
    const [beat8, setBeat8] = useState(1);

    // references in the database
    const beat1Ref = ref(db, "chords/chord1");
    const beat2Ref = ref(db, "chords/chord2");
    const beat3Ref = ref(db, "chords/chord3");
    const beat4Ref = ref(db, "chords/chord4");
    const beat5Ref = ref(db, "chords/chord5");
    const beat6Ref = ref(db, "chords/chord6");
    const beat7Ref = ref(db, "chords/chord7");
    const beat8Ref = ref(db, "chords/chord8");

    useEffect(() => {
        // set values from database
        onValue(beat1Ref, (snapshot) => {
            const data = snapshot.val();
            setBeat1(data);
        });
        onValue(beat2Ref, (snapshot) => {
            const data = snapshot.val();
            setBeat2(data);
        });
        onValue(beat3Ref, (snapshot) => {
            const data = snapshot.val();
            setBeat3(data);
        });
        onValue(beat4Ref, (snapshot) => {
            const data = snapshot.val();
            setBeat4(data);
        });
        onValue(beat5Ref, (snapshot) => {
            const data = snapshot.val();
            setBeat5(data);
        });
        onValue(beat6Ref, (snapshot) => {
            const data = snapshot.val();
            setBeat6(data);
        });
        onValue(beat7Ref, (snapshot) => {
            const data = snapshot.val();
            setBeat7(data);
        });
        onValue(beat8Ref, (snapshot) => {
            const data = snapshot.val();
            setBeat8(data);
        });
    });

    const handleChordChange = (beat, chord, e) => {
        e.preventDefault();
        switch (beat) {
            case 1:
                set(ref(db, "chords/chord1"), chord); // set value in database
                setBeat1(chord); // set value in state
                break;
            case 2:
                set(ref(db, "chords/chord2"), chord);
                setBeat2(chord);
                break;
            case 3:
                set(ref(db, "chords/chord3"), chord);
                setBeat3(chord);
                break;
            case 4:
                set(ref(db, "chords/chord4"), chord);
                setBeat4(chord);
                break;
            case 5:
                set(ref(db, "chords/chord5"), chord);
                setBeat5(chord);
                break;
            case 6:
                set(ref(db, "chords/chord6"), chord);
                setBeat6(chord);
                break;
            case 7:
                set(ref(db, "chords/chord7"), chord);
                setBeat7(chord);
                break;
            case 8:
                set(ref(db, "chords/chord8"), chord);
                setBeat8(chord);
                break;
            default:
                break;
        }
    }

    return (
        <div className="chords">
            <form>
                <div className="chords__table">
                    <div className="chords__beat">
                        <div className="chords__chordLabel"></div>
                        <div className="chords__chordLabel">m1</div>
                        <div className="chords__chordLabel">m2</div>
                        <div className="chords__chordLabel">m3</div>
                        <div className="chords__chordLabel">m4</div>
                        <div className="chords__chordLabel">m5</div>
                        <div className="chords__chordLabel">m6</div>
                        <div className="chords__chordLabel">m7</div>
                        <div className="chords__chordLabel">m8</div>
                    </div>
                    <div className="chords__row">
                        <div className="chords__chordLabel">VII</div>
                        <button onClick={(e) => handleChordChange(1, 7, e)} className={beat1 === 7 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(2, 7, e)} className={beat2 === 7 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(3, 7, e)} className={beat3 === 7 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(4, 7, e)} className={beat4 === 7 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(5, 7, e)} className={beat5 === 7 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(6, 7, e)} className={beat6 === 7 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(7, 7, e)} className={beat7 === 7 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(8, 7, e)} className={beat8 === 7 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                    </div>
                    <div className="chords__row">
                        <div className="chords__chordLabel">VI</div>
                        <button onClick={(e) => handleChordChange(1, 6, e)} className={beat1 === 6 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(2, 6, e)} className={beat2 === 6 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(3, 6, e)} className={beat3 === 6 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(4, 6, e)} className={beat4 === 6 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(5, 6, e)} className={beat5 === 6 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(6, 6, e)} className={beat6 === 6 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(7, 6, e)} className={beat7 === 6 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(8, 6, e)} className={beat8 === 6 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                    </div>
                    <div className="chords__row">
                        <div className="chords__chordLabel">v</div>
                        <button onClick={(e) => handleChordChange(1, 5, e)} className={beat1 === 5 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(2, 5, e)} className={beat2 === 5 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(3, 5, e)} className={beat3 === 5 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(4, 5, e)} className={beat4 === 5 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(5, 5, e)} className={beat5 === 5 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(6, 5, e)} className={beat6 === 5 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(7, 5, e)} className={beat7 === 5 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(8, 5, e)} className={beat8 === 5 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                    </div>
                    <div className="chords__row">
                        <div className="chords__chordLabel">iv</div>
                        <button onClick={(e) => handleChordChange(1, 4, e)} className={beat1 === 4 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(2, 4, e)} className={beat2 === 4 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(3, 4, e)} className={beat3 === 4 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(4, 4, e)} className={beat4 === 4 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(5, 4, e)} className={beat5 === 4 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(6, 4, e)} className={beat6 === 4 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(7, 4, e)} className={beat7 === 4 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(8, 4, e)} className={beat8 === 4 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                    </div>
                    <div className="chords__row">
                        <div className="chords__chordLabel">III</div>
                        <button onClick={(e) => handleChordChange(1, 3, e)} className={beat1 === 3 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(2, 3, e)} className={beat2 === 3 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(3, 3, e)} className={beat3 === 3 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(4, 3, e)} className={beat4 === 3 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(5, 3, e)} className={beat5 === 3 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(6, 3, e)} className={beat6 === 3 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(7, 3, e)} className={beat7 === 3 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(8, 3, e)} className={beat8 === 3 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                    </div>
                    <div className="chords__row">
                        <div className="chords__chordLabel">ii<sup>o</sup></div>
                        <button onClick={(e) => handleChordChange(1, 2, e)} className={beat1 === 2 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(2, 2, e)} className={beat2 === 2 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(3, 2, e)} className={beat3 === 2 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(4, 2, e)} className={beat4 === 2 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(5, 2, e)} className={beat5 === 2 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(6, 2, e)} className={beat6 === 2 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(7, 2, e)} className={beat7 === 2 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(8, 2, e)} className={beat8 === 2 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                    </div>
                    <div className="chords__row">
                        <div className="chords__chordLabel">i</div>
                        <button onClick={(e) => handleChordChange(1, 1, e)} className={beat1 === 1 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(2, 1, e)} className={beat2 === 1 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(3, 1, e)} className={beat3 === 1 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(4, 1, e)} className={beat4 === 1 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(5, 1, e)} className={beat5 === 1 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(6, 1, e)} className={beat6 === 1 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(7, 1, e)} className={beat7 === 1 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                        <button onClick={(e) => handleChordChange(8, 1, e)} className={beat8 === 1 ? "chords__buttonActive" : "chords__buttonInactive"}></button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Chords;
