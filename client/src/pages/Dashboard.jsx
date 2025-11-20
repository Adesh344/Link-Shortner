import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import LinkCard from '../components/LinkCard';
import { Plus, Link as LinkIcon } from 'lucide-react';

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    originalUrl: '',
    customCode: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await axios.get('/api/links');
      setLinks(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch links');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post('/api/links', formData);
      setLinks([response.data.data, ...links]);
      setFormData({ originalUrl: '', customCode: '' });
      setShowForm(false);
      toast.success('Link created successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create link');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this link?')) {
      return;
    }

    try {
      await axios.delete(`/api/links/${id}`);
      setLinks(links.filter(link => link._id !== id));
      toast.success('Link deleted successfully');
    } catch (error) {
      toast.error('Failed to delete link');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Links</h1>
          <p className="text-gray-600">Manage and track all your shortened URLs</p>
        </div>

        {/* Create Link Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Create New Link</span>
          </button>
        </div>

        {/* Create Link Form */}
        {showForm && (
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <LinkIcon className="h-5 w-5" />
              <span>Create Short Link</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="originalUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Original URL *
                </label>
                <input
                  id="originalUrl"
                  name="originalUrl"
                  type="url"
                  required
                  value={formData.originalUrl}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="https://example.com/very-long-url"
                />
              </div>

              <div>
                <label htmlFor="customCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Custom Short Code (Optional)
                </label>
                <input
                  id="customCode"
                  name="customCode"
                  type="text"
                  value={formData.customCode}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="my-custom-link"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Leave empty for auto-generated code
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Creating...' : 'Create Link'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Links List */}
        {links.length === 0 ? (
          <div className="card text-center py-12">
            <LinkIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No links yet</h3>
            <p className="text-gray-500 mb-4">Create your first short link to get started</p>
            <button
              onClick={() => setShowForm(true)}
              className="btn-primary"
            >
              Create Link
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {links.map((link) => (
              <LinkCard key={link._id} link={link} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;