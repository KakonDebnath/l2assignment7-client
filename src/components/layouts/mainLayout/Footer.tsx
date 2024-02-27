const Footer = () => {
  return (
    <footer className="my-gradient text-dark-gray pt-12 pb-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: kabboCharity@gmail.com</p>
            <p>Phone: +0177071212</p>
            <p>Address: 123 Main Street, Dhaka City, Bangladesh</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              {/* Add more relevant links as needed */}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Kabbo Charity. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
