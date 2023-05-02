import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { onValue, ref, set } from "firebase/database";
import "./Synths.css";
import Sine from "../icons/sine.png";
import Square from "../icons/square.png";
import Saw from "../icons/saw.png";
import Triangle from "../icons/triangle.png";

function Shape() {
    const [Wave0, setWave0] = useState("sine");
    const [Wave1, setWave1] = useState("sine");
    const [Wave2, setWave2] = useState("sine");
    const [Wave3, setWave3] = useState("sine");
    const [Wave4, setWave4] = useState("sine");
    const [Wave5, setWave5] = useState("sine");
    const [Wave6, setWave6] = useState("sine");
    const [Wave7, setWave7] = useState("sine");
    const [Wave8, setWave8] = useState("sine");
    const [Wave9, setWave9] = useState("sine");
    const [Wave10, setWave10] = useState("sine");
    const [Wave11, setWave11] = useState("sine");
    const [Wave12, setWave12] = useState("sine");
    const [Wave13, setWave13] = useState("sine");
    const [Wave14, setWave14] = useState("sine");
    const [Wave15, setWave15] = useState("sine");

    const wave0Ref = ref(db, "synths/lead/Fundamental/wave_type");
    const wave1Ref = ref(db, "synths/lead/Harmonic_1/wave_type");
    const wave2Ref = ref(db, "synths/lead/Harmonic_2/wave_type");
    const wave3Ref = ref(db, "synths/lead/Harmonic_3/wave_type");
    const wave4Ref = ref(db, "synths/lead/Harmonic_4/wave_type");
    const wave5Ref = ref(db, "synths/lead/Harmonic_5/wave_type");
    const wave6Ref = ref(db, "synths/lead/Harmonic_6/wave_type");
    const wave7Ref = ref(db, "synths/lead/Harmonic_7/wave_type");
    const wave8Ref = ref(db, "synths/lead/Harmonic_8/wave_type");
    const wave9Ref = ref(db, "synths/lead/Harmonic_9/wave_type");
    const wave10Ref = ref(db, "synths/lead/Harmonic_10/wave_type");
    const wave11Ref = ref(db, "synths/lead/Harmonic_11/wave_type");
    const wave12Ref = ref(db, "synths/lead/Harmonic_12/wave_type");
    const wave13Ref = ref(db, "synths/lead/Harmonic_13/wave_type");
    const wave14Ref = ref(db, "synths/lead/Harmonic_14/wave_type");
    const wave15Ref = ref(db, "synths/lead/Harmonic_15/wave_type");

    useEffect(() => {
        onValue(wave0Ref, (snapshot) => {
            const data = snapshot.val();
            setWave0(data);
        });
        onValue(wave1Ref, (snapshot) => {
            const data = snapshot.val();
            setWave1(data);
        });
        onValue(wave2Ref, (snapshot) => {
            const data = snapshot.val();
            setWave2(data);
        });
        onValue(wave3Ref, (snapshot) => {
            const data = snapshot.val();
            setWave3(data);
        });
        onValue(wave4Ref, (snapshot) => {
            const data = snapshot.val();
            setWave4(data);
        });
        onValue(wave5Ref, (snapshot) => {
            const data = snapshot.val();
            setWave5(data);
        });
        onValue(wave6Ref, (snapshot) => {
            const data = snapshot.val();
            setWave6(data);
        });
        onValue(wave7Ref, (snapshot) => {
            const data = snapshot.val();
            setWave7(data);
        });
        onValue(wave8Ref, (snapshot) => {
            const data = snapshot.val();
            setWave8(data);
        });
        onValue(wave9Ref, (snapshot) => {
            const data = snapshot.val();
            setWave9(data);
        });
        onValue(wave10Ref, (snapshot) => {
            const data = snapshot.val();
            setWave10(data);
        });
        onValue(wave11Ref, (snapshot) => {
            const data = snapshot.val();
            setWave11(data);
        });
        onValue(wave12Ref, (snapshot) => {
            const data = snapshot.val();
            setWave12(data);
        });
        onValue(wave13Ref, (snapshot) => {
            const data = snapshot.val();
            setWave13(data);
        });
        onValue(wave14Ref, (snapshot) => {
            const data = snapshot.val();
            setWave14(data);
        });
        onValue(wave15Ref, (snapshot) => {
            const data = snapshot.val();
            setWave15(data);
        });
    });

    const handleWaveChange = (wave, harmonic, e) => {
        e.preventDefault();
        switch (harmonic) {
            case 0:
                set(ref(db, "synths/lead/Fundamental/wave_type"), wave);
                setWave0(wave);
                break;
            case 1:
                set(ref(db, "synths/lead/Harmonic_1/wave_type"), wave);
                setWave1(wave);
                break;
            case 2:
                set(ref(db, "synths/lead/Harmonic_2/wave_type"), wave);
                setWave2(wave);
                break;
            case 3:
                set(ref(db, "synths/lead/Harmonic_3/wave_type"), wave);
                setWave3(wave);
                break;
            case 4:
                set(ref(db, "synths/lead/Harmonic_4/wave_type"), wave);
                setWave4(wave);
                break;
            case 5:
                set(ref(db, "synths/lead/Harmonic_5/wave_type"), wave);
                setWave5(wave);
                break;
            case 6:
                set(ref(db, "synths/lead/Harmonic_6/wave_type"), wave);
                setWave6(wave);
                break;
            case 7:
                set(ref(db, "synths/lead/Harmonic_7/wave_type"), wave);
                setWave7(wave);
                break;
            case 8:
                set(ref(db, "synths/lead/Harmonic_8/wave_type"), wave);
                setWave8(wave);
                break;
            case 9:
                set(ref(db, "synths/lead/Harmonic_9/wave_type"), wave);
                setWave9(wave);
                break;
            case 10:
                set(ref(db, "synths/lead/Harmonic_10/wave_type"), wave);
                setWave10(wave);
                break;
            case 11:
                set(ref(db, "synths/lead/Harmonic_11/wave_type"), wave);
                setWave11(wave);
                break;
            case 12:
                set(ref(db, "synths/lead/Harmonic_12/wave_type"), wave);
                setWave12(wave);
                break;
            case 13:
                set(ref(db, "synths/lead/Harmonic_13/wave_type"), wave);
                setWave13(wave);
                break;
            case 14:
                set(ref(db, "synths/lead/Harmonic_14/wave_type"), wave);
                setWave14(wave);
                break;
            case 15:
                set(ref(db, "synths/lead/Harmonic_15/wave_type"), wave);
                setWave15(wave);
                break;
            default:
                break;
        }
    };

    return (
        <div className="shape__table">
            <div className="shape__row">
                <img src={Sine} alt="Sine" className="shape__waveImg" />
                <button onClick={(e) => handleWaveChange("sine", 0, e)} className={Wave0 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 1, e)} className={Wave1 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 2, e)} className={Wave2 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 3, e)} className={Wave3 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 4, e)} className={Wave4 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 5, e)} className={Wave5 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 6, e)} className={Wave6 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 7, e)} className={Wave7 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 8, e)} className={Wave8 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 9, e)} className={Wave9 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 10, e)} className={Wave10 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 11, e)} className={Wave11 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 12, e)} className={Wave12 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 13, e)} className={Wave13 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 14, e)} className={Wave14 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("sine", 15, e)} className={Wave15 === "sine" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
            </div>
            <div className="shape__row">
                <img src={Square} alt="Square" className="shape__waveImg" />
                <button onClick={(e) => handleWaveChange("square", 0, e)} className={Wave0 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 1, e)} className={Wave1 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 2, e)} className={Wave2 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 3, e)} className={Wave3 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 4, e)} className={Wave4 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 5, e)} className={Wave5 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 6, e)} className={Wave6 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 7, e)} className={Wave7 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 8, e)} className={Wave8 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 9, e)} className={Wave9 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 10, e)} className={Wave10 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 11, e)} className={Wave11 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 12, e)} className={Wave12 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 13, e)} className={Wave13 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 14, e)} className={Wave14 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("square", 15, e)} className={Wave15 === "square" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
            </div>
            <div className="shape__row">
                <img src={Saw} alt="Saw" className="shape__waveImg" />
                <button onClick={(e) => handleWaveChange("saw", 0, e)} className={Wave0 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 1, e)} className={Wave1 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 2, e)} className={Wave2 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 3, e)} className={Wave3 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 4, e)} className={Wave4 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 5, e)} className={Wave5 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 6, e)} className={Wave6 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 7, e)} className={Wave7 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 8, e)} className={Wave8 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 9, e)} className={Wave9 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 10, e)} className={Wave10 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 11, e)} className={Wave11 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 12, e)} className={Wave12 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 13, e)} className={Wave13 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 14, e)} className={Wave14 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("saw", 15, e)} className={Wave15 === "saw" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
            </div>
            <div className="shape__row">
                <img src={Triangle} alt="Saw" className="shape__waveImg" />
                <button onClick={(e) => handleWaveChange("triangle", 0, e)} className={Wave0 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 1, e)} className={Wave1 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 2, e)} className={Wave2 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 3, e)} className={Wave3 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 4, e)} className={Wave4 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 5, e)} className={Wave5 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 6, e)} className={Wave6 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 7, e)} className={Wave7 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 8, e)} className={Wave8 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 9, e)} className={Wave9 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 10, e)} className={Wave10 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 11, e)} className={Wave11 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 12, e)} className={Wave12 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 13, e)} className={Wave13 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 14, e)} className={Wave14 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
                <button onClick={(e) => handleWaveChange("triangle", 15, e)} className={Wave15 === "triangle" ? "shape__buttonActive" : "shape__buttonInactive"}></button>
            </div>
        </div>
    );
}

export default Shape;
