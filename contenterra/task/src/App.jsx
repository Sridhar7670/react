import data from './children.json'; 
import PostCard from './Postcards';
import "./App.css"
const App = () => {
  const posts = data.data.children;


  return (
    <div className='container'>
      <h1>Reddit Posts</h1>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.data.title}
          selftext_html={post.data.selftext_html}
          url={post.data.url}
          score={post.data.score}
        />
      ))}
    </div>
  );
};




export default App;
