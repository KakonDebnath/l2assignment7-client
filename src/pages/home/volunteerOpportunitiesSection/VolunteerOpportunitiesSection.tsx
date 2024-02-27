const VolunteerOpportunitiesSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2>Volunteer Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-yellow-300 rounded-xl">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/NsZK2FR/cd4.jpg"
              alt=""
            />
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              Sorting Donations
            </h3>
            <p className="text-gray-700">
              Help organize and categorize donated winter clothes to ensure they
              reach those in need efficiently.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              Distribution Assistance
            </h3>
            <p className="text-gray-700">
              Volunteer to distribute winter clothes to homeless shelters,
              community centers, and individuals in need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerOpportunitiesSection;
