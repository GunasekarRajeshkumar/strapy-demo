import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutSectionAboutSection extends Schema.Component {
  collectionName: 'components_about_section_about_sections';
  info: {
    displayName: 'aboutSection';
    icon: 'archive';
  };
  attributes: {};
}

export interface AboutTextAboutText extends Schema.Component {
  collectionName: 'components_about_text_about_texts';
  info: {
    displayName: 'about-text';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    aboutText1: Attribute.Text;
  };
}

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'banner';
    icon: 'alien';
    description: '';
  };
  attributes: {
    BannerText: Attribute.Text;
    BannerTextHeading: Attribute.String;
    BannerImg: Attribute.Media;
  };
}

export interface HomebannersHomebanners extends Schema.Component {
  collectionName: 'components_homebanners_homebanners';
  info: {
    displayName: 'homebanners';
    icon: 'check';
  };
  attributes: {
    testbanner: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-section.about-section': AboutSectionAboutSection;
      'about-text.about-text': AboutTextAboutText;
      'banner.banner': BannerBanner;
      'homebanners.homebanners': HomebannersHomebanners;
    }
  }
}
