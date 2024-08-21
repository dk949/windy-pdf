import * as Pdf from "@react-pdf/renderer";
import type { Style } from '@react-pdf/types';

import { createTw } from "react-pdf-tailwind";
import type { ComponentProps, JSXElementConstructor } from "react";

import type { Config } from 'tailwindcss'

// By putting `T` in a conditional, `Omit` gets distributed over the subtypes of
// `T`, rather than being applied to `T` as a whole.
type OmitWithUnion<T, K extends keyof T> = T extends any
    ? Omit<T, K>
    : never;


type WindyProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>
    = OmitWithUnion<ComponentProps<T> & { className?: string }, "style">;

let tw: ((_: string) => Style) | undefined = undefined;
export function setup(config: Config) {
    tw = createTw(config);
}


export function Document({ className, ...props }: WindyProps<typeof Pdf.Document>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    return (<Pdf.Document style={className ? tw(className) : undefined} {...props} />);
};
export function Page({ className, ...props }: WindyProps<typeof Pdf.Page>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    return (<Pdf.Page style={className ? tw(className) : undefined} {...props} />);
};
export function View({ className, ...props }: WindyProps<typeof Pdf.View>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    return (<Pdf.View style={className ? tw(className) : undefined} {...props} />);
};
export function Image({ className, ...props }: WindyProps<typeof Pdf.Image>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    return (<Pdf.Image style={className ? tw(className) : undefined} {...props} />);
};
export function Text({ className, ...props }: WindyProps<typeof Pdf.Text>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    return (<Pdf.Text style={className ? tw(className) : undefined} {...props} />);
};
export function Link({ className, ...props }: WindyProps<typeof Pdf.Link>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    return (<Pdf.Link style={className ? tw(className) : undefined} {...props} />);
};
export function Note({ className, ...props }: WindyProps<typeof Pdf.Note>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    return (<Pdf.Note style={className ? tw(className) : undefined} {...props} />);
};
export function Canvas({ className, ...props }: WindyProps<typeof Pdf.Canvas>) {
    if (tw == null) throw new Error("You need to call `setup` prior to using any of the components");
    return (<Pdf.Canvas style={className ? tw(className) : undefined} {...props} />);
};
