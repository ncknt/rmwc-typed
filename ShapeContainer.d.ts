import {
    Component,
    ReactNode
} from 'react'
import {
    SimpleBaseProps,
    UseProps
} from './Base'

type StringOrNumber = string | number;

export interface ShapeContainerProps extends SimpleBaseProps<ShapeContainer> {
    backgroundColor?: string;
    corner?: StringOrNumber;
    topLeftCorner?: StringOrNumber;
    topRightCorner?: StringOrNumber;
    bottomRightCorner?: StringOrNumber;
    bottomLeftCorner?: StringOrNumber;
    outlineWidth?: StringOrNumber;
    outlineColor?: string;
    outlineStyle?: string;
    className?: string;
    children?: ReactNode
}

export class ShapeContainer extends Component<ShapeContainerProps> { }
