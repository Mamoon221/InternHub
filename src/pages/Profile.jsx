function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> Admin</p>
      <p><strong>Email:</strong> admin@internhub.com</p>
      <p><strong>Role:</strong> Administrator</p>
      {/* here we can change password  */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Change Password</h3>
      <input className="border p-2 mb-2 w-full rounded" placeholder="Old Password" />
      <input className="border p-2 mb-2 w-full rounded" placeholder="New Password" />
      <button className="bg-primary font-bold text-2xl text-blue-400 px-4 py-2 rounded">Change</button>
    </div>
  );
}
export default Profile;
