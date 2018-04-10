import {
    Component,
    HTMLAttributes
} from 'react'

export interface RippleProps extends HTMLAttributes<Ripple> {
    /** Uses the primary palette. */
    primary?: boolean,
    /** Uses the accent palette. */
    accent?: boolean,
    /** Lets a ripple grow outside of its bounds, just like on Checkboxes. */
    unbounded?: boolean
}

export class Ripple extends Component<RippleProps> { }
