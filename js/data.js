/* Source-driven content parsed from content/bicol-content.md. Image filenames are listed in IMAGE_CHECKLIST.md. */
const BICOL = {
  provinces: [
    {
      id: 'albay', name: 'Albay', capital: 'Legazpi City',
      image: 'images/albay/province-albay.jpg',
      imageCredit: 'See images/PHOTO-CREDITS.txt — province-albay.jpg',
      blurb: 'Explore instructor-listed places, food, festivals, and history in Albay.',
      // VERIFY: needs source check.
      history: {
        origin: 'Albay was among the first areas of Bicol explored by the Spanish in the 1570s. Its lowlands, rich volcanic soil and bay made it an important trading and farming center.',
        name: 'The name is traditionally traced to the old Bicol land of ‘Ibalong’ (also Ibalon), which Spanish speakers shortened and reshaped over time into ‘Albay’.',
        verified: false
      }
    },
    {
      id: 'camnorte', name: 'Camarines Norte', capital: 'Daet',
      image: 'images/camarines-norte/province-camnorte.jpg',
      imageCredit: 'See images/PHOTO-CREDITS.txt — province-camnorte.jpg',
      blurb: 'Explore instructor-listed places, food, festivals, and history in Camarines Norte.',
      // VERIFY: needs source check.
      history: {
        origin: 'Camarines Norte was once part of one large Camarines province. Gold mining in Paracale and Labo shaped its early fame and economy.',
        name: 'Early Spanish accounts described the small huts (camarin) of the native settlers, and the Spanish term ‘Camarines’ stuck. ‘Norte’ simply marks the northern half.',
        verified: false
      }
    },
    {
      id: 'camsur', name: 'Camarines Sur', capital: 'Pili',
      image: 'images/camarines-sur/province-camsur.jpg',
      imageCredit: 'See images/PHOTO-CREDITS.txt — province-camsur.jpg',
      blurb: 'Explore instructor-listed places, food, festivals, and history in Camarines Sur.',
      // VERIFY: needs source check.
      history: {
        origin: 'Naga, today the heart of the province, was founded by the Spanish as the Ciudad de Nueva Caceres in the late 1500s and became the religious center of Bicol.',
        name: 'Like its northern sibling, the name comes from the Spanish word ‘camarin’ for the small native huts. ‘Sur’ marks the southern half after the split.',
        verified: false
      }
    },
    {
      id: 'catanduanes', name: 'Catanduanes', capital: 'Virac',
      image: 'images/catanduanes/province-catanduanes.jpg',
      imageCredit: 'See images/PHOTO-CREDITS.txt — province-catanduanes.jpg',
      blurb: 'Explore instructor-listed places, food, festivals, and history in Catanduanes.',
      // VERIFY: needs source check.
      history: {
        origin: 'Catanduanes is an island province facing the Pacific. For much of its history it was governed from the mainland as part of Albay.',
        name: 'The name is commonly linked to ‘tandu’, a native word for the tall cogon-like grass that once covered the island, giving the ‘land where tandu grows’.',
        verified: false
      }
    },
    {
      id: 'masbate', name: 'Masbate', capital: 'Masbate City',
      image: 'images/masbate/province-masbate.jpg',
      imageCredit: 'See images/PHOTO-CREDITS.txt — province-masbate.jpg',
      blurb: 'Explore instructor-listed places, food, festivals, and history in Masbate.',
      // VERIFY: needs source check.
      history: {
        origin: 'Masbate sits at the crossroads of the Bicol and Visayas regions. Its wide grasslands led to a long tradition of cattle ranching that continues today.',
        name: 'Several local legends explain the name, and historians debate which is right. Early Spanish chronicles wrote the island’s name in forms close to ‘Masbate’ as far back as the 1560s.',
        verified: false
      }
    },
    {
      id: 'sorsogon', name: 'Sorsogon', capital: 'Sorsogon City',
      image: 'images/sorsogon/province-sorsogon.jpg',
      imageCredit: 'See images/PHOTO-CREDITS.txt — province-sorsogon.jpg',
      blurb: 'Explore instructor-listed places, food, festivals, and history in Sorsogon.',
      // VERIFY: needs source check.
      history: {
        origin: 'Sorsogon sits on the southernmost tip of Luzon, a natural doorway between Luzon and the Visayas. Its bays served for centuries as a crossing point for traders and seafarers.',
        name: 'The name is often traced to the Bicol word ‘sogsog’, meaning to follow a river upstream or travel along a waterway.',
        verified: false
      }
    }
  ]
,
  beaches: [
      {
          "id":  "misibis-bay",
          "province":  "albay",
          "category":  "beaches",
          "name":  "Misibis Bay",
          "location":  "Municipality of Bacacay",
          "description":  "A popular beach destination with clear water, white sand, resorts, and views of Albay Gulf. Visitors can enjoy swimming, kayaking, snorkeling, and island-hopping.",
          "image":  "images/albay/misibis-bay.jpg",
          "imageAlt":  "Misibis Bay in Municipality of Bacacay, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "vanishing-island",
          "province":  "albay",
          "category":  "beaches",
          "name":  "Vanishing Island",
          "location":  "Municipality of Bacacay",
          "description":  "A small sandbar that appears during low tide and becomes covered by seawater during high tide. It is known for clear water and beautiful views of Mayon Volcano.",
          "image":  "images/albay/vanishing-island.jpg",
          "imageAlt":  "Vanishing Island in Municipality of Bacacay, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "joroan-beach",
          "province":  "albay",
          "category":  "beaches",
          "name":  "Joroan Beach",
          "location":  "Municipality of Tiwi",
          "description":  "A peaceful coastal area with views of the Pacific Ocean, suitable for swimming, picnics, and enjoying the natural scenery.",
          "image":  "images/albay/joroan-beach.jpg",
          "imageAlt":  "Joroan Beach in Municipality of Tiwi, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "balaynan-beach",
          "province":  "albay",
          "category":  "beaches",
          "name":  "Balaynan Beach",
          "location":  "Municipality of Santo Domingo",
          "description":  "A quiet coastal destination with natural rock formations and clear seawater, ideal for a relaxing beach experience.",
          "image":  "images/albay/balaynan-beach.jpg",
          "imageAlt":  "Balaynan Beach in Municipality of Santo Domingo, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "sogod-beach",
          "province":  "albay",
          "category":  "beaches",
          "name":  "Sogod Beach",
          "location":  "Municipality of Bacacay",
          "description":  "A coastal attraction with views of the sea and nearby mountains, suitable for swimming, family outings, and sightseeing.",
          "image":  "images/albay/sogod-beach.jpg",
          "imageAlt":  "Sogod Beach in Municipality of Bacacay, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "cagraray-island-beaches",
          "province":  "albay",
          "category":  "beaches",
          "name":  "Cagraray Island Beaches",
          "location":  "Municipality of Bacacay",
          "description":  "Cagraray Island has several beaches and coastal attractions with clear water, rock formations, and scenic views of Albay Gulf.",
          "image":  "images/albay/cagraray-island-beaches.jpg",
          "imageAlt":  "Cagraray Island Beaches in Municipality of Bacacay, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "muladbucad-beach",
          "province":  "albay",
          "category":  "beaches",
          "name":  "Muladbucad Beach",
          "location":  "Municipality of Manito",
          "description":  "A peaceful beach surrounded by natural landscapes, suitable for swimming, relaxation, and coastal sightseeing.",
          "image":  "images/albay/muladbucad-beach.jpg",
          "imageAlt":  "Muladbucad Beach in Municipality of Manito, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "buhatan-beach",
          "province":  "albay",
          "category":  "beaches",
          "name":  "Buhatan Beach",
          "location":  "Municipality of Santo Domingo",
          "description":  "A local coastal destination with calm waters and a relaxing atmosphere, suitable for simple beach activities and family gatherings.",
          "image":  "images/albay/buhatan-beach.jpg",
          "imageAlt":  "Buhatan Beach in Municipality of Santo Domingo, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "bagasbas-beach",
          "province":  "camnorte",
          "category":  "beaches",
          "name":  "Bagasbas Beach",
          "location":  "Daet",
          "description":  "A well-known beach with a long shoreline, strong waves, surfing, beach walks, and beautiful sunsets.",
          "image":  "images/camarines-norte/bagasbas-beach.jpg",
          "imageAlt":  "Bagasbas Beach in Daet, Camarines Norte",
          "imageCredit":  "“File:BEACH BAGASBAS DEZEMBER 2012 - panoramio.jpg” by KAI LARS SCHERER; CC BY 3.0; https://commons.wikimedia.org/wiki/File:BEACH_BAGASBAS_DEZEMBER_2012_-_panoramio.jpg"
      },
      {
          "id":  "calaguas-islands",
          "province":  "camnorte",
          "category":  "beaches",
          "name":  "Calaguas Islands",
          "location":  "near Vinzons",
          "description":  "Famous for white sand, clear blue water, peaceful surroundings, and scenic landscapes. Mahabang Buhangin is one of the best-known beaches.",
          "image":  "images/camarines-norte/calaguas-islands.jpg",
          "imageAlt":  "Calaguas Islands in near Vinzons, Camarines Norte",
          "imageCredit":  "“File:Calaguas, Vinzons, Camarines Norte, Philippines - panoramio.jpg” by randomtraveller; CC BY 3.0; https://commons.wikimedia.org/wiki/File:Calaguas,_Vinzons,_Camarines_Norte,_Philippines_-_panoramio.jpg"
      },
      {
          "id":  "tinaga-island",
          "province":  "camnorte",
          "category":  "beaches",
          "name":  "Tinaga Island",
          "location":  "Calaguas group",
          "description":  "Known for its long white-sand beach, clear water, camping areas, and sea views.",
          "image":  "images/camarines-norte/tinaga-island.jpg",
          "imageAlt":  "Tinaga Island in Calaguas group, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "maculabo-island",
          "province":  "camnorte",
          "category":  "beaches",
          "name":  "Maculabo Island",
          "location":  "Paracale",
          "description":  "Known for white-sand beaches, clear waters, coral areas, and a peaceful island environment; visitors may swim, snorkel, tour, or camp.",
          "image":  "images/camarines-norte/maculabo-island.jpg",
          "imageAlt":  "Maculabo Island in Paracale, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "apuao-grande-island",
          "province":  "camnorte",
          "category":  "beaches",
          "name":  "Apuao Grande Island",
          "location":  "Mercedes",
          "description":  "A popular island destination with white sand, clear water, green landscapes, and a quiet coastal environment.",
          "image":  "images/camarines-norte/apuao-grande-island.JPG",
          "imageAlt":  "Apuao Grande Island in Mercedes, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "apuao-pequena-island",
          "province":  "camnorte",
          "category":  "beaches",
          "name":  "Apuao Pequena Island",
          "location":  "near Mercedes",
          "description":  "A smaller island near Apuao Grande, known for its peaceful beach, clear water, rock formations, and natural surroundings.",
          "image":  "images/camarines-norte/apuao-pequena-island.JPG",
          "imageAlt":  "Apuao Pequena Island in near Mercedes, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "siete-pecados-islands",
          "province":  "camnorte",
          "category":  "beaches",
          "name":  "Siete Pecados Islands",
          "location":  "near Mercedes",
          "description":  "A group of small islands known for clear water, coral reefs, beaches, and island-hopping.",
          "image":  "images/camarines-norte/siete-pecados-islands.jpg",
          "imageAlt":  "Siete Pecados Islands in near Mercedes, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "colasi-beach",
          "province":  "camnorte",
          "category":  "beaches",
          "name":  "Colasi Beach",
          "location":  "Mercedes",
          "description":  "A quiet beach with coastal scenery and a peaceful atmosphere away from crowded tourist areas.",
          "image":  "images/camarines-norte/colasi-beach.jpg",
          "imageAlt":  "Colasi Beach in Mercedes, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "bagasbas-coastal-area",
          "province":  "camnorte",
          "category":  "beaches",
          "name":  "Bagasbas Coastal Area",
          "location":  "Daet",
          "description":  "Popular for sunset viewing, beach walks, local food, outdoor activities, and seaside events.",
          "image":  "images/camarines-norte/bagasbas-coastal-area.jpg",
          "imageAlt":  "Bagasbas Coastal Area in Daet, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "lanot-beach",
          "province":  "camnorte",
          "category":  "beaches",
          "name":  "Lanot Beach",
          "location":  "Camarines Norte",
          "description":  "A coastal destination known for quiet surroundings, natural scenery, and a relaxing beach environment.",
          "image":  "images/camarines-norte/lanot-beach.jpg",
          "imageAlt":  "Lanot Beach in Camarines Norte, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "caramoan-islands",
          "province":  "camsur",
          "category":  "beaches",
          "name":  "Caramoan Islands",
          "location":  "Municipality of Caramoan",
          "description":  "Known for beaches, limestone cliffs, clear waters, caves, and small islands; popular for island-hopping, swimming, snorkeling, and kayaking.",
          "image":  "images/camarines-sur/caramoan-islands.jpg",
          "imageAlt":  "Caramoan Islands in Municipality of Caramoan, Camarines Sur",
          "imageCredit":  "“File:Cagbalinad Island, Caramoan, Camarines Sur.jpg” by JannahTepace; CC BY-SA 4.0; https://commons.wikimedia.org/wiki/File:Cagbalinad_Island,_Caramoan,_Camarines_Sur.jpg"
      },
      {
          "id":  "gota-beach",
          "province":  "camsur",
          "category":  "beaches",
          "name":  "Gota Beach",
          "location":  "Municipality of Caramoan",
          "description":  "Surrounded by green hills, limestone formations, and calm waters; one of Caramoan’s best-known beach destinations.",
          "image":  "images/camarines-sur/gota-beach.jpg",
          "imageAlt":  "Gota Beach in Municipality of Caramoan, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "atulayan-island",
          "province":  "camsur",
          "category":  "beaches",
          "name":  "Atulayan Island",
          "location":  "Municipality of Sagñay",
          "description":  "An island with white sand, clear seawater, and peaceful surroundings, suitable for swimming, snorkeling, and relaxation.",
          "image":  "images/camarines-sur/atulayan-island.jpg",
          "imageAlt":  "Atulayan Island in Municipality of Sagñay, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "sabang-beach",
          "province":  "camsur",
          "category":  "beaches",
          "name":  "Sabang Beach",
          "location":  "Municipality of San Jose",
          "description":  "A coastal area and common starting point for boat trips to the Caramoan Islands, with views of the sea and nearby islands.",
          "image":  "images/camarines-sur/sabang-beach.jpg",
          "imageAlt":  "Sabang Beach in Municipality of San Jose, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "nato-beach",
          "province":  "camsur",
          "category":  "beaches",
          "name":  "Nato Beach",
          "location":  "Municipality of Sagñay",
          "description":  "A quiet coastal destination with views of the Pacific Ocean, suitable for picnics and simple beach activities.",
          "image":  "images/camarines-sur/nato-beach.jpg",
          "imageAlt":  "Nato Beach in Municipality of Sagñay, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "puraran-beach",
          "province":  "catanduanes",
          "category":  "beaches",
          "name":  "Puraran Beach",
          "location":  "Baras",
          "description":  "Famous for strong waves and surfing, with beautiful scenery and a peaceful coastal environment.",
          "image":  "images/catanduanes/puraran-beach.jpg",
          "imageAlt":  "Puraran Beach in Baras, Catanduanes",
          "imageCredit":  "“File:Puraran beach.jpg” by L. from ROTHERHAM, YORKSHIRE, UNITED KINGDOM; CC BY 2.0; https://commons.wikimedia.org/wiki/File:Puraran_beach.jpg"
      },
      {
          "id":  "mamangal-beach",
          "province":  "catanduanes",
          "category":  "beaches",
          "name":  "Mamangal Beach",
          "location":  "Baras",
          "description":  "A quiet beach with clear water and natural surroundings, suitable for swimming, sightseeing, and relaxation.",
          "image":  "images/catanduanes/mamangal-beach.jpg",
          "imageAlt":  "Mamangal Beach in Baras, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "twin-rocks-beach",
          "province":  "catanduanes",
          "category":  "beaches",
          "name":  "Twin Rocks Beach",
          "location":  "Baras",
          "description":  "Named for two large rock formations near the shore; a scenic place for swimming and photography.",
          "image":  "images/catanduanes/twin-rocks-beach.jpg",
          "imageAlt":  "Twin Rocks Beach in Baras, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "talisoy-beach",
          "province":  "catanduanes",
          "category":  "beaches",
          "name":  "Talisoy Beach",
          "location":  "Virac",
          "description":  "A peaceful coastal destination with clear water, accessible from Virac and visited by locals and tourists.",
          "image":  "images/catanduanes/talisoy-beach.jpg",
          "imageAlt":  "Talisoy Beach in Virac, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "balacay-point",
          "province":  "catanduanes",
          "category":  "beaches",
          "name":  "Balacay Point",
          "location":  "Baras",
          "description":  "A coastal viewpoint with cliffs, green hills, and wide views of the Pacific Ocean.",
          "image":  "images/catanduanes/balacay-point.jpg",
          "imageAlt":  "Balacay Point in Baras, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "buntod-reef-marine-sanctuary",
          "province":  "masbate",
          "category":  "beaches",
          "name":  "Buntod Reef Marine Sanctuary",
          "location":  "Masbate City",
          "description":  "Known for its sandbar, coral reefs, clear water, and marine life; popular for snorkeling and environmental tourism.",
          "image":  "images/masbate/buntod-reef-marine-sanctuary.jpg",
          "imageAlt":  "Buntod Reef Marine Sanctuary in Masbate City, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "palani-beach",
          "province":  "masbate",
          "category":  "beaches",
          "name":  "Palani Beach",
          "location":  "Balud",
          "description":  "A long stretch of white sand and peaceful coastal scenery, suitable for swimming, camping, and relaxation.",
          "image":  "images/masbate/palani-beach.jpg",
          "imageAlt":  "Palani Beach in Balud, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "jintotolo-island",
          "province":  "masbate",
          "category":  "beaches",
          "name":  "Jintotolo Island",
          "location":  "Balud",
          "description":  "An island with beaches, coral reefs, and the historic Jintotolo Lighthouse, accessible by boat.",
          "image":  "images/masbate/jintotolo-island.jpg",
          "imageAlt":  "Jintotolo Island in Balud, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "tinigban-beach",
          "province":  "masbate",
          "category":  "beaches",
          "name":  "Tinigban Beach",
          "location":  "Mandaon",
          "description":  "Known for clear water and quiet surroundings, attractive to visitors seeking a less crowded beach.",
          "image":  "images/masbate/tinigban-beach.jpg",
          "imageAlt":  "Tinigban Beach in Mandaon, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "halea-nature-park",
          "province":  "masbate",
          "category":  "beaches",
          "name":  "Halea Nature Park",
          "location":  "Monreal, Ticao Island",
          "description":  "Has clear seawater, rock formations, coral reefs, and marine life; popular for swimming, snorkeling, and island-hopping.",
          "image":  "images/masbate/halea-nature-park.jpg",
          "imageAlt":  "Halea Nature Park in Monreal, Ticao Island, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "subic-beach",
          "province":  "sorsogon",
          "category":  "beaches",
          "name":  "Subic Beach",
          "location":  "Matnog",
          "description":  "Famous for pinkish-white sand, clear water, and beautiful rock formations.",
          "image":  "images/sorsogon/subic-beach.jpg",
          "imageAlt":  "Subic Beach in Matnog, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "tikling-island",
          "province":  "sorsogon",
          "category":  "beaches",
          "name":  "Tikling Island",
          "location":  "Matnog",
          "description":  "Known for white sand, turquoise water, and natural coastal scenery, usually reached by boat.",
          "image":  "images/sorsogon/tikling-island.jpg",
          "imageAlt":  "Tikling Island in Matnog, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "calintaan-island",
          "province":  "sorsogon",
          "category":  "beaches",
          "name":  "Calintaan Island",
          "location":  "Matnog",
          "description":  "Known for beaches, caves, lagoons, and clear waters; a popular island-hopping destination.",
          "image":  "images/sorsogon/calintaan-island.jpg",
          "imageAlt":  "Calintaan Island in Matnog, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "tolong-gapo-beach",
          "province":  "sorsogon",
          "category":  "beaches",
          "name":  "Tolong Gapo Beach",
          "location":  "Gubat",
          "description":  "A quiet coastal destination with a wide shoreline, suitable for swimming, picnics, and relaxation.",
          "image":  "images/sorsogon/tolong-gapo-beach.jpg",
          "imageAlt":  "Tolong Gapo Beach in Gubat, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "panumbagan-sandbar",
          "province":  "sorsogon",
          "category":  "beaches",
          "name":  "Panumbagan Sandbar",
          "location":  "Prieto Diaz",
          "description":  "Known for shallow water and beautiful sand formations; best visited during low tide.",
          "image":  "images/sorsogon/panumbagan-sandbar.jpg",
          "imageAlt":  "Panumbagan Sandbar in Prieto Diaz, Sorsogon",
          "imageCredit":  ""
      }
  ]
,
  spots: [
      {
          "id":  "mayon-volcano",
          "province":  "albay",
          "category":  "spots",
          "name":  "Mayon Volcano",
          "location":  "Legazpi City and surrounding municipalities",
          "description":  "One of the Philippines’ most famous natural landmarks, known for its nearly perfect cone shape. It is popular for sightseeing, hiking where permitted, camping in designated areas, and photography.",
          "image":  "images/albay/mayon-volcano.jpg",
          "imageAlt":  "Mayon Volcano in Legazpi City and surrounding municipalities, Albay",
          "imageCredit":  "“Mayon Volcano, Albay, Philippines” by Johrabino; CC BY-SA 4.0; https://commons.wikimedia.org/wiki/File:Mayon_Volcano,_Albay,_Philippines.jpg"
      },
      {
          "id":  "cagsawa-ruins",
          "province":  "albay",
          "category":  "spots",
          "name":  "Cagsawa Ruins",
          "location":  "Municipality of Daraga",
          "description":  "The remains of Cagsawa Church, buried during Mayon Volcano’s 1814 eruption. Its bell tower is one of Albay’s best-known historical landmarks.",
          "image":  "images/albay/cagsawa-ruins.jpg",
          "imageAlt":  "Cagsawa Ruins in Municipality of Daraga, Albay",
          "imageCredit":  "“Cagsaua Church Ruins - Daraga, Albay” by M0N FEDERE MD; CC BY-SA 3.0; https://commons.wikimedia.org/wiki/File:Cagsaua_Church_Ruins_-_Daraga,_Albay.tiff"
      },
      {
          "id":  "lignon-hill-nature-park",
          "province":  "albay",
          "category":  "spots",
          "name":  "Ligñon Hill Nature Park",
          "location":  "Legazpi City",
          "description":  "A popular viewpoint with views of Mayon Volcano, Legazpi City, and Albay Gulf. Activities include hiking and ziplining when available.",
          "image":  "images/albay/lignon-hill-nature-park.jpg",
          "imageAlt":  "Ligñon Hill Nature Park in Legazpi City, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "quitinday-green-hills",
          "province":  "albay",
          "category":  "spots",
          "name":  "Quitinday Green Hills",
          "location":  "Municipality of Camalig",
          "description":  "Known for rolling green hills and wide countryside views; its landscape is often compared with Bohol’s Chocolate Hills.",
          "image":  "images/albay/quitinday-green-hills.jpg",
          "imageAlt":  "Quitinday Green Hills in Municipality of Camalig, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "sumlang-lake",
          "province":  "albay",
          "category":  "spots",
          "name":  "Sumlang Lake",
          "location":  "Municipality of Camalig",
          "description":  "A peaceful lake with views of Mayon Volcano. Visitors can enjoy bamboo rafting, kayaking, and photography when available.",
          "image":  "images/albay/sumlang-lake.jpg",
          "imageAlt":  "Sumlang Lake in Municipality of Camalig, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "hoyop-hoyopan-cave",
          "province":  "albay",
          "category":  "spots",
          "name":  "Hoyop-Hoyopan Cave",
          "location":  "Municipality of Camalig",
          "description":  "A natural cave system with rock formations and passages. Its name comes from the local word “hoyop,” meaning blowing air.",
          "image":  "images/albay/hoyop-hoyopan-cave.jpg",
          "imageAlt":  "Hoyop-Hoyopan Cave in Municipality of Camalig, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "vera-falls",
          "province":  "albay",
          "category":  "spots",
          "name":  "Vera Falls",
          "location":  "Municipality of Malinao",
          "description":  "A waterfall surrounded by forests and greenery, known for its clear water and nature-trip setting.",
          "image":  "images/albay/vera-falls.jpg",
          "imageAlt":  "Vera Falls in Municipality of Malinao, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "jovellar-underground-river",
          "province":  "albay",
          "category":  "spots",
          "name":  "Jovellar Underground River",
          "location":  "Municipality of Jovellar",
          "description":  "A natural river that passes through a cave. Visitors may explore the area by bamboo raft, subject to local conditions.",
          "image":  "images/albay/jovellar-underground-river.jpg",
          "imageAlt":  "Jovellar Underground River in Municipality of Jovellar, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "albay-park-and-wildlife",
          "province":  "albay",
          "category":  "spots",
          "name":  "Albay Park and Wildlife",
          "location":  "Legazpi City",
          "description":  "A recreational area with trees, gardens, animals, and picnic spaces, suitable for families and students.",
          "image":  "images/albay/albay-park-and-wildlife.jpg",
          "imageAlt":  "Albay Park and Wildlife in Legazpi City, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "mayon-skyline-nature-park",
          "province":  "albay",
          "category":  "spots",
          "name":  "Mayon Skyline Nature Park",
          "location":  "Tabaco City highlands",
          "description":  "A highland destination known for cool weather and scenic views of Mayon Volcano and surrounding areas.",
          "image":  "images/albay/mayon-skyline-nature-park.jpg",
          "imageAlt":  "Mayon Skyline Nature Park in Tabaco City highlands, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "parroquia-de-san-juan-bautista",
          "province":  "camnorte",
          "category":  "spots",
          "name":  "Parroquia de San Juan Bautista",
          "location":  "Daet",
          "description":  "A historic church connected with the religious and colonial history of Camarines Norte.",
          "image":  "images/camarines-norte/parroquia-de-san-juan-bautista.jpg",
          "imageAlt":  "Parroquia de San Juan Bautista in Daet, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "first-rizal-monument",
          "province":  "camnorte",
          "category":  "spots",
          "name":  "First Rizal Monument",
          "location":  "Daet",
          "description":  "Built in honor of Dr. José Rizal and recognized as the first monument erected for the national hero in the Philippines.",
          "image":  "images/camarines-norte/first-rizal-monument.jpg",
          "imageAlt":  "First Rizal Monument in Daet, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "calaguas-island-hills",
          "province":  "camnorte",
          "category":  "spots",
          "name":  "Calaguas Island Hills",
          "location":  "Calaguas",
          "description":  "Green hills and scenic viewpoints offer opportunities for hiking, photography, and views of the sea and nearby islands.",
          "image":  "images/camarines-norte/calaguas-island-hills.jpg",
          "imageAlt":  "Calaguas Island Hills in Calaguas, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "malatap-falls",
          "province":  "camnorte",
          "category":  "spots",
          "name":  "Malatap Falls",
          "location":  "Basud",
          "description":  "A natural waterfall surrounded by greenery, suitable for swimming, nature trips, and relaxation.",
          "image":  "images/camarines-norte/malatap-falls.jpg",
          "imageAlt":  "Malatap Falls in Basud, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "bagasbas-surfing-area",
          "province":  "camnorte",
          "category":  "spots",
          "name":  "Bagasbas Surfing Area",
          "location":  "Daet",
          "description":  "An outdoor attraction known for its waves and visited by beginner and experienced surfers.",
          "image":  "images/camarines-norte/bagasbas-surfing-area.jpg",
          "imageAlt":  "Bagasbas Surfing Area in Daet, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "mercedes-fish-port",
          "province":  "camnorte",
          "category":  "spots",
          "name":  "Mercedes Fish Port",
          "location":  "Mercedes",
          "description":  "A place to observe the fishing industry, boats, seafood trading, and daily activities of coastal communities.",
          "image":  "images/camarines-norte/mercedes-fish-port.jpg",
          "imageAlt":  "Mercedes Fish Port in Mercedes, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "camarines-norte-provincial-capitol-complex",
          "province":  "camnorte",
          "category":  "spots",
          "name":  "Camarines Norte Provincial Capitol Complex",
          "location":  "Daet",
          "description":  "Represents the province’s government and development history and is near other public and historical areas.",
          "image":  "images/camarines-norte/camarines-norte-provincial-capitol-complex.jpg",
          "imageAlt":  "Camarines Norte Provincial Capitol Complex in Daet, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "daet-heritage-and-town-center",
          "province":  "camnorte",
          "category":  "spots",
          "name":  "Daet Heritage and Town Center",
          "location":  "Daet",
          "description":  "Old structures, churches, public spaces, local markets, and cultural areas show the history of the provincial capital.",
          "image":  "images/camarines-norte/daet-heritage-and-town-center.jpg",
          "imageAlt":  "Daet Heritage and Town Center in Daet, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "paracale-gold-mining-areas",
          "province":  "camnorte",
          "category":  "spots",
          "name":  "Paracale Gold-Mining Areas",
          "location":  "Paracale",
          "description":  "Reflect the town’s long gold-mining history and the importance of mining to its economy.",
          "image":  "images/camarines-norte/paracale-gold-mining-areas.jpg",
          "imageAlt":  "Paracale Gold-Mining Areas in Paracale, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "mampurog-river",
          "province":  "camnorte",
          "category":  "spots",
          "name":  "Mampurog River",
          "location":  "San Lorenzo Ruiz",
          "description":  "A natural attraction known for clear water, rocks, greenery, and areas suitable for swimming and outdoor activities.",
          "image":  "images/camarines-norte/mampurog-river.jpg",
          "imageAlt":  "Mampurog River in San Lorenzo Ruiz, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "mount-isarog",
          "province":  "camsur",
          "category":  "spots",
          "name":  "Mount Isarog",
          "location":  "Naga City, Pili, and nearby municipalities",
          "description":  "A forest-covered volcano with rich biodiversity, streams, waterfalls, and hiking trails; an important natural landmark of Camarines Sur.",
          "image":  "images/camarines-sur/mount-isarog.jpg",
          "imageAlt":  "Mount Isarog in Naga City, Pili, and nearby municipalities, Camarines Sur",
          "imageCredit":  "“File:Mount Isarog View at Antipolo Baao Camarines Sur.jpg” by Zyrahila; CC BY-SA 4.0; https://commons.wikimedia.org/wiki/File:Mount_Isarog_View_at_Antipolo_Baao_Camarines_Sur.jpg"
      },
      {
          "id":  "malabsay-falls",
          "province":  "camsur",
          "category":  "spots",
          "name":  "Malabsay Falls",
          "location":  "Naga City",
          "description":  "Located at the foot of Mount Isarog, with cool water, natural pools, and a forested environment.",
          "image":  "images/camarines-sur/malabsay-falls.jpg",
          "imageAlt":  "Malabsay Falls in Naga City, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "panicuason-hot-spring-resort",
          "province":  "camsur",
          "category":  "spots",
          "name":  "Panicuason Hot Spring Resort",
          "location":  "Naga City",
          "description":  "Offers hot and cold pools, natural scenery, zip lines, and outdoor activities.",
          "image":  "images/camarines-sur/panicuason-hot-spring-resort.jpg",
          "imageAlt":  "Panicuason Hot Spring Resort in Naga City, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "camsur-watersports-complex",
          "province":  "camsur",
          "category":  "spots",
          "name":  "Camsur Watersports Complex",
          "location":  "Pili",
          "description":  "Known for wakeboarding and other water activities, with recreational facilities for visitors and athletes.",
          "image":  "images/camarines-sur/camsur-watersports-complex.jpg",
          "imageAlt":  "Camsur Watersports Complex in Pili, Camarines Sur",
          "imageCredit":  "“File:Wakeboardingcwc.jpg” by Ninjakeg; CC BY-SA 3.0; https://commons.wikimedia.org/wiki/File:Wakeboardingcwc.jpg"
      },
      {
          "id":  "haciendas-de-naga",
          "province":  "camsur",
          "category":  "spots",
          "name":  "Haciendas de Naga",
          "location":  "Naga City",
          "description":  "A family-friendly attraction with gardens, pools, recreational areas, and nature-based activities.",
          "image":  "images/camarines-sur/haciendas-de-naga.jpg",
          "imageAlt":  "Haciendas de Naga in Naga City, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "binurong-point",
          "province":  "catanduanes",
          "category":  "spots",
          "name":  "Binurong Point",
          "location":  "Baras",
          "description":  "Known for rolling green hills, cliffs, and ocean views; a popular place for hiking and photography.",
          "image":  "images/catanduanes/binurong-point.jpg",
          "imageAlt":  "Binurong Point in Baras, Catanduanes",
          "imageCredit":  "“File:Binurong Point, Catanduanes.jpg” by ASEBASTIAN1218; CC BY-SA 4.0; https://commons.wikimedia.org/wiki/File:Binurong_Point,_Catanduanes.jpg"
      },
      {
          "id":  "nahulugan-falls",
          "province":  "catanduanes",
          "category":  "spots",
          "name":  "Nahulugan Falls",
          "location":  "Gigmoto",
          "description":  "A waterfall surrounded by forests and rock formations, offering cool water and natural scenery.",
          "image":  "images/catanduanes/nahulugan-falls.jpg",
          "imageAlt":  "Nahulugan Falls in Gigmoto, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "hicming-falls",
          "province":  "catanduanes",
          "category":  "spots",
          "name":  "Hicming Falls",
          "location":  "Baras",
          "description":  "A natural waterfall surrounded by trees and rocky landscapes, suitable for nature trips.",
          "image":  "images/catanduanes/hicming-falls.jpg",
          "imageAlt":  "Hicming Falls in Baras, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "bato-river",
          "province":  "catanduanes",
          "category":  "spots",
          "name":  "Bato River",
          "location":  "Bato",
          "description":  "A scenic natural attraction connected with the historic town of Bato, offering a peaceful setting for sightseeing.",
          "image":  "images/catanduanes/bato-river.jpg",
          "imageAlt":  "Bato River in Bato, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "catanduanes-scenic-hills",
          "province":  "catanduanes",
          "category":  "spots",
          "name":  "Catanduanes Scenic Hills",
          "location":  "Virac and Baras",
          "description":  "Hills and grasslands offer wide views of the Pacific Ocean, farmlands, and coastal communities.",
          "image":  "images/catanduanes/catanduanes-scenic-hills.jpg",
          "imageAlt":  "Catanduanes Scenic Hills in Virac and Baras, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "kalanay-falls",
          "province":  "masbate",
          "category":  "spots",
          "name":  "Kalanay Falls",
          "location":  "Aroroy",
          "description":  "A natural waterfall surrounded by forests and rock formations, suitable for swimming and nature trips.",
          "image":  "images/masbate/kalanay-falls.jpg",
          "imageAlt":  "Kalanay Falls in Aroroy, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "pawa-mangrove-park",
          "province":  "masbate",
          "category":  "spots",
          "name":  "Pawa Mangrove Park",
          "location":  "Masbate City",
          "description":  "A conservation area protecting mangrove trees and coastal ecosystems, where visitors can learn about their importance.",
          "image":  "images/masbate/pawa-mangrove-park.jpg",
          "imageAlt":  "Pawa Mangrove Park in Masbate City, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "mobo-hills",
          "province":  "masbate",
          "category":  "spots",
          "name":  "Mobo Hills",
          "location":  "Mobo",
          "description":  "Rolling landscapes and elevated areas provide views of the surrounding countryside and communities.",
          "image":  "images/masbate/mobo-hills.jpg",
          "imageAlt":  "Mobo Hills in Mobo, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "ticao-island-caves-and-rock-formations",
          "province":  "masbate",
          "category":  "spots",
          "name":  "Ticao Island Caves and Rock Formations",
          "location":  "Monreal",
          "description":  "Ticao Island is known for caves, cliffs, rock formations, and scenic coastal landscapes, often visited by boat tour.",
          "image":  "images/masbate/ticao-island-caves-and-rock-formations.jpg",
          "imageAlt":  "Ticao Island Caves and Rock Formations in Monreal, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "masbate-rodeo-grounds",
          "province":  "masbate",
          "category":  "spots",
          "name":  "Masbate Rodeo Grounds",
          "location":  "Masbate City",
          "description":  "Used for cattle-riding events and demonstrations, representing the province’s ranching and cowboy culture.",
          "image":  "images/masbate/masbate-rodeo-grounds.jpg",
          "imageAlt":  "Masbate Rodeo Grounds in Masbate City, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "bulusan-volcano-natural-park",
          "province":  "sorsogon",
          "category":  "spots",
          "name":  "Bulusan Volcano Natural Park",
          "location":  "Bulusan",
          "description":  "Includes forests, hiking trails, waterfalls, and Bulusan Lake; an important natural and ecological attraction.",
          "image":  "images/sorsogon/bulusan-volcano-natural-park.jpg",
          "imageAlt":  "Bulusan Volcano Natural Park in Bulusan, Sorsogon",
          "imageCredit":  "“File:Bulusan Lake at Bulusan, Sorsogon.jpg” by MarvinBikolano; CC BY-SA 4.0; https://commons.wikimedia.org/wiki/File:Bulusan_Lake_at_Bulusan,_Sorsogon.jpg"
      },
      {
          "id":  "paguriran-island-and-lagoon",
          "province":  "sorsogon",
          "category":  "spots",
          "name":  "Paguriran Island and Lagoon",
          "location":  "Bacon, Sorsogon City",
          "description":  "A natural rock formation surrounded by seawater. During low tide, visitors may walk through shallow water to reach the island and lagoon.",
          "image":  "images/sorsogon/paguriran-island-and-lagoon.jpg",
          "imageAlt":  "Paguriran Island and Lagoon in Bacon, Sorsogon City, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "irosin-hot-and-cold-springs",
          "province":  "sorsogon",
          "category":  "spots",
          "name":  "Irosin Hot and Cold Springs",
          "location":  "Irosin",
          "description":  "Natural hot and cold springs near Bulusan Volcano, used for relaxation and recreation.",
          "image":  "images/sorsogon/irosin-hot-and-cold-springs.jpg",
          "imageAlt":  "Irosin Hot and Cold Springs in Irosin, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "ogod-river",
          "province":  "sorsogon",
          "category":  "spots",
          "name":  "Ogod River",
          "location":  "Donsol",
          "description":  "A scenic river with mangroves and calm waterways, where visitors can enjoy boat tours and observe nature.",
          "image":  "images/sorsogon/ogod-river.jpg",
          "imageAlt":  "Ogod River in Donsol, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "barcelona-ruins-park",
          "province":  "sorsogon",
          "category":  "spots",
          "name":  "Barcelona Ruins Park",
          "location":  "Barcelona",
          "description":  "Contains old Spanish-period structures, stone walls, and coastal heritage sites that reflect the municipality’s colonial history.",
          "image":  "images/sorsogon/barcelona-ruins-park.jpg",
          "imageAlt":  "Barcelona Ruins Park in Barcelona, Sorsogon",
          "imageCredit":  ""
      }
  ]
,
  // TODO: ask instructor/add more — Camarines Sur has one item; Catanduanes numbering starts at 2.
  foods: [
      {
          "id":  "bicol-express",
          "province":  "albay",
          "category":  "foods",
          "name":  "Bicol Express",
          "location":  "",
          "description":  "A spicy dish commonly made with pork, coconut milk, shrimp paste, and chili peppers.",
          "image":  "images/food/bicol-express.jpg",
          "imageAlt":  "Bicol Express, a food item from Albay",
          "imageCredit":  "“File:Bicol Express 2(1).jpg” by MarvinBikolano; CC BY-SA 4.0; https://commons.wikimedia.org/wiki/File:Bicol_Express_2(1).jpg"
      },
      {
          "id":  "pinangat",
          "province":  "albay",
          "category":  "foods",
          "name":  "Pinangat",
          "location":  "",
          "description":  "A dish made from taro leaves filled with meat or seafood and cooked in coconut milk and chili. Camalig is especially known for this Bicolano specialty.",
          "image":  "images/food/pinangat.jpg",
          "imageAlt":  "Pinangat, a food item from Albay",
          "imageCredit":  ""
      },
      {
          "id":  "laing",
          "province":  "albay",
          "category":  "foods",
          "name":  "Laing",
          "location":  "",
          "description":  "Dried taro leaves cooked in coconut milk, chili, and sometimes seafood or pork; usually served with rice.",
          "image":  "images/food/laing.jpg",
          "imageAlt":  "Laing, a food item from Albay",
          "imageCredit":  "“File:Gulay na Natong.jpg” by MarvinBikolano; CC BY-SA 4.0; https://commons.wikimedia.org/wiki/File:Gulay_na_Natong.jpg"
      },
      {
          "id":  "bicol-express-pizza",
          "province":  "albay",
          "category":  "foods",
          "name":  "Bicol Express Pizza",
          "location":  "",
          "description":  "A modern food inspired by Bicol Express, combining its spicy flavors with pizza ingredients.",
          "image":  "images/food/bicol-express-pizza.jpg",
          "imageAlt":  "Bicol Express Pizza, a food item from Albay",
          "imageCredit":  ""
      },
      {
          "id":  "sili-ice-cream",
          "province":  "albay",
          "category":  "foods",
          "name":  "Sili Ice Cream",
          "location":  "",
          "description":  "A distinctive dessert flavored with Bicol chili peppers, combining sweetness with a mild spicy taste.",
          "image":  "images/food/sili-ice-cream.jpg",
          "imageAlt":  "Sili Ice Cream, a food item from Albay",
          "imageCredit":  "“File:1st Collonial Grill\u0027s Sili Ice Cream (Level1).jpg” by ShmilyDigital; CC BY-SA 4.0; https://commons.wikimedia.org/wiki/File:1st_Collonial_Grill%27s_Sili_Ice_Cream_(Level1).jpg"
      },
      {
          "id":  "binutong",
          "province":  "albay",
          "category":  "foods",
          "name":  "Binutong",
          "location":  "",
          "description":  "A sticky-rice delicacy cooked with coconut milk and wrapped in banana leaves.",
          "image":  "images/food/binutong.jpg",
          "imageAlt":  "Binutong, a food item from Albay",
          "imageCredit":  ""
      },
      {
          "id":  "tinutungang-isda",
          "province":  "albay",
          "category":  "foods",
          "name":  "Tinutungang Isda",
          "location":  "",
          "description":  "Fish cooked with coconut milk and spices, commonly found in coastal communities.",
          "image":  "images/food/tinutungang-isda.jpg",
          "imageAlt":  "Tinutungang Isda, a food item from Albay",
          "imageCredit":  ""
      },
      {
          "id":  "pancit-bato",
          "province":  "albay",
          "category":  "foods",
          "name":  "Pancit Bato",
          "location":  "",
          "description":  "A noodle dish using dried noodles cooked with meat, vegetables, and seafood; associated with Bato and other parts of Bicol.",
          "image":  "images/food/pancit-bato.jpg",
          "imageAlt":  "Pancit Bato, a food item from Albay",
          "imageCredit":  ""
      },
      {
          "id":  "queen-pineapple",
          "province":  "camnorte",
          "category":  "foods",
          "name":  "Queen Pineapple",
          "location":  "",
          "description":  "Camarines Norte is known for its sweet Queen pineapple, sold fresh or used in juices, desserts, jams, and other products.",
          "image":  "images/food/queen-pineapple.jpg",
          "imageAlt":  "Queen Pineapple, a food item from Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "pineapple-products",
          "province":  "camnorte",
          "category":  "foods",
          "name":  "Pineapple Products",
          "location":  "",
          "description":  "Local producers make pineapple jam, candies, dried pineapple, pastries, juice, vinegar, and other products.",
          "image":  "images/food/pineapple-products.jpg",
          "imageAlt":  "Pineapple Products, a food item from Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "fresh-seafood",
          "province":  "camnorte",
          "category":  "foods",
          "name":  "Fresh Seafood",
          "location":  "",
          "description":  "Fish, crabs, shrimp, squid, shellfish, and other seafood are important products of coastal communities.",
          "image":  "images/food/fresh-seafood.jpg",
          "imageAlt":  "Fresh Seafood, a food item from Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "sinantomas",
          "province":  "camnorte",
          "category":  "foods",
          "name":  "Sinantomas",
          "location":  "",
          "description":  "A traditional Bicolano dish usually prepared with pork, coconut milk, spices, and local ingredients.",
          "image":  "images/food/sinantomas.jpg",
          "imageAlt":  "Sinantomas, a food item from Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "native-rice-cakes",
          "province":  "camnorte",
          "category":  "foods",
          "name":  "Native Rice Cakes",
          "location":  "",
          "description":  "Traditional snacks such as puto, bibingka, and suman, made with rice, coconut, sugar, and banana leaves.",
          "image":  "images/food/native-rice-cakes.jpg",
          "imageAlt":  "Native Rice Cakes, a food item from Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "sinapot",
          "province":  "camsur",
          "category":  "foods",
          "name":  "Sinapot",
          "location":  "",
          "description":  "A snack made from saba bananas coated in flour or batter and fried until golden brown.",
          "image":  "images/food/sinapot.jpg",
          "imageAlt":  "Sinapot, a food item from Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "linat-ang-tulingan",
          "province":  "catanduanes",
          "category":  "foods",
          "name":  "Linat-ang Tulingan",
          "location":  "",
          "description":  "A local fish dish prepared with spices, vegetables, or coconut-based ingredients and commonly served with rice.",
          "image":  "images/food/linat-ang-tulingan.jpg",
          "imageAlt":  "Linat-ang Tulingan, a food item from Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "latik",
          "province":  "catanduanes",
          "category":  "foods",
          "name":  "Latik",
          "location":  "",
          "description":  "A sweet coconut-based food that may be used as a topping or eaten as a local dessert.",
          "image":  "images/food/latik.jpg",
          "imageAlt":  "Latik, a food item from Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "maruya",
          "province":  "catanduanes",
          "category":  "foods",
          "name":  "Maruya",
          "location":  "",
          "description":  "Bananas coated in batter and fried; a popular snack sold in markets and food stalls.",
          "image":  "images/food/maruya.jpg",
          "imageAlt":  "Maruya, a food item from Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "masbate-beef",
          "province":  "masbate",
          "category":  "foods",
          "name":  "Masbate Beef",
          "location":  "",
          "description":  "Cattle raising is important in Masbate, making locally produced beef a key food product used in steaks, soups, grilled dishes, and other meals.",
          "image":  "images/food/masbate-beef.jpg",
          "imageAlt":  "Masbate Beef, a food item from Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "binot-ong",
          "province":  "masbate",
          "category":  "foods",
          "name":  "Binot-ong",
          "location":  "",
          "description":  "A traditional rice delicacy prepared and wrapped in leaves, commonly associated with celebrations and special occasions.",
          "image":  "images/food/binot-ong.jpg",
          "imageAlt":  "Binot-ong, a food item from Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "taba-ng-talangka",
          "province":  "masbate",
          "category":  "foods",
          "name":  "Taba ng Talangka",
          "location":  "",
          "description":  "Salted crab fat used as a spread or flavorful ingredient in rice and seafood dishes.",
          "image":  "images/food/taba-ng-talangka.jpg",
          "imageAlt":  "Taba ng Talangka, a food item from Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "moron",
          "province":  "masbate",
          "category":  "foods",
          "name":  "Moron",
          "location":  "",
          "description":  "A sticky-rice delicacy often flavored with chocolate or cocoa and wrapped in banana leaves.",
          "image":  "images/food/moron.jpg",
          "imageAlt":  "Moron, a food item from Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "kinunot",
          "province":  "sorsogon",
          "category":  "foods",
          "name":  "Kinunot",
          "location":  "",
          "description":  "Fish or stingray cooked with coconut milk, chili, and leafy vegetables such as malunggay.",
          "image":  "images/food/kinunot.jpg",
          "imageAlt":  "Kinunot, a food item from Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "baluko",
          "province":  "sorsogon",
          "category":  "foods",
          "name":  "Baluko",
          "location":  "",
          "description":  "A local shellfish commonly prepared as a seafood dish, sometimes cooked with vegetables, spices, or coconut-based ingredients.",
          "image":  "images/food/baluko.jpg",
          "imageAlt":  "Baluko, a food item from Sorsogon",
          "imageCredit":  ""
      }
  ]
,
  festivals: [
      {
          "id":  "magayon-festival",
          "province":  "albay",
          "category":  "festivals",
          "name":  "Magayon Festival",
          "location":  "Province of Albay",
          "description":  "Celebrates Albay’s culture, history, beauty, and natural attractions through cultural dances, parades, food exhibitions, and tourism activities.",
          "image":  "images/albay/magayon-festival.jpg",
          "imageAlt":  "Magayon Festival in Province of Albay, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "ibalong-festival",
          "province":  "albay",
          "category":  "festivals",
          "name":  "Ibalong Festival",
          "location":  "Legazpi City",
          "description":  "Inspired by the Ibalong epic and its ancient heroes; features colorful street performances and dramatic presentations.",
          "image":  "images/festivals/ibalong-festival.jpg",
          "imageAlt":  "Ibalong Festival in Legazpi City, Albay",
          "imageCredit":  "“File:Bini at Ibalong Festival 2025 (2).jpg” by Hisham Ismail; Public domain; https://commons.wikimedia.org/wiki/File:Bini_at_Ibalong_Festival_2025_(2).jpg"
      },
      {
          "id":  "kahulugan-festival",
          "province":  "albay",
          "category":  "festivals",
          "name":  "Kahulugan Festival",
          "location":  "Municipality of Malinao",
          "description":  "Celebrates Malinao’s history, culture, traditions, and achievements.",
          "image":  "images/albay/kahulugan.jpg",
          "imageAlt":  "Kahulugan Festival in Municipality of Malinao, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "pinangat-festival",
          "province":  "albay",
          "category":  "festivals",
          "name":  "Pinangat Festival",
          "location":  "Municipality of Camalig",
          "description":  "Highlights Camalig’s signature dish through cooking activities, food displays, cultural presentations, and community events.",
          "image":  "images/albay/pinangat.jpg",
          "imageAlt":  "Pinangat Festival in Municipality of Camalig, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "coron-festival",
          "province":  "albay",
          "category":  "festivals",
          "name":  "Coron Festival",
          "location":  "Municipality of Tiwi",
          "description":  "Celebrates Tiwi’s history, traditions, and local identity while promoting its attractions and products.",
          "image":  "images/albay/Coron-Festival_PTCCO-Albay-FB-1-scaled.jpg",
          "imageAlt":  "Coron Festival in Municipality of Tiwi, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "tabak-festival",
          "province":  "albay",
          "category":  "festivals",
          "name":  "Tabak Festival",
          "location":  "Tabaco City",
          "description":  "Celebrates Tabaco’s history and identity; its name is associated with the city’s traditional bolo-making industry.",
          "image":  "images/albay/tabak.jpg",
          "imageAlt":  "Tabak Festival in Tabaco City, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "ani-festival",
          "province":  "albay",
          "category":  "festivals",
          "name":  "Ani Festival",
          "location":  "Municipality of Oas",
          "description":  "A thanksgiving celebration for agricultural harvests, highlighting farming, local products, cultural dances, and cooperation.",
          "image":  "images/albay/ani.jpg",
          "imageAlt":  "Ani Festival in Municipality of Oas, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "layag-festival",
          "province":  "albay",
          "category":  "festivals",
          "name":  "Layag Festival",
          "location":  "Municipality of Bacacay",
          "description":  "Celebrates Bacacay’s coastal identity and fishing traditions through cultural activities, parades, and tourism events.",
          "image":  "images/albay/layag.jpg",
          "imageAlt":  "Layag Festival in Municipality of Bacacay, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "karakol-festival",
          "province":  "albay",
          "category":  "festivals",
          "name":  "Karakol Festival",
          "location":  "Municipality of Libon",
          "description":  "A religious and cultural celebration involving dancing, music, processions, and community participation.",
          "image":  "images/albay/karakol.jpg",
          "imageAlt":  "Karakol Festival in Municipality of Libon, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "pandarag-festival",
          "province":  "albay",
          "category":  "festivals",
          "name":  "Pandarag Festival",
          "location":  "Municipality of Polangui",
          "description":  "Showcases Polangui’s traditions, history, local products, and cultural identity.",
          "image":  "images/albay/pandarag.jpg",
          "imageAlt":  "Pandarag Festival in Municipality of Polangui, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "pinyasan-festival",
          "province":  "camnorte",
          "category":  "festivals",
          "name":  "Pinyasan Festival",
          "location":  "Daet",
          "description":  "The province’s best-known festival, celebrating the sweet Queen pineapple through street dancing, cultural performances, parades, food fairs, trade exhibits, and agricultural displays.",
          "image":  "images/festivals/pinyasan-festival.jpg",
          "imageAlt":  "Pinyasan Festival in Daet, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "bantayog-festival",
          "province":  "camnorte",
          "category":  "festivals",
          "name":  "Bantayog Festival",
          "location":  "Daet",
          "description":  "Associated with Daet’s history, community identity, and the First Rizal Monument.",
          "image":  "images/festivals/bantayog-festival.jpg",
          "imageAlt":  "Bantayog Festival in Daet, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "araw-ng-camarines-norte",
          "province":  "camnorte",
          "category":  "festivals",
          "name":  "Araw ng Camarines Norte",
          "location":  "Province of Camarines Norte",
          "description":  "Celebrates the province’s founding and identity through cultural programs, public events, and community activities.",
          "image":  "images/festivals/araw-ng-camarines-norte.jpg",
          "imageAlt":  "Araw ng Camarines Norte in Province of Camarines Norte, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "kadagatan-festival",
          "province":  "camnorte",
          "category":  "festivals",
          "name":  "Kadagatan Festival",
          "location":  "Mercedes",
          "description":  "Celebrates the sea, fishing communities, marine resources, and coastal culture.",
          "image":  "images/festivals/kadagatan-festival.jpg",
          "imageAlt":  "Kadagatan Festival in Mercedes, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "paroy-festival",
          "province":  "camnorte",
          "category":  "festivals",
          "name":  "Paroy Festival",
          "location":  "Paracale",
          "description":  "Highlights the town’s history, gold-mining heritage, religious traditions, and local identity.",
          "image":  "images/festivals/paroy-festival.jpg",
          "imageAlt":  "Paroy Festival in Paracale, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "isla-festival",
          "province":  "camnorte",
          "category":  "festivals",
          "name":  "Isla Festival",
          "location":  "island communities",
          "description":  "Promotes the province’s islands, beaches, marine resources, and coastal tourism.",
          "image":  "images/festivals/isla-festival.jpg",
          "imageAlt":  "Isla Festival in island communities, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "municipal-town-fiestas",
          "province":  "camnorte",
          "category":  "festivals",
          "name":  "Municipal Town Fiestas",
          "location":  "throughout the province",
          "description":  "Patron-saint celebrations typically include religious processions, performances, sports, food fairs, concerts, and community gatherings.",
          "image":  "images/festivals/municipal-town-fiestas.jpg",
          "imageAlt":  "Municipal Town Fiestas in throughout the province, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "sea-and-surfing-events",
          "province":  "camnorte",
          "category":  "festivals",
          "name":  "Sea and Surfing Events",
          "location":  "especially Bagasbas and Mercedes",
          "description":  "Surfing competitions, beach activities, coastal cleanups, and marine-tourism events celebrate the province’s coastal identity.",
          "image":  "images/festivals/sea-and-surfing-events.jpg",
          "imageAlt":  "Sea and Surfing Events in especially Bagasbas and Mercedes, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "penafrancia-festival",
          "province":  "camsur",
          "category":  "festivals",
          "name":  "Peñafrancia Festival",
          "location":  "Naga City",
          "description":  "A major religious celebration honoring Our Lady of Peñafrancia, with novena masses, processions, cultural events, and a fluvial procession.",
          "image":  "images/festivals/penafrancia-festival.jpg",
          "imageAlt":  "Peñafrancia Festival in Naga City, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "voyadores-festival",
          "province":  "camsur",
          "category":  "festivals",
          "name":  "Voyadores Festival",
          "location":  "Naga City",
          "description":  "Features devotees carrying the image of Our Lady of Peñafrancia from the basilica to the cathedral and forms part of the Peñafrancia celebration.",
          "image":  "images/festivals/voyadores-festival.jpg",
          "imageAlt":  "Voyadores Festival in Naga City, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "kaogma-festival",
          "province":  "camsur",
          "category":  "festivals",
          "name":  "Kaogma Festival",
          "location":  "Province of Camarines Sur",
          "description":  "Celebrates the province’s history, culture, food, music, tourism, and local products.",
          "image":  "images/festivals/kaogma-festival.jpg",
          "imageAlt":  "Kaogma Festival in Province of Camarines Sur, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "tinagba-festival",
          "province":  "camsur",
          "category":  "festivals",
          "name":  "Tinagba Festival",
          "location":  "Iriga City",
          "description":  "A harvest and thanksgiving celebration featuring decorated carabao carts, cultural dances, parades, and local products.",
          "image":  "images/festivals/tinagba-festival.jpg",
          "imageAlt":  "Tinagba Festival in Iriga City, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "boa-bowaan-festival",
          "province":  "camsur",
          "category":  "festivals",
          "name":  "Boa-Bowaan Festival",
          "location":  "Nabua",
          "description":  "Highlights Nabua’s traditions, history, food, and cultural identity.",
          "image":  "images/festivals/boa-bowaan-festival.jpg",
          "imageAlt":  "Boa-Bowaan Festival in Nabua, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "catandungan-festival",
          "province":  "catanduanes",
          "category":  "festivals",
          "name":  "Catandungan Festival",
          "location":  "Virac",
          "description":  "Celebrates Catanduanes’ history, culture, tourism, and identity through parades, cultural dances, and competitions.",
          "image":  "images/festivals/catandungan-festival.jpg",
          "imageAlt":  "Catandungan Festival in Virac, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "abaca-festival",
          "province":  "catanduanes",
          "category":  "festivals",
          "name":  "Abaca Festival",
          "location":  "Province of Catanduanes",
          "description":  "Highlights abaca farming and production with product exhibits, handicraft displays, and cultural presentations.",
          "image":  "images/festivals/abaca-festival.jpg",
          "imageAlt":  "Abaca Festival in Province of Catanduanes, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "kagharong-festival",
          "province":  "catanduanes",
          "category":  "festivals",
          "name":  "Kagharong Festival",
          "location":  "various municipalities",
          "description":  "Celebrates community cooperation, local traditions, music, dancing, and social gatherings.",
          "image":  "images/festivals/kagharong-festival.jpg",
          "imageAlt":  "Kagharong Festival in various municipalities, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "padayaw-festival",
          "province":  "catanduanes",
          "category":  "festivals",
          "name":  "Padayaw Festival",
          "location":  "various municipalities",
          "description":  "Showcases the talents, traditions, and cultural practices of Catanduanon communities.",
          "image":  "images/festivals/padayaw-festival.jpg",
          "imageAlt":  "Padayaw Festival in various municipalities, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "rodeo-masbateno",
          "province":  "masbate",
          "category":  "festivals",
          "name":  "Rodeo Masbateño",
          "location":  "Masbate City",
          "description":  "The province’s best-known festival, celebrating cattle raising, horse riding, ranching, and cowboy skills.",
          "image":  "images/festivals/rodeo-masbateno.jpg",
          "imageAlt":  "Rodeo Masbateño in Masbate City, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "kalilang-festival",
          "province":  "masbate",
          "category":  "festivals",
          "name":  "Kalilang Festival",
          "location":  "Masbate City",
          "description":  "Celebrates Masbateño history, culture, music, food, and identity.",
          "image":  "images/festivals/kalilang-festival.jpg",
          "imageAlt":  "Kalilang Festival in Masbate City, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "lapay-bantigue-dance-festival",
          "province":  "masbate",
          "category":  "festivals",
          "name":  "Lapay Bantigue Dance Festival",
          "location":  "Masbate City",
          "description":  "Features the traditional Lapay Bantigue dance, which imitates the graceful movements of seagulls.",
          "image":  "images/festivals/lapay-bantigue-dance-festival.jpg",
          "imageAlt":  "Lapay Bantigue Dance Festival in Masbate City, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "pagdayao-festival",
          "province":  "masbate",
          "category":  "festivals",
          "name":  "Pagdayao Festival",
          "location":  "various municipalities",
          "description":  "A thanksgiving celebration involving cultural presentations, music, dances, and community activities.",
          "image":  "images/festivals/pagdayao-festival.jpg",
          "imageAlt":  "Pagdayao Festival in various municipalities, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "katunggan-festival",
          "province":  "masbate",
          "category":  "festivals",
          "name":  "Katunggan Festival",
          "location":  "coastal municipalities",
          "description":  "Promotes mangrove protection, environmental conservation, and the importance of coastal resources.",
          "image":  "images/festivals/katunggan-festival.jpg",
          "imageAlt":  "Katunggan Festival in coastal municipalities, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "kasanggayahan-festival",
          "province":  "sorsogon",
          "category":  "festivals",
          "name":  "Kasanggayahan Festival",
          "location":  "Sorsogon City and province",
          "description":  "Celebrates Sorsogon’s history, foundation, culture, and identity through parades, cultural dances, exhibits, and competitions.",
          "image":  "images/festivals/kasanggayahan-festival.jpg",
          "imageAlt":  "Kasanggayahan Festival in Sorsogon City and province, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "pili-festival",
          "province":  "sorsogon",
          "category":  "festivals",
          "name":  "Pili Festival",
          "location":  "Sorsogon",
          "description":  "Highlights pili nuts and other local products through food exhibits, cooking activities, and cultural presentations.",
          "image":  "images/festivals/pili-festival.jpg",
          "imageAlt":  "Pili Festival in Sorsogon, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "sarakiki-hadang-festival",
          "province":  "sorsogon",
          "category":  "festivals",
          "name":  "Sarakiki-Hadang Festival",
          "location":  "Sorsogon",
          "description":  "Features costumes, dances, rituals, music, and cultural performances based on local traditions.",
          "image":  "images/festivals/sarakiki-hadang-festival.jpg",
          "imageAlt":  "Sarakiki-Hadang Festival in Sorsogon, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "padaraw-festival",
          "province":  "sorsogon",
          "category":  "festivals",
          "name":  "Padaraw Festival",
          "location":  "various municipalities",
          "description":  "A thanksgiving and cultural celebration with performances, religious activities, and local events.",
          "image":  "images/festivals/padaraw-festival.jpg",
          "imageAlt":  "Padaraw Festival in various municipalities, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "butanding-festival",
          "province":  "sorsogon",
          "category":  "festivals",
          "name":  "Butanding Festival",
          "location":  "Donsol",
          "description":  "Celebrates the whale shark and promotes its protection, responsible tourism, and marine conservation.",
          "image":  "images/festivals/butanding-festival.jpg",
          "imageAlt":  "Butanding Festival in Donsol, Sorsogon",
          "imageCredit":  ""
      }
  ]
,
  history: [
      {
          "id":  "cagsawa-ruins",
          "province":  "albay",
          "category":  "history",
          "name":  "Cagsawa Ruins",
          "location":  "Municipality of Daraga",
          "description":  "The remains of a church destroyed during the 1814 eruption of Mayon Volcano, reminding visitors of the volcano’s destructive power and the history of nearby communities.",
          "image":  "images/albay/cagsawa-ruins.jpg",
          "imageAlt":  "Cagsawa Ruins in Municipality of Daraga, Albay",
          "imageCredit":  "“Cagsaua Church Ruins - Daraga, Albay” by M0N FEDERE MD; CC BY-SA 3.0; https://commons.wikimedia.org/wiki/File:Cagsaua_Church_Ruins_-_Daraga,_Albay.tiff"
      },
      {
          "id":  "daraga-church-nuestra-senora-de-la-porteria-parish-church",
          "province":  "albay",
          "category":  "history",
          "name":  "Daraga Church (Nuestra Señora de la Porteria Parish Church)",
          "location":  "Municipality of Daraga",
          "description":  "A historic Spanish-period church on a hill, with views of Mayon Volcano.",
          "image":  "images/albay/daraga-church-nuestra-senora-de-la-porteria-parish-church.jpg",
          "imageAlt":  "Daraga Church (Nuestra Señora de la Porteria Parish Church) in Municipality of Daraga, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "tabaco-city-heritage-zone",
          "province":  "albay",
          "category":  "history",
          "name":  "Tabaco City Heritage Zone",
          "location":  "Tabaco City",
          "description":  "Old buildings, churches, and streets reflect the city’s Spanish-period history and local development.",
          "image":  "images/albay/tabaco-city-heritage-zone.jpg",
          "imageAlt":  "Tabaco City Heritage Zone in Tabaco City, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "st-john-the-baptist-church",
          "province":  "albay",
          "category":  "history",
          "name":  "St. John the Baptist Church",
          "location":  "Municipality of Bacacay",
          "description":  "A historical and religious landmark reflecting Spanish-period influence in the municipality.",
          "image":  "images/albay/st-john-the-baptist-church.jpg",
          "imageAlt":  "St. John the Baptist Church in Municipality of Bacacay, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "ibalong-epic",
          "province":  "albay",
          "category":  "history",
          "name":  "Ibalong Epic",
          "location":  "Legazpi City and Albay",
          "description":  "An ancient Bicolano epic about heroes including Baltog, Handyong, and Bantong, and their adventures and battles.",
          "image":  "images/albay/ibalong-epic.jpg",
          "imageAlt":  "Ibalong Epic in Legazpi City and Albay, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "legend-of-mayon-volcano",
          "province":  "albay",
          "category":  "history",
          "name":  "Legend of Mayon Volcano",
          "location":  "Daraga and surrounding areas",
          "description":  "The legend tells the tragic love story of Daragang Magayon and Panganoron; their story is associated with the formation of Mayon Volcano.",
          "image":  "images/albay/legend-of-mayon-volcano.jpg",
          "imageAlt":  "Legend of Mayon Volcano in Daraga and surrounding areas, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "abaca-weaving-tradition",
          "province":  "albay",
          "category":  "history",
          "name":  "Abaca-Weaving Tradition",
          "location":  "Tiwi, Malinao, and other areas",
          "description":  "Abaca fibers are used to make bags, mats, ropes, baskets, and other handicrafts.",
          "image":  "images/albay/abaca-weaving-tradition.jpg",
          "imageAlt":  "Abaca-Weaving Tradition in Tiwi, Malinao, and other areas, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "bicolano-religious-and-fiesta-traditions",
          "province":  "albay",
          "category":  "history",
          "name":  "Bicolano Religious and Fiesta Traditions",
          "location":  "Province of Albay",
          "description":  "Religious processions, town fiestas, folk dances, traditional food, and community celebrations reflect the connection between faith, family, and local identity.",
          "image":  "images/albay/bicolano-religious-and-fiesta-traditions.jpg",
          "imageAlt":  "Bicolano Religious and Fiesta Traditions in Province of Albay, Albay",
          "imageCredit":  ""
      },
      {
          "id":  "the-first-rizal-monument",
          "province":  "camnorte",
          "category":  "history",
          "name":  "The First Rizal Monument",
          "location":  "Daet",
          "description":  "An important historical landmark honoring Dr. José Rizal and representing the province’s connection with Philippine nationalism.",
          "image":  "images/camarines-norte/the-first-rizal-monument.jpg",
          "imageAlt":  "The First Rizal Monument in Daet, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "spanish-colonial-churches",
          "province":  "camnorte",
          "category":  "history",
          "name":  "Spanish Colonial Churches",
          "location":  "throughout the province",
          "description":  "Historic churches, including Parroquia de San Juan Bautista, show Spanish colonial influence and the spread of Christianity.",
          "image":  "images/camarines-norte/spanish-colonial-churches.jpg",
          "imageAlt":  "Spanish Colonial Churches in throughout the province, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "gold-mining-history",
          "province":  "camnorte",
          "category":  "history",
          "name":  "Gold-Mining History",
          "location":  "Paracale",
          "description":  "Gold mining has long influenced the town’s livelihood, economy, culture, and development.",
          "image":  "images/camarines-norte/gold-mining-history.jpg",
          "imageAlt":  "Gold-Mining History in Paracale, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "fishing-and-coastal-heritage",
          "province":  "camnorte",
          "category":  "history",
          "name":  "Fishing and Coastal Heritage",
          "location":  "coastal municipalities",
          "description":  "Fishing provides food, income, transportation, and cultural traditions in Mercedes, Paracale, Jose Panganiban, Capalonga, and other communities.",
          "image":  "images/camarines-norte/fishing-and-coastal-heritage.jpg",
          "imageAlt":  "Fishing and Coastal Heritage in coastal municipalities, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "island-and-maritime-culture",
          "province":  "camnorte",
          "category":  "history",
          "name":  "Island and Maritime Culture",
          "location":  "island communities",
          "description":  "Calaguas, Apuao, Maculabo, and Siete Pecados contribute to a maritime culture shaped by boats, fishing, island travel, and marine resources.",
          "image":  "images/camarines-norte/island-and-maritime-culture.jpg",
          "imageAlt":  "Island and Maritime Culture in island communities, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "queen-pineapple-agriculture",
          "province":  "camnorte",
          "category":  "history",
          "name":  "Queen Pineapple Agriculture",
          "location":  "province-wide",
          "description":  "Pineapple production supports farmers, local businesses, food producers, and tourism.",
          "image":  "images/camarines-norte/queen-pineapple-agriculture.jpg",
          "imageAlt":  "Queen Pineapple Agriculture in province-wide, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "camarines-norte-during-world-war-ii",
          "province":  "camnorte",
          "category":  "history",
          "name":  "Camarines Norte during World War II",
          "location":  "",
          "description":  "The province was affected by Japanese occupation, military activity, evacuation, and resistance movements; local stories and memorials preserve this history.",
          "image":  "images/camarines-norte/camarines-norte-during-world-war-II.jpg",
          "imageAlt":  "Camarines Norte during World War II, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "bicolano-culture",
          "province":  "camnorte",
          "category":  "history",
          "name":  "Bicolano Culture",
          "location":  "throughout the province",
          "description":  "Family relationships, religious fiestas, spicy and coconut-based food, music, dancing, and community cooperation are important traditions.",
          "image":  "images/camarines-norte/bicolano-culture.jpg",
          "imageAlt":  "Bicolano Culture in throughout the province, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "daet-as-the-provincial-center",
          "province":  "camnorte",
          "category":  "history",
          "name":  "Daet as the Provincial Center",
          "location":  "Daet",
          "description":  "Daet is a center for government, education, commerce, transportation, and tourism, with public, religious, historical, and commercial sites.",
          "image":  "images/camarines-norte/daet-as-the-provincial-center.jpg",
          "imageAlt":  "Daet as the Provincial Center in Daet, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "natural-disaster-and-environmental-history",
          "province":  "camnorte",
          "category":  "history",
          "name":  "Natural Disaster and Environmental History",
          "location":  "coastal areas",
          "description":  "The Pacific-facing province is vulnerable to typhoons, strong waves, and flooding; communities emphasize disaster preparation and environmental protection.",
          "image":  "images/camarines-norte/natural-disaster-and-environmental-history.jpg",
          "imageAlt":  "Natural Disaster and Environmental History in coastal areas, Camarines Norte",
          "imageCredit":  ""
      },
      {
          "id":  "basilica-minore-of-our-lady-of-penafrancia",
          "province":  "camsur",
          "category":  "history",
          "name":  "Basilica Minore of Our Lady of Peñafrancia",
          "location":  "Naga City",
          "description":  "One of Bicol’s most important religious landmarks and a major pilgrimage site for devotees of Our Lady of Peñafrancia.",
          "image":  "images/camarines-sur/basilica-minore-of-our-lady-of-penafrancia.jpg",
          "imageAlt":  "Basilica Minore of Our Lady of Peñafrancia in Naga City, Camarines Sur",
          "imageCredit":  "“File:Basilica Minore of Our Lady of Penafrancia, Naga City, Philippines.JPG” by Totle12; CC BY-SA 3.0; https://commons.wikimedia.org/wiki/File:Basilica_Minore_of_Our_Lady_of_Penafrancia,_Naga_City,_Philippines.JPG"
      },
      {
          "id":  "naga-metropolitan-cathedral",
          "province":  "camsur",
          "category":  "history",
          "name":  "Naga Metropolitan Cathedral",
          "location":  "Naga City",
          "description":  "A historic church and important center of Catholic faith in the region.",
          "image":  "images/camarines-sur/naga-metropolitan-cathedral.jpg",
          "imageAlt":  "Naga Metropolitan Cathedral in Naga City, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "holy-rosary-minor-seminary",
          "province":  "camsur",
          "category":  "history",
          "name":  "Holy Rosary Minor Seminary",
          "location":  "Naga City",
          "description":  "A historic religious and educational institution that has contributed to Catholic education in Bicol.",
          "image":  "images/camarines-sur/holy-rosary-minor-seminary.jpg",
          "imageAlt":  "Holy Rosary Minor Seminary in Naga City, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "museo-ni-jesse-robredo",
          "province":  "camsur",
          "category":  "history",
          "name":  "Museo ni Jesse Robredo",
          "location":  "Naga City",
          "description":  "Honors the life, public service, and achievements of Jesse Robredo, former Naga mayor and national government official.",
          "image":  "images/camarines-sur/museo-ni-jesse-robredo.jpg",
          "imageAlt":  "Museo ni Jesse Robredo in Naga City, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "bicolano-religious-traditions",
          "province":  "camsur",
          "category":  "history",
          "name":  "Bicolano Religious Traditions",
          "location":  "Naga City and nearby municipalities",
          "description":  "Processions, fiestas, devotional activities, and community participation are especially visible during the Peñafrancia Festival.",
          "image":  "images/camarines-sur/bicolano-religious-traditions.jpg",
          "imageAlt":  "Bicolano Religious Traditions in Naga City and nearby municipalities, Camarines Sur",
          "imageCredit":  ""
      },
      {
          "id":  "saint-john-the-baptist-church-catanduanes",
          "province":  "catanduanes",
          "category":  "history",
          "name":  "Saint John the Baptist Church",
          "location":  "Municipality of Bato",
          "description":  "One of the oldest churches in Catanduanes, reflecting the Spanish-period religious history of the province.",
          "image":  "images/catanduanes/saint-john-the-baptist-church.jpg",
          "imageAlt":  "Saint John the Baptist Church in Bato, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "bato-belfry",
          "province":  "catanduanes",
          "category":  "history",
          "name":  "Bato Belfry",
          "location":  "Municipality of Bato",
          "description":  "A historic bell tower connected with the old church and the religious development of the municipality.",
          "image":  "images/catanduanes/bato-belfry.jpg",
          "imageAlt":  "Bato Belfry in Bato, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "museo-de-catanduanes",
          "province":  "catanduanes",
          "category":  "history",
          "name":  "Museo de Catanduanes",
          "location":  "Municipality of Virac",
          "description":  "Presents artifacts, photographs, documents, and information about the history and culture of the province.",
          "image":  "images/catanduanes/museo-de-catanduanes.jpg",
          "imageAlt":  "Museo de Catanduanes in Virac",
          "imageCredit":  ""
      },
      {
          "id":  "catanduanes-abaca-weaving-tradition",
          "province":  "catanduanes",
          "category":  "history",
          "name":  "Abaca-Weaving Tradition",
          "location":  "Various municipalities",
          "description":  "An important cultural and economic tradition in which local workers transform abaca fibers into useful household items and handicrafts.",
          "image":  "images/catanduanes/abaca-weaving-tradition.jpg",
          "imageAlt":  "Abaca weaving tradition in Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "old-capitol-building-catanduanes",
          "province":  "catanduanes",
          "category":  "history",
          "name":  "Old Capitol Building",
          "location":  "Municipality of Virac",
          "description":  "A historic government structure that represents the administrative and political development of Catanduanes.",
          "image":  "images/catanduanes/old-capitol-building-of-virac.jpg",
          "imageAlt":  "Old Capitol Building in Virac, Catanduanes",
          "imageCredit":  ""
      },
      {
          "id":  "kalanay-archaeological-site",
          "province":  "masbate",
          "category":  "history",
          "name":  "Kalanay Archaeological Site",
          "location":  "Aroroy",
          "description":  "Provides evidence of early communities and ancient cultural activities in the Philippines.",
          "image":  "images/masbate/kalanay-archaeological-site.jpg",
          "imageAlt":  "Kalanay Archaeological Site in Aroroy, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "san-antonio-de-padua-church",
          "province":  "masbate",
          "category":  "history",
          "name":  "San Antonio de Padua Church",
          "location":  "Masbate City",
          "description":  "An important religious landmark reflecting the development of Catholic traditions in Masbate.",
          "image":  "images/masbate/san-antonio-de-padua-church.jpg",
          "imageAlt":  "San Antonio de Padua Church in Masbate City, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "jintotolo-lighthouse",
          "province":  "masbate",
          "category":  "history",
          "name":  "Jintotolo Lighthouse",
          "location":  "Balud",
          "description":  "A historic navigation structure that guided ships traveling through waters around Jintotolo Island.",
          "image":  "images/masbate/jintotolo-lighthouse.jpg",
          "imageAlt":  "Jintotolo Lighthouse in Balud, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "masbateno-rodeo-culture",
          "province":  "masbate",
          "category":  "history",
          "name":  "Masbateño Rodeo Culture",
          "location":  "Masbate City and ranching municipalities",
          "description":  "Cattle raising, horse riding, ranch work, and cowboy skills are distinctive parts of Masbateño identity.",
          "image":  "images/masbate/masbateno-rodeo-culture.jpg",
          "imageAlt":  "Masbateño Rodeo Culture in Masbate City and ranching municipalities, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "pawa-mangrove-conservation",
          "province":  "masbate",
          "category":  "history",
          "name":  "Pawa Mangrove Conservation",
          "location":  "Masbate City",
          "description":  "Shows how local communities protect coastal ecosystems while supporting fishing and tourism.",
          "image":  "images/masbate/pawa-mangrove-conservation.jpg",
          "imageAlt":  "Pawa Mangrove Conservation in Masbate City, Masbate",
          "imageCredit":  ""
      },
      {
          "id":  "barcelona-church-and-ruins",
          "province":  "sorsogon",
          "category":  "history",
          "name":  "Barcelona Church and Ruins",
          "location":  "Barcelona",
          "description":  "Old church ruins, a convent, and stone structures reflect the Spanish-period history of the municipality.",
          "image":  "images/sorsogon/barcelona-church-and-ruins.jpg",
          "imageAlt":  "Barcelona Church and Ruins in Barcelona, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "juban-ancestral-houses",
          "province":  "sorsogon",
          "category":  "history",
          "name":  "Juban Ancestral Houses",
          "location":  "Juban",
          "description":  "Show traditional architecture, lifestyle, and the social history of old Sorsogon families.",
          "image":  "images/sorsogon/juban-ancestral-houses.jpg",
          "imageAlt":  "Juban Ancestral Houses in Juban, Sorsogon",
          "imageCredit":  ""
      },
      {
          "id":  "prieto-diaz-mangrove-forest",
          "province":  "sorsogon",
          "category":  "history",
          "name":  "Prieto Diaz Mangrove Forest",
          "location":  "Prieto Diaz",
          "description":  "An environmental and cultural attraction that supports fishing communities and coastal ecosystems.",
          "image":  "images/sorsogon/prieto-diaz-mangrove-forest.jpg",
          "imageAlt":  "Prieto Diaz Mangrove Forest in Prieto Diaz, Sorsogon",
          "imageCredit":  ""
      }
  ]
};

BICOL.provName = id => (BICOL.provinces.find(province => province.id === id) || {}).name || id;
BICOL.provImage = id => (BICOL.provinces.find(province => province.id === id) || {}).image;
