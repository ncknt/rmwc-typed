import * as React from 'react'
import { RMWC } from './Base'

declare namespace Typography {
    export interface TypographyProps extends RMWC.RMWCTagProps {
        /* prettier-ignore */
        /** The typography style.*/
        use: 'display4' | 'display3' | 'display2' | 'display1' | 'headline' | 'title' | 'subheading2' | 'subheading1' | 'body2' | 'body1' | 'caption' | 'button',
        /** Sets adjust margin modifier for Typography. */
        adjustMargin?: boolean
    }
}

export declare class Typography extends React.Component<Typography.TypographyProps & React.HTMLProps<Typography>> { }
