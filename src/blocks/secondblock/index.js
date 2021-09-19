import "./styles.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
  RichText,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/editor";
import {
  ColorPicker,
  PanelBody,
  ToggleControl,
  ColorPalette,
} from "@wordpress/components";

registerBlockType("dh-gutenberg/secondblock", {
  title: __("Second Block", "dh-gutenberg"),
  description: __("Our first gutenberg block plugin", "dh-gutenberg"),
  category: "layout",
  icon: {
    foreground: "#fff",
    background: "#ddd",
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  keywords: [__("image", "dh-gutenberg"), __("photo", "dh-gutenberg")],
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "p",
    },
    alignment: {
      type: "string",
    },
    switches: {
      type: "boolean",
    },
    backgroundColor: {
      type: "string",
    },
    textColor: {
      type: "string",
    },
  },
  edit: function ({ className, setAttributes, attributes }) {
    const {
      content,
      alignment,
      switches,
      backgroundColor,
      textColor: color,
    } = attributes;
    const handleOnChange = (value) => setAttributes({ content: value });
    const handleAlignment = (alignment) => setAttributes({ alignment });
    const handleSwitch = (switches) => setAttributes({ switches });
    const handleBgColor = (backgroundColor) =>
      setAttributes({ backgroundColor });
    const handleTextColor = (textColor) => setAttributes({ textColor });
    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Panel", "dh-gutenberg")}>
            <ToggleControl
              label={__("Show Icon", "dh-gutenberg")}
              checked={switches}
              onChange={handleSwitch}
            />
          </PanelBody>
          <PanelColorSettings
            title={__("Color", "dh-gutenberg")}
            colorSettings={[
              {
                value: color,
                onChange: handleTextColor,
                label: __("Text Color", "dh-gutenberg"),
              },
              {
                value: backgroundColor,
                onChange: handleBgColor,
                label: __("Background Color", "dh-gutenberg"),
              },
            ]}
          />
        </InspectorControls>
        <BlockControls>
          <AlignmentToolbar value={alignment} onChange={handleAlignment} />
        </BlockControls>
        <RichText
          tagName="p"
          className={className}
          onChange={handleOnChange}
          value={content}
          formattingControls={["bold"]}
          style={{ textAlign: alignment, backgroundColor, color }}
        />
      </>
    );
  },
  save: function ({ attributes }) {
    const {
      content,
      alignment,
      backgroundColor,
      textColor: color,
    } = attributes;
    return (
      <RichText.Content
        tagName="p"
        value={content}
        style={{ textAlign: alignment, backgroundColor, color }}
      />
    );
  },
});
