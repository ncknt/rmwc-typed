import * as React from 'react'
import { RMWC } from './Base'

declare namespace IconButton {
    export interface IconButtonProps extends RMWC.RMWCTagProps {
        /* The icon to use */
        use?: string,
        /* Specify the icon to use as a children */
        children?: React.ReactNode
    }
}

export declare class IconButton extends React.Component<IconButton.IconButtonProps & React.HTMLProps<IconButton>> {}