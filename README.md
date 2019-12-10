# gatsby-plugin-your-fonts

## What problem does Your Fonts solve?

`gatsby-plugin-your-fonts` makes it easy to use self-hosted fonts in your gatsby projects.

After setting up `gatbsy-plugin-your-fonts` for one project, you'll never need to set up `@font-face` boilerplate again. After your first configuration, you can just specify the fonts you want to use for your project in `gatsby-config.js` and you can automagically use the desired fonts in your styling files (.css, .sass, ,less, etc.).

In the future, Your Fonts will include tooling that will automatically handle the initial configuration.

## How to use it ?

### Installation

```js
yarn add gatsby-plugin-your-fonts
// or
npm install gatsby-plugin-your-fonts --save
```

### Host your fonts

Host your font assets on Github Pages so they follow this directory structure:

```
font-one/
  *.tff|otf|etc.
font-two/
  *.tff|otf|etc.
font-one.css
font-two.css
```

You should be able to access:
* your font files (.tff|otf...) files at `yourgithub.github.io/fonts/font-one/*.(tff|orf...)`.
* your .css files at `yourgithub.github.io/fonts/font-one.css`

Where font1.css looks something like

```css
@font-face {
  font-family: 'Font One';
  src: url('./font1/font-one-regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Font One';
  src: url('./font1/font-one-bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
}
...
```

You can actually host your fonts with any service, not just Github Pages, as long as this directory structure is used. 


### Configure your gatsby project

Once your fonts are hosted, `gatsby-plugin-your-fonts` makes it easy to resuse your fonts across projects without rehosting the fonts and creating the .css boilerplate.

When you want to use your fonts in a project, specify the fonts you want to use in your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-your-fonts',
      options: {
        host: 'yourgithub.github.io/fonts',
        fonts: [
          `font-one.css`, // font-family: 'Font One';
          `font-two.css` // font-family: 'Font Two';
        ]
      }
    }
  ]
}
```

When you develop and build your gatsby project you will be able to the fonts in any of your stylesheets.
