import {
  PanelBody, ToggleControl
} from "@wordpress/components";
import {
  AlignmentToolbar, BlockControls, ContrastChecker, InspectorControls,
  PanelColorSettings, RichText, withColors
} from "@wordpress/editor";
import { __ } from "@wordpress/i18n";


class Edit extends wp.element.Component {
    
    handleOnChange  = (value) => this.props.setAttributes({ content: value });
    handleAlignment = (alignment) => this.props.setAttributes({ alignment });
    handleSwitch    = (switches) => this.props.setAttributes({ switches });
    // handleBgColor   = (backgroundColor) => this.props.setAttributes({ backgroundColor });
    // handleTextColor = (textColor) => this.props.setAttributes({ textColor });

    render() {
      console.log(this.props);
        const { className, attributes, setBackgroundColor, setTextColor, backgroundColor, textColor } = this.props;
        const { content, alignment, switches } = attributes;

        return (
            <>
              <InspectorControls>
                <PanelBody title={__("Panel", "dh-gutenberg")}>
                  <ToggleControl
                    label={__("Show Icon", "dh-gutenberg")}
                    checked={switches}
                    onChange={this.handleSwitch}
                  />
                </PanelBody>
                <PanelColorSettings
                  title={__("Color", "dh-gutenberg")}
                  colorSettings={[
                    {
                      value: textColor.color,
                      onChange: setTextColor,
                      label: __("Text Color", "dh-gutenberg"),
                    },
                    {
                      value: backgroundColor.color,
                      onChange: setBackgroundColor,
                      label: __("Background Color", "dh-gutenberg"),
                    },
                ]}
              >
                <ContrastChecker
                  textColor={textColor.color}
                  backgroundColor={backgroundColor.color}
                />
              </PanelColorSettings>
              </InspectorControls>
              <BlockControls>
                <AlignmentToolbar value={alignment} onChange={this.handleAlignment} />
              </BlockControls>
              <RichText
                tagName="p"
                className={className}
                onChange={this.handleOnChange}
                value={content}
                formattingControls={["bold"]}
                style={{ textAlign: alignment, backgroundColor: backgroundColor.color, color: textColor.color }}
              />
            </>
          );
    }
}

export default withColors("backgroundColor", {"textColor": 'color'})(Edit);