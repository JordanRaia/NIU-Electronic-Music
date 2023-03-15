import React from "react";
import "./Synths.css";
import Harmonic from "./Harmonic";

function Pad() {
    const synth = "pad";

    return (
        <div className="synths">
            <h2>Generate sound using AI</h2>
            <form className="synth__flex">
                <input className="synth__text" type="text" />
                <button disabled>Submit</button>
            </form>
            <form>
                <Harmonic synth={synth} harmonic={0} />
                <Harmonic synth={synth} harmonic={1} />
                <Harmonic synth={synth} harmonic={2} />
                <Harmonic synth={synth} harmonic={3} />
                <Harmonic synth={synth} harmonic={4} />
                <Harmonic synth={synth} harmonic={5} />
                <Harmonic synth={synth} harmonic={6} />
                <Harmonic synth={synth} harmonic={7} />
                <Harmonic synth={synth} harmonic={8} />
                <Harmonic synth={synth} harmonic={9} />
                <Harmonic synth={synth} harmonic={10} />
                <Harmonic synth={synth} harmonic={11} />
                <Harmonic synth={synth} harmonic={12} />
                <Harmonic synth={synth} harmonic={13} />
                <Harmonic synth={synth} harmonic={14} />
                <Harmonic synth={synth} harmonic={15} />
            </form>
        </div>
    );
}

export default Pad;
