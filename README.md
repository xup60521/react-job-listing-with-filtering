# Frontend Mentor Challenge - Job listings with filtering

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt "https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt").

## Table of contents

-   [Overview](#overview)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Resources](#resources)

## Overview

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size

-   See hover states for all interactive elements on the page

-   Filter job listings based on the categories

Links:

-   GitHub Repo: <https://github.com/xup60521/react-job-listing-with-filtering>

-   Live website: <https://xup60521.github.io/react-job-listing-with-filtering/>

```bash
# install dependencies
pnpm install
# start dev server
pnpm run dev
```

## My process

### Built with

-   React (powered by Vite)

-   TailwindCSS

-   Context API

### What I learned

The most challenging part in this project is how to filter these elements.

However, a chain of filters can easily solve this problem.

```tsx
import { data } from "./utils";

function App() {
    const { role, level, languages } = useFilterElm();
    return (
        <div>
            {data
                .filter((d) => {
                    if (!role) {
                        return true;
                    }
                    return d.role === role;
                })
                .filter((d) => {
                    if (!level) {
                        return true;
                    }
                    return d.level === level;
                })
                .filter((d) => {
                    if (languages.length === 0) {
                        return true;
                    }
                    let isIncluded = true;
                    languages.forEach((filterElm) => {
                        if (!d.languages.includes(filterElm)) {
                            isIncluded = false;
                        }
                    });
                    return isIncluded;
                })
                .map((item) => {
                    return <Card {...item} key={item.id} />;
                })}
        </div>
    );
}
```

## Resources

-   TailwindCSS Docs - <https://tailwindcss.com/docs>

-   Google font - <https://fonts.google.com>
