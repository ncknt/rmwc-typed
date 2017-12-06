import * as React from 'react'
import {RMWC} from './Base'

declare namespace Button {
    export interface ButtonBaseProps extends RMWC.RMWCTagProps, RMWC.RippleTagProps {
        dense?: boolean;
        raised?: boolean;
        compact?: boolean;
        unelevated?: boolean;
        stroked?: boolean;
    }
}
export declare class Button extends React.Component<Button.ButtonBaseProps & React.HTMLProps<Button>> {}

