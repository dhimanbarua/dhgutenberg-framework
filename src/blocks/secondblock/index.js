import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { RichText, BlockControls } from "@wordpress/editor";
import { Toolbar, DropdownMenu } from "@wordpress/components";

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
  },
  edit: function ({ className, setAttributes, attributes }) {
    const { content } = attributes;
    const handleOnChange = (value) => setAttributes({ content: value });
    return (
      <>
        <BlockControls
          controls={[
            [
              {
                icon: "wordpress",
                title: __("test", "dh-gutenberg"),
                onClick: () => alert(true),
                isActive: true,
              },
            ],
            [
              {
                icon: "twitter",
                title: __("test", "dh-gutenberg"),
                onClick: () => alert(true),
                isActive: false,
              },
            ],
          ]}
        >
          <Toolbar
            isCollapsed
            controls={[
              [
                {
                  icon: "wordpress",
                  title: __("test", "dh-gutenberg"),
                  onClick: () => alert(true),
                  isActive: true,
                },
              ],
              [
                {
                  icon: "twitter",
                  title: __("test", "dh-gutenberg"),
                  onClick: () => alert(true),
                  isActive: false,
                },
              ],
            ]}
          />
          {content && content.length > 0 && (
            <Toolbar>
              <DropdownMenu
                icon="editor-table"
                label={__("Dropdown", "dh-gutenberg")}
                controls={[
                  [
                    {
                      icon: "wordpress",
                      title: __("test", "dh-gutenberg"),
                      onClick: () => alert(true),
                      isActive: true,
                    },
                  ],
                  [
                    {
                      icon: "twitter",
                      title: __("test", "dh-gutenberg"),
                      onClick: () => alert(true),
                      isActive: false,
                    },
                  ],
                ]}
              />
            </Toolbar>
          )}
        </BlockControls>
        <RichText
          tagName="p"
          className={className}
          onChange={handleOnChange}
          value={content}
          formattingControls={["bold"]}
        />
      </>
    );
  },
  save: function ({ attributes }) {
    const { content } = attributes;
    return <RichText.Content tagName="p" value={content} />;
  },
});
