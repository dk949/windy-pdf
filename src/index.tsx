import * as Pdf from "@react-pdf/renderer";
import type { Style } from '@react-pdf/types';

import { createTw } from "react-pdf-tailwind";
import type { ComponentProps, JSXElementConstructor } from "react";

import type { Config } from 'tailwindcss'


type WindyProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>
    = ComponentProps<T> & { className?: string };

let tw: ((_: string) => Style) | undefined = undefined;
export function setup(config: Config) {
    tw = createTw(config);
}

export function Document({ className, style, ...props }: WindyProps<typeof Pdf.Document>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    if (style != null) throw new Error("Cannot pass style to windified component");
    return (<Pdf.Document style={className ? tw(className) : undefined} {...props} />);
};
export function Page({ className, style, ...props }: WindyProps<typeof Pdf.Page>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    if (style != null) throw new Error("Cannot pass style to windified component");
    return (<Pdf.Page style={className ? tw(className) : undefined} {...props} />);
};
export function View({ className, style, ...props }: WindyProps<typeof Pdf.View>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    if (style != null) throw new Error("Cannot pass style to windified component");
    return (<Pdf.View style={className ? tw(className) : undefined} {...props} />);
};
export function Image({ className, style, ...props }: WindyProps<typeof Pdf.Image>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    if (style != null) throw new Error("Cannot pass style to windified component");
    return (<Pdf.Image style={className ? tw(className) : undefined} {...props} />);
};
export function Text({ className, style, ...props }: WindyProps<typeof Pdf.Text>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    if (style != null) throw new Error("Cannot pass style to windified component");
    return (<Pdf.Text style={className ? tw(className) : undefined} {...props} />);
};
export function Link({ className, style, ...props }: WindyProps<typeof Pdf.Link>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    if (style != null) throw new Error("Cannot pass style to windified component");
    return (<Pdf.Link style={className ? tw(className) : undefined} {...props} />);
};
export function Note({ className, style, ...props }: WindyProps<typeof Pdf.Note>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    if (style != null) throw new Error("Cannot pass style to windified component");
    return (<Pdf.Note style={className ? tw(className) : undefined} {...props} />);
};
export function Canvas({ className, style, ...props }: WindyProps<typeof Pdf.Canvas>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    if (style != null) throw new Error("Cannot pass style to windified component");
    return (<Pdf.Canvas style={className ? tw(className) : undefined} {...props} />);
};
