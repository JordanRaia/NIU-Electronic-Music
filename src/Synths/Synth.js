import React from "react";
import "./Synths.css";
import Dynamic from "./Dynamic";
import Shape from "./Shape";
import Frequency from "./Frequency";
// import Slider from "@mui/material/Slider";
// import Harmonic from "./Harmonic";

function Lead({ synth = "none" }) {
    return (
        <div className="synths">
            <div className="synths__fullWidth">
                <div className="synths__sliders">
                    <Dynamic synth={"lead"} harmonic={0} />
                    <Dynamic synth={"lead"} harmonic={1} />
                    <Dynamic synth={"lead"} harmonic={2} />
                    <Dynamic synth={"lead"} harmonic={3} />
                    <Dynamic synth={"lead"} harmonic={4} />
                    <Dynamic synth={"lead"} harmonic={5} />
                    <Dynamic synth={"lead"} harmonic={6} />
                    <Dynamic synth={"lead"} harmonic={7} />
                    <Dynamic synth={"lead"} harmonic={8} />
                    <Dynamic synth={"lead"} harmonic={9} />
                    <Dynamic synth={"lead"} harmonic={10} />
                    <Dynamic synth={"lead"} harmonic={11} />
                    <Dynamic synth={"lead"} harmonic={12} />
                    <Dynamic synth={"lead"} harmonic={13} />
                    <Dynamic synth={"lead"} harmonic={14} />
                    <Dynamic synth={"lead"} harmonic={15} />
                </div>
                <div className="synths__sliders">
                    <Frequency synth={"lead"} harmonic={0} />
                    <Frequency synth={"lead"} harmonic={1} />
                    <Frequency synth={"lead"} harmonic={2} />
                    <Frequency synth={"lead"} harmonic={3} />
                    <Frequency synth={"lead"} harmonic={4} />
                    <Frequency synth={"lead"} harmonic={5} />
                    <Frequency synth={"lead"} harmonic={6} />
                    <Frequency synth={"lead"} harmonic={7} />
                    <Frequency synth={"lead"} harmonic={8} />
                    <Frequency synth={"lead"} harmonic={9} />
                    <Frequency synth={"lead"} harmonic={10} />
                    <Frequency synth={"lead"} harmonic={11} />
                    <Frequency synth={"lead"} harmonic={12} />
                    <Frequency synth={"lead"} harmonic={13} />
                    <Frequency synth={"lead"} harmonic={14} />
                    <Frequency synth={"lead"} harmonic={15} />
                </div>
                <div className="sliders__othersContianer">
                    <Shape synth={"lead"} harmonic={0} />
                </div>
            </div>
        </div>
    );
}

export default Lead;
