import { motion } from 'framer-motion';

const attractions = [
  {
    name: 'Splash White Water Rafting',
    category: 'Adventure',
    distance: '5 minutes',
    description: 'Experience the thrill of white water rafting on the River Tay, one of Scotland\'s most exciting rafting destinations. Suitable for beginners and experienced adventurers alike, Splash offers unforgettable experiences on the water.',
    activities: ['White water rafting', 'Canyoning', 'River bugging', 'Cliff jumping'],
    image: '/images/highlands/river-valley.webp',
    website: 'https://www.rafting.co.uk/',
  },
  {
    name: "Dewar's Aberfeldy Distillery",
    category: 'Whisky',
    distance: '10 minutes walk',
    description: "Discover the art of whisky making at the home of Dewar's. Take a guided tour through the distillery, learn about the whisky-making process, and sample some of Scotland's finest single malts.",
    activities: ['Distillery tours', 'Whisky tastings', 'Gift shop', 'Café'],
    image: '/images/highlands/autumn-loch.webp',
    website: 'https://www.dewars.com/aberfeldy-distillery',
  },
  {
    name: 'Scottish Crannog Centre',
    category: 'History',
    distance: '15 minutes',
    description: 'Step back 2,500 years in time and experience life as it was lived on a crannog – an ancient loch dwelling. This unique living history museum offers an immersive journey into Iron Age Scotland.',
    activities: ['Guided tours', 'Ancient crafts', 'Fire making', 'Historical demonstrations'],
    image: '/images/highlands/misty-valley.webp',
    website: 'https://crannog.co.uk/',
  },
  {
    name: 'Aberfeldy Golf Club',
    category: 'Golf',
    distance: '2 miles',
    description: 'A stunning 18-hole parkland course set against a backdrop of the Highland hills. This challenging yet enjoyable course welcomes visitors and offers spectacular views throughout.',
    activities: ['18-hole course', 'Club hire', 'Pro shop', 'Clubhouse bar'],
    image: '/images/highlands/green-hills.webp',
    website: 'https://www.aberfeldygolf.co.uk/',
  },
  {
    name: 'Birks of Aberfeldy',
    category: 'Walking',
    distance: '10 minutes walk',
    description: 'Follow in the footsteps of Robert Burns on this beautiful circular walk through a wooded gorge. The waterfall at the top inspired Burns to write "The Birks of Aberfeldy" in 1787.',
    activities: ['Circular walk', 'Waterfall', 'Wildlife spotting', 'Photography'],
    image: '/images/highlands/hero-mountains.webp',
    website: null,
  },
  {
    name: 'Castle Menzies',
    category: 'History',
    distance: '20 minutes',
    description: 'A magnificent 16th-century castle and the ancestral seat of Clan Menzies. Explore the restored rooms, beautiful grounds, and learn about centuries of Scottish history.',
    activities: ['Castle tours', 'Gardens', 'Clan history', 'Gift shop'],
    image: '/images/highlands/castle-ruins.webp',
    website: 'https://www.castlemenzies.org/',
  },
  {
    name: 'Loch Tay',
    category: 'Nature',
    distance: '20 minutes',
    description: 'One of Scotland\'s most beautiful lochs, perfect for water sports, fishing, or simply enjoying the stunning scenery. The loch stretches for 14 miles through breathtaking Highland landscape.',
    activities: ['Fishing', 'Water sports', 'Scenic drives', 'Kayaking'],
    image: '/images/highlands/dramatic-loch.webp',
    website: null,
  },
  {
    name: 'Highland Safaris',
    category: 'Adventure',
    distance: '30 minutes',
    description: 'Experience the wild side of Scotland on a Land Rover safari through private Highland estates. Spot red deer, golden eagles, and other native wildlife in their natural habitat.',
    activities: ['Wildlife safaris', 'Mountain biking', 'Photography tours', 'Red deer centre'],
    image: '/images/highlands/heather-panorama.webp',
    website: 'https://www.highlandsafaris.net/',
  },
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    'Adventure': 'bg-red-500',
    'Whisky': 'bg-amber',
    'History': 'bg-heather',
    'Golf': 'bg-highland-green',
    'Walking': 'bg-green-600',
    'Nature': 'bg-blue-500',
  };
  return colors[category] || 'bg-charcoal';
};

