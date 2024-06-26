/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'big-AGI-CC',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'big-AGI-CC',
  },
  Meta: {
    Description: 'big-AGI for Camp Cloudtop.',
    SiteName: 'big-AGI-CC | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@supeingosk',
  },
  URIs: {
    //Home: 'https://big-agi.com',
    // App: 'https://get.big-agi.com',
    //CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    //OpenRepo: 'https://github.com/enricoros/big-agi',
    //OpenProject: 'https://github.com/users/enricoros/projects/4',
    //SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
    // Twitter: 'https://www.twitter.com/enricoros',
    //PrivacyPolicy: 'https://big-agi.com/privacy',
  },
} as const;
