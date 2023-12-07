import { API_URL } from '../lib/API_URL.js';
import Posts from './Posts.jsx';

export default async function GetPosts() {
  const response = await fetch(`${API_URL}/api/posts`, { cache: 'no-store' });
  const info = await response.json();
  const posts = info.posts;

  return (
    <div>
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
  );
}
