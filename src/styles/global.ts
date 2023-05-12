import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
  padding: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: ${(props) => props.theme.base_background};
  font-family: "Nunito", sans-serif;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
span, p, h1, h2, h3, h4, h5, h6 {
  color: ${(props) => props.theme.base_title};
  overflow-wrap: break-word;
}

ul, li, a {
  list-style: none;
  text-decoration: none;
}

/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`
