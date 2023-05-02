import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { onValue, ref, set } from "firebase/database";
import "./Synths.css";

function Dynamic({ harmonic = 0, synth = "none" }) {
    const [Volume, setVolume] = useState(127);

    // get path to the harmonic in the database
    var harmonicPath;
    if (isFundamental()) {
        harmonicPath = `synths/${synth}/Fundamental/`;
    } else {
        harmonicPath = `synths/${synth}/Harmonic_${harmonic}/`;
    }

    const volumeRef = ref(db, harmonicPath + "volume");

    useEffect(() => {
        // set values from database
        onValue(volumeRef, (snapshot) => {
            const data = snapshot.val();
            setVolume(data);
        });
    });

    const handleVolumeChange = (e) => {
        set(ref(db, harmonicPath + "volume"), e.target.value);
        setVolume(e.target.value);
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
            <div className="synths__sliderContainer">
                <input
                    type="range"
                    id="slider"
                    className="synths__slider"
                    onChange={handleVolumeChange}
                    min={0}
                    max={127}
                    value={Volume}
                ></input>
            </div>
        </div>
    );
}

export default Dynamic;
