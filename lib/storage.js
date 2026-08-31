import { v4 as uuidv4 } from 'uuid';
const TWEETS_KEY = 'evidence_hub_tweets';
const ARTICLES_KEY = 'evidence_hub_articles';
const initializeData = () => {
  if (typeof window === 'undefined') return;
  if (!localStorage.getItem(TWEETS_KEY)) {
    localStorage.setItem(TWEETS_KEY, JSON.stringify([
      { id: uuidv4(), tweetUrl: 'https://x.com/sample', author: '@Sample', content: 'Sample tweet', date: '2024-01-15' },
    ]));
  }
  if (!localStorage.getItem(ARTICLES_KEY)) {
    localStorage.setItem(ARTICLES_KEY, JSON.stringify([
      { id: uuidv4(), articleUrl: 'https://example.com', title: 'Sample Article', source: 'Example', date: '2024-01-15', description: 'Sample article' },
    ]));
  }
};
initializeData();
export const getTweets = () => {
  if (typeof window === 'undefined') return [];
  const tweets = localStorage.getItem(TWEETS_KEY);
  return tweets ? JSON.parse(tweets) : [];
};
export const addTweet = (tweet) => {
  if (typeof window === 'undefined') return;
  const tweets = getTweets();
  tweets.unshift({ id: uuidv4(), ...tweet });
  localStorage.setItem(TWEETS_KEY, JSON.stringify(tweets));
};
export const deleteTweet = (id) => {
  if (typeof window === 'undefined') return;
  const tweets = getTweets();
  localStorage.setItem(TWEETS_KEY, JSON.stringify(tweets.filter(t => t.id !== id)));
};
export const getTweetsCount = () => getTweets().length;
export const getArticles = () => {
  if (typeof window === 'undefined') return [];
  const articles = localStorage.getItem(ARTICLES_KEY);
  return articles ? JSON.parse(articles) : [];
};
export const addArticle = (article) => {
  if (typeof window === 'undefined') return;
  const articles = getArticles();
  articles.unshift({ id: uuidv4(), ...article });
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
};
export const deleteArticle = (id) => {
  if (typeof window === 'undefined') return;
  const articles = getArticles();
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles.filter(a => a.id !== id)));
};
export const getArticlesCount = () => getArticles().length;