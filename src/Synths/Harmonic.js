import React, { useState, useEffect } from "react";
// firebase
import { db } from "../firebase";
import { onValue, ref, set } from "firebase/database";

function Harmonic(harmonic) {
    const [Multiple, setMultiple] = useState(1.0);
    const [Volume, setVolume] = useState(127);
    const [Wave, setWave] = useState("sine");

    // get path to the harmonic in the database
    var harmonicPath;
    if (isFundamental()) {
        harmonicPath = `synths/${harmonic.synth}/Fundamental/`;
    } else {
        harmonicPath = `synths/${harmonic.synth}/Harmonic_${harmonic.harmonic}/`;
    }

    // references in the database
    const multiplierRef = ref(db, harmonicPath + "multiplier");
    const volumeRef = ref(db, harmonicPath + "volume");
    const waveRef = ref(db, harmonicPath + "wave_type");

    useEffect(() => {
        // set values from database
        onValue(multiplierRef, (snapshot) => {
            const data = snapshot.val();
            setMultiple(data);
        });
        onValue(volumeRef, (snapshot) => {
            const data = snapshot.val();
            setVolume(data);
        });
        onValue(waveRef, (snapshot) => {
            const data = snapshot.val();
            setWave(data);
        });
    });

    const handleMultipleChange = (e) => {
        set(ref(db, harmonicPath + "multiplier"), e.target.value);
        setMultiple(e.target.value);
    };

    const handleVolumeChange = (e) => {
        set(ref(db, harmonicPath + "volume"), e.target.value);
        setVolume(e.target.value);
    };

    const handleWaveChange = (e) => {
        set(ref(db, harmonicPath + "wave_type"), e.target.value);
        setWave(e.target.value);
    }

    function isFundamental() {
        if (harmonic.harmonic === 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <label className="synth__label">
                <h2>
                    {isFundamental()
                        ? "Fundamental"
                        : `Harmonic ${harmonic.harmonic}`}
                </h2>
                <div className="synth__input">
                    <label>Multiple: </label>
                    <input
                        className="synth__float"
                        type="float"
                        min={0}
                        value={Multiple}
                        onChange={handleMultipleChange}
                        readOnly={isFundamental() ? true : false}
                        disabled={isFundamental() ? true : false}
                    />
                </div>
                <div className="synth__input">
                    <label>volume: </label>
                    <input
                        className="synth__slider"
                        type="range"
                        value={Volume}
                        onChange={handleVolumeChange}
                        min={0}
                        max={127}
                    />
                </div>
                <div className="synth__input">
                    <label>wave: </label>
                    <select
                        className="synth__select"
                        name="wave"
                        id="wave"
                        value={Wave}
                        onChange={handleWaveChange}
                    >
                        <option value="sine" defaultValue>
                            Sine
                        </option>
                        <option value="square">Square</option>
                        <option value="saw">Saw</option>
                        <option value="triangle">Triangle</option>
                    </select>
                </div>
            </label>
        </div>
    );
}

export default Harmonic;
