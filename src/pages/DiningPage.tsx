import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuCategories = [
  {
    name: 'Starters',
    items: [
      { name: 'Cullen Skink', description: 'Traditional Scottish smoked haddock soup', price: '7.50' },
      { name: 'Haggis Bon Bons', description: 'With whisky mustard sauce', price: '8.50' },
      { name: 'Scottish Smoked Salmon', description: 'With capers, lemon, and oatcakes', price: '9.50' },
    ],
  },
  {
    name: 'Main Courses',
    items: [
      { name: 'Highland Beef Steak', description: '8oz sirloin with peppercorn sauce and hand-cut chips', price: '24.95' },
      { name: 'Pan-Seared Scottish Salmon', description: 'With crushed new potatoes and dill sauce', price: '18.95' },
      { name: 'Venison Pie', description: 'Slow-cooked venison in red wine, puff pastry top', price: '16.95' },
      { name: 'Vegetarian Haggis Wellington', description: 'With neeps and tatties', price: '14.95' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Sticky Toffee Pudding', description: 'With vanilla ice cream', price: '7.50' },
      { name: 'Cranachan', description: 'Traditional Scottish raspberry, cream, and oat dessert', price: '7.95' },
      { name: 'Scottish Cheese Board', description: 'Selection of local cheeses with oatcakes', price: '9.95' },
    ],
  },
];

const openingHours = [
  { day: 'Monday - Thursday', breakfast: '8am - 10am', lunch: '12pm - 2:30pm', dinner: '5:30pm - 9pm' },
  { day: 'Friday - Saturday', breakfast: '8am - 10am', lunch: '12pm - 2:30pm', dinner: '5:30pm - 9:30pm' },
  { day: 'Sunday', breakfast: '8am - 10:30am', lunch: 'Sunday Roast 12pm - 4pm', dinner: '5:30pm - 8pm' },
];

export default function DiningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&fm=webp"
          alt="Fine dining experience at Schiehallion Hotel"
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
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Restaurant & Bar</h1>
          <p className="text-lg md:text-xl text-cream max-w-2xl mx-auto">
            Savour the flavours of Scotland with locally sourced Highland cuisine
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-highland-green mb-6">
              A Taste of the Highlands
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-4">
              Our restaurant celebrates the best of Scottish cuisine, featuring locally sourced ingredients 
              from Highland farmers, fishermen, and producers. From hearty breakfasts to elegant evening meals, 
              every dish is crafted with care and passion.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Whether you're a hotel guest or visiting for the day, our warm and welcoming restaurant 
              offers the perfect setting for any occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-highland-green mb-4">
              Sample Menu
            </h2>
            <p className="text-charcoal">
              Our menu changes seasonally to showcase the finest local produce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
              >
                <h3 className="font-display text-2xl font-bold text-highland-green mb-6 text-center">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="border-b border-cream-dark pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-charcoal">{item.name}</h4>
                        <span className="text-amber font-semibold ml-2">£{item.price}</span>
                      </div>
                      <p className="text-sm text-charcoal-light">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 bg-highland-green text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Opening Hours</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-highland-green-light">
                  <th className="py-3 px-4 text-left font-semibold text-amber">Day</th>
                  <th className="py-3 px-4 text-left font-semibold text-amber">Breakfast</th>
                  <th className="py-3 px-4 text-left font-semibold text-amber">Lunch</th>
                  <th className="py-3 px-4 text-left font-semibold text-amber">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {openingHours.map((hours) => (
                  <tr key={hours.day} className="border-b border-highland-green-light/50">
                    <td className="py-4 px-4 font-medium">{hours.day}</td>
                    <td className="py-4 px-4 text-cream">{hours.breakfast}</td>
                    <td className="py-4 px-4 text-cream">{hours.lunch}</td>
                    <td className="py-4 px-4 text-cream">{hours.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-cream mb-2">Bar open daily from 11am - 11pm</p>
            <p className="text-amber text-sm">Walk-ins welcome, but booking is recommended</p>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sunday Roast */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&fm=webp"
                alt="Traditional Sunday Roast dinner"
                className="w-full h-[300px] object-cover"
                width={800}
                height={300}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl font-bold mb-2">Famous Sunday Roast</h3>
                <p className="text-cream text-sm mb-3">
                  Our legendary Sunday Roast features locally sourced beef, lamb, or chicken 
                  with all the traditional trimmings.
                </p>
                <p className="text-amber font-semibold">Served 12pm - 4pm | From £16.95</p>
              </div>
            </motion.div>

            {/* Afternoon Tea */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80&fm=webp"
                alt="Elegant afternoon tea service"
                className="w-full h-[300px] object-cover"
                width={800}
                height={300}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl font-bold mb-2">Highland Afternoon Tea</h3>
                <p className="text-cream text-sm mb-3">
                  A delightful selection of finger sandwiches, freshly baked scones, 
                  and sweet treats. Perfect for a special occasion.
                </p>
                <p className="text-amber font-semibold">By reservation only (24hrs advance) | £22 per person</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bar Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                The Bar
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our cozy bar is the heart of the hotel, offering a warm welcome to guests and locals alike. 
                Enjoy a dram of fine Scottish whisky by the fire, sample local craft beers, or unwind 
                with a classic cocktail.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-amber mr-3">🥃</span>
                  Selection of over 50 Scottish whiskies
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber mr-3">🍺</span>
                  Local craft ales and lagers
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber mr-3">🍷</span>
                  Curated wine selection
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber mr-3">🔥</span>
                  Cozy log fire (winter months)
                </li>
              </ul>
              <p className="text-amber font-semibold">Open daily 11am - 11pm</p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&q=80&fm=webp"
                alt="Cozy hotel bar interior"
                className="rounded-2xl shadow-2xl"
                width={700}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-highland-green mb-4">
            Book Your Table
          </h2>
          <p className="text-highland-green text-lg mb-6">
            For reservations or special dietary requirements, please get in touch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01887820421"
              className="bg-highland-green text-white px-8 py-3 rounded-full font-semibold hover:bg-highland-green-light transition-colors"
            >
              Call 01887 820421
            </a>
            <Link
              to="/contact"
              className="bg-white text-highland-green px-8 py-3 rounded-full font-semibold hover:bg-cream transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
