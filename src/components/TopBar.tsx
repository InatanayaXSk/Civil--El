import { Link } from 'react-router-dom';

export function TopBar() {
  return (
    <div className="bg-green-500 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="static\\assets\\logo.png" alt="Logo" className="h-10 w-10 mr-3" />
          <span className="text-xl font-bold">EcoGuard</span>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
          <Link to="/detect" className="hover:text-green-200 transition-colors">Leaf Page</Link>
          <Link to="/articles" className="hover:text-green-200 transition-colors">Read Articles</Link>
          <Link to="/about" className="hover:text-green-200 transition-colors">About Us</Link>

         
        </div>
      </div>
    </div>
  );
}
