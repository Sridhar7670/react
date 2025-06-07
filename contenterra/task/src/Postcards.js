import './PostCard.css';
import DOMPurify from 'dompurify';

// Helper: Decode HTML entities (e.g., &lt; to <)
function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

const PostCard = ({ title, selftext_html, url, score }) => {
  // Step 0: Decode Reddit's escaped HTML entities
  const decodedHtml = decodeHtml(selftext_html || '');

  // Step 1: Remove Reddit's comment wrappers and outer div
  const strippedHtml = decodedHtml
    .replace(/<!--.*?-->/g, '')                         // Remove <!-- SC_OFF --> and <!-- SC_ON -->
    .replace(/^<div class="md">|<\/div>$/g, '');        // Remove <div class="md">...</div>

  // Step 2: Sanitize the cleaned HTML
  const safeHtml = DOMPurify.sanitize(strippedHtml);

  return (
    <div className="post-card">
      <h2 className="post-title">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>

      {/* Render the actual HTML content */}
      {safeHtml && (
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        />
      )}

      <div className="post-footer">
        <span>Score: {score}</span>
      </div>
    </div>
  );
};

export default PostCard;
