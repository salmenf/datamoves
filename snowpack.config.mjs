/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    "./source/": {url: "/"},
    "./static/": {url: "/static/", static: true}
  },
  optimize: {
    bundle: true,
    minify: true
  }
}