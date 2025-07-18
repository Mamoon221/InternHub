       
import { useState } from 'react';
import { candidates as dummyData } from '../data/candidates';

function Candidates() {
  const [search, setSearch] = useState('');
  const [candidates, setCandidates] = useState(dummyData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    internship: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.internship) {
      alert('All fields are required!');
      return;
    }
    setCandidates([...candidates, form]);
    setForm({ name: '', email: '', internship: '', status: 'Pending' });
    setShowModal(false);
  };

  const filtered = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Candidates</h2>

      <div className="flex justify-between mb-4">
        <input
          className="border p-2 w-full max-w-sm rounded"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setShowModal(true)}
          className="ml-4 font-bold text-2xl bg-primary text-blue-800 px-4 py-2 rounded"
        >
          Add Candidate
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-neutral-200">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Internship</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.email}</td>
              <td className="p-2">{c.internship}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 text-sm rounded ${
                    c.status === 'Approved'
                      ? 'bg-green-200'
                      : c.status === 'Rejected'
                      ? 'bg-red-200'
                      : 'bg-yellow-200'
                  }`}
                >
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* functionilty for adding candidate data */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-4" >Add Candidate</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <input
                className="w-full border p-2 rounded"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="Internship Title"
                name="internship"
                value={form.internship}
                onChange={handleChange}
              />
              <select
                name="status"
                className="w-full border p-2 rounded"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-primary text-gray-900 rounded">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Candidates;

