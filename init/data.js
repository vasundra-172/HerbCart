const headerImages = [ {
  image1 : "https://nutralfa.uk/wp-content/uploads/2018/09/herbs_292843331.jpg",
  image2 : "https://www.tastingtable.com/img/gallery/15-common-types-of-herbs-and-how-to-use-them/l-intro-1687966551.jpg",
  image3 : "https://wallpapercave.com/wp/wp7716426.jpg",
  image4 : "http://www.remediesforme.com/wp-content/uploads/2016/01/herbs-fresh-organic-green.jpg",  
}
]
const sampleListing =
[   
    {
      title: "Lavender",
      other_names: ["Lavandula angustifolia", "English Lavender"],
      description: "Lavender is a fragrant herb known for its soothing aroma and medicinal properties.",
      image: {
        filename: "herbimage",
        url : "https://images.unsplash.com/photo-1648067381798-3355ea0f6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      },
      price: 193.99,
      uses: ["Relaxation", "Aromatherapy", "Sleep Aid"],
      nursery: "Blossom Nursery",
      address: "Colony, near Dana Pani Restaurant, Ansal Pradhan Enclave, Bharat Nagar, Bhopal, Madhya Pradesh 462039",
      geometry: {type: 'Point', coordinates: [77.424042, 23.179090]},
    },
    {
      title: "Mint",
      other_names: ["Mentha", "Peppermint"],
      description: "Mint is a versatile herb with a refreshing flavor often used in culinary dishes and teas.",
      image: {
        filename: "herbimage",
        url:"https://images.unsplash.com/photo-1618130070080-91f4d55a2383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      }, 
      price: 158.49,
      uses: ["Digestive Aid", "Breath Freshener", "Cocktails"],
      nursery: "Sanjay Nursery - Best Wholesale Plant Nursery in Pune, India",
      address: "Arihant, S No-877, Kadam Wak Wasti Pune Solapur Road, Loni Kalbhor, near Datta Mandir, Pune, Maharashtra 412201",
      geometry: {type: 'Point', coordinates: [74.014150, 18.490110]}
    },
    {
      title: "Chamomile",
      other_names: ["Matricaria chamomilla", "German Chamomile"],
      description: "Chamomile is a gentle herb known for its calming and anti-inflammatory properties.",
      image: {
        filename: "herbimage",
        url:"https://images.unsplash.com/photo-1659283004944-e83a8aa5d025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      }, 
      price: 184.99,
      uses: ["Tea", "Skin Care", "Stress Relief"],
      nursery: "Nursery nisarga",
      address: "Nursery Nisarga infront of MGM School, BDA Rd, Awadhpuri, Bhopal, Madhya Pradesh 462022",
      geometry: {type: 'Point', coordinates: [77.476470, 23.249120]}
    },
    {
      title: "Echinacea",
      other_names: ["Echinacea purpurea", "Purple Coneflower"],
      description: "Echinacea is a popular herb used to boost the immune system and fight off colds.",
      image: {
        filename: "herbimage",
        url:"https://images.unsplash.com/photo-1654652975892-dd7538f82675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      }, 
      price: 179.99,
      uses: ["Immune Support", "Cold Remedy"],
      nursery: "GARDENICA NURSERY",
      address: "in front of DPS, Bairagarh Chichali, Kolar Rd, Bhopal, Madhya Pradesh 462042",
      geometry: {type: 'Point', coordinates: [77.416410, 23.176160]}
    },
    {
      title: "Rosemary",
      other_names: ["Rosmarinus officinalis"],
      description: "Rosemary is an aromatic herb often used in cooking and for its potential cognitive benefits.",
      image: {
        filename: "herbimage",
        url:"https://images.unsplash.com/photo-1594313016519-640ed47407ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      }, 
      price: 192.99,
      uses: ["Culinary", "Memory Enhancement"],
      nursery: "New Sai Vatika Nursery",
      address: "Maple Tree, New Jail Rd, near Karond, beside Maple tree, Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462036",
      geometry: {type: 'Point', coordinates: [77.37791592702919, 23.302380206035895]}
    },
    {
      title: "Turmeric",
      other_names: ["Curcuma longa"],
      description: "Turmeric is a bright yellow spice known for its anti-inflammatory properties.",
      image: {
        filename: "herbimage",
        url:"https://files.nccih.nih.gov/turmeric-square-steven-foster.jpg",
      }, 
      price: 136.49,
      uses: ["Anti-Inflammatory", "Curry Spice"],
      nursery: "Ananda nursery",
      address: "Hotel Raghav Palace, Khandwa Rd, behind Atulya IT Park, Indore, Madhya Pradesh 452001",
      geometry: {type: 'Point', coordinates: [75.8712892552852, 22.688146193392328]}
    },
    {
      title: "Ginger",
      other_names: ["Zingiber officinale"],
      description: "Ginger is a spicy root known for its digestive and anti-nausea benefits.",
      image: {
        filename: "herbimage",
        url:"https://urbanperennials.com/wp-content/uploads/GEL-CAR-w1.jpg",
      }, 
      price: 128.99,
      uses: ["Digestive Aid", "Nausea Relief"],
      nursery: "The Green Aangan Nursery",
      address: "Yadav Krishi Farm, behind Choithram Hospital, Choitram compound, Indore, Madhya Pradesh 452001",
      geometry: {type: 'Point', coordinates: [75.8503819403889, 22.689247917579035]}
    },
    {
      title: "Thyme",
      other_names: ["Thymus vulgaris"],
      description: "Thyme is a fragrant herb commonly used in cooking and for its potential respiratory benefits.",
      image: {
        filename: "herbimage",
        url:"https://nurserylive.com/cdn/shop/products/nurserylive-seeds-thyme-thymus-vulgaris-herb-seeds-16969124053132.jpg?v=1634205062",
      }, 
      price: 183.99,
      uses: ["Culinary", "Respiratory Health"],
      nursery: "Jeevak Medicinal Plants Nursery",
      address: "University road, near Sanket Colony, Nagarjun colony, camp, Amravati, Maharashtra 444602",
      geometry: {type: 'Point', coordinates: [77.79252769526563, 20.94871617740902]}
    },
    {
      title: "Oregano",
      other_names: ["Origanum vulgare"],
      description: "Oregano is a flavorful herb often used in Mediterranean cuisine.",
      image: {
        filename: "herbimage",
        url:"https://images.unsplash.com/photo-1690877468013-f5c174498a53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      }, 
      price: 171.49,
      uses: ["Culinary", "Antioxidant"],
      nursery: "Nature India Nursery - India's Only Native Plant Nursery",
      address: "Ahead of Patil Wada Misal, Right Canal Road, Gangapur - Satpur Link Rd, nr. Motiwala College, Nashik, Maharashtra 422222",
      geometry: {type: 'Point', coordinates: [73.71340642222788, 20.022373408623068]}
    },
    {
      title: "Valerian",
      other_names: ["Valeriana officinalis"],
      description: "Valerian is an herb known for its sedative properties and use in promoting sleep.",
      image: {
        filename: "herbimage",
        url:"https://extension.umass.edu/weed-herbarium/sites/default/files/weeds/leaves/valof3257w.jpg",
      }, 
      price: 165.99,
      uses: ["Sleep Aid", "Anxiety Relief"],
      nursery: "NatureFly",
      address: "CTO road, 3EME centre road, near Bharat petrol pump, Data Colony, Bhopal, Madhya Pradesh 462030",
      geometry: {type: 'Point', coordinates: [77.35144921891427, 23.2929005942196]}
    },
    {
      title: "Sage",
      other_names: ["Salvia officinalis"],
      description: "Sage is a fragrant herb often used in cooking and for its potential cognitive benefits.",
      image: {
        filename: "herbimage",
        url:"https://images.unsplash.com/photo-1659834742694-81ed65bb7711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      }, 
      price: 149.99,
      uses: ["Culinary", "Memory Enhancement"],
      nursery: "Indo Israel Avocado Nursery",
      address: "Raksha Vihar, Raja Bhoj Airport Area, Bairagarh, Bhopal, Madhya Pradesh 462030",
      geometry: {type: 'Point', coordinates: [77.32112071534259, 23.302757139095938]}
    },
    {
      title: "Lemongrass",
      other_names: ["Cymbopogon citratus"],
      description: "Lemongrass is a citrus-flavored herb commonly used in Asian cuisine and herbal teas.",
      image: {
        filename: "herbimage",
        url:"https://3.imimg.com/data3/PM/XX/MY-6031404/lemongrass-500x500.jpg",
      }, 
      price: 124.49,
      uses: ["Culinary", "Tea"],
      nursery: "Kaushal Kisan Bio Planttec Pvt Ltd",
      address: "106/2-A Sector 3rd Floor B Saket Nagar, Satguru Arcade, Bhopal, Madhya Pradesh 462024",
      geometry: {type: 'Point', coordinates: [77.4629359858769, 23.220557097556778]}
    },
    {
      title: "Cilantro",
      other_names: ["Coriandrum sativum", "Coriander"],
      description: "Cilantro is a herb known for its fresh, citrusy flavor and use in various cuisines.",
      image: {
        filename: "herbimage",
        url:"https://images.unsplash.com/photo-1601493700603-43461216807a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      }, 
      price: 88.99,
      uses: ["Culinary", "Digestive Aid"],
      nursery: "Nursery Nisarga",
      address: "Nursery Nisarga infront of MGM School, BDA Rd, Awadhpuri, Bhopal, Madhya Pradesh 462022",
      geometry: {type: 'Point', coordinates: [77.49692447998686, 23.221012432935932]}
    },
    {
      title: "Basil",
      other_names: ["Ocimum basilicum"],
      description: "Basil is a fragrant herb often used in Italian cooking and for its potential anti-inflammatory benefits.",
      image: {
        filename: "herbimage",
        url:"https://cdn.loveandlemons.com/wp-content/uploads/2019/07/IMG_2600-2-1.jpg",
      }, 
      price: 132.99,
      uses: ["Culinary", "Anti-Inflammatory"],
      nursery: "GARDNICA NURSERY",
      address: "in front of DPS, Bairagarh Chichali, Kolar Rd, Bhopal, Madhya Pradesh 462042",
      geometry: {type: 'Point', coordinates: [77.40097465114926, 23.154545442046242]}
    },
    {
      title: "Dandelion",
      other_names: ["Taraxacum officinale"],
      description: "Dandelion is an herb used for its potential detoxifying and liver-supporting properties.",
      image: {
        filename: "herbimage",
        url:"https://i0.wp.com/deepgreenpermaculture.com/wp-content/uploads/2022/10/DSC01409_1024_DxO.jpg?ssl=1",
      }, 
      price: 155.49,
      uses: ["Detoxification", "Liver Health"],
      nursery: "Haritima Farms & Nursery",
      address: "Sohagpur Nearest, landmark : Mansarovar Dental college, ward no 84, Kolar road, near babylon international school, Bhopal, Madhya Pradesh 462042",
      geometry: {type: 'Point', coordinates: [77.42214147456619, 23.20045191918979]}
    },
    {
      title: "Peppermint",
      other_names: ["Mentha", "piperita"],
      description: "Peppermint is a minty herb known for its refreshing flavor and potential digestive benefits.",
      image: {
        filename: "herbimage",
        url:"https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      }, 
      price: 107.99,
      uses: ["Culinary", "Digestive Aid"],
      nursery: "NatureFly",
      address: "CTO road, 3EME centre road, near Bharat petrol pump, Data Colony, Bhopal, Madhya Pradesh 462030",
      geometry: {type: 'Point', coordinates: [77.35241609633906, 23.279723812413078]}
    },
    {
      title: "Lemon Balm",
      other_names: ["Melissa officinalis"],
      description: "Lemon balm is a lemon-scented herb often used for relaxation and mood enhancement.",
      image: {
        filename: "herbimage",
        url:"https://images.unsplash.com/photo-1622576454275-729fbf6aa6eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      }, 
      price: 129.99,
      uses: ["Relaxation", "Mood Enhancement"],
      nursery: "New Sai Vatika Nursery",
      address: "Maple Tree, New Jail Rd, near Karond, beside Maple tree, Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462036",
      geometry: {type: 'Point', coordinates: [77.42214147456619, 23.20045191918979]}
    },
    {
      title: "Catnip",
      other_names: ["Nepeta cataria"],
      description: "Catnip is an herb that can induce a euphoric response in some cats.",
      image: {
        filename: "herbimage",
        url:"https://i.etsystatic.com/10534964/r/il/c65f15/1543969105/il_1080xN.1543969105_bb7j.jpg",
      }, 
      price: 189.99,
      uses: ["stress reliever", "reduce cramps"],
      nursery: "Jeevak Medicinal Plants Nursery",
      address: "University road, near Sanket Colony, Nagarjun colony, camp, Amravati, Maharashtra 444602",
      geometry: {type: 'Point', coordinates: [77.79255988177255, 20.948766275743495]}
    },
    {
      title: "Withania",
      other_names: ["ashwagandha", "winter cherry"],
      description: "It is an evergreen shrub in that grows in India, the Middle East, and parts of Africa.",
      image: {
        filename: "herbimage",
        url:"https://images.meesho.com/images/products/199646483/979es_512.webp",
      }, 
      price: 150.49,
      uses: ["Boost immunity", "Improves bone and muscle strength"],
      nursery: "The Green Aangan Nursery",
      address: "Yadav Krishi Farm, behind Choithram Hospital, Choitram compound, Indore, Madhya Pradesh 452001",
      geometry: {type: 'Point', coordinates: [75.85034977997135, 22.689376651563943]}
    },
    {
      title: "Aloe Vera",
      other_names: ["Aloe barbadensis miller"],
      description: "Aloe vera is a succulent plant known for its soothing and healing properties for the skin.",
      image: {
        filename: "herbimage",
        url:"https://images.unsplash.com/photo-1658582746091-cac5ffb8e2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      }, 
      price: 102.6,
      uses: ["Skin Care"],
      nursery: "Blossom Nursery",
      address: "Colony, near Dana Pani Restaurant, Ansal Pradhan Enclave, Bharat Nagar, Bhopal, Madhya Pradesh 462039",
      geometry: {type: 'Point', coordinates: [77.4453150712824, 23.201978913224284]}
    },
    {
      title: "Dill",
      other_names: ["Anethum graveolens"],
      description: "Dill is rich in several nutrients and has traditionally been used to treat various ailments, including digestive issues, colic in infants, and bad breath",
      image: {
        filename: "herbimage",
        url:"https://cdn.pixabay.com/photo/2021/11/05/23/30/dill-6772178_960_720.jpg",
      }, 
      price: 125.6,
      uses: ["Lower blood sugar level", "Heart health"],
      nursery: "Ananda nursery",
      address: "Hotel Raghav Palace, Khandwa Rd, behind Atulya IT Park, Indore, Madhya Pradesh 452001",
      geometry: {type: 'Point', coordinates: [75.87154674734053, 22.688106598922218]}
    }
  ]
  
  module.exports = {data : sampleListing, frontImg : headerImages};