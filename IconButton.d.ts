import {
    ButtonHTMLAttributes,
    Component,
    ReactNode
} from 'react'
import {
    UseProps
} from './Base'

export interface IconButtonProps extends UseProps<IconButton>, ButtonHTMLAttributes<IconButton> {
    /* Specify the icon to use as a children */
    children?: ReactNode
}

export class IconButton extends Component<IconButtonProps> {}
