import './style.editor.scss';
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from './edit';

const attributes = {
    title: {
        type: 'string',
        source: 'html',
        selector: 'h4'
    },
    info: {
        type: 'string',
        source: 'html',
        selector: 'p'
    }
}

registerBlockType( "dh-gutenberg/team-member", {
    title: __('Team Member', 'dh-gutenberg'),

    description: __('Block showing a Team Member.', 'dh-gutenberg'),
    
    icon: 'admin-users',

    category: "dh-gutenberg",

    keywords: [__( 'team', 'dh-gutenberg'), __( 'member', 'dh-gutenberg' ), __( 'person', 'dh-gutenberg' )],
    
    attributes,

    save: () => {
        return null
    },

    edit
});