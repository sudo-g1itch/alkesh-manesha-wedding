/**
 * All site copy lives here. Swap placeholders for the couple's real details
 * without touching markup or logic.
 */

export interface WeddingEvent {
  name: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  dressCode?: string;
  mapsUrl: string;
}

export interface Person {
  name: string;
  role: string;
  bio: string;
}

export interface FamilySide {
  relation: string;
  parents: string;
  home: string;
}

export const content = {
  couple: {
    bride: "Manesha",
    groom: "Alkesh",
    /** Short tagline shown beneath the names in the hero. */
    tagline: "are getting married",
    /** Primary wedding date shown in the hero. */
    date: "Sunday, the Twenty-Third of August, 2026",
    /** Machine-readable date the countdown ticks down to (IST). */
    dateISO: "2026-08-23T12:02:00+05:30",
    location: "Ernakulam Town Hall · Kochi, Kerala",
  },

  families: {
    intro: "Together with their families",
    bride: <FamilySide>{
      relation: "Daughter of",
      parents: "Mr. Manoj P.L & Mrs. Shalini A.S",
      home: "Pathazhapurakkal (H), Kazhuthumuttu, Thoppumpady P.O., Kochi - 682005",
    },
    groom: <FamilySide>{
      relation: "Son of",
      parents: "Mr. K. S. Rajeev & Mrs. Shylaja P.T.",
      home: "Kulathunkal (H), Valiyakandam, Kattappana P.O., Idukki - 685508",
    },
    blessing:
      "cordially invite your esteemed presence and blessings, with family, on the auspicious occasion of the marriage of Alkesh Rajeev with Manesha Manoj",
    /** Looping couple video shown as the section accent (muted autoplay loop). */
    video: "images/couple-loop.mp4",
    poster: "images/couple-poster.webp",
  },

  events: <WeddingEvent[]>[
    {
      name: "Sangeet",
      date: "Saturday, 22 August 2026",
      time: "5:00 PM onwards",
      venue: "CSI Heritage Bungalow",
      address: "Fort Kochi, Kerala",
      dressCode: "Black Indo-Western",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=CSI+Heritage+Bungalow+Fort+Kochi",
    },
    {
      name: "Wedding",
      date: "Sunday, 23 August 2026",
      time: "Muhurtham · 12:02 PM – 12:24 PM",
      venue: "Ernakulam Town Hall",
      address: "Ernakulam, Kochi, Kerala",
      dressCode: "Soft pastel colours",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Ernakulam+Town+Hall+Kochi",
    },
    {
      name: "Reception",
      date: "Sunday, 30 August 2026",
      time: "4:00 PM onwards",
      venue: "Highrange Convention Centre & Club House",
      address: "Kattappana, Idukki, Kerala",
      dressCode: "Formals",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Highrange+Convention+Centre+and+Club+House+Kattappana",
    },
  ],

  couple_section: {
    image: "images/couple.webp",
    caption: "Alkesh & Manesha",
  },

  couplePeople: <Person[]>[
    {
      name: "Alkesh",
      role: "The Groom",
      bio: "Steady, gentle and quick to smile — the kind of soul you can build a lifetime with. In him, love found its safest place.",
    },
    {
      name: "Manesha",
      role: "The Bride",
      bio: "The heart of every room she enters — warm, radiant and endlessly kind. In her, love found its gentlest home.",
    },
  ],

  pets: {
    eyebrow: "The littlest members of the family",
    heading: "Wishes from the little ones",
    image: "images/pets.webp",
    caption: "Sending all their love",
  },

  message: {
    heading: "A note from us",
    body: "From a chance hello to a lifetime of yes — our story has been written in small moments and big dreams. As we step into this new chapter, your love and blessings would mean the world to us. We can't wait to celebrate with you.",
    signoff: "With love, Alkesh & Manesha",
    image: "images/rings.jpg",
  },

  footer: {
    closing: "We look forward to celebrating with you",
    initials: "A & M",
    date: "23 . 08 . 2026",
    contact: "For enquiries: 8891216995 · 7736530296",
    host: "Sharing the happiness, Aarish Rajeev & Anupama Abhayan",
  },
};

export type Content = typeof content;
