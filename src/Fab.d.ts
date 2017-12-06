import * as React from 'react'
import { RMWC } from './Base'

declare namespace Fab {
    export interface FabProps extends RMWC.RMWCTagProps, RMWC.RippleTagProps {
        mini?: boolean;
    }
}

export declare class Fab extends React.Component<Fab.FabProps & React.HTMLProps<Fab>> { }

