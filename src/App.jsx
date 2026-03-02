import { useState } from "react";

const COLORS = {
  sand: "#F5E6D3",
  ocean: "#1B4965",
  reef: "#00A896",
  sunset: "#E8985E",
  bush: "#2D6A4F",
  sky: "#CAE9FF",
  dark: "#0B2027",
  cream: "#FFF8F0",
  coral: "#FF6B6B",
  gold: "#FFB347",
};

const ROUTES = {
  recommended: {
    id: "recommended",
    label: "✦ Recommended: Best of Everything",
    tagline: "Road trip + flights to the reef — maximum variety",
    color: COLORS.reef,
    days: [
      {
        date: "13 Nov (Thu)",
        title: "Arrive Melbourne",
        location: "Melbourne",
        type: "travel",
        notes: "Land in Melbourne. Settle in, explore the laneways if energy permits. Grab dinner at a bar in Fitzroy or Collingwood.",
        driving: null,
        highlight: false,
      },
      {
        date: "14 Nov (Fri)",
        title: "Concert Day 🎵",
        location: "Melbourne",
        type: "event",
        notes: "Concert day! Explore Melbourne during the day — Queen Victoria Market in the morning, street art in Hosier Lane, coffee culture in the CBD. Concert in the evening.",
        driving: null,
        highlight: true,
      },
      {
        date: "15 Nov (Sat)",
        title: "Melbourne → Canberra",
        location: "Canberra",
        type: "drive",
        notes: "Early start. Drive via the Hume Highway. Stop at Holbrook (submarine park, oddly) or Gundagai for a stretch. Arrive Canberra afternoon — visit the Australian War Memorial or Lake Burley Griffin.",
        driving: "660 km · ~7 hrs",
        highlight: false,
      },
      {
        date: "16 Nov (Sun)",
        title: "Canberra → Sydney",
        location: "Sydney",
        type: "drive",
        notes: "Short drive to Sydney. Afternoon at the Harbour — walk across the Harbour Bridge, see the Opera House, take a ferry to Manly Beach. Bondi to Coogee coastal walk if time allows. Dinner at Circular Quay.",
        driving: "280 km · ~3 hrs",
        highlight: true,
      },
      {
        date: "17 Nov (Mon)",
        title: "Sydney → Port Macquarie",
        location: "Port Macquarie",
        type: "drive",
        notes: "Pacific Highway north. Stop at the Hunter Valley for wine tasting if you're keen, or push on to Port Macquarie — home to a koala hospital you can visit. Beautiful coastal town to overnight.",
        driving: "390 km · ~4.5 hrs",
        highlight: false,
      },
      {
        date: "18 Nov (Tue)",
        title: "Port Macquarie → Brisbane 🎵",
        location: "Brisbane",
        type: "event",
        notes: "Drive to Brisbane. Stop at Coffs Harbour for the Big Banana (iconic kitsch). Arrive Brisbane with time to freshen up. Concert in the evening!",
        driving: "530 km · ~6 hrs",
        highlight: true,
      },
      {
        date: "19 Nov (Wed)",
        title: "Brisbane → Byron Bay",
        location: "Byron Bay",
        type: "drive",
        notes: "Short drive south to Byron Bay. Cape Byron Lighthouse walk (easternmost point of Australia), surf lesson or beach time, browse the markets and boutiques. Incredible sunsets.",
        driving: "165 km · ~2 hrs",
        highlight: true,
      },
      {
        date: "20 Nov (Thu)",
        title: "Gold Coast Hinterland",
        location: "Gold Coast / Springbrook",
        type: "explore",
        notes: "Drive to Springbrook National Park — subtropical rainforest, Natural Bridge glow worm cave (best at dusk), stunning waterfalls. Surfers Paradise for a coastal contrast. Return to Brisbane or stay Gold Coast.",
        driving: "~150 km total",
        highlight: true,
      },
      {
        date: "21 Nov (Fri)",
        title: "Fly Brisbane → Cairns ✈",
        location: "Cairns",
        type: "flight",
        notes: "Morning flight to Cairns (~2.5 hrs, fares often under $100 AUD if booked early). Afternoon: explore Cairns Esplanade lagoon, night markets. Book reef tour for tomorrow.",
        driving: "Flight ~2.5 hrs",
        highlight: false,
      },
      {
        date: "22 Nov (Sat)",
        title: "Great Barrier Reef 🐠",
        location: "Great Barrier Reef",
        type: "explore",
        notes: "Full-day reef tour — snorkel or introductory dive on the outer reef. This is bucket-list stuff. Operators like Reef Magic or Quicksilver take you to pontoons on the outer reef. Unforgettable.",
        driving: null,
        highlight: true,
      },
      {
        date: "23 Nov (Sun)",
        title: "Daintree Rainforest 🌿",
        location: "Daintree",
        type: "explore",
        notes: "Day trip to the Daintree — the oldest tropical rainforest on Earth. Cable ferry across the Daintree River, walk through the canopy, spot cassowaries, visit Cape Tribulation where rainforest meets reef.",
        driving: "~140 km each way",
        highlight: true,
      },
      {
        date: "24 Nov (Mon)",
        title: "Fly Cairns → Melbourne ✈",
        location: "Melbourne",
        type: "flight",
        notes: "Morning flight to Melbourne (~3.5 hrs). Pick up a rental car. Evening in Melbourne — revisit a favourite spot or try somewhere new in the food scene.",
        driving: "Flight ~3.5 hrs",
        highlight: false,
      },
      {
        date: "25 Nov (Tue)",
        title: "Great Ocean Road Day 1",
        location: "Apollo Bay / Lorne",
        type: "drive",
        notes: "One of the world's greatest coastal drives. Start from Torquay, pass Bells Beach (legendary surf spot), stop in Lorne for lunch, look for wild koalas at Kennett River. Overnight in Apollo Bay.",
        driving: "190 km · ~3 hrs (with stops)",
        highlight: true,
      },
      {
        date: "26 Nov (Wed)",
        title: "Great Ocean Road Day 2",
        location: "Twelve Apostles → Melbourne",
        type: "drive",
        notes: "Twelve Apostles at sunrise or morning light (fewer crowds, better photos). Loch Ard Gorge, London Arch. Drive back to Melbourne via the inland route or extend to the Otways for rainforest walks.",
        driving: "260 km · ~3.5 hrs return",
        highlight: true,
      },
      {
        date: "27–28 Nov (Thu–Fri)",
        title: "Fly Home ✈",
        location: "Melbourne",
        type: "travel",
        notes: "Buffer day on the 27th for last-minute shopping (Melbourne's arcades and laneways), or sleep in and pack. Fly out 27th or 28th depending on your booking.",
        driving: null,
        highlight: false,
      },
    ],
  },
  roadtrip: {
    id: "roadtrip",
    label: "🚗 Pure Road Trip: Coastal Loop",
    tagline: "Brisbane → Sydney → Melbourne → Great Ocean Road — all driving, no flights",
    color: COLORS.sunset,
    days: [
      {
        date: "13 Nov (Thu)",
        title: "Arrive Melbourne",
        location: "Melbourne",
        type: "travel",
        notes: "Land, settle in, explore laneways and coffee culture.",
        driving: null,
        highlight: false,
      },
      {
        date: "14 Nov (Fri)",
        title: "Concert Day 🎵",
        location: "Melbourne",
        type: "event",
        notes: "Explore Melbourne by day. Concert at night.",
        driving: null,
        highlight: true,
      },
      {
        date: "15 Nov (Sat)",
        title: "Melbourne → Canberra",
        location: "Canberra",
        type: "drive",
        notes: "Drive north. War Memorial, Lake Burley Griffin.",
        driving: "660 km · ~7 hrs",
        highlight: false,
      },
      {
        date: "16 Nov (Sun)",
        title: "Canberra → Sydney",
        location: "Sydney",
        type: "drive",
        notes: "Harbour Bridge, Opera House, Bondi to Coogee walk, Manly ferry.",
        driving: "280 km · ~3 hrs",
        highlight: true,
      },
      {
        date: "17 Nov (Mon)",
        title: "Sydney → Port Macquarie",
        location: "Port Macquarie",
        type: "drive",
        notes: "Pacific Highway. Koala hospital in Port Macquarie.",
        driving: "390 km · ~4.5 hrs",
        highlight: false,
      },
      {
        date: "18 Nov (Tue)",
        title: "Port Macquarie → Brisbane 🎵",
        location: "Brisbane",
        type: "event",
        notes: "Arrive Brisbane, concert evening.",
        driving: "530 km · ~6 hrs",
        highlight: true,
      },
      {
        date: "19 Nov (Wed)",
        title: "Brisbane → Byron Bay",
        location: "Byron Bay",
        type: "drive",
        notes: "Cape Byron Lighthouse, surf, markets, sunset.",
        driving: "165 km · ~2 hrs",
        highlight: true,
      },
      {
        date: "20 Nov (Thu)",
        title: "Gold Coast Hinterland",
        location: "Springbrook / Lamington",
        type: "explore",
        notes: "Glow worms, waterfalls, subtropical rainforest.",
        driving: "~150 km",
        highlight: true,
      },
      {
        date: "21 Nov (Fri)",
        title: "Brisbane → Coffs Harbour",
        location: "Coffs Harbour",
        type: "drive",
        notes: "Begin the drive back south. Big Banana, Muttonbird Island walk.",
        driving: "430 km · ~5 hrs",
        highlight: false,
      },
      {
        date: "22 Nov (Sat)",
        title: "Coffs Harbour → Blue Mountains",
        location: "Blue Mountains",
        type: "drive",
        notes: "Long but rewarding drive. Arrive at the Blue Mountains — Three Sisters lookout at sunset is magical. Stay in Katoomba.",
        driving: "480 km · ~5.5 hrs",
        highlight: true,
      },
      {
        date: "23 Nov (Sun)",
        title: "Blue Mountains Day",
        location: "Blue Mountains",
        type: "explore",
        notes: "Scenic Railway, Wentworth Falls, bushwalking through eucalyptus valleys. The vast blue haze from eucalyptus oil is unforgettable.",
        driving: null,
        highlight: true,
      },
      {
        date: "24 Nov (Mon)",
        title: "Blue Mountains → Jervis Bay",
        location: "Jervis Bay",
        type: "drive",
        notes: "Drive south via Sydney bypass. Jervis Bay has the whitest sand in the world (Hyams Beach). Dolphins, kayaking, pristine water.",
        driving: "310 km · ~3.5 hrs",
        highlight: true,
      },
      {
        date: "25 Nov (Tue)",
        title: "Jervis Bay → Melbourne",
        location: "Melbourne",
        type: "drive",
        notes: "Long drive back to Melbourne. Stop at Eden or Lakes Entrance for a break.",
        driving: "700 km · ~8 hrs",
        highlight: false,
      },
      {
        date: "26 Nov (Wed)",
        title: "Great Ocean Road",
        location: "Twelve Apostles",
        type: "drive",
        notes: "Day trip: Twelve Apostles, Loch Ard Gorge, wild koalas at Kennett River. Return to Melbourne evening.",
        driving: "~500 km round trip",
        highlight: true,
      },
      {
        date: "27–28 Nov (Thu–Fri)",
        title: "Fly Home ✈",
        location: "Melbourne",
        type: "travel",
        notes: "Buffer day, shopping, fly out.",
        driving: null,
        highlight: false,
      },
    ],
  },
  adelaide: {
    id: "adelaide",
    label: "🍷 Extended: Melbourne to Adelaide",
    tagline: "Great Ocean Road + wine country — end in Adelaide, fly home from there",
    color: COLORS.bush,
    days: [
      {
        date: "13 Nov (Thu)",
        title: "Arrive Melbourne",
        location: "Melbourne",
        type: "travel",
        notes: "Land, settle in, explore.",
        driving: null,
        highlight: false,
      },
      {
        date: "14 Nov (Fri)",
        title: "Concert Day 🎵",
        location: "Melbourne",
        type: "event",
        notes: "Explore Melbourne. Concert at night.",
        driving: null,
        highlight: true,
      },
      {
        date: "15 Nov (Sat)",
        title: "Melbourne → Canberra",
        location: "Canberra",
        type: "drive",
        notes: "Drive north to Canberra.",
        driving: "660 km · ~7 hrs",
        highlight: false,
      },
      {
        date: "16 Nov (Sun)",
        title: "Canberra → Sydney",
        location: "Sydney",
        type: "drive",
        notes: "Harbour, Opera House, Bondi walk.",
        driving: "280 km · ~3 hrs",
        highlight: true,
      },
      {
        date: "17 Nov (Mon)",
        title: "Sydney → Port Macquarie",
        location: "Port Macquarie",
        type: "drive",
        notes: "Pacific Highway north.",
        driving: "390 km · ~4.5 hrs",
        highlight: false,
      },
      {
        date: "18 Nov (Tue)",
        title: "Port Macquarie → Brisbane 🎵",
        location: "Brisbane",
        type: "event",
        notes: "Arrive for the concert.",
        driving: "530 km · ~6 hrs",
        highlight: true,
      },
      {
        date: "19 Nov (Wed)",
        title: "Byron Bay",
        location: "Byron Bay",
        type: "drive",
        notes: "Lighthouse, beach, sunset.",
        driving: "165 km · ~2 hrs",
        highlight: true,
      },
      {
        date: "20 Nov (Thu)",
        title: "Fly Brisbane → Melbourne ✈",
        location: "Melbourne",
        type: "flight",
        notes: "Fly back to Melbourne to begin the westward leg. Cheap flights ~2 hrs.",
        driving: "Flight ~2 hrs",
        highlight: false,
      },
      {
        date: "21 Nov (Fri)",
        title: "Great Ocean Road Day 1",
        location: "Apollo Bay",
        type: "drive",
        notes: "Torquay, Bells Beach, Lorne, Kennett River koalas, Apollo Bay.",
        driving: "190 km · ~3 hrs",
        highlight: true,
      },
      {
        date: "22 Nov (Sat)",
        title: "Great Ocean Road Day 2",
        location: "Warrnambool",
        type: "drive",
        notes: "Twelve Apostles, Loch Ard Gorge, London Arch. Push on to Warrnambool — Tower Hill Wildlife Reserve for emus and kangaroos at dusk.",
        driving: "190 km · ~2.5 hrs",
        highlight: true,
      },
      {
        date: "23 Nov (Sun)",
        title: "Warrnambool → Grampians",
        location: "Grampians National Park",
        type: "drive",
        notes: "The Pinnacle walk, MacKenzie Falls, Boroka Lookout. Wild kangaroos everywhere at dusk. Incredible sandstone ranges.",
        driving: "200 km · ~2.5 hrs",
        highlight: true,
      },
      {
        date: "24 Nov (Mon)",
        title: "Grampians → Coonawarra",
        location: "Coonawarra",
        type: "drive",
        notes: "Drive into South Australia's wine country. Coonawarra is famous for Cabernet Sauvignon. Cellar door tastings at Wynns, Balnaves, Majella.",
        driving: "280 km · ~3 hrs",
        highlight: true,
      },
      {
        date: "25 Nov (Tue)",
        title: "Coonawarra → McLaren Vale",
        location: "McLaren Vale",
        type: "drive",
        notes: "More wine country closer to Adelaide. Shiraz heaven. d'Arenberg Cube is an architectural landmark. Star of Greece for lunch with ocean views.",
        driving: "350 km · ~4 hrs",
        highlight: true,
      },
      {
        date: "26 Nov (Wed)",
        title: "Adelaide & Barossa Valley",
        location: "Adelaide / Barossa",
        type: "explore",
        notes: "Day trip to Barossa Valley (Penfolds, Jacob's Creek, Seppeltsfield). Adelaide Central Market in the morning. Adelaide is compact, walkable, and underrated.",
        driving: "~140 km round trip",
        highlight: true,
      },
      {
        date: "27–28 Nov (Thu–Fri)",
        title: "Fly Home from Adelaide ✈",
        location: "Adelaide",
        type: "travel",
        notes: "Fly out of Adelaide instead of Melbourne — saves backtracking. Most international flights connect via Melbourne or Sydney.",
        driving: null,
        highlight: false,
      },
    ],
  },
};

