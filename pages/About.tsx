import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2012', event: 'Parrot Haven founded with a mission to rescue and rehabilitate parrots' },
    { year: '2015', event: 'Opened our first dedicated rehabilitation facility' },
    { year: '2018', event: 'Reached 500 successful adoptions milestone' },
    { year: '2021', event: 'Expanded to include educational programs and community outreach' },
    { year: '2024', event: 'Celebrating 12 years of giving wings to second chances' }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Martinez',
      role: 'Director & Veterinarian',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Avian veterinarian with 15 years of experience in parrot rescue and rehabilitation.'
    },
    {
      name: 'Michael Chen',
      role: 'Rescue Coordinator',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former zookeeper specializing in parrot behavior and socialization techniques.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Adoption Specialist',
      image: 'https://images.pexels.com/photos/5668760/pexels-photo-5668760.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dedicated to finding perfect matches between our rescued parrots and loving families.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Parrot Haven</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              For over a decade, we've been dedicated to rescuing, rehabilitating, and finding loving homes 
              for parrots in need. Our story is one of compassion, dedication, and the unwavering belief 
              that every feathered friend deserves a second chance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Parrot Haven was born from a simple yet powerful realization: too many beautiful, intelligent 
                  parrots were suffering in silence, abandoned or neglected through no fault of their own. 
                  In 2012, we opened our doors with a mission to change that reality.
                </p>
                <p>
                  What started as a small rescue operation has grown into a comprehensive rehabilitation center 
                  that not only saves lives but transforms them. We've learned that every parrot has a unique 
                  story, and every story deserves a happy ending.
                </p>
                <p>
                  Today, we're proud to have found forever homes for over 720 parrots, but our work is far 
                  from over. Each day brings new rescues, new challenges, and new opportunities to make a difference.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Rescued parrot being cared for"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">720+</div>
                  <div className="text-gray-600">Forever Homes Found</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compassion</h3>
              <p className="text-gray-600">
                Every decision we make is guided by empathy and understanding for the animals in our care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in the power of community to create lasting change for parrots everywhere.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in animal care, adoption processes, and support services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Commitment</h3>
              <p className="text-gray-600">
                Our dedication to each parrot's wellbeing extends far beyond their time with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year.slice(-2)}</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <div className="text-emerald-600 font-semibold mb-2">{milestone.year}</div>
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Whether through adoption, volunteering, or donations, you can be part of our story and help us continue giving wings to second chances.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/help"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Get Involved
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;