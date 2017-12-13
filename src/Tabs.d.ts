import * as React from 'react'
import { RMWC } from './Base'

declare namespace Tabs {
    // Cannot assign React.HTMLAttributes because onChange signature is incompatible
    export interface TabBarProps extends RMWC.RMWCTagProps {
        /** Callback when the active tab changes. Receives event as an argument with event.target.value set to the activeTabIndex. */
        onChange?(evt: Event): any,
        /** The index of the active tab. */
        activeTabIndex: number
    }

}
export declare class TabBar extends React.Component<Tabs.TabBarProps> { }
export declare class Tab extends React.Component<RMWC.SimpleBaseProps<Tab>> { }
