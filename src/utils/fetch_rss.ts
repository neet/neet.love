import { xml2js } from 'xml-js';

export interface Item {
  title: string;
  description: string;
  summary: string;
  date: Date | null;
  pubdate: Date | null;
  link: string;
  origlink: string;
  author: string;
  guid: string;
  comments: string;
  // image: Image;
  categories: string[];
  enclosures: string[];
  // meta: Meta;
}

export default async function fetchRss (uri: string): Item[] {
  console.log(uri);
  const response = await fetch(uri);
  console.log(response);
  const rawFeeds = await response.text();
  const feeds = xml2js(rawFeeds);

  console.log(rawFeeds, feeds);

  // feeds.map((feed) => ({

  // }));
}
