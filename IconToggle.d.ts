import {
    Component,
    ReactNode
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface IconToggleProps extends SimpleBaseProps<IconToggle> {
    onChange(evt: object): boolean | Event | undefined;
    on: object;
    off: object;
    value?: boolean;
}

export class IconToggle extends Component<IconToggleProps> { }
