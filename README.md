# gatsby-plugin-your-fonts

## How to use it ?

```js
yarn add gatsby-plugin-your-fonts
// or
npm install gatsby-plugin-your-fonts --save
```

Add some fonts to your `gatsby-config.js`:

```js
module.exports = {
  siteMetadata: {
    title: `I like my fonts`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-your-fonts`,
      options: {
        fonts: [
          `Circular`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
}
```
