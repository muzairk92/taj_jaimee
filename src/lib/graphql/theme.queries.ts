import { gql } from '@apollo/client';

export const GET_THEME_SETTINGS = gql`
query GetThemeSettings {
  themeSettings {
    themeSettingsFields {
      header {
        logo {
          node { sourceUrl altText }
        }
        navItems {
          label
          url
          subItems {
            label
            url
          }
        }
        ctaText
        ctaUrl
      }
      footer {
        companyName
        tagline
        footerColumns {
          columnTitle
          links { label url }
        }
        contactEmail
        contactLocation
        copyrightText
        linkedin
        facebook
      }
    }
  }
}
`;