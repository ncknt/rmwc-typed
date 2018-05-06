import {
    Component
} from 'react'
import {
    SimpleBaseProps
} from './Base'

export interface ImageListProps extends SimpleBaseProps<ImageList> {
    masonry?: boolean;
    withTextProtection?: boolean;
}

export interface ImageListItemProps extends SimpleBaseProps<ImageListItem> { }

export interface ImageListImageAspectContainerProps extends SimpleBaseProps<ImageListImageAspectContainer> { }

export interface ImageListImageProps extends SimpleBaseProps<ImageListImage> { }

export interface ImageListSupportingProps extends SimpleBaseProps<ImageListSupporting> { }

export interface ImageListLabelProps extends SimpleBaseProps<ImageListLabel> { }

export class ImageList extends Component<ImageListProps> { }

export class ImageListItem extends Component<ImageListItemProps> { }

export class ImageListImageAspectContainer extends Component<ImageListImageAspectContainerProps> { }

export class ImageListImage extends Component<ImageListImageProps> { }

export class ImageListSupporting extends Component<ImageListSupportingProps> { }

export class ImageListLabel extends Component<ImageListLabelProps> { }
