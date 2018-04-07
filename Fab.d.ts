import {
    ButtonHTMLAttributes,
    Component
} from 'react'
import {
    RMWCTagProps,
    RippleTagProps
} from './Base'

export interface FabProps extends RMWCTagProps, RippleTagProps, ButtonHTMLAttributes<Fab> {
    mini?: boolean;
}

export class Fab extends Component<FabProps> { }

