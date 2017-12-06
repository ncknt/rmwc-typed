import * as React from 'react'
import { RMWC } from './Base'

declare namespace Ripple {
    export interface RippleProps {
        /** Uses the primary palette. */
        primary?: boolean,
        /** Uses the accent palette. */
        accent?: boolean,
        /** Lets a ripple grow outside of its bounds, just like on Checkboxes. */
        unbounded?: boolean
    }
}

export declare class Ripple extends React.Component<Ripple.RippleProps & React.HTMLProps<Ripple>> { }
