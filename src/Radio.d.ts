import * as React from 'react'
import { RMWC } from './Base'

declare namespace Radio {
    export interface RadioProps extends RMWC.SimpleBaseProps<Radio> {
        /** A DOM ID for the toggle. */
        id?: string,
        /** Disables the control. */
        disabled?: boolean,
        /** Toggle the control on and off. */
        checked?: boolean | string,
        /** A label for the control. */
        label?: string
    }
    
}

export declare class Radio extends React.Component<Radio.RadioProps> { }
