module.exports = {
  __VERSION__: "2.0.development",
  __ENTRIES__: {
    "a.node.js": "a.node.3657312351d804f9d276.js",
    "b.node.js": "b.node.0486ceb943ec813602b4.js",
  },
  __ROUTES__: [
    {
      pattern: "/:entry",
      entry: ({ params }) => params.entry,
    },
  ],
}
