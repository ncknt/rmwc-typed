import * as React from 'react'
import { RMWC } from './Base'


declare namespace Switch {
    export interface SwitchProps extends RMWC.RMWCTagProps {
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

export declare class Switch extends React.Component<Switch.SwitchProps & React.HTMLProps<Switch>> { }
