import { internships } from '../data/internships';

function Internships() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Internships</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {internships.map((i, idx) => (
          <div key={idx} className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-bold">{i.title}</h3>
            <p>Dept: {i.dept}</p>
            <p>Duration: {i.duration} Months</p>
            <p>Stipend: {i.stipend}</p>
            <span className={`inline-block mt-2 px-2 py-1 rounded ${i.status === 'Open' ? 'bg-green-200' : 'bg-red-200'}`}>
              {i.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internships;
