import {
  PanelBody, RangeControl, ToggleControl
} from "@wordpress/components";
import {
  AlignmentToolbar, BlockControls, ContrastChecker, InspectorControls,
  PanelColorSettings, RichText, withColors
} from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import classnames from 'classnames';


class Edit extends wp.element.Component {
    
    handleOnChange  = (value) => this.props.setAttributes({ content: value });
    handleAlignment = (alignment) => this.props.setAttributes({ alignment });
    handleSwitch    = (switches) => this.props.setAttributes({ switches });
    // handleBgColor   = (backgroundColor) => this.props.setAttributes({ backgroundColor });
    // handleTextColor = (textColor) => this.props.setAttributes({ textColor });
    toggleShadow = () => this.props.setAttributes({ shadow: !this.props.attributes.shadow });

    onChangeShadowOpacity = (shadowOpacity) => {
      this.props.setAttributes({shadowOpacity})
    }
  
    render() {
        const { className, attributes, setBackgroundColor, setTextColor, backgroundColor, textColor } = this.props;
        const { content, alignment, switches, shadow, shadowOpacity } = attributes;
      const classes = classnames(className, {
        'has-shadow': shadow,
        [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
        })
        return (
            <>
              <InspectorControls>
                <PanelBody title={__("Panel", "dh-gutenberg")}>
                  <ToggleControl
                    label={__("Show Icon", "dh-gutenberg")}
                    checked={switches}
                    onChange={this.handleSwitch}
                  />
                  { shadow && 
                    <RangeControl
                      label={__('Shadow Opacity', 'dh-gutenberg')}
                      value={shadowOpacity}
                      onChange={this.onChangeShadowOpacity}
                      min={0.1}
                      max={0.4}
                      step={0.1}
                    />
                  }
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
            <BlockControls
              controls={[
                {
                  icon: 'wordpress',
                  title: __("Shadow", 'dh-gutenberg'),
                  onClick: this.toggleShadow,
                  isActive: shadow
                }
              ]}
            >
                <AlignmentToolbar value={alignment} onChange={this.handleAlignment} />
              </BlockControls>
              <RichText
                tagName="p"
                className={classes}
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