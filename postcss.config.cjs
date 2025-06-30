/**
 * This file exports a PostCSS configuration object.
 * PostCSS is a tool for transforming CSS with JavaScript plugins.
 * It takes your CSS and processes it through a series of plugins,
 * allowing you to use modern CSS features, optimize output,
 * or add vendor prefixes automatically.
 *
 * Below, we configure PostCSS with several plugins:
 */

module.exports = {
  plugins: [
    // postcss-import allows you to use @import in your CSS,
    // so you can split your styles into multiple files and combine them at build time.
    require('postcss-import'),

    // postcss-nesting lets you use nested CSS rules, similar to Sass,
    // so you can write more readable and maintainable styles.
    require('postcss-nesting'),

    // @tailwindcss/postcss is the PostCSS integration for Tailwind CSS,
    // which enables Tailwind’s utility-first classes to be processed correctly.
    require('@tailwindcss/postcss'),

    // autoprefixer automatically adds vendor prefixes (e.g., -webkit-, -moz-) 
    // to your CSS rules, ensuring better cross-browser compatibility.
    require('autoprefixer'),

    // cssnano is a CSS optimizer and minifier that reduces the size of your
    // final CSS files for faster page loads in production.
    require('cssnano')
  ]
};
