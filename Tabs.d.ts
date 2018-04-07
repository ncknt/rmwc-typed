import {
    Component
} from 'react'
import {
    RMWCTagProps,
    SimpleBaseProps
} from './Base'

// Cannot assign React.HTMLAttributes because onChange signature is incompatible
export interface TabBarProps extends RMWCTagProps {
    /** Callback when the active tab changes. Receives event as an argument with event.target.value set to the activeTabIndex. */
    onChange?(evt: Event): any,
    /** The index of the active tab. */
    activeTabIndex: number
}

export class TabBar extends Component<TabBarProps> { }
export class Tab extends Component<SimpleBaseProps<Tab>> { }
