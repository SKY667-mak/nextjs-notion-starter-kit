import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'de31f70fd7704a4da70bdafe8ac8a248',

  // restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '我的摄影作品集',
  domain: 'nextjs-notion-starter-kit-tawny-psi.vercel.app',
  author: '',

  // open graph metadata (optional)
  description: '光影之间，自由捕捉',

  // optional: remove社交账号
  twitter: '',
  github: '',
  linkedin: '',
})
