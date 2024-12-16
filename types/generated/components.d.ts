import type { Schema, Attribute } from '@strapi/strapi';

export interface GuideComponentsPage extends Schema.Component {
  collectionName: 'components_guide_components_pages';
  info: {
    displayName: 'page';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    order: Attribute.Integer;
    content: Attribute.RichText;
  };
}

export interface GuideComponentsSection extends Schema.Component {
  collectionName: 'components_guide_components_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    order: Attribute.Integer;
    page: Attribute.Component<'guide-components.page', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'guide-components.page': GuideComponentsPage;
      'guide-components.section': GuideComponentsSection;
    }
  }
}
