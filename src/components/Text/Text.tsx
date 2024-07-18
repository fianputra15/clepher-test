import React from "react";
import { TextProps } from "./Text.types";


export default function Text(props: TextProps){
    const { textType, children, ...rest } = props;

    if(textType === 'heading') {
        return (<h2 {...rest}>{children}</h2>);
    }
    if(textType === 'subtitle') {
        return (<h5 {...rest}>{children}</h5>);
    }

    return (<span {...rest}>{children}</span>);
}