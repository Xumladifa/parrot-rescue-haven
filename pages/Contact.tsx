import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Heart, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [visitFormData, setVisitFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitors: 1,
    message: ''
  });

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleVisitFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setVisitFormData({
      ...visitFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleScheduleVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select both a date and time for your visit.');
      return;
    }

    const emailBody = `
Visit Request Details:
Name: ${visitFormData.name}
Email: ${visitFormData.email}
Phone: ${visitFormData.phone}
Number of Visitors: ${visitFormData.visitors}
Preferred Date: ${selectedDate.toDateString()}
Preferred Time: ${selectedTime}
Message: ${visitFormData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:parrotrescueteam@gmail.com?subject=Visit Request - ${visitFormData.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    alert('Your visit request has been prepared! Please send the email that just opened.');
    setShowCalendar(false);
    setSelectedDate(null);
    setSelectedTime('');
    setVisitFormData({
      name: '',
      email: '',
      phone: '',
      visitors: 1,
      message: ''
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = date.getDay();
    return date >= today && dayOfWeek !== 0; // Not Sunday and not in the past
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you're interested in adoption, volunteering, 
              or just want to learn more about our mission, we're here to help.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-BIRD</p>
                    <p className="text-gray-600">(555) 123-2473</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">parrotrescueteam@gmail.com</p>
                    <p className="text-gray-600">adoptions@parrothaven.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      14 Rescue Lane<br />
                      Denver, ST 1455<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: 12:00 PM - 4:00 PM</p>
                      <p className="text-sm text-emerald-600 font-medium mt-2">
                        Emergency care available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Emergency Contact */}
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Emergency Rescues</h3>
                <p className="text-red-700 text-sm mb-2">
                  If you've found an injured or abandoned parrot, please call our emergency line:
                </p>
                <p className="font-bold text-red-800">(555) 911-BIRD</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    >
                      <option value="general">General Information</option>
                      <option value="adoption">Adoption Inquiry</option>
                      <option value="volunteer">Volunteer Application</option>
                      <option value="donation">Donation Question</option>
                      <option value="surrender">Bird Surrender</option>
                      <option value="emergency">Emergency Rescue</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="Brief subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 resize-vertical"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-emerald-600" />
                  <p className="text-emerald-800 text-sm">
                    <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Visit Our Facility</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Schedule a Tour</h3>
              <p className="text-gray-600 mb-4">
                We welcome visitors to tour our facility and meet our rescued parrots. Tours help potential 
                adopters understand our mission and see the care we provide to each bird.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Tours available by appointment only</li>
                <li>• Group tours welcome (schools, organizations)</li>
                <li>• Educational presentations available</li>
                <li>• Meet-and-greets with adoptable birds</li>
              </ul>
              <button 
                onClick={() => setShowCalendar(true)}
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Visit</span>
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Parrot Haven facility"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule Your Visit</h2>
              
              <form onSubmit={handleScheduleVisit} className="space-y-6">
                {/* Visitor Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={visitFormData.name}
                      onChange={handleVisitFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={visitFormData.email}
                      onChange={handleVisitFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={visitFormData.phone}
                      onChange={handleVisitFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Visitors</label>
                    <select
                      name="visitors"
                      value={visitFormData.visitors}
                      onChange={handleVisitFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Calendar */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date *</label>
                  <div className="border border-gray-300 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        type="button"
                        onClick={() => navigateMonth('prev')}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h3 className="text-lg font-semibold">
                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </h3>
                      <button
                        type="button"
                        onClick={() => navigateMonth('next')}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1">
                      {getDaysInMonth(currentMonth).map((date, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => date && isDateAvailable(date) && setSelectedDate(date)}
                          disabled={!date || !isDateAvailable(date)}
                          className={`p-2 text-sm rounded-lg transition-colors duration-200 ${
                            !date ? 'invisible' :
                            !isDateAvailable(date) ? 'text-gray-300 cursor-not-allowed' :
                            selectedDate && date.toDateString() === selectedDate.toDateString() ? 
                              'bg-emerald-500 text-white' :
                              'hover:bg-emerald-100 text-gray-700'
                          }`}
                        >
                          {date?.getDate()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Time *</label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 text-sm rounded-lg border transition-colors duration-200 ${
                            selectedTime === time
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                              : 'border-gray-300 hover:border-emerald-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={visitFormData.message}
                    onChange={handleVisitFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Any special requests or questions..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowCalendar(false)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200"
                  >
                    Send Visit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;