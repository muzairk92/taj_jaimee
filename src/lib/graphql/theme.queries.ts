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
        closerText
        footerColumns {
          columnTitle
          links { label url }
        }
        contactEmail
        contactLocation
        copyrightText
        linkedin
        facebook
        x
        instagram
        youtube
        tiktok
        threads
        pinterest
      }
    }
  }
}
`;

// Separate from GET_THEME_SETTINGS on purpose: these fields exist on local WP but
// haven't been deployed to production yet. Keeping them in their own query means
// if they're missing/invalid on a given environment, only this query fails (and is
// caught gracefully) instead of breaking the nav/footer query that every page needs.
export const GET_THEME_GLOBALS = gql`
query GetThemeGlobals {
  themeSettings {
    themeSettingsFields {
      description {
        siteDescription
        metaDescription
        aboutUsSummary
      }
      scripts {
        headerScripts
        footerScripts
      }
    }
  }
}
`;