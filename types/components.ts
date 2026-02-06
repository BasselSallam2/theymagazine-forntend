import { ReactNode } from 'react'

// =============================================================================
// GENERIC COMPONENT INTERFACES
// =============================================================================

export interface BaseComponentProps {
    className?: string
    children?: ReactNode
    id?: string
    style?: React.CSSProperties
}

export interface ClickableComponentProps extends BaseComponentProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    disabled?: boolean
}

export interface FormComponentProps extends BaseComponentProps {
    name?: string
    required?: boolean
    disabled?: boolean
    placeholder?: string
    value?: string | number
    onChange?: (value: string | number) => void
    onBlur?: () => void
    onFocus?: () => void
}

export interface ImageComponentProps extends BaseComponentProps {
    src: string
    alt: string
    width?: number
    height?: number
    lazy?: boolean
    priority?: boolean
    quality?: number
    sizes?: string
}

export interface LinkComponentProps extends BaseComponentProps {
    href: string
    target?: '_blank' | '_self' | '_parent' | '_top'
    rel?: string
    external?: boolean
}

export interface ButtonComponentProps extends ClickableComponentProps {
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    loading?: boolean
    icon?: ReactNode
    iconPosition?: 'left' | 'right'
}

export interface CardComponentProps extends BaseComponentProps {
    title?: string
    subtitle?: string
    image?: string
    imageAlt?: string
    footer?: ReactNode
    hover?: boolean
    shadow?: boolean
    border?: boolean
}

export interface ModalComponentProps extends BaseComponentProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    closeOnOverlayClick?: boolean
    closeOnEscape?: boolean
}

export interface DropdownComponentProps extends BaseComponentProps {
    isOpen: boolean
    onToggle: () => void
    trigger: ReactNode
    placement?: 'top' | 'bottom' | 'left' | 'right'
    autoClose?: boolean
}

export interface TooltipComponentProps extends BaseComponentProps {
    content: string
    placement?: 'top' | 'bottom' | 'left' | 'right'
    trigger?: 'hover' | 'click' | 'focus'
    delay?: number
}

export interface PaginationComponentProps extends BaseComponentProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    showFirstLast?: boolean
    showPrevNext?: boolean
    maxVisible?: number
}

export interface BreadcrumbComponentProps extends BaseComponentProps {
    items: Array<{
        label: string
        href?: string
        isCurrent?: boolean
    }>
    separator?: string
    showHome?: boolean
}

export interface CollapseComponentProps extends BaseComponentProps {
    children: ReactNode
    isOpen?: boolean
    onToggle?: (isOpen: boolean) => void
    id?: string
}

export interface TabComponentProps extends BaseComponentProps {
    tabs: Array<{ label: string; content: ReactNode }>
    activeTab?: number
    onTabChange?: (index: number) => void
    variant?: 'default' | 'pills'
}

export interface TabsComponentProps extends BaseComponentProps {
    tabs: Array<{
        id: string
        label: string
        content: ReactNode
        disabled?: boolean
    }>
    activeTab: string
    onTabChange: (tabId: string) => void
    variant?: 'pills' | 'tabs' | 'underline'
}

export interface AccordionComponentProps extends BaseComponentProps {
    items: Array<{
        id: string
        title: string
        content: ReactNode
        disabled?: boolean
    }>
    allowMultiple?: boolean
    defaultOpen?: string[]
}

export interface CarouselComponentProps extends BaseComponentProps {
    items: ReactNode[]
    autoplay?: boolean
    autoplaySpeed?: number
    dots?: boolean
    arrows?: boolean
    infinite?: boolean
    slidesToShow?: number
    slidesToScroll?: number
    responsive?: Array<{
        breakpoint: number
        settings: {
            slidesToShow: number
            slidesToScroll: number
        }
    }>
}

export interface DataTableComponentProps extends BaseComponentProps {
    data: any[]
    columns: Array<{
        key: string
        title: string
        render?: (value: any, row: any) => ReactNode
        sortable?: boolean
        width?: string | number
    }>
    sortable?: boolean
    pagination?: boolean
    searchable?: boolean
    selectable?: boolean
    loading?: boolean
    emptyMessage?: string
}

export interface NotificationComponentProps extends BaseComponentProps {
    type: 'success' | 'error' | 'warning' | 'info'
    title?: string
    message: string
    duration?: number
    closable?: boolean
    onClose?: () => void
}

export interface LoadingComponentProps extends BaseComponentProps {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary' | 'white'
    text?: string
    fullScreen?: boolean
}

export interface SkeletonComponentProps extends BaseComponentProps {
    type: 'text' | 'image' | 'avatar' | 'button' | 'card'
    lines?: number
    width?: string | number
    height?: string | number
    rounded?: boolean
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
export type ComponentPosition = 'top' | 'bottom' | 'left' | 'right' | 'center'
export type ComponentAlignment = 'start' | 'center' | 'end' | 'stretch'
export type ComponentDisplay = 'block' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'none' 