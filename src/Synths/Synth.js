import React, { useState } from "react";
import "./Synths.css";
import Harmonic from "./Harmonic";
// firebase
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";

function Synth(synth = "none") {


    return (
        <div className="synths">
            <h1>{synth.synth}</h1>
            <form>
                <Harmonic synth={synth.synth} harmonic={0} />
                <Harmonic synth={synth.synth} harmonic={1} />
                <Harmonic synth={synth.synth} harmonic={2} />
                <Harmonic synth={synth.synth} harmonic={3} />
                <Harmonic synth={synth.synth} harmonic={4} />
                <Harmonic synth={synth.synth} harmonic={5} />
                <Harmonic synth={synth.synth} harmonic={6} />
                <Harmonic synth={synth.synth} harmonic={7} />
                <Harmonic synth={synth.synth} harmonic={8} />
                <Harmonic synth={synth.synth} harmonic={9} />
                <Harmonic synth={synth.synth} harmonic={10} />
                <Harmonic synth={synth.synth} harmonic={11} />
                <Harmonic synth={synth.synth} harmonic={12} />
                <Harmonic synth={synth.synth} harmonic={13} />
                <Harmonic synth={synth.synth} harmonic={14} />
                <Harmonic synth={synth.synth} harmonic={15} />
            </form>
        </div>
    );
}

export default Synth;
