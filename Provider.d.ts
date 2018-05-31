import {
    Component,
    ReactNode
} from 'react'
import {
    SimpleBaseProps
} from './Base'

type IconStrategy = "auto" | "ligature" | "className" | "url" | "component" | "custom";

export interface RMWCProviderProps extends SimpleBaseProps<RMWCProvider> {
    /** Set the buttons ripple effect globally */
    buttonDefaultRipple?: boolean,
    /** Set the listItems ripple effect globally */
    listItemDefaultRipple?: boolean,
    /** Set the iconClassNameBase. Read the icon docs for more info. */
    iconClassNameBase?: string,
    /** Set the iconClassNamePrefix. Read the icon docs for more info. */
    iconClassNamePrefix?: string,
    /** Set the default iconStrategy. Read the icon docs for more info. */
    iconStrategy?: IconStrategy,
    /** Sets a default render function to be used when the iconStrategy is custom */
    iconRender?: (props: { content: ReactNode, className: string }) => any,
    /** Children to render */
    children?: ReactNode
}

export class RMWCProvider extends Component<RMWCProviderProps> { }
