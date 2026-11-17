document.addEventListener("DOMContentLoaded", () => {


    // mega menu
    const subNavs = document.querySelectorAll('.sub-nav');

    subNavs.forEach(subNav => {
        const tabs = subNav.querySelectorAll('.sub-item');
        const parentSection = subNav.closest('section');

        tabs.forEach(tab => {
            tab.addEventListener('mouseenter', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const panels = parentSection.querySelectorAll('.panel');
                panels.forEach(panel => panel.classList.remove('active'));

                const targetId = tab.getAttribute('data-target');
                const targetPanel = parentSection.querySelector('#' + targetId);

                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    });



    // FILLING PLACES TO GO DATA
    //fill data for places to go, includign all the districts, nature, religious, local
    //inc pathway, header, img, subtitle and intro
    // each item should have own items -> name and image for the carousel

    const placesToGo = {

        "belait": {
            pathway: "Home / Districts / Belait",
            mainHeader: "Explore Belait",
            bannerImage: "assets/belait.png",
            subTitle: "Discover Belait",
            subIntro: "Oil was initially found in the Belait district in 1929, with notable features such as the Billionth Barrel Monument, Seria Energy Lab, and the nodding donkeys employed to extract oil highlighting Belait's role as the nation’s hub for the oil and gas sector.Belait is known as Brunei's waterfall region, featuring 40 documented waterfalls scattered across the forest reserves. Hiking to waterfalls offers a fantastic exercise–navigating the jungle, scaling boulders, and wading in streams–and with a knowledgeable local guide familiar with the jungle, it will be easy. Indigenous heritage has stood the test of time, and in Belait, rainforest and tribal traditions coexist harmoniously. You can explore a longhouse, the real dwellings of the indigenous community, to engage with their traditions and arts, while listening to their tales of the land. The Belait district honors its traditional heritage while embracing contemporary industry.",

            sections: [

                {
                    title: "Places to Visit",

                    items: [
                        {
                            name: "Billionth Barrel Monument",
                            image: "assets/belait2.png"
                        },
                        {
                            name: " Seria Energy Lab",
                            image: "assets/belait3.png"
                        },
                        {
                            name: "Tea-Pot Roundabout",
                            image: "assets/belait4.png"
                        },
                        {
                            name: "Sungai Liang Recreational Park",
                            image: "assets/belait5.png"
                        },
                        {
                            name: "Lumut Beach",
                            image: "assets/belait6.png"
                        }
                    ]
                },

                {
                    title: "Things to Do",

                    items: [
                        {
                            name: "Jungle Trekking",
                            image: "assets/belait7.jpg"
                        },
                        {
                            name: "Longhouse Visits",
                            image: "assets/belait8.jpg"
                        },
                                                {
                            name: "Recreational Fishing",
                            image: "assets/belait9.jpg"
                        },
                                                {
                            name: "Local Coffee Farms",
                            image: "assets/belait10.jpg"
                        },
                                                {
                            name: "Oil and Gas Geritage Tours",
                            image: "assets/belait11.jpg"
                        },
                    ]
                },


            ]
        },


        "tutong": {
            pathway: "Home / Districts / Tutong",
            mainHeader: "Explore Tutong",
            bannerImage: "assets/tutong.png",
            subTitle: "Discover Tutong",
            subIntro: "Tutong serves as the agricultural foundation of the nation, featuring rice paddies and farms that produce unique fruits and essential vegetables.It is the 3rd biggest district in Brunei where the Tutong, Kedayan, Dusun, and Iban ethnic groups have a significant presence, and at the Sungai Basong Recreational Park, you can view a traditional Kedayan and Dusun house. The primary allure of Tutong is its natural environment and indigenous heritage.The Tasek Merimbun ASEAN heritage park serves as a refuge for flora and fauna, as well as a significant site for scientific study. The distinctive black water lake is the biggest natural lake in Brunei, attracting birdwatchers eager to see rare endemic and migratory species. Embark on a river cruise or hike through the heritage park to genuinely admire the lasting beauty of nature's offerings.",

            sections: [

                {
                    title: "Places to Visit",

                    items: [
  
                        {
                            name: "Tasek Merimbun Heritage Park",
                            image: "assets/rainforest2.png"
                        },
                        {
                            name: "Lamin Warisan",
                            image: "assets/tutong3.png"
                        },
                                                {
                            name: "Taman Kulimambang",
                            image: "assets/garden6.png"
                        }     ,
                        {
                            name: "Pantai Seri Kenangan",
                            image: "assets/tutong4.png"
                        },

                        {
                            name: "Eco Ponies Garden",
                            image: "assets/garden5.png"
                        },

                                              {
                            name: "Hassanal Bolkiah Pekan Mosque",
                            image: "assets/tutong1.jpg"
                        },
                                           

                    ]
                },

                {
                    title: "Things to Do",

                    items: [
                        {
                            name: "River Cruise",
                            image: "assets/tutong7.png"
                        },
                        {
                            name: "Stargaze",
                            image: "assets/tutong8.png"
                        },
                        {
                            name: "Angkasa Oud Agarwood",
                            image: "assets/tutong9.png"
                        },
                        {
                            name: "Exotic Animals Watching",
                            image: "assets/tutong10.png"
                        },
                        {
                            name: "Hiking",
                            image: "assets/tutong11.png"
                        },                                                                                                
                    ]
                }

            ],
            
        },


        "bruneimuara": {
            pathway: "Home / Districts / Brunei-Muara",
            mainHeader: "Explore Brunei-Muara",
            bannerImage: "assets/bruneimuara.png",
            subTitle: "Discover Brunei-Muara",
            subIntro: "The capital Bandar Seri Begawan, located in the Brunei-Muara district, is the birthplace of Brunei's history and has been home to royalty for hundreds of years.The Brunei river served as the center of the Bruneian Empire, with civilization established on Kampong Ayer, the world's largest water village. Lavish mosques, magnificent palaces, the luxurious 6-star Empire Hotel, and the Jerudong theme park are essential attractions in the city.If the history and heritage of a city appeal to you, the mausoleums of illustrious rulers from the past as well as the intriguing Brunei Museum and Royal Regalia Museum are definitely worth seeing.A tranquil river cruise on the Brunei river is among the finest methods to explore the capital and appreciate the heritage and natural beauty from which the city is formed.",

            sections: [

                {
                    title: "Places to Visit",

                    items: [
                        {
                            name: "Jame' Asr Hassanil Bolkiah Mosque",
                            image: "assets/muara1.png"
                        },
                        {
                            name: "Kampong Ayer",
                            image: "assets/muara2.png"
                        },
                        {
                            name: "Tasek Lama Park",
                            image: "assets/muara3.png"
                        },
                        {
                            name: "Royal Regalia Museum",
                            image: "assets/muara4.png"
                        },
                        {
                            name: "Taman Mahkota Jubli Emas",
                            image: "assets/muara5.png"
                        },
     
                    ]
                },

                {
                    title: "Things to Do",

                    items: [
                        {
                            name: "Kayaking",
                            image: "assets/kayak1.png"
                        },



                                                {
                            name: "Village Tours",
                            image: "assets/tip2.png"
                        },

                                                                        {
                            name: "Golfing",
                            image: "assets/golf1.png"
                        },
                                                {
                            name: "Souvenir Shopping",
                            image: "assets/souvenir.jpg"
                        },
                    ]
                }

            ]
        },


        "temburong": {
            pathway: "Home / Districts / Temburong",
            mainHeader: "Explore Temburong",
            bannerImage: "assets/temburong.jpg",
            subTitle: "Discover Temburong",
            subIntro: `Temburong is a distinct district that shares border with Malaysia, and lies directly across the Brunei river and is a 30 minute drive using the longest bridge in Southeast Asia, the Sultan Haji Omar 'Ali Saifuddien bridge. \n
            The Ulu Temburong National Park is the adventure zone of the country with 550 square kilometres rainforest, 
            pristine and protected for its high biodiversity of flora and fauna. 
            Augment your experience in the rainforest with the local park specialists who will show you how to have an adrenaline-pumping adventure on the wild side, but if quiet bonding with nature and spotting wildlife are more your cup of tea, then take it easy, there are many ways to love the wild and wonderful Temburong.`,

            sections: [

                {
                    title: "Places to Visit",

                    items: [
                        {
                            name: "Ulu Temburong Nataional Park",
                            image: "assets/temburong2.png"
                        },
                        {
                            name: "Sumbiling Eco Village",
                            image: "assets/temburong3.png"
                        },
                        {
                            name: "Bukit Patoi Recreationial Park",
                            image: "assets/temburong4.png"
                        },
                        {
                            name: "Bangar Town",
                            image: "assets/temburong5.png"
                        },
                        {
                            name: "Peliunan Park",
                            image: "assets/temburong6.png"
                        },                                                                        
                    ]
                },

                {
                    title: "Things to Do",

                    items: [
                        {
                            name: "Canopy Walk",
                            image: "assets/temburong7.png"
                        },
                        {
                            name: "Kayaking",
                            image: "assets/temburong8.png"
                        },
                        {
                            name: "Sunset Cruise",
                            image: "assets/temburong9.png"
                        },
                        {
                            name: "Wall-Climbing",
                            image: "assets/temburong10.png"
                        },       
                        {
                            name: "Ambulong Processing",
                            image: "assets/temburong11.png"
                        },                                                            
                    ]
                },
               

            ]
        },

        "rainforests": {
            pathway: "Home / Nature & Recreation / Rainforests & Mangrove",
            mainHeader: "Nature & Recreation",
            bannerImage: "assets/rainforest1.png",
            subTitle: "Rainforests & Mangrove",
            subIntro: "Discover the attractions, local experiences and natural landscapes of Tutong.",

            sections: [

                {
                    title: "Rainforests",

                    items: [
                        {
                            name: "Tasek Merimbun Heritage Park",
                            image: "assets/rainforest2.png"
                        },
                        {
                            name: "Ulu Temburong National Park",
                            image: "assets/rainforest3.png"
                        },
                        {
                            name: "Bukit Shahbandar Recreational Park",
                            image: "assets/rainforest4.png"
                        },
                        {
                            name: "Sumbiling Eco Village",
                            image: "assets/rainforest5.png"
                        },

                        {
                            name: "Bukit Patoi Forest Reserve",
                            image: "assets/temburong4.png"
                        },
                        {
                            name: "Tasek Lama Park",
                            image: "assets/muara3.png"
                        }                                                

                    ]
                },

                {
                    title: "Mangrove",

                    items: [
                        {
                            name: "Mangrove Paradise Resort",
                            image: "assets/rainforest6.png"
                        },
                        {
                            name: "Damuan Recreational Park",
                            image: "assets/rainforest7.png"
                        },
                        {
                            name: "Limbang Mangrove National Park",
                            image: "assets/rainforest8.png"
                        },

                        {
                            name: "Bukit Markucing",
                            image: "assets/rainforest9.png"
                        },                                                                                                
                    ]
                }

            ],
            
        },        

        "beaches": {
            pathway: "Home / Nature & Recreation / Beaches",
            mainHeader: "Nature & Recreation",
            bannerImage: "assets/beach.png",
            subTitle: "Beaches",
            subIntro: "Discover the attractions, local experiences and natural landscapes of Tutong.",

            sections: [

                {

                    items: [
                        {
                            name: "Muara Beach",
                            image: "assets/beach1.png"
                        },
                        {
                            name: "Pantai Seri Kenangan",
                            image: "assets/beach2.png"
                        },
                        {
                            name: "Serasa Beach",
                            image: "assets/beach4.png"
                        },
                        {
                            name: "Tanjung Batu Beach",
                            image: "assets/beach3.png"
                        },
                        {
                            name: "Jerudong Beach",
                            image: "assets/beach6.png"
                        }   ,


                        {
                            name: "Meragang Beach",
                            image: "assets/beach5.png"
                        },
                                             

                    ]
                },



            ],
            
        },     
        
        "gardens": {
            pathway: "Home / Nature & Recreation / Gardens",
            mainHeader: "Nature & Recreation",
            bannerImage: "assets/garden.png",
            subTitle: "Gardens",
            subIntro: "Discover the attractions, local experiences and natural landscapes of Tutong.",

            sections: [

                {

                    items: [
                        {
                            name: "Joyful Garden",
                            image: "assets/garden1.png"
                        },
                        {
                            name: "Rimba Garden Central",
                            image: "assets/garden2.png"
                        },
                        {
                            name: "Hadfa Garden",
                            image: "assets/garden3.png"
                        },
                        {
                            name: "Eco Ponies Garden",
                            image: "assets/garden5.png"
                        }   ,
                        {
                            name: "Jerudong Park Garden",
                            image: "assets/garden4.png"
                        },

                        
                        {
                            name: "Taman Kulimambang (Butterfly Garden)",
                            image: "assets/garden6.png"
                        },
                                             

                    ]
                },



            ],
            
        },        

        
        "mosques": {
            pathway: "Home / Religious, Heritage & Culture / Mosques",
            mainHeader: "Religious, Heritage & Culture",
            bannerImage: "assets/mosque.png",
            subTitle: "Mosques & Musuems",
            subIntro: "Discover the attractions, local experiences and natural landscapes of Tutong.",

            sections: [

                {

                    title: "Mosques",

                    items: [
                        {
                            name: "Masjid Al-Muhtadee Billah",
                            image: "assets/mosque1.png"
                        },
                        {
                            name: "Omar Ali Saifuddien",
                            image: "assets/mosque2.png"
                        },
                        {
                            name: "Al Saliheen Jami'",
                            image: "assets/mosque3.png"
                        },
                        {
                            name: "University Mosque",
                            image: "assets/mosque4.png"
                        }   ,


                    ]
                },

                {

                title: "Musuems",

                    items: [
                        {
                            name: "Royal Regalia Museum",
                            image: "assets/muara4.png"
                        },

                        {
                            name: "RBAF Museum",
                            image: "assets/musuem3.png"
                        },

                        {
                            name: "Malay Technology Museum",
                            image: "assets/musuem2.png"
                        },                        
                        {
                            name: "Maritime Museum",
                            image: "assets/musuem4.png"
                        }   ,


                    ]
                },



            ],
            
        },        
        "workshops": {
            pathway: "Home / Religious, Heritage & Culture / Tradition & Workshops",
            mainHeader: "Religious, Heritage & Culture",
            bannerImage: "assets/art.png",
            subTitle: "Mosques",
            subIntro: "Discover the attractions, local experiences and natural landscapes of Tutong.",

            sections: [

                {

                    title: "Art",

                    items: [
                        {
                            name: "Arts & Handicraft Training Centre",
                            image: "assets/workshop1.jpg"
                        },
                        {
                            name: "Kampong Ayer Cultural Gallery",
                            image: "assets/workshop2.jpg"
                        },
                        {
                            name: "Brunei History Centre",
                            image: "assets/workshop3.jpg"
                        },
                                                {
                            name: "Creative Space Art Gallery & Studio",
                            image: "assets/workshop8.png"
                        },
                        

                        



                    ]
                },

                {

                title: "Workshops",

                    items: [
                        {
                            name: "Hers Kitchen Cooking Class",
                            image: "assets/workshop4.png"
                        },

                        {
                            name: "Petals & Palettes Art Studio",
                            image: "assets/workshop5.jpg"
                        },

                        {
                            name: "Pâtisserie Moon",
                            image: "assets/workshop6.png"
                        },                        
                        {
                            name: "The Refinery",
                            image: "assets/workshop7.png"
                        }   ,


                    ]
                },



            ],
            
        },             

        


    };



    // FILLING THINGS TO DO DATA
    //things to do: food, nature, etnertainment, events
    // Use img + text at right styling for things to do
    const thingsToDoData = {
        "localstreetfood": {
            pathway: "Home / Food & Dining / Local & Street Food",
            mainHeader: "Food and Dining",
            bannerImage: "assets/localfood.png",
            subTitle: "Local & Street Food",
            subIntro: "Experience Brunei's local and street foods in pasar malams (night market) and more!",
            items: [
                {
                    name: "Pasar Malam Gadong",
                    image: "assets/localfood1.png",
                    description: "The 5,980 sqm building houses the absolute best of Brunei's food! Pasar Malam Gadong is a must-visit for both tourists and locals alike, offering $1 satay skewers, grilled chicken wings, Nasi Katok, and local treats.",
                    location: "Simpang 37, Jalan Pasar Gadong, Bandar Seri Begawan.",
                },
                {
                    name: "Tamu Kianggeh",
                    image: "assets/localfood2.png",
                    description: "Located along Kianggeth River, is a market where vendors sell affordable, quick breakfast items, including bamboo-cooked rice dishes, and fresh fish.",
                    location: "Jalan Sungai Kianggeh, Bandar Seri Begawan.",
                }
            ]
        },

        "vegan": {
            pathway: "Home / Food & Dining / Vegetarian & Vegan",
            mainHeader: "Food and Dining",
            bannerImage: "assets/veg1.png",
            subTitle: "Vegetarian & Vegan",
            subIntro: "Enjoy a range of vegeterian and vegan dining options, curated with extra care and love.",
            items: [
                {
                    name: "The Daun",
                    image: "assets/vegen2.png",
                    description: "The Daun offers satisfying plant-based, stir-fries and recognisable local tastes that feed the soul! The Daun is Brunei's top rated vegeterian and vegan restaurant.",
                    location: "Unit 1 & 2, Ground Floor, Block A, Wisma P H Apong, SPG150, Kiulap",
                    socialmedia: "https://www.instagram.com/thedaun.bn/?hl=en"
                },
                {
                    name: "Pureland Ru Yi Vegetarian",
                    image: "assets/vegen3.png",
                    description: "Pureland Ru Yi Vegetarian offers a fantastic selection of Chinese-inspired vegetarian dishes with regional influences.",
                    location: "WW2G+9PG, Jalan Pangkalan Kiulap, Bandar Seri Begawan",
                }
            ]
        },
        "cafes": {
            pathway: "Home / Things to Do / Food & Dining / Cafes",
            mainHeader: "Food and Dining",
            bannerImage: "assets/cafe1.png",
            subTitle: "Cafes",
            subIntro: "Specialty brews, single-origin espressos, sourdough bakes, and aesthetic gathering spots.",
            items: [
                {
                    name: "Batches Coffee",
                    image: "assets/cafe2.png",
                    description: "A cozy, tucked away cafe providing a relaxed and stylish atmosphere with numerous books available for reading.",
                    location: "Unit 6, Batu Satu, Jalan Raja Isteri Pengiran Anak Saleha",
                },
                {
                    name: "Rev & Brew",
                    image: "assets/cafe3.png",
                    description: "Combines coffee culture with automotive enthusiasm, all amidst a remarkable array of motors.",
                    location: "Bangunan Menglait 2, Gadong, Bandar Seri Begawan",
                }
            ]
        },
        "nonhalal": {
            pathway: "Home / Things to Do / Food & Dining / Non-Halal",
            mainHeader: "Food and Dining",
            bannerImage: "assets/nonhalal.png",
            subTitle: "Non-halal Food",
            subIntro: "Traditional coffee shops (Kopitiams) and eateries serving authentic regional specialties.",
            items: [
                {
                    name: "Golden Leaf Coffee House",
                    image: "assets/nonhalal2.png",
                    description: "A classic local Chinese coffee shop renowned among residents for its roast meats, kolok mee, and traditional Hainanese coffee.",
                    location: "Jalan Laksmana Abdul Razak, Bandar Seri Begawan",
                },
                {
                    name: "Thiam Hock Restaurant",
                    image: "assets/nonhalal3.png",
                    description: "Well-known for maintaining consistent quality in their specialties, including signature deep-fried bean curd and fresh seafood.",
                    location: "No.1, Ground Floor, Warisan Complex, Simpang 5, Gadong",
                }
            ]
        },
        "trending": {
            pathway: "Home / Things to Do / Food & Dining / Trending",
            mainHeader: "Food and Dining",
            bannerImage: "assets/trending.png",
            subTitle: "Trending & New",
            subIntro: "Hungry for the latest, up-and-coming food? Come taste why it's trending!",
            items: [
                {
                    name: "Mizuki Brunei",
                    image: "assets/trending1.png",
                    description: "Authentic, Japanese dishes crafted by certified Japanese chefs, featuring menu items such as udon and curry rice.",
                    location: "Food Court, The One Shopping Complex, Bandar Seri Begawan",
                },
                {
                    name: "Three Light Coffee Bar",
                    image: "assets/trending2.png",
                    description: "Three Light Coffee Bar is a minimalist and contemporary cafe that offers Wifi, dining options, brunch and more, favoured among locals.",
                    location: "Abdul Razak Complex, Ground Floor, Block H, Bandar Seri Begawan BE4119",
                }
            ]
        },
        "kayak": {
            pathway: "Home / Nature & Outdoors / Longboat Journey",
            mainHeader: "Nature & Outdoor Activities",
            bannerImage: "assets/kayak3.png",
            subTitle: "Kayaking",
            subIntro: "Explore Brunei's untouched waterways, jungle rivers, and iconic Proboscis monkey habitats.",
            items: [
                {
                    name: "Kayak - Poni Divers",
                    image: "assets/kayak2.png",
                    description: "Poni Divers provides beginner friendly kayaking packages, creating unforgettable experiences for guests, while caring deeply for the local ecosystems.",
                    location: "Serasa Watersports Complex, Serasa Beach",
                }
            ]
        },
        "golfing": {
            pathway: "Home / Nature & Outdoors / Golfing",
            mainHeader: "Nature & Outdoor Activities",
            bannerImage: "assets/golf1.png",
            subTitle: "Golf Courses",
            subIntro: "World-class greens offering challenging play and breathtaking views.",
            items: [
                {
                    name: "RBA Golf Club",
                    image: "assets/golf2.png",
                    description: "An award-winning Jack Nicklaus-designed championship course right by the South China Sea.",
                    location: "The Empire Brunei, Jerudong",
   
                },
                
                {
                    name: "The Empire Brunei Golf and Country Club",
                    image: "assets/golf3.png",
                    description: "Created by Max Wexler, this course, accessible from the city center, is linked with natural waterways and carefully positioned bunkers.",
                    location: "The Empire Brunei, Jerudong",
                }
            ]
        },
        "diving": {
            pathway: "Home / Nature & Outdoors / Diving",
            mainHeader: "Nature & Outdoor Activities",
            bannerImage: "assets/diving2.png",
            subTitle: "Diving",
            subIntro: "Brunei offers some of Southeast Asia's best wreck diving sites with high coral coverage.",
            items: [
                {
                    name: "Oceanic Quest",
                    image: "assets/diving3.png",
                    description: "Famous WWII and cargo shipwrecks lying off Brunei's coast, covered in soft corals.",
                    location: "Offshore Bandar Seri Begawan Coast",
                }
            ]
        },
        "jerudongpark": {
            pathway: "Home / Entertainment & Leisure / Jerudong Park",
            mainHeader: "Entertainment & Leisure",
            bannerImage: "assets/jerudongpark2.png",
            subTitle: "Jerudong Park WonderPark",
            subIntro: "Theme park rides, musical fountains, lawn gardens, and family entertainment complexes.",
            items: [
                {
                    name: "Jerudong Park Wonder Park",
                    image: "assets/jerudongpark3.png",
                    description: "Brunei's iconic amusement park featuring roller coasters, a Ferris wheel, carousel, and outdoor gardens.",
                    location: "Jalan Jerudong, BG3122",
                },
                {
                    name: "Jerudong Park Water Park",
                    image: "assets/jerudongpark4.png",
                    description: "WaterPark is an ideal way to wrap up your day, as activities take place from dawn until dusk. It is the dream of every child realized as you see them yell and enjoy in limitless happiness while forming lasting memories.",
                    location: "Jalan Jerudong, BG3122",
                }
                
            ]
        },
        "empirehotel": {
            pathway: "Home / Entertainment & Leisure / The Empire Brunei",
            mainHeader: "Entertainment & Leisure",
            bannerImage: "assets/empire2.png",
            subTitle: "The Empire Brunei",
            subIntro: "A world-renowned luxury resort offering high-end afternoon tea, cinemas, and pools.",
            items: [
                {
                    name: "The Empire Sports & Leisure",
                    image: "assets/empire3.png",
                    description: "Relax in a lavish 7-star resort environment. Enjoy traditional afternoon tea in the grand atrium or watch a movie at their private cinema.",
                    location: "Muara - Tutong Highway, Jerudong",
                },
                {
                    name: "The Empire Water Activities",
                    image: "assets/empire4.png",
                    description: "Relax in a lavish 7-star resort environment. Enjoy traditional afternoon tea in the grand atrium or watch a movie at their private cinema.",
                    location: "Muara - Tutong Highway, Jerudong",
                }
            ]
        },

        "shopping": {
            pathway: "Home / Entertainment & Leisure / Shopping",
            mainHeader: "Entertainment & Leisure",
            bannerImage: "assets/shopping2.png",
            subTitle: "Shopping Malls",
            subIntro: "Modern retail complexes offering air-conditioned shopping, dining, and entertainment.",
            items: [
                {
                    name: "The Mall Gadong",
                    image: "assets/shopping3.png",
                    description: "Brunei's premier shopping destination featuring retail outlets, a cineplex, supermarket, and large food courts.",
                    location: "Jalan Gadong, Bandar Seri Begawan",
                },
                {
                    name: "THE ONE",
                    image: "assets/shopping4.png",
                    description: "Brunei's premier shopping destination featuring retail outlets, a cineplex, supermarket, and large food courts.",
                    location: "Jalan Gadong, Bandar Seri Begawan",
                }
            ]
        },
        "popups": {
            pathway: "Home / Events & Festivals / Community Events",
            mainHeader: "Events & Festivals",
            bannerImage: "assets/eco.png",
            subTitle: "Calendar Of Events 2026",
            subIntro: "Discover Brunei's most enchanting celebrations and cultural events year-round, ranging from royal rites to vibrant community festivals, each providing a distinct insight into our sultanate's diverse heritage.",
            items: [
                {
                    name: "January - June",
                    image: "assets/events1.png",
                    description: "  ",
                    location: " ",
          
                },
                                {
                    name: "July - September",
                    image: "assets/events2.png",
                    description: "Every Sunday morning, central Bandar Seri Begawan closes its streets to vehicles for family cycling, street food stalls, and local vendors.",
                    location: "Jalan Pemancha & Waterfront, Bandar Seri Begawan",
                },
                                {
                    name: "October - December",
                    image: "assets/events3.png",
                    description: "Every Sunday morning, central Bandar Seri Begawan closes its streets to vehicles for family cycling, street food stalls, and local vendors.",
                    location: "Jalan Pemancha & Waterfront, Bandar Seri Begawan",
             
                },
            ]
        },
        "festivals": {
            pathway: "Home / Events & Festivals / Festivals",
            mainHeader: "Events & Festivals",
            bannerImage: "assets/festivals.jpg",
            subTitle: "National & Cultural Celebrations",
            subIntro: "Annual grand celebrations highlighting Brunei's royal heritage, unity, and traditions.",
items: [
        {
            name: "National Day Celebrations (23rd February)",
            image: "assets/festival1.jpg",
            description: "Annual grand celebration commemorating Brunei's independence, featuring colorful parade marches, cultural performances, and field displays.",
            location: "Taman Haji Sir Muda Omar 'Ali Saifuddien",
        
        },
        {
            name: "His Majesty The Sultan's Birthday (15th July)",
            image: "assets/best.png",
            description: "Nationwide celebration honoring Sultan Hassanal Bolkiah with royal ceremonial parades, district get-together sessions (Ramah Mesra), and vibrant night stalls (Gerai Perayaan).",
            location: "Taman Haji Sir Muda Omar 'Ali Saifuddien",
    
        },


        {
            name: "Ramadan Night Bazaars (Ramadan Month)",
            image: "assets/festival3.jpg",
            description: "Lively afternoon and evening food markets offering hundreds of traditional Bruneian delicacies, grilled dishes, and local kuih for breaking fast (Sungkai).",
            location: "Hassanal Bolkiah National Stadium Carpark",
        },

            ]
        }
    };




    // TRAVEL PLAN DATA
    const travelPlanData = {
        "history": {
            pathway: "Home / Learn about Brunei / History & Culture",
            mainHeader: "Learn about Brunei",
            bannerImage: "assets/history.png",
        },
        "religion": {
            pathway: "Home / Learn about Brunei / Religion & Etiquette",
            mainHeader: "Learn about Brunei",
            bannerImage: "assets/religion.png",
            subTitle: "Religion & Local Etiquette",
            subIntro: "Essential cultural guidelines, modest dress expectations, and an appreciation for Brunei's magnificent Islamic architecture."
        },
        "besttime": {
            pathway: "Home / Travelling to Brunei / Best Time to Visit",
            mainHeader: "Travelling to Brunei",
            bannerImage: "assets/best2.png",
        },
        "gettinghere": {
            pathway: "Home / Travelling to Brunei / Getting to Brunei",
            mainHeader: "Travelling to Brunei",
            bannerImage: "assets/gettingtobn.png",
            subTitle: "Getting to Brunei",
            subIntro: "Reaching Brunei is simple and convenient. Direct flights connect the capital, Bandar Seri Begawan, to major cities, while land and sea routes offer easy access from neighboring Southeast Asian countries. No matter how you choose to travel, Brunei's efficient entry points make it an accessible destination for everyone."
        },
        "visa": {
            pathway: "Home /  Travelling to Brunei / Visa Requirements",
            mainHeader: "Travelling to Brunei",
            bannerImage: "assets/visa2.png",
            subTitle: "Visa & Entry Requirements",
            subIntro: "Ensure a smooth travel into Brunei, learn about visa requirements and guidelines to ensure your trip to Brunei is smooth and enjoyable."
        },

        "traveltips": {
            pathway: "Home / Travelling to Brunei / Essential Travel Tips",
            mainHeader: "Travelling to Brunei",
            bannerImage: "assets/tips2.png",
            subTitle: "Essential Travel Tips",
            subIntro: "Ready for an unforgettable journey to Brunei? Learn important tips and advice to maximize your experience and make the most of your visit."
        },
        "accommodation": {
            pathway: "Home / Accommodation & Transportation / Accommodation ",
            mainHeader: "Accommodation & Transportationn",
            bannerImage: "assets/hotel1.png",
            subTitle: "Hotels in Bandar Seri Begawan",
            subIntro: "Discover your ideal accommodation in Brunei, ranging from opulent hotels and serene resorts to serviced apartments and economical motels. Regardless of whether you seek comfort, convenience, or a distinctive local experience, these lodgings provide a hospitable escape for all kinds of travelers.",
            
            /*do 4 hotels for each district to test searchfilter function*/

            items: [ 

                // bruenimuara hotels
                {
                    name: "Abdul Razak Hotel Apartment",
                    image: "assets/hotel2.png",
                    district: "brunei-muara",
                    districtLabel: "Brunei-Muara District",
                    description: "Enjoy ultimate comfort in the rooms complete with everything carefully prepared to relax, from bedding materials to firmness of the mattress, lighting design, furniture layout and amenities.",
                    website: "https://arhbrunei.co/abdulrazakhotelapartments/"
                },

                {
                    name: "Al-Afiah Hotel",
                    image: "assets/hotel6.png",
                    district: "brunei-muara",
                    districtLabel: "Brunei-Muara District",
                    description: "Al-Afiah Hotel is dedicated in offering a blend of comfort, culture, and peace, providing a range of attractions, being located near Kiulap.",
                    website: "https://www.alafiahhotel.com/"
                },
                {
                    name: "Garden Sentral Hotel",
                    image: "assets/hotel10.png",
                    district: "brunei-muara",
                    districtLabel: "Brunei-Muara District",
                    description: "Garden Sentral Hotel provides a luxurious, serene stay in Kuala Belait, Brunei, offering a large range of different types of rooms best suited for your needs.",
                    website: "https://gardensentralhotel.com/"
                },
        
                // belait hotels

                {
                    name: "Hotel Sentosa",
                    image: "assets/hotel3.png",
                    district: "belait",
                    districtLabel: "Belait District",
                    description: "Hotel Sentosa is a boutique hotel situated in the center of Kuala Belait, Brunei, providing contemporary rooms, necessary facilities, and convenient access to nearby  services.",
                    website: "https://bruneisentosahotel.com/"
                },

                {
                    name: "Hotel Gateway Express",
                    image: "assets/hotel7.png",
                    district: "belait",
                    districtLabel: "Belait District",
                    description: "Hotel Gateway Express offers diverse types of rooms to cater to the many different perferences that guests may have.",                    
                    website: "https://www.hotelgatewayexpress.com/"
                
                },


                //temburong hotels

                {
                    name: "Stoneville Hotel",
                    image: "assets/hotel8.png",
                    district: "temburong",
                    districtLabel: "Temburong District",
                    description: "Stoneville Hotel is a simple, beautiful hotel located in Ulu Temburong, perfect for visitors that want to have a peaceful, scenic experience.",                    
                    website: "https://www.instagram.com/stonevillehotelandrestaurant/?hl=en"
                
                },

                {
                    name: "The Abode Resort & Spa",
                    image: "assets/hotel4.png",
                    district: "temburong",
                    districtLabel: "Temburong District",
                    description: "The Abode Resort and Spa is nature-friendly establishment provides simple lodgings amidst beautiful nature settings, perfect for eco-tourists and visitors looking for a peaceful getaways.",
                    website: "https://www.abodebrunei.com/"
                },

                // tutong hotels

                {
                    name: "The Lanes Hotel",
                    image: "assets/hotel5.png",
                    district: "tutong",
                    districtLabel: "Tutong District",
                    description: "The Lanes Hotel merges modern design with friendly service. It is encircled by cultural sites and scenic beauty, creating a pleasant foundation for both work and relaxation.",
                    website: "https://thelaneshotel.com/"
                }
            ]
        },
        "transportation": {
            pathway: "Home / Accommodation & Transportation / Transportation",
            mainHeader: "Transportation",
            bannerImage: "assets/transport1.png",
            subTitle: "Transportation in Brunei",
            subIntro: "Drive along the road linking three of Brunei’s districts in a ride-hailing car or bus, or enjoy a relaxed tour around the water village in the capital with a traditional water taxi.",

            
            items: [ 
                {
                    name: "Dart Brunei",
                    image: "assets/ride.png",
                    description: "Dart is Brunei's local ride-hailing service, allowing travelers to easily book fixed-rate, comfortable private rides to most destinations in Brunei.",
                    website: "https://www.dartbrunei.com/"
                },

                {
                    name: "Taxi",
                    image: "assets/taxi.png",
                    description: "Brunei's taxis are metered and available directly at Brunei International Airport, and major hotels in the Capital.",
                    website: "https://share.google/TVJyfymmpnLSuJmkf"
                },

                {
                    name: "Rental Car",
                    image: "assets/rentalcar.png",
                    description: "Rental cars are available for visitors who wish to rent a car to drive around Brunei's beautiful scenaries, done through online booking.",
                    website: "https://www.avis.com/en/home/"
                },

                {
                    name: "Public Bus",
                    image: "assets/bus.png",
                    description: "Brunei's public transport, the publicbus is the most cheapest option to travel around Brunei, with prices being only BND $1 per ride.",
                    website: "https://www.jpd.gov.bn/public-bus-routes/"
                }
            ]
        },
        "ridehailing": {
            pathway: "Home / Travel & Plan / Transportation / Ride-hailing",
            mainHeader: "Transportation",
            bannerImage: "assets/ride.png",
            subTitle: "Ride-Hailing Apps",
            subIntro: "Convenient, app-based transportation services like Dart for navigating Brunei's commercial districts easily."
        },
        "publicbus": {
            pathway: "Home / Travel & Plan / Transportation / Public Bus",
            mainHeader: "Transportation",
            bannerImage: "assets/bus.png",
            subTitle: "Public Buses (Purple Buses)",
            subIntro: "Affordable public transport routes connecting central bus terminals to major suburban and commercial areas."
        },
        "taxis": {
            pathway: "Home / Travel & Plan / Transportation / Taxis & Water Taxis",
            mainHeader: "Transportation",
            bannerImage: "assets/taxi.png",
            subTitle: "Taxis & River Water Taxis",
            subIntro: "Traditional airport taxis and iconic wooden river water taxis (Tambang) for quick river village commutes."
        },
        "tourpackages": {
            pathway: "Home / Tours and Itineraries / Tour Packages",
            mainHeader: "Tours and Itineraries",
            bannerImage: "assets/tour.png",
            subTitle: "Guided Tour Packages",
            subIntro: "Curated guided excursions covering cultural city tours, night river safaris, and rainforest expeditions.",
            
            items: [ 
                {
                    name: "Reef 360",
                    image: "assets/tour1.png",
                    description: "Reef Check Brunei is designed ot provide an immersive experience that involves hands-on ocean activity. Engage in coral restoration and marine debris removal.",
                    website: "https://www.reefcheck.org/country/brunei-darussalam/",
              
                },

                {
                    name: "Recipies From The Kampong",
                    image: "assets/tour3.png",
                    description: "Hotel Sentosa is a boutique hotel situated in the center of Kuala Belait, Brunei, providing contemporary rooms, necessary facilities, and convenient access to nearby attractions and services.",
                    website: "https://bruneisentosahotel.com/"
                },

                {
                    name: "Team Building At Eco Ponies Garden",
                    image: "assets/tour4.png",
                    description: "Team Building at Eco Ponies Garden offers fun outdoor activities, interactions iwth ponies and challanges that build collaboration skills in a peaceful nature setting",
                    website: "https://brc.iber.ubd.edu.bn/"
                },

                {
                    name: "Brunei Forest Birding",
                    image: "assets/tour5.png",
                    description: "Brunei Forest Birding provides you the chance to explore nature, observe wildlife and the forest birds, being guided with experienced ecologists.",
                    website: "https://www.instagram.com/kommunihub_bn/"
                }
            ]
    
        },
        "ecotravel": {
            pathway: "Home / Travel & Plan / Tours and Itineraries / Sustainable & Eco Travel",
            mainHeader: "Tours and Itineraries",
            bannerImage: "assets/eco.png",
            subTitle: "Sustainable & Eco Travel",
            subIntro: "Responsible tourism initiatives preserving Brunei's pristine rainforest canopies, wildlife habitats, and local heritage."
        },

        "search": {
            pathway: "Home / Search",
            mainHeader: "Discover Brunei",
            bannerImage: "assets/1.jpg",
        }
        
    };







    // search function for website




    // get from html id
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
    const resultsHeading = document.getElementById("resultsHeading");

    // store website data
    const searchData = [];


    // add the info from places to go into search 

    for (let categoryKey in placesToGo) {

        const page = placesToGo[categoryKey];

        page.sections.forEach(section => {

            section.items.forEach(place => {

                searchData.push({

                    name: place.name,
                    image: place.image,
                    description: page.subIntro || "",
                    category: section.title || page.subTitle || "",
                    page: categoryKey,

                    searchText:
                        (place.name || "") + " " +
                        (page.subTitle || "") + " " +
                        (page.mainHeader || "") + " " +
                        (section.title || "") + " " +
                        (page.pathway || "") + " " +
                        (page.subIntro || "")

                });

            });

        });

    }


     // add things to do info
    for (let categoryKey in thingsToDoData) {

        const page = thingsToDoData[categoryKey];

        page.items.forEach(place => {

            searchData.push({

                name: place.name,
                image: place.image,
                description: place.description || "",
                category: page.subTitle || "",
                page: categoryKey,

                searchText:
                    (place.name || "") + " " +
                    (page.subTitle || "") + " " +
                    (page.mainHeader || "") + " " +
                    (page.pathway || "") + " " +
                    (place.description || "") + " " +
                    (place.location || "")

            });

        });

    }


    //addtravel plan data

    for (let categoryKey in travelPlanData) {

        const page = travelPlanData[categoryKey];

        if (page.items && page.items.length > 0) {

            page.items.forEach(place => {

                searchData.push({

                    name: place.name,
                    image: place.image,
                    description: place.description || page.subIntro || "",
                    category: page.subTitle || page.mainHeader || "",
                    page: categoryKey,

                    searchText:
                        (place.name || "") + " " +
                        (page.subTitle || "") + " " +
                        (page.mainHeader || "") + " " +
                        (page.pathway || "") + " " +
                        (place.description || "") + " " +
                        (place.location || "") + " " +
                        (place.districtLabel || "")

                });

            });

        } else {

            searchData.push({

                name: page.subTitle || page.mainHeader || categoryKey,
                image: page.bannerImage || "",
                category: page.mainHeader || "",
                page: categoryKey,

                searchText:
                    (page.subTitle || "") + " " +
                    (page.mainHeader || "") + " " +
                    (page.pathway || "") + " " +
                    (page.subIntro || "")

            });

        }

    }



    // display th search results to user

    function displayResults(resultsToDisplay) {

        searchResults.innerHTML = "";

        // number of reusults: 
        resultsHeading.textContent =
            "Search Results (" + resultsToDisplay.length + ")";

        if (resultsToDisplay.length === 0) {
            searchResults.textContent = "No results found.";
            return;

        }

        resultsToDisplay.forEach(place => {

            const card = document.createElement("article");

            // USE THE CARD FROM THE EARLIER CARDS/TRANSPORT/ACC/GETTINGBRUNEI
            card.className = "vertical-card";

            card.innerHTML = `
                <div class="vertical-card-img-wrapper">
                    <img src="${place.image}" alt="${place.name}" class="vertical-card-img">
                </div>

                <div class="vertical-card-text">

                    <h4 class="vertical-card-title">${place.name}</h4>


                    <a href="${place.page}.html" class="vertical-card-link">
                        View More
                    </a>

                </div>
            `;

            searchResults.appendChild(card);

        });

    }



    // filter the search results based on search item

    function filterResults(searchTerm) {

        // Convert search term to lowercase
        const searchTermLower = searchTerm.toLowerCase();

        // Filter the website information
        return searchData.filter(place => {

            return (
                place.name.toLowerCase().includes(searchTermLower) ||
                place.category.toLowerCase().includes(searchTermLower)
            );

        });

    }



    if (searchInput) {

        searchInput.addEventListener("input", function() {

            const searchTerm = searchInput.value.trim();

            if (searchTerm === "") {



                return;

            }

            const filteredResults = filterResults(searchTerm);

            displayResults(filteredResults);

        });

    }

 //ref the website? 


   
    // REUSING THE HTML TEMPLATE
    window.switchCategory = function(categoryKey) {
        const data = thingsToDoData[categoryKey] || travelPlanData[categoryKey] || placesToGo[categoryKey];
        if (!data) return;

        const filePathway = document.getElementById("pathway");
        const mainHeader = document.getElementById("main-header");
        const bannerImage = document.getElementById("banner-image");
        const subsectionTitle = document.getElementById("subsection-title");
        const subsectionDesc = document.getElementById("subsection-description");

        const container = document.getElementById("restaurants-container") || document.getElementById("cards-container");

        const districtContainer = document.getElementById("district-carousel-container");        

        // 1. Inject Titles, Plain Text Pathway, and Banner Image
        if (filePathway) filePathway.textContent = data.pathway;
        if (mainHeader) mainHeader.textContent = data.mainHeader;
        if (bannerImage) bannerImage.src = data.bannerImage;
        if (subsectionTitle) subsectionTitle.textContent = data.subTitle;
        if (subsectionDesc) subsectionDesc.textContent = data.subIntro;


        

        if (placesToGo[categoryKey] && data.sections) {

            if (districtContainer) {

                districtContainer.innerHTML = "";

                data.sections.forEach(section => {

                    const carouselWrapper = document.createElement("div");
                    carouselWrapper.className = "carousel-wrapper";

                    const heading = document.createElement("h2");
                    heading.textContent = section.title;

                    const carousel = document.createElement("ul");
                    carousel.className = "carousel";

                    section.items.forEach(place => {

                        const card = document.createElement("li");
                        card.className = "card";

                        const image = document.createElement("img");
                        //alt image names
                        image.src = place.image;
                        image.alt = place.name;

                        const title = document.createElement("h4");
                        title.textContent = place.name;

                        card.appendChild(image);
                        card.appendChild(title);

                        carousel.appendChild(card);

                    });

                    carouselWrapper.appendChild(heading);
                    carouselWrapper.appendChild(carousel);

                    districtContainer.appendChild(carouselWrapper);

                });

            }

        }


        // render either things to do or travel plan cards

        else if (container) {

            container.innerHTML = "";

            if (data.items && data.items.length > 0) {

                data.items.forEach(place => {

                    const card = document.createElement("article");

                    if (
                        categoryKey === "accommodation" ||
                        categoryKey === "transportation" ||
                        categoryKey === "tourpackages"
                    ) {

                        card.className = "vertical-card";

                        if (place.district) {
                            card.setAttribute("data-type", place.district);
                        }

                        card.innerHTML = `
                            <div class="vertical-card-img-wrapper">
                                <img src="${place.image}" alt="${place.name}" class="vertical-card-img">
                            </div>

                            <div class="vertical-card-text">
                                <h3 class="vertical-card-title">${place.name}</h3>

                                <p class="vertical-card-desc">${place.description}</p>

                                <a href="${place.website}" target="_blank" class="vertical-card-link">
                                    Visit Website
                                </a>
                            </div>
                        `;

                    } else {

                        card.className = "listing-card";

                        card.innerHTML = `
                            <div class="card-image-wrapper">
                                <img src="${place.image}" alt="${place.name}" class="card-image">
                            </div>

                            <div class="card-details">
                                <div>
                                    <h3 class="card-title">${place.name}</h3>
                                    <p class="card-description">${place.description}</p>
                                </div>

                                <div class="card-meta-info">
                                    <div class="meta-row">
                                        <span><strong>Location:</strong> ${place.location}</span>
                                    </div>
                                    <br>
     
                                </div>
                            </div>
                        `;

                    }

                    container.appendChild(card);

                });

            }

        }

        initDistrictFilter();
    };


    //
    window.switchTravelCategory = window.switchCategory;


    
   // auto detects the page filename on load

    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    // Auto-run category switch if matching key is found in either database
    if (currentPage && (thingsToDoData[currentPage] || travelPlanData[currentPage] || placesToGo[currentPage])) {
        window.switchCategory(currentPage);
    } else {
        initDistrictFilter();
    }




    // district filter adapted from:::::::::::::
    function initDistrictFilter() {
        const dropdownWrapper = document.querySelector(".dropdown-wrapper");
        if (!dropdownWrapper) return;

        const dropdownToggle = dropdownWrapper.querySelector(".dropdown-toggle");
        const dropdownToggleSpan = dropdownToggle.querySelector("span");
        const dropdown = dropdownWrapper.querySelector(".dropdown");
        const dropdownLinks = dropdown.querySelectorAll("a");
        const totalSpan = document.querySelector(".count span");

        const HIDDEN_CLASS = "hidden";
        const ACTIVE_CLASS = "active";
        const OPEN_CLASS = "open";

        function applyDistrictFilter(districtKey, linkText) {
            dropdown.querySelectorAll("li").forEach(li => li.classList.remove(ACTIVE_CLASS));
            
            const activeLink = document.getElementById(districtKey) || document.getElementById("all");
            if (activeLink) {
                activeLink.parentElement.classList.add(ACTIVE_CLASS);
                dropdownToggleSpan.innerText = linkText || activeLink.innerText;
            }

            const verticalCards = document.querySelectorAll(".vertical-card");
            let visibleCount = 0;

            verticalCards.forEach(card => {
                const cardType = card.getAttribute("data-type");
                if (districtKey === "all" || cardType === districtKey) {
                    card.classList.remove(HIDDEN_CLASS);
                    visibleCount++;
                } else {
                    card.classList.add(HIDDEN_CLASS);
                }
            });

            if (totalSpan) {
                totalSpan.innerText = visibleCount;
            }
        }

        const params = new URLSearchParams(location.search);
        if (params.has("district")) {
            const district = params.get("district");
            const link = document.getElementById(district);
            if (link) {
                applyDistrictFilter(district, link.innerText);
            }
        }

        if (!dropdownToggle.dataset.bound) {
            dropdownToggle.dataset.bound = "true";
            dropdownToggle.addEventListener("click", () => {
                const isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
                dropdownToggle.setAttribute("aria-expanded", !isExpanded);
                dropdownWrapper.classList.toggle(OPEN_CLASS);
            });

            dropdownLinks.forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    const districtId = link.getAttribute("id");

                    dropdownWrapper.classList.remove(OPEN_CLASS);
                    dropdownToggle.setAttribute("aria-expanded", "false");

                    if (districtId === "all") {
                        dropdownToggleSpan.innerText = "Filter Districts";
                        history.pushState(null, "", location.pathname);
                        applyDistrictFilter("all", "Filter Districts");
                    } else {
                        applyDistrictFilter(districtId, link.innerText);
                        history.pushState(null, "", `?district=${districtId}`);
                    }
                });
            });
        }
    }


    // responsive hamburger menu
    // no hamburger menu, keep the nav as is just make it smaller
    




});