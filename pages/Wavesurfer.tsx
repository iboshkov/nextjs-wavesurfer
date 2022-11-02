import { useRef, useCallback } from 'react';
import { WaveForm, WaveSurfer } from 'wavesurfer-react';


const Visualizer = () => {
    const wavesurferRef = useRef<any>();

    const handleWSMount = useCallback(
        (waveSurfer: any) => {
            if (waveSurfer.markers) {
                waveSurfer.clearMarkers();
            }

            wavesurferRef.current = waveSurfer;

            if (wavesurferRef.current) {
                wavesurferRef.current.load("/bensound-ukulele.mp3");

                wavesurferRef.current.on("ready", () => {
                    console.log("WaveSurfer is ready");
                    wavesurferRef.current.play();
                });

                wavesurferRef.current.on("loading", (data: any) => {
                    console.log("loading --> ", data);
                });
            }
        },
        []
    );

    return (
        <WaveSurfer onMount={handleWSMount}>
            <WaveForm id={'easf'} />
        </WaveSurfer>
    )
}

export default Visualizer;