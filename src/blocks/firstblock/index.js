const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const el = wp.element.createElement;

registerBlockType("dh-gutenberg/firstblock", {
  title: __("First Block", "dh-gutenberg"),
  description: __("Our first gutenberg block plugin", "dh-gutenberg"),
  category: "layout",
  icon: {
    foreground: "#fff",
    background: "#ddd",
    src: "admin-network",
  },
  keywords: [__("image", "dh-gutenberg"), __("photo", "dh-gutenberg")],
  edit: function () {
    return el("p", null, "Edited");
  },
  save: function () {
    return el("p", null, "Saved Content");
  },
});
