import fetch from 'node-fetch';
import fs from 'fs';
import { JSDOM } from 'jsdom';

interface SubstackPost {
  title: string;
  description: string;
  url: string;
  date: string;
}

(async () => {
  try {
    const res = await fetch('https://technaelogy.substack.com/feed');
    const xml = await res.text();
    const dom = new JSDOM(xml, { contentType: 'text/xml' });
    const doc = dom.window.document;
    let items: SubstackPost[] = [];
    if (doc) {
      items = Array.from(doc.querySelectorAll('item')).slice(0, 5).map(item => {
        const title = item.querySelector('title')?.textContent || '';
        const description = item.querySelector('description')?.textContent.replace(/<[^>]*>/g, '') || '';
        const url = item.querySelector('link')?.textContent || '';
        const date = item.querySelector('pubDate')?.textContent || '';
        return { title, description, url, date };
      });
    }
    fs.writeFileSync('public/substack.json', JSON.stringify(items, null, 2));
  } catch (e) {
    process.stderr.write(String(e));
    process.exit(1);
  }
})(); 