import { registerBlockType } from "@wordpress/blocks";
import { getColorClassName, RichText } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import classnames from 'classnames';
import Edit from './edit';
import "./styles.editor.scss";

registerBlockType("dh-gutenberg/secondblock", {
  title: __("Second Block", "dh-gutenberg"),
  description: __("Our first gutenberg block plugin", "dh-gutenberg"),
  category: "dh-gutenberg",
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
  
  styles: [
    {
      name: 'rounded',
      label: __("Rounded", "dh-gutenberg"),
      isDefault: true
    },
    {
      name: 'Outline',
      label: __("Outline", "dh-gutenberg")
    },
    {
      name: 'Squared',
      label: __("Squared", "dh-gutenberg")
    }
  ],

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
    customBackgroundColor: {
      type: "string",
    },
    customTextColor: {
      type: "string",
    },
    shadow: {
      type: "boolean",
      default: false
    },
    shadowOpacity: {
      type: 'number',
      default: 0.3
    }
  },
  edit: Edit,
  save: function ({ attributes }) {
    const {
      content,
      alignment,
      backgroundColor,
      textColor,
      customBackgroundColor,
      customTextColor,
      shadow,
      shadowOpacity
    } = attributes;

    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const textClass = getColorClassName('color', textColor);

    const classes = classnames({
      [backgroundClass]: backgroundClass,
      [textClass]: textClass,
      'has-shadow': shadow,
      [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
    })

    return (
      <RichText.Content
        tagName="p"
        className={classes}
        value={content}
        style={{
          textAlign: alignment,
          backgroundColor: backgroundClass ? undefined : customBackgroundColor,
          color: textClass ? undefined : customTextColor,
        }}
      />
    );
  },
});
