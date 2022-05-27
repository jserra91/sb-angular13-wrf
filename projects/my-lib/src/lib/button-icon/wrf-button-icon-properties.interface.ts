export interface IWrfButtonIconProperties {
    css?: IWrfButtonIconPropertiesCSS;
    styles?: IWrfButtonIconPropertiesStyles;
    onSubmit?: any;
}

export interface IWrfButtonIconPropertiesCSS {
    cssComponent?: string;
    cssLabel?: string;
    cssInput?: string;
}

export interface IWrfButtonIconPropertiesStyles {
    stylesComponent?: string;
    stylesLabel?: string;
    stylesInput?: string;
}