export default function ExplorePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/highlands/heather-panorama.webp"
          alt="Stunning Scottish Highland landscape with mountains and loch"
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
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Explore the Highlands</h1>
          <p className="text-lg md:text-xl text-cream max-w-2xl mx-auto">
            Adventure, history, and natural beauty right on your doorstep
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-charcoal leading-relaxed">
            Aberfeldy sits at the heart of Highland Perthshire, making it the perfect base for exploring 
            everything this magnificent region has to offer. From thrilling outdoor adventures to 
            Scotland's finest whisky, ancient history to stunning natural beauty – it's all within easy reach.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <motion.article
                key={attraction.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                    width={800}
                    height={400}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getCategoryColor(attraction.category)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {attraction.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-charcoal text-xs font-medium px-3 py-1 rounded-full">
                    {attraction.distance}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-display text-xl font-bold text-highland-green mb-2">
                    {attraction.name}
                  </h2>
                  <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                    {attraction.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {attraction.activities.map((activity) => (
                        <span key={activity} className="bg-cream text-charcoal text-xs px-2 py-1 rounded">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {attraction.website && (
                    <a
                      href={attraction.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-highland-green font-medium hover:text-highland-green-light transition-colors"
                    >
                      Visit Website
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* The Mountain */}
      <section className="py-16 md:py-24 bg-highland-green text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Schiehallion - The Fairy Hill
              </h2>
              <p className="text-cream leading-relaxed mb-4">
                Our hotel takes its name from Schiehallion (Scottish Gaelic: Sìdh Chailleann), 
                meaning "Fairy Hill of the Caledonians". This iconic mountain rises to 1,083 metres 
                and dominates the landscape of Highland Perthshire.
              </p>
              <p className="text-cream leading-relaxed mb-4">
                The mountain is famous for its near-perfect conical shape when viewed from the east or west. 
                In 1774, it was used for the famous Schiehallion experiment to estimate the Earth's mass.
              </p>
              <p className="text-cream leading-relaxed mb-6">
                Today, it remains one of Scotland's most popular Munros, with a well-maintained path 
                making it accessible to experienced hillwalkers. On a clear day, the summit offers 
                breathtaking views across the Highlands.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-highland-green-light rounded-lg p-4 text-center">
                  <p className="text-amber font-bold text-2xl">1,083m</p>
                  <p className="text-sm text-cream">Height</p>
                </div>
                <div className="bg-highland-green-light rounded-lg p-4 text-center">
                  <p className="text-amber font-bold text-2xl">4-6 hrs</p>
                  <p className="text-sm text-cream">Round trip</p>
                </div>
                <div className="bg-highland-green-light rounded-lg p-4 text-center">
                  <p className="text-amber font-bold text-2xl">8 miles</p>
                  <p className="text-sm text-cream">From hotel</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/highlands/hero-mountains.webp"
                alt="Schiehallion mountain in the Scottish Highlands"
                className="rounded-2xl shadow-2xl"
                width={800}
                height={600}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-highland-green mb-4">
              Explore the Area
            </h2>
            <p className="text-charcoal">
              All attractions are easily accessible from the hotel
            </p>
          </div>
          
          <div className="bg-cream-dark rounded-2xl h-[400px] flex items-center justify-center">
            <div className="text-center text-charcoal-light">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-highland-green mb-4">
            Ready for Your Highland Adventure?
          </h2>
          <p className="text-highland-green text-lg mb-6">
            Book your stay and start exploring all that Perthshire has to offer
          </p>
          <a
            href="/contact#booking"
            className="inline-block bg-highland-green text-white px-8 py-3 rounded-full font-semibold hover:bg-highland-green-light transition-colors"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </>
  );
}
