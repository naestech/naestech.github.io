// @ts-check
import fs from 'fs';

const json = JSON.parse(fs.readFileSync('public/substack.json', 'utf8'));
const latest = json[0];
if (!latest) process.exit(0);

const blogPath = 'src/components/sections/Blog.tsx';
let blog = fs.readFileSync(blogPath, 'utf8');

const fallbackRegex = /setLatestPost\(\{\s*title: [^}]+\}\);/m;
const fallback = `setLatestPost({\n          title: '${latest.title.replace(/'/g, "\\'")}',\n          description: '${latest.description.replace(/'/g, "\\'")}',\n          url: '${latest.url}'\n        });`;

if (fallbackRegex.test(blog)) {
  blog = blog.replace(fallbackRegex, fallback);
  fs.writeFileSync(blogPath, blog);
} 