const INDIA_UNIQUE = [
  {
    icon: "🦘",
    title: "Wildlife Unlike Anywhere",
    desc: "Kangaroos, koalas, wombats, platypus, echidnas, cassowaries. Australia's fauna evolved in isolation — you won't see these animals in India or most of the world.",
  },
  {
    icon: "🐠",
    title: "Great Barrier Reef",
    desc: "The world's largest coral reef system. Snorkeling or diving here is a fundamentally different experience from Lakshadweep or the Andamans.",
  },
  {
    icon: "🏄",
    title: "Surf & Beach Culture",
    desc: "The Australian beach lifestyle — from Bondi to Byron — is a whole social world. Surf lessons are everywhere and welcoming to beginners.",
  },
  {
    icon: "🌿",
    title: "Ancient Rainforests",
    desc: "The Daintree (150+ million years old), Blue Mountains eucalyptus valleys, subtropical Gold Coast hinterland — ecosystems that feel primordial.",
  },
  {
    icon: "🍷",
    title: "World-Class Wine Regions",
    desc: "Barossa Valley, McLaren Vale, Hunter Valley — cellar door tastings in stunning landscapes. India's wine scene is growing but this is next level.",
  },
  {
    icon: "🌅",
    title: "Sheer Emptiness & Scale",
    desc: "Coming from India, the vastness of Australia hits hard. Huge skies, open roads, towns hours apart — a meditative contrast.",
  },
];

const typeColors = {
  travel: "#94A3B8",
  event: COLORS.coral,
  drive: COLORS.ocean,
  explore: COLORS.reef,
  flight: COLORS.gold,
};

const typeLabels = {
  travel: "TRAVEL",
  event: "EVENT",
  drive: "DRIVE",
  explore: "EXPLORE",
  flight: "FLIGHT",
};

export default function AustraliaItinerary() {
  const [activeRoute, setActiveRoute] = useState("recommended");
  const [expandedDay, setExpandedDay] = useState(null);

  const route = ROUTES[activeRoute];

  const totalDriving = route.days
    .filter((d) => d.driving && d.type === "drive")
    .reduce((acc, d) => {
      const match = d.driving.match(/(\d+)\s*km/);
      return acc + (match ? parseInt(match[1]) : 0);
    }, 0);

  const flights = route.days.filter((d) => d.type === "flight").length;
  const highlights = route.days.filter((d) => d.highlight).length;

  return (
    <div
      style={{
        fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif",
        background: `linear-gradient(180deg, ${COLORS.dark} 0%, #102A3A 40%, ${COLORS.ocean} 100%)`,
        minHeight: "100vh",
        color: COLORS.cream,
        padding: 0,
        margin: 0,
      }}
    >
      {/* Hero */}
      <div
        style={{
          padding: "48px 24px 32px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.06,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #FFB347 0%, transparent 50%), radial-gradient(circle at 80% 30%, #00A896 0%, transparent 50%)",
          }}
        />
        <div style={{ position: "relative" }}>
          <div
            style={{
              fontSize: 14,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: COLORS.gold,
              marginBottom: 12,
              fontFamily: "'Trebuchet MS', 'Lucida Sans', sans-serif",
            }}
          >
            November 2025
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 400,
              margin: "0 0 8px",
              letterSpacing: -1,
              lineHeight: 1.1,
            }}
          >
            Australia Road Trip
          </h1>
          <div
            style={{
              fontSize: 18,
              color: COLORS.sand,
              opacity: 0.8,
              fontStyle: "italic",
            }}
          >
            Melbourne → Brisbane → and beyond
          </div>

          {/* Stats bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginTop: 28,
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Days", value: "15" },
              { label: "Driving", value: `${totalDriving.toLocaleString()} km` },
              { label: "Flights", value: String(flights) },
              { label: "Highlights", value: String(highlights) },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: COLORS.reef,
                    fontFamily: "'Trebuchet MS', sans-serif",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    opacity: 0.6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Route selector */}
      <div style={{ padding: "0 16px", maxWidth: 700, margin: "0 auto" }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: COLORS.gold,
            marginBottom: 12,
            fontFamily: "'Trebuchet MS', sans-serif",
          }}
        >
          Choose Your Route
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {Object.values(ROUTES).map((r) => (
            <button
              key={r.id}
              onClick={() => {
                setActiveRoute(r.id);
                setExpandedDay(null);
              }}
              style={{
                background:
                  activeRoute === r.id
                    ? `linear-gradient(135deg, ${r.color}22, ${r.color}11)`
                    : "rgba(255,255,255,0.03)",
                border: `1.5px solid ${activeRoute === r.id ? r.color : "rgba(255,255,255,0.1)"}`,
                borderRadius: 10,
                padding: "14px 18px",
                color: COLORS.cream,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 2 }}>
                {r.label}
              </div>
              <div style={{ fontSize: 13, opacity: 0.6, fontStyle: "italic" }}>
                {r.tagline}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div
        style={{
          padding: "32px 16px",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: COLORS.gold,
            marginBottom: 20,
            fontFamily: "'Trebuchet MS', sans-serif",
          }}
        >
          Day by Day
        </div>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 16,
              top: 0,
              bottom: 0,
              width: 2,
              background: `linear-gradient(180deg, ${route.color}44, ${route.color}11)`,
            }}
          />

          {route.days.map((day, i) => {
            const isExpanded = expandedDay === i;
            const tc = typeColors[day.type] || COLORS.ocean;
            return (
              <div
                key={i}
                onClick={() => setExpandedDay(isExpanded ? null : i)}
                style={{
                  position: "relative",
                  paddingLeft: 44,
                  marginBottom: 4,
                  cursor: "pointer",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: 9,
                    top: 16,
                    width: day.highlight ? 16 : 10,
                    height: day.highlight ? 16 : 10,
                    borderRadius: "50%",
                    background: day.highlight ? route.color : "rgba(255,255,255,0.2)",
                    border: day.highlight ? `2px solid ${COLORS.cream}` : "none",
                    transition: "all 0.2s",
                    marginLeft: day.highlight ? -3 : 0,
                    marginTop: day.highlight ? -3 : 0,
                  }}
                />

                <div
                  style={{
                    background: isExpanded
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(255,255,255,0.02)",
                    borderRadius: 10,
                    padding: "12px 16px",
                    transition: "all 0.2s",
                    border: isExpanded
                      ? `1px solid ${route.color}33`
                      : "1px solid transparent",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: COLORS.sand,
                          opacity: 0.5,
                          fontFamily: "'Trebuchet MS', sans-serif",
                        }}
                      >
                        {day.date}
                      </div>
                      <div
                        style={{
                          fontSize: 17,
                          fontWeight: 600,
                          marginTop: 2,
                        }}
                      >
                        {day.title}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      {day.driving && (
                        <span
                          style={{
                            fontSize: 11,
                            background: "rgba(255,255,255,0.08)",
                            padding: "3px 8px",
                            borderRadius: 20,
                            opacity: 0.7,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {day.driving}
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: 1.5,
                          color: tc,
                          background: `${tc}18`,
                          padding: "3px 8px",
                          borderRadius: 20,
                          fontFamily: "'Trebuchet MS', sans-serif",
                        }}
                      >
                        {typeLabels[day.type]}
                      </span>
                    </div>
                  </div>

                  {isExpanded && (
                    <div
                      style={{
                        marginTop: 10,
                        paddingTop: 10,
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        fontSize: 14,
                        lineHeight: 1.65,
                        color: COLORS.sand,
                        opacity: 0.85,
                      }}
                    >
                      {day.notes}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Unique experiences */}
      <div
        style={{
          padding: "16px 16px 48px",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: COLORS.gold,
            marginBottom: 16,
            fontFamily: "'Trebuchet MS', sans-serif",
          }}
        >
          What You Won't Get in India
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 10,
          }}
        >
          {INDIA_UNIQUE.map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 10,
                padding: "16px 18px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 6 }}>{item.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
                {item.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: COLORS.sand,
                  opacity: 0.7,
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical tips */}
      <div
        style={{
          padding: "0 16px 60px",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: COLORS.gold,
            marginBottom: 16,
            fontFamily: "'Trebuchet MS', sans-serif",
          }}
        >
          Practical Notes
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: 12,
            padding: "20px 22px",
            fontSize: 14,
            lineHeight: 1.7,
            color: COLORS.sand,
            opacity: 0.8,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p style={{ margin: "0 0 12px" }}>
            <strong style={{ color: COLORS.cream }}>Driving:</strong> Australians
            drive on the left (same as India). Roads are excellent. Fuel is more
            expensive than India but well-stocked. Speed limits are strictly
            enforced — don't risk it.
          </p>
          <p style={{ margin: "0 0 12px" }}>
            <strong style={{ color: COLORS.cream }}>Car hire:</strong> Book early
            for mid-November. An International Driving Permit (IDP) is required
            alongside your Indian licence. Budget $40–70 AUD/day.
          </p>
          <p style={{ margin: "0 0 12px" }}>
            <strong style={{ color: COLORS.cream }}>Weather:</strong> Late
            November is early Australian summer. Melbourne 18–25°C, Sydney
            20–27°C, Brisbane 22–30°C, Cairns 25–32°C (humid). Pack light layers
            + sunscreen.
          </p>
          <p style={{ margin: "0 0 12px" }}>
            <strong style={{ color: COLORS.cream }}>Book ahead:</strong> Great
            Barrier Reef tours, Great Ocean Road accommodation, and domestic
            flights (Brisbane–Cairns, Cairns–Melbourne) — book as soon as dates
            are confirmed.
          </p>
          <p style={{ margin: 0 }}>
            <strong style={{ color: COLORS.cream }}>Budget estimate:</strong>{" "}
            Excluding international flights: ~$2,500–4,000 AUD for 15 days
            covering car hire, fuel, accommodation (budget-mid range), flights,
            activities, and food.
          </p>
        </div>
      </div>
    </div>
  );
}
