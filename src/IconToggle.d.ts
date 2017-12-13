import * as React from 'react'
import { RMWC } from './Base'

declare namespace IconToggle {
    export interface IconToggleProps extends RMWC.SimpleBaseProps<IconToggle> {
        onChange(evt: Object): boolean | Event | undefined;
        on: Object;
        off: Object;
        value?: boolean;
    }


}
export declare class IconToggle extends React.Component<IconToggle.IconToggleProps> { }
