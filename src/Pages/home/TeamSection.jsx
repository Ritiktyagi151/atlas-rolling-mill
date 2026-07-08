import { Link } from "lucide-react";
import { useRef } from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Prabhdeep Singh Lovely",
      position: "Founder",
      image: "images/extra/person2.jpg",
      phone: "+91-9478000019",
    },
    {
      id: 2,
      name: "Mr. Jagdeep Singh",
      position: "Partner",
      image: "images/extra/person1.jpg",
      phone: "+91-7888686115",
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-orange-600 mb-3">
           <span className="text-black">Our</span>  Founders
          </h3>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-3"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the visionary leaders who founded our company and continue to
            drive our success.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group overflow-hidden rounded-xl w-full max-w-sm aspect-square shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl">
                    {member.name}
                  </h3>
                  <p className="text-white ">{member.position}</p>
                  <a
                    className="text-white text-2xl hover:text-blue-700"
                    href={`tel:${member.phone}`}
                    target="_blank"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
              {/* Orange corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
