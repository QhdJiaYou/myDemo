declare namespace JSX {
    interface Element { }
    interface IntrinsicElements {
        [elemName: string]: any;
    }

    interface IntrinsicAttributes {
        [key: string]: any;
    }
}
