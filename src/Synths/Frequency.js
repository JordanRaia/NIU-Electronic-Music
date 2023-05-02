import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { onValue, ref, set } from "firebase/database";
import "./Synths.css";

function Frequency({ harmonic = 0, synth = "none"}) {
    const [Frequency, setFrequency] = useState(127);

    // get path to the harmonic in the database
    var harmonicPath;
    if (isFundamental()) {
        harmonicPath = `synths/${synth}/Fundamental/`;
    } else {
        harmonicPath = `synths/${synth}/Harmonic_${harmonic}/`;
    }

    const frequencyRef = ref(db, harmonicPath + "multiplier");

    useEffect(() => {
        // set values from database
        onValue(frequencyRef, (snapshot) => {
            const data = snapshot.val();
            setFrequency(data);
        });
    });

    const handleFrequencyChange = (e) => {
        set(ref(db, harmonicPath + "multiplier"), e.target.value);
        setFrequency(e.target.value);
    };

    function isFundamental() {
        if (harmonic === 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="synths__middle">
            <div className="synths__sliderContainer2">
                <input
                    type="range"
                    id="slider"
                    className="synths__slider2"
                    onChange={handleFrequencyChange}
                    step={0.5}
                    min={0.5}
                    max={15}
                    value={Frequency}
                    disabled={isFundamental()}
                ></input>
            </div>
        </div>
    );
}

export default Frequency;
