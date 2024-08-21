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

let tw: ((_: string) => Style) = createTw({
    content: [],
    theme: { extend: {}, },
    plugins: [],
});

export function setup(config: Config) {
    tw = createTw(config);
}

export function Document({ className, ...props }: WindyProps<typeof Pdf.Document>) {
    return (<Pdf.Document style={className ? tw(className) : undefined} {...props} />);
};
export function Page({ className, ...props }: WindyProps<typeof Pdf.Page>) {
    return (<Pdf.Page style={className ? tw(className) : undefined} {...props} />);
};
export function View({ className, ...props }: WindyProps<typeof Pdf.View>) {
    return (<Pdf.View style={className ? tw(className) : undefined} {...props} />);
};
export function Image({ className, ...props }: WindyProps<typeof Pdf.Image>) {
    return (<Pdf.Image style={className ? tw(className) : undefined} {...props} />);
};
export function Text({ className, ...props }: WindyProps<typeof Pdf.Text>) {
    return (<Pdf.Text style={className ? tw(className) : undefined} {...props} />);
};
export function Link({ className, ...props }: WindyProps<typeof Pdf.Link>) {
    return (<Pdf.Link style={className ? tw(className) : undefined} {...props} />);
};
export function Note({ className, ...props }: WindyProps<typeof Pdf.Note>) {
    return (<Pdf.Note style={className ? tw(className) : undefined} {...props} />);
};
export function Canvas({ className, ...props }: WindyProps<typeof Pdf.Canvas>) {
    return (<Pdf.Canvas style={className ? tw(className) : undefined} {...props} />);
};
