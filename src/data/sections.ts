export interface Section { path: string; title: string; icon: string; blurb: string }
export const SECTIONS: Section[] = [
  { path: '', title: 'Home', icon: '🏡', blurb: 'Your little world, at a glance.' },
  { path: 'calendar', title: 'Calendar', icon: '📅', blurb: 'Every date that matters.' },
  { path: 'map', title: 'World Map', icon: '🗺️', blurb: 'Places you have been together.' },
  { path: 'gallery', title: 'Gallery', icon: '🖼️', blurb: 'Photos grouped by event or album.' },
  { path: 'selfie', title: 'Selfie Point', icon: '🤳', blurb: 'Funny, romantic and travel selfies.' },
  { path: 'moments', title: 'First Moments', icon: '✨', blurb: 'Your firsts, in order.' },
  { path: 'fame', title: 'Hall of Fame', icon: '🏆', blurb: 'Certificates and small wins.' },
  { path: 'gifts', title: 'Gifts', icon: '🎁', blurb: 'Received gifts and a wishlist.' },
  { path: 'bucket', title: 'Bucket List', icon: '🪣', blurb: 'Things to do together.' },
  { path: 'wishlist', title: 'Couple Wishlist', icon: '🌠', blurb: 'Date ideas and dream experiences.' },
  { path: 'lovehate', title: 'Love & Hate', icon: '💘', blurb: 'Ten loves and ten hates each.' },
  { path: 'watch', title: 'Watchlist', icon: '🎬', blurb: 'Movies and series for two.' },
  { path: 'goals', title: 'Future Goals', icon: '🎯', blurb: 'Me, Partner and Us.' },
  { path: 'games', title: 'Game Scores', icon: '🎮', blurb: 'Who is winning this week?' },
  { path: 'notes', title: 'Heartfelt Notes', icon: '💌', blurb: 'Journal entries and love letters.' },
];
