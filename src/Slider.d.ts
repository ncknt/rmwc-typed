import * as React from 'react'
import { RMWC } from './Base'

declare namespace Slider {
    export interface SliderProps extends RMWC.RMWCTagProps {
        /** A callback that takes an event with event.target.value set to the Slider's value. */
        onChange?: (evt: Event) => any,
        /** The value of the Slider. */
        value?: number | string,
        /** The minimum value of the Slider. */
        min?: number | string,
        /** The maximum value of the Slider. */
        max?: number | string,
        /** A step to quantize values by. */
        step?: number | string,
        /** Displays the exact value of the Slider on the knob. */
        discrete?: boolean,
        /** Displays the individual step markers on the Slider track. */
        displayMarkers?: boolean,
        /** Disables the control. */
        disabled?: boolean
    }
}

export declare class Slider extends React.Component<Slider.SliderProps & React.HTMLProps<Slider>> { }
