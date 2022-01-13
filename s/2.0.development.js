module.exports = {
  __VERSION__: "2.0.development",
  __ENTRIES__: {
    "a.node.js": "a.node.063dea6c055a29da7836.js",
    "b.node.js": "b.node.5474315122dbb28a3cea.js",
  },
  __ROUTES__: [
    {
      pattern: "/:entry",
      entry: ({ params }) => params.entry,
    },
  ],
}
