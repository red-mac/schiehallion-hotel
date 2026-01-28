import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const rooms = [
  {
    id: 'double',
    name: 'Double Room',
    tagline: 'Cozy Comfort for Couples',
    description: 'Our Double Rooms offer the perfect retreat for couples seeking comfort and tranquility. Each room features a luxurious double bed with premium linens, ensuring a restful night\'s sleep after a day exploring the Highlands.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&fm=webp',
    occupancy: '1-2 adults',
    amenities: ['Double bed', 'En-suite bathroom', 'Free WiFi', 'TV with Freeview', 'Tea & coffee facilities', 'Hairdryer', 'Toiletries'],
    packages: ['B&B from £95', 'Dinner, B&B from £125'],
  },
  {
    id: 'twin',
    name: 'Twin Room',
    tagline: 'Perfect for Friends & Family',
    description: 'Ideal for friends travelling together or family members, our Twin Rooms feature two comfortable single beds. Enjoy the same high standards of comfort and amenities as all our rooms, with the flexibility of separate sleeping arrangements.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80&fm=webp',
    occupancy: '1-2 adults',
    amenities: ['Two single beds', 'En-suite bathroom', 'Free WiFi', 'TV with Freeview', 'Tea & coffee facilities', 'Hairdryer', 'Toiletries'],
    packages: ['B&B from £95', 'Dinner, B&B from £125'],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    tagline: 'Extra Space & Luxury',
    description: 'For those seeking something special, our Deluxe Rooms offer extra space and enhanced amenities. Enjoy a king-size bed, comfortable seating area, and premium touches that make your Highland stay truly memorable.',
    price: 125,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80&fm=webp',
    occupancy: '2 adults',
    amenities: ['King-size bed', 'Spacious en-suite', 'Seating area', 'Free WiFi', 'Smart TV', 'Tea & coffee facilities', 'Premium toiletries', 'Bathrobes'],
    packages: ['B&B from £125', 'Dinner, B&B from £155'],
  },
  {
    id: 'family',
    name: 'Family Room',
    tagline: 'Space for Everyone',
    description: 'Our Family Rooms are designed with families in mind, offering ample space for parents and children. With a double bed and additional single beds or sofa bed, the whole family can enjoy a comfortable Highland adventure together.',
    price: 145,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80&fm=webp',
    occupancy: '2 adults + 1-2 children',
    amenities: ['Double bed + single beds', 'Family en-suite', 'Free WiFi', 'TV with Freeview', 'Tea & coffee facilities', 'Hairdryer', 'Toiletries', 'Cot available'],
    packages: ['B&B from £145', 'Dinner, B&B from £195'],
  },
];

const allAmenities = [
  { icon: '📶', text: 'Free WiFi throughout' },
  { icon: '☕', text: 'Tea & coffee in all rooms' },
  { icon: '🅿️', text: 'Free parking' },
  { icon: '🍳', text: 'Full Scottish breakfast' },
  { icon: '🛁', text: 'En-suite bathrooms' },
  { icon: '📺', text: 'TV with Freeview' },
];

export default function RoomsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80&fm=webp"
          alt="Luxurious hotel bedroom with Highland views"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-highland-green/70 to-highland-green/50" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Rooms</h1>
          <p className="text-lg md:text-xl text-cream max-w-2xl mx-auto">
            Comfortable, cozy accommodations with stunning Highland character
          </p>
        </motion.div>
      </section>

      {/* Room Cards */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16 md:space-y-24">
            {rooms.map((room, index) => (
              <motion.article
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={room.image}
                      alt={`${room.name} at Schiehallion Hotel`}
                      className="w-full h-[350px] md:h-[450px] object-cover"
                      width={800}
                      height={450}
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-amber text-highland-green px-4 py-2 rounded-full font-semibold">
                      From £{room.price}/night
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-heather font-medium text-sm uppercase tracking-wider">
                    {room.occupancy}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-highland-green mt-2 mb-2">
                    {room.name}
                  </h2>
                  <p className="text-amber font-medium mb-4">{room.tagline}</p>
                  <p className="text-charcoal leading-relaxed mb-6">{room.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-highland-green mb-3">Room Amenities</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity) => (
                        <li key={amenity} className="flex items-center text-sm text-charcoal-light">
                          <svg className="w-4 h-4 text-highland-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-highland-green mb-3">Packages</h3>
                    <div className="flex flex-wrap gap-2">
                      {room.packages.map((pkg) => (
                        <span key={pkg} className="bg-cream-dark text-charcoal px-3 py-1 rounded-full text-sm">
                          {pkg}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact#booking"
                    className="inline-block bg-highland-green text-white px-8 py-3 rounded-full font-semibold hover:bg-highland-green-light transition-colors"
                  >
                    Book This Room
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Amenities */}
      <section className="py-16 bg-highland-green text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Hotel Amenities</h2>
            <p className="text-cream max-w-2xl mx-auto">
              All our rooms include these complimentary amenities for your comfort
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {allAmenities.map((amenity) => (
              <div key={amenity.text} className="text-center">
                <span className="text-4xl mb-2 block">{amenity.icon}</span>
                <span className="text-sm text-cream">{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-highland-green mb-4">
            Ready to Book Your Highland Escape?
          </h2>
          <p className="text-highland-green text-lg mb-6">
            Contact us directly for the best rates and special packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#booking"
              className="bg-highland-green text-white px-8 py-3 rounded-full font-semibold hover:bg-highland-green-light transition-colors"
            >
              Book Now
            </Link>
            <a
              href="tel:01887820421"
              className="bg-white text-highland-green px-8 py-3 rounded-full font-semibold hover:bg-cream transition-colors"
            >
              Call 01887 820421
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
