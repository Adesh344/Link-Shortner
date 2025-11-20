import { Copy, Trash2, ExternalLink, BarChart } from 'lucide-react';
import toast from 'react-hot-toast';

const LinkCard = ({ link, onDelete }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col space-y-4">
        {/* Short URL */}
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-500 mb-1">Short URL</p>
            <div className="flex items-center space-x-2">
              <a
                href={link.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:text-primary-700 truncate flex items-center space-x-1"
              >
                <span className="truncate">{link.shortUrl}</span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
          <button
            onClick={() => copyToClipboard(link.shortUrl)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Copy short URL"
          >
            <Copy className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Original URL */}
        <div>
          <p className="text-sm text-gray-500 mb-1">Original URL</p>
          <p className="text-gray-700 truncate">{link.originalUrl}</p>
        </div>

        {/* Stats and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600">
              <BarChart className="h-4 w-4" />
              <span className="text-sm font-medium">{link.clicks} clicks</span>
            </div>
            <span className="text-sm text-gray-500">
              Created {formatDate(link.createdAt)}
            </span>
          </div>
          <button
            onClick={() => onDelete(link._id)}
            className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
            title="Delete link"
          >
            <Trash2 className="h-5 w-5 text-gray-600 group-hover:text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;