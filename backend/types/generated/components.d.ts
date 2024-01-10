import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementCartItem extends Schema.Component {
  collectionName: 'components_element_cart_items';
  info: {
    displayName: 'Cart_item';
  };
  attributes: {
    quantity: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    total_price: Attribute.Integer;
    total_quantity: Attribute.Integer;
    product: Attribute.Relation<
      'element.cart-item',
      'oneToOne',
      'api::product.product'
    >;
  };
}

export interface ElementSlidePromo extends Schema.Component {
  collectionName: 'components_element_slide_promos';
  info: {
    displayName: 'Slide_Promo';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SectionCategories extends Schema.Component {
  collectionName: 'components_section_categories';
  info: {
    displayName: 'Categories';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    categories: Attribute.Relation<
      'section.categories',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface SectionHeader extends Schema.Component {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionRichText extends Schema.Component {
  collectionName: 'components_section_rich_texts';
  info: {
    displayName: 'RichText';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionSliderCollection extends Schema.Component {
  collectionName: 'components_section_slider_collections';
  info: {
    displayName: 'SliderCollection';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    collection: Attribute.Relation<
      'section.slider-collection',
      'oneToOne',
      'api::collection.collection'
    >;
  };
}

export interface SectionSliderPromo extends Schema.Component {
  collectionName: 'components_section_slider_promos';
  info: {
    displayName: 'SliderPromo';
  };
  attributes: {
    slide: Attribute.Component<'element.slide-promo', true>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.cart-item': ElementCartItem;
      'element.slide-promo': ElementSlidePromo;
      'section.categories': SectionCategories;
      'section.header': SectionHeader;
      'section.rich-text': SectionRichText;
      'section.slider-collection': SectionSliderCollection;
      'section.slider-promo': SectionSliderPromo;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
