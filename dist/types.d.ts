type Type<T> = {
    [K in keyof T]: T[K];
} & {};
type direction = "normal" | "reverse" | "alternate" | "alternate-reverse";
type tween = "ease-in-out" | "ease-in" | "ease-out" | "linear";
type fill = "none" | "forwards" | "backwards" | "both";
type KeyFrames = {
    name: string;
    frames: any;
    duration?: number;
    timing?: tween | string;
    count?: number | "infinite";
    direction?: direction;
    fill?: fill;
    hover?: boolean;
};

declare const useKeyFrames: (keyFrames: Type<KeyFrames>[]) => {};

declare const useAnimation: () => {
    FadeIn: string;
    ScaleUp: string;
    Rotate: string;
    SlideInLeft: string;
    SlideInDown: string;
    SlideInRight: string;
    SlideInUp: string;
    Flip: string;
    Sheen: string;
    Breath: string;
    Pulse: string;
    Glitch: string;
    Glow: string;
    DropIn: string;
    FancyRotate: string;
    GrowStrink: string;
    Bounce: string;
};

export { useAnimation, useKeyFrames };
