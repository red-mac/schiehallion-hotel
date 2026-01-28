import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const rooms = [
  {
    id: 'double',
    name: 'Double Room',
    description: 'Cozy comfort for couples with stunning Highland views',
    price: 95,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&fm=webp',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    description: 'Extra space and luxury for a memorable Highland retreat',
    price: 125,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80&fm=webp',
  },
  {
    id: 'family',
    name: 'Family Room',
    description: 'Spacious accommodation for the whole family',
    price: 145,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80&fm=webp',
  },
];

const attractions = [
  {
    name: 'Splash White Water Rafting',
    distance: '5 mins',
    image: '/images/highlands/river-valley.webp',
    description: 'Thrilling adventures on the River Tay',
  },
  {
    name: "Dewar's Distillery",
    distance: '10 mins',
    image: '/images/highlands/autumn-loch.webp',
    description: "Discover the art of whisky making",
  },
  {
    name: 'Highland Perthshire',
    distance: 'All around',
    image: '/images/highlands/heather-panorama.webp',
    description: 'Endless walking and cycling routes',
  },
  {
    name: 'Castle & Heritage',
    distance: 'Nearby',
    image: '/images/highlands/castle-ruins.webp',
    description: 'Explore ancient Scottish history',
  },
];

const testimonials = [
  {
    text: "Absolutely wonderful stay! The staff made us feel right at home, and the views of the Highlands were breathtaking. Can't wait to return.",
    author: 'Sarah & James',
    location: 'Edinburgh',
  },
  {
    text: "The perfect base for exploring Perthshire. Excellent food, comfortable rooms, and genuinely warm Scottish hospitality.",
    author: 'Michael T.',
    location: 'London',
  },
  {
    text: "Our family had the best weekend here. The kids loved the adventure activities nearby, and we loved the peaceful evenings by the fire.",
    author: 'The Henderson Family',
    location: 'Glasgow',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/highlands/dramatic-loch.webp"
          alt="Dramatic Scottish Highlands landscape with loch and mountains"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-highland-green/60 via-highland-green/40 to-highland-green/70" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Your Highland Home in Aberfeldy
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-cream opacity-90">
            Warm hospitality, stunning scenery, unforgettable experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#booking"
              className="bg-amber text-highland-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-light transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Stay
            </Link>
            <Link
              to="/rooms"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all"
            >
              Explore Rooms
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-8 h-8 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-highland-green mb-6">
              Welcome to Schiehallion
            </h2>
            <div className="w-24 h-1 bg-amber mx-auto mb-6" />
            <p className="text-lg text-charcoal leading-relaxed mb-4">
              Named after the magnificent mountain that watches over Highland Perthshire, the Schiehallion Hotel 
              offers a warm and welcoming retreat in the heart of Aberfeldy. Our family-run hotel combines 
              traditional Scottish hospitality with modern comfort.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Whether you're seeking adventure on the River Tay, a taste of Scotland's finest whisky, 
              or simply a peaceful escape to the Highlands, you'll find it all right here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-highland-green mb-4">
              Our Rooms
            </h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              Comfortable, cozy accommodations with all the amenities you need for a perfect Highland getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={`${room.name} at Schiehallion Hotel`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-highland-green mb-2">
                    {room.name}
                  </h3>
                  <p className="text-charcoal-light text-sm mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber font-semibold">From £{room.price}/night</span>
                    <Link
                      to="/rooms"
                      className="text-highland-green font-medium hover:text-highland-green-light transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/rooms"
              className="inline-block bg-highland-green text-white px-8 py-3 rounded-full font-semibold hover:bg-highland-green-light transition-colors"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Dining Teaser */}
      <section className="py-16 md:py-24 bg-highland-green text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Restaurant & Bar
              </h2>
              <p className="text-cream text-lg leading-relaxed mb-6">
                Savour the flavours of Scotland in our welcoming restaurant and bar. From hearty 
                Scottish breakfasts to elegant evening meals featuring locally sourced ingredients, 
                every dish tells a story of our Highland heritage.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Traditional Scottish cuisine
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Locally sourced ingredients
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Famous Sunday Roast
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Afternoon Tea by reservation
                </li>
              </ul>
              <Link
                to="/dining"
                className="inline-block bg-amber text-highland-green px-8 py-3 rounded-full font-semibold hover:bg-amber-light transition-colors"
              >
                View Menu & Hours
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80&fm=webp"
                alt="Elegant dining setup with Scottish cuisine"
                className="rounded-2xl shadow-2xl w-full"
                width={700}
                height={500}
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber text-highland-green p-4 rounded-xl shadow-lg hidden md:block">
                <p className="font-display font-bold text-lg">Open Daily</p>
                <p className="text-sm">12pm - 9pm</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-highland-green mb-4">
              Highland Adventures Await
            </h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              From thrilling outdoor activities to Scotland's finest whisky distilleries, 
              adventure is right on your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-64 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="text-amber text-xs font-medium">{attraction.distance}</span>
                  <h3 className="font-display text-lg font-semibold">{attraction.name}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    {attraction.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/explore"
              className="inline-block bg-highland-green text-white px-8 py-3 rounded-full font-semibold hover:bg-highland-green-light transition-colors"
            >
              Explore All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-heather text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8"
              >
                <svg className="w-8 h-8 text-amber mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-cream leading-relaxed mb-6">{testimonial.text}</p>
                <footer>
                  <cite className="not-italic">
                    <span className="font-semibold text-amber">{testimonial.author}</span>
                    <span className="block text-sm text-cream/80">{testimonial.location}</span>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-12 bg-amber">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-highland-green mb-4">
            Special Winter Offers
          </h2>
          <p className="text-highland-green text-lg mb-6">
            Book 2 nights and get the 3rd night free! (Excluding Saturdays)
          </p>
          <Link
            to="/contact#booking"
            className="inline-block bg-highland-green text-white px-8 py-3 rounded-full font-semibold hover:bg-highland-green-light transition-colors"
          >
            Book Now & Save
          </Link>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-8 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center md:text-left">
            <a href="tel:01887820421" className="flex items-center hover:text-amber transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              01887 820421
            </a>
            <a href="mailto:bookings@schiehallionhotel.co.uk" className="flex items-center hover:text-amber transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              bookings@schiehallionhotel.co.uk
            </a>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              6 Dunkeld Street, Aberfeldy
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
