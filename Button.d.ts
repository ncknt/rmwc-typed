import {
    ButtonHTMLAttributes,
    Component
} from 'react'
import {
    RMWCTagProps,
    RippleTagProps
} from './Base'

export interface ButtonProps extends RMWCTagProps, RippleTagProps, ButtonHTMLAttributes<Button> {
    dense?: boolean;
    raised?: boolean;
    compact?: boolean;
    unelevated?: boolean;
    stroked?: boolean;
}

export class Button extends Component<ButtonProps> { }
