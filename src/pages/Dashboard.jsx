import { FaUsers, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
function Dashboard() {
  return (
    
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary mb-20 text-center ">Welcome Back, Admin</h2>

      {/* Summary Cards In which dummy data of Internship and import icons from react Icons */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Candidates</p>
              <p className="text-2xl font-bold text-gray-800">58</p>
            </div>
            <FaUsers className="text-3xl text-primary" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Open Internships</p>
              <p className="text-2xl font-bold text-gray-800">6</p>
            </div>
            <FaBriefcase className="text-3xl text-primary" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Approved Applications</p>
              <p className="text-2xl font-bold text-gray-800">24</p>
            </div>
            <FaCheckCircle className="text-3xl text-green-500" />
          </div>
        </div>
      </div>

      
    </div>
  );
}
export default Dashboard;
