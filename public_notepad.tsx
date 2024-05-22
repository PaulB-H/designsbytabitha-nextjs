// @ts-nocheck

// ------------------------------------------------------------------
// # Conditionally adding properties to components:
// Example from navbar.tsx in the NavLink component
// ---
//
// One option is as we did, wrapping it in an object and 
// spreading the results of the logical && 

<Link
  className={clsx(styles.navbarLink, isActive && styles.active)}
  href={href}
  {...(clickEvent && { onClick: triggerCloseNavbar })} // <-- Here
>
  {text}
</Link>

// You can do a similar thing in a props object:

const linkProps = {
  className: clsx(styles.navbarLink, isActive && styles.active),
  href={href},
  ...(onClick && { onClick: handleClick })
};

<Link {...linkProps}>{text}</Link>

//
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// # clsx usage, conditionally applying classes:
// ---
//
// clsx allows us to pass an object whos keys are the CSS classes we want to
// conditionally apply, and if their value is true they are applied, if false 
// they are not
//
// Example:

const truthy = true;
clsx(
  { 
    [className]: truthy, 
    [otherClass]: false 
  }
);

// Result: className will be applied, otherClass will not
//
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// # Using CSS transitions with components
// ---
// 
// If you re-render the entire component, its not changing property
// and the css transition won't be applied. Instead of re-rendering
// the component, conditionally apply different classes that change
// the properties we need to animate
//
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// # Building statically and hosting on NGINX
// ---
// 
// By default, trailing slashes are re-directed to non-trailing slashes
// This does not seem to function correctly when build with 
// output mode as export. I was unable to get rewrites working correctly
// with NGINX to remove trailing slashes, it went into a redirect loop.
//
// To resolve this, we instead explicitly enforce trailing slashes
// This resolved all hosting issues 

const nextConfig = {
  /* ...other settings */ 
  output: "export",
  trailingSlash: true,
};

//
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// # Stop navbar menu being pushed left by scrollbar appearing
// ---
// https://stackoverflow.com/a/39289453
// 
```CSS

margin-right: calc(-1 * (100vw - 100%));

```
// Explanation:
// 100vw is the entire viewport width including the scrollbar
// 100% is the width minus the scrollbar
// so 100vw - 100% gives us the width of the scrollbar if present, else 0
// Applying that as a negative margin on the right, ensures
// the scrollbar doesn't affect the positioning of that element
//
// We can add the actual margin we want on the right at the end like this:
```CSS

margin-right: calc(-1 * (100vw - 100%) + 4em);

```
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// # Making fonts globally available
// ---
// 
// 
//
// ------------------------------------------------------------------