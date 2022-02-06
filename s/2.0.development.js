module.exports = {
  __VERSION__: "2.0.development",
  __ENTRIES__: {
    "a.node.js": "a.node.cb1118b139a9050d9f73.js",
    "b.node.js": "b.node.4353168ffab4564aa976.js",
  },
  __ROUTES__: [
    {
      pattern: "/:entry",
      entry: ({ params }) => params.entry,
    },
  ],
}
