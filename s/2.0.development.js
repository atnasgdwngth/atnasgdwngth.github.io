module.exports = {
  __VERSION__: "2.0.development",
  __ENTRIES__: {
    "a.node.js": "a.node.cb1118b139a9050d9f73.js",
    "b.node.js": "b.node.123e8379af43a1bb0cb8.js",
  },
  __ROUTES__: [
    {
      pattern: "/:entry",
      entry: ({ params }) => params.entry,
    },
  ],
}
