# React Easy KeyFrames

This lightweight React library simplifies the creation of animations by leveraging CSS keyframes and applying them directly to page elements via the className attribute. It provides an intuitive API for developers to define custom animations using CSS keyframe syntax within their React components. The library dynamically generates and injects CSS styles into the DOM, allowing seamless integration with React's declarative approach. By attaching animation styles to elements through className, it ensures compatibility with existing React workflows, promotes reusable animation patterns, and delivers high-performance animations with minimal setup. Ideal for developers seeking a lightweight, flexible solution to enhance UI interactivity without relying on external animation frameworks.

> Easily add CSS Keyframes to React applications.

## Table of contents

- [Easy KeyFrames](#easy-keyframes)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [useAnimation Hook](#useAnimation)
    - [useKeyFrames Hook](#useKeyFrames)
    - [KeyFrame](#KeyFrame)
  - [Versioning](#versioning)
  - [Authors](#authors)

## Installation

To install the library, run:

```sh
$ npm i react-easy-keyframes
```

## Usage

### useAnimation

Import pre-made CSS keyframes to use.
This is optional.

Usage:

```ts
import { useAnimation } from "react-easy-keyframes";
```

Animations:

> FadeIn
> ScaleUp
> Rotate
> SlideInLeft
> SlideInRight
> SlideInUp
> SlideInDown
> Flip
> Breath
> Pulse
> Glitch
> Sheen
> Glow
> DropIn
> FancyRotate
> GrowStrink
> Bounce

Example:

```tsx
import { useKeyFrames, useAnimation } from "react-easy-keyframes";

function MyComponent() {
  const { Bounce, GrowStrink, Glitch } = useAnimation();
  useKeyFrames([
    {
      name: "animation1",
      frames: Bounce,
      duration: 2,
    },
  ]);

  return <div className="animation1">Easy KeyFrames</div>;
}
export default MyComponent;
```

### useKeyFrames

The hook that can be used from any client side component.

Usage:

```ts
import { useKeyFrames } from "react-easy-keyframes";
```

Usage:

```ts
useKeyFrames(KeyFrames[]);
```

Options:

`KeyFrame` (Required) - See KeyFrame below

| Type      | value    | Description     |
| --------- | -------- | --------------- |
| KeyFrames | "object" | KeyFrame Object |

Example:

```tsx
import { useKeyFrames, useAnimation } from "react-keyframes";

function MyComponent() {
  // Custom CSS Keyframes
  // These should be imported from a different file.
  const customAnimation = `{
    0% {
      border-radius: 0 0 0 0;
      background: coral;
      transform: rotate(0deg);
    }
    25% {
      border-radius: 50% 0 0 0;
      background: darksalmon;
      transform: rotate(45deg);
    }
    50% {
      border-radius: 50% 50% 0 0;
      background: indianred;
      transform: rotate(90deg);
    }
    75% {
      border-radius: 50% 50% 50% 0;
      background: lightcoral;
      transform: rotate(135deg);
    }
    100% {
      border-radius: 50% 50% 50% 50%;
      background: darksalmon;
      transform: rotate(180deg);
    }`;

  // Pre-made CSS Keyframe
  const { GrowStrink } = useAnimation();

  // KeyFrame setup (KeyFrame array)
  useKeyFrames([
    {
      name: "animation1",
      frames: customAnimation,
      duration: 5,
    },
    {
      name: "animation2",
      frames: GrowStrink,
      duration: 1,
      count: "infinite",
      fill: "forwards",
      direction: "alternate-reverse",
    },
  ]);

  // Add the KeyFrame name to the html element className to use.
  return (
    <>
      <div className="animation1 w-10 h-10"></div>
      <div className="animation2 w-10 h-10 bg-green-700"></div>
    </>
  );
}
export default MyComponent;
```

### KeyFrame

Options:

`name` (Required)

| Type   | value            | Description                                                        |
| ------ | ---------------- | ------------------------------------------------------------------ |
| string | "animation name" | name of the css animation (will be the name used as the className) |

`frames` (Required)

| Type   | value           | Description                       |
| ------ | --------------- | --------------------------------- |
| string | "css keyframes" | keyframes used for the animations |

`duration` (Optional) - default (2s)

| Type   | value              | Description                    |
| ------ | ------------------ | ------------------------------ |
| number | "animation length" | length of animation in seconds |

`timing` (Optional) - default ("ease-in-out")

| Type   | value        | Description                                       |
| ------ | ------------ | ------------------------------------------------- |
| string | "css easing" | "ease-in-out" , "ease-in" , "ease-out" , "linear" |

`count` (Optional) - default (1)

| Type                | value             | Description                                |
| ------------------- | ----------------- | ------------------------------------------ |
| number / "infinite" | "animation loops" | The amount of times an animation will play |

`direction` (Optional) - default ("normal")

| Type   | value                 | Description                                              |
| ------ | --------------------- | -------------------------------------------------------- |
| string | "animation direction" | "normal" , "reverse" , "alternate" , "alternate-reverse" |

`fill` (Optional) - default ("forwards")

| Type   | value            | Description                                |
| ------ | ---------------- | ------------------------------------------ |
| string | "animation fill" | "none" , "forwards" , "backwards" , "both" |

`hover` (Optional) - default (false)

| Type    | value             | Description                   |
| ------- | ----------------- | ----------------------------- |
| boolean | "animation hover" | animation only plays on hover |

## Versioning

- 1.0.0

## Authors

- **Wallace Krumrei** - [WallaceKrumrei](https://github.com/OutlawArtwork)
