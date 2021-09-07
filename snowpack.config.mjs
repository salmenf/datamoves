/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    "./source/": {url: "/"},
    "./python/": {url: "/python/", static: true}
  }
}