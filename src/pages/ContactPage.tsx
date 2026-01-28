import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DayPicker } from 'react-day-picker';
import type { DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const roomTypes = [
  { value: 'double', label: 'Double Room - From £95', price: 95 },
  { value: 'twin', label: 'Twin Room - From £95', price: 95 },
  { value: 'deluxe', label: 'Deluxe Room - From £125', price: 125 },
  { value: 'family', label: 'Family Room - From £145', price: 145 },
];

const guestOptions = [
  { value: '1', label: '1 Guest' },
  { value: '2', label: '2 Guests' },
  { value: '3', label: '3 Guests' },
  { value: '4', label: '4 Guests' },
];

export default function ContactPage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    guests: '2',
    message: '',
    package: 'bb',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Scroll to booking form if hash is #booking
  useEffect(() => {
    if (window.location.hash === '#booking') {
      setTimeout(() => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const bookingData = {
      ...formData,
      checkIn: dateRange?.from?.toLocaleDateString('en-GB'),
      checkOut: dateRange?.to?.toLocaleDateString('en-GB'),
    };

    try {
      // Formspree placeholder - replace with actual ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', roomType: '', guests: '2', message: '', package: 'bb' });
        setDateRange(undefined);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80&fm=webp"
          alt="Welcoming hotel entrance"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={600}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-highland-green/70 to-highland-green/50" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-cream">
            We'd love to hear from you
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="w-12 h-12 bg-highland-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="font-display text-xl font-bold text-highland-green mb-2">Phone</h2>
              <a href="tel:01887820421" className="text-charcoal hover:text-highland-green transition-colors text-lg">
                01887 820421
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="w-12 h-12 bg-highland-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="font-display text-xl font-bold text-highland-green mb-2">Email</h2>
              <a href="mailto:bookings@schiehallionhotel.co.uk" className="text-charcoal hover:text-highland-green transition-colors">
                bookings@schiehallionhotel.co.uk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="w-12 h-12 bg-highland-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="font-display text-xl font-bold text-highland-green mb-2">Address</h2>
              <address className="text-charcoal not-italic">
                6 Dunkeld Street<br />
                Aberfeldy, Perth and Kinross<br />
                PH15 2AF
              </address>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-highland-green mb-4">
              Book Your Stay
            </h2>
            <p className="text-charcoal max-w-2xl mx-auto">
              Fill out the form below and we'll confirm your booking within 24 hours
            </p>
          </div>

          {submitStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-highland-green text-white rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto"
            >
              <svg className="w-16 h-16 mx-auto mb-4 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-display text-2xl font-bold mb-4">Booking Request Received!</h3>
              <p className="text-cream mb-6">
                Thank you for your enquiry. We'll review your request and confirm your booking within 24 hours.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="bg-amber text-highland-green px-8 py-3 rounded-full font-semibold hover:bg-amber-light transition-colors"
              >
                Make Another Booking
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Dates */}
                <div>
                  <h3 className="font-display text-xl font-bold text-highland-green mb-4">
                    Select Your Dates
                  </h3>
                  <div className="flex justify-center lg:justify-start">
                    <DayPicker
                      mode="range"
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={1}
                      disabled={{ before: new Date() }}
                      modifiersClassNames={{
                        selected: 'bg-highland-green text-white',
                        range_middle: 'bg-highland-green-light text-white',
                      }}
                    />
                  </div>
                  {dateRange?.from && dateRange?.to && (
                    <div className="mt-4 p-4 bg-cream rounded-lg">
                      <p className="text-sm text-charcoal">
                        <span className="font-semibold">Check-in:</span> {dateRange.from.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                      <p className="text-sm text-charcoal">
                        <span className="font-semibold">Check-out:</span> {dateRange.to.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                      <p className="text-sm text-highland-green font-semibold mt-2">
                        {Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))} nights
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-bold text-highland-green mb-4">
                    Room & Guest Details
                  </h3>

                  {/* Room Type */}
                  <div>
                    <label htmlFor="roomType" className="block text-sm font-medium text-charcoal mb-2">
                      Room Type *
                    </label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:ring-2 focus:ring-highland-green focus:border-highland-green"
                    >
                      <option value="">Select a room type</option>
                      {roomTypes.map((room) => (
                        <option key={room.value} value={room.value}>
                          {room.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-charcoal mb-2">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:ring-2 focus:ring-highland-green focus:border-highland-green"
                    >
                      {guestOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Package */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Package
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="package"
                          value="bb"
                          checked={formData.package === 'bb'}
                          onChange={handleInputChange}
                          className="mr-2 text-highland-green focus:ring-highland-green"
                        />
                        <span className="text-sm text-charcoal">Bed & Breakfast</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="package"
                          value="dbb"
                          checked={formData.package === 'dbb'}
                          onChange={handleInputChange}
                          className="mr-2 text-highland-green focus:ring-highland-green"
                        />
                        <span className="text-sm text-charcoal">Dinner, B&B</span>
                      </label>
                    </div>
                  </div>

                  <hr className="border-cream-dark" />

                  <h3 className="font-display text-xl font-bold text-highland-green">
                    Your Details
                  </h3>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:ring-2 focus:ring-highland-green focus:border-highland-green"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:ring-2 focus:ring-highland-green focus:border-highland-green"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:ring-2 focus:ring-highland-green focus:border-highland-green"
                      placeholder="01onal 234567"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:ring-2 focus:ring-highland-green focus:border-highland-green"
                      placeholder="Any dietary requirements, accessibility needs, or special requests..."
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg">
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !dateRange?.from || !dateRange?.to}
                    className="w-full bg-highland-green text-white py-4 rounded-lg font-semibold text-lg hover:bg-highland-green-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
                  </button>

                  <p className="text-xs text-charcoal-light text-center">
                    By submitting this form, you agree to be contacted regarding your booking.
                    We'll confirm availability and pricing within 24 hours.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-highland-green mb-4">
              Find Us
            </h2>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-[400px] bg-cream flex items-center justify-center">
              <div className="text-center text-charcoal-light p-8">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-medium">6 Dunkeld Street, Aberfeldy</p>
                <p className="text-sm mb-4">Perth and Kinross, PH15 2AF</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Schiehallion+Hotel+Aberfeldy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-highland-green text-white px-6 py-2 rounded-full font-medium hover:bg-highland-green-light transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-highland-green mb-2">From Edinburgh</h3>
              <p className="text-charcoal-light text-sm">
                Take the A9 north to Perth, then A9 towards Pitlochry, turning onto A827 at Ballinluig. 
                Approximately 1.5 hours drive.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-highland-green mb-2">From Glasgow</h3>
              <p className="text-charcoal-light text-sm">
                Take the M80 and A9 north, then A827 at Ballinluig. 
                Approximately 1 hour 45 minutes drive.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-highland-green mb-2">By Train</h3>
              <p className="text-charcoal-light text-sm">
                Nearest station is Pitlochry (10 miles). 
                Taxis available or we can arrange collection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
