const brandsData = [
    {
        name: "koenigsegg",
        description: "Swedish manufacturer of high-performance sports cars",
        image: "https://e0.pxfuel.com/wallpapers/843/543/desktop-wallpaper-koenigsegg-logo-koenigsegg-ghost-logo.jpg",
        link:"https://www.koenigsegg.com/"
    },
    {
        name: "BMW",
        description: "German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria",
        image: "https://www.merkur.de/assets/images/31/537/31537222-bmw-logo-parkendes-fahrzeug-2q0xfQGD0Ufe.jpg",
        link:"https://www.bmw.com/en/index.html"
    },
    {
        name: "Lamborghini",
        description: "Uncompromising excellence and performance",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7a79ba8164467.560b8606baeba.jpg",
        link:"https://www.lamborghini.com/en-en"
    },
    {
        name: "Ferrari",
        description: "Racing heritage meets luxury performance",
        image: "https://wallpaperaccess.com/full/507234.jpg",
        link:"https://www.ferrari.com/en-EN"
    },
    {
        name: "Mercedes-Benz",
        description: "German luxury and commercial vehicle brand",
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/4ae2c3140797401.6247fa409d804.jpg",
        link:"https://www.mercedes-benz.com"
    },
    {
        name: "Porsche",
        description: "German automobile manufacturer specializing in luxury, high-performance sports cars, SUVs and sedans",
        image:"https://www.iasesoria.com/wp-content/uploads/2022/10/registrar-marca.jpg",
        link:"https://www.porsche.com/middle-east/?georedirect=false&cs_redirect=1"
    },
    {
        name: "pagani",
        description: "Italian manufacturer of sports cars and carbon fiber components",
        image:"https://wallpapercave.com/wp/wp3897155.jpg",
        link:"https://www.pagani.com/"
    },
    {
        name: "rolls royce",
        description: "British manufacturer of aircraft engines and propulsion and power systems",
        image:"https://st3.depositphotos.com/3559981/16618/i/450/depositphotos_166182266-stock-photo-closeup-of-rolls-royce-logo.jpg",
        link:"https://www.rolls-royce.com/"
    }, 
    {
        name: "bentley",
        description: "British designer, manufacturer and marketer of luxury cars and SUVs",
        image:"https://th.bing.com/th/id/R.093f992e9b95dd62d2b3c53a7de490c7?rik=%2fCkZWSa1l1Iqqg&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2f2020_bentley_continental_gt_v8_4k_3-HD.jpg&ehk=tZnk0eifzoRCqfWBWhhPln%2f4EIP4T3cJrZ1SUuUwRfc%3d&risl=1&pid=ImgRaw&r=0",
        link:"https://www.bentleymotors.com/en.html"
    },
    {
        name: "aston martin",
        description: "British manufacturer of luxury sports cars and grand tourers",
        image:"https://martinbrowndesign.com/assets/media/designs/uploads/projects/projectslide/1800x1200/martin-brown-aston-martin-6-11483.jpg",
        link:"https://www.astonmartin.com/en"
    },
    {
        name: "mclaren ",
        description: "McLaren has evolved from a racing team to a world-renowned supercar manufacturer",
        image:"https://stuartscottfurniture.com/wp-content/uploads/2022/03/LUQ_1342-scaled.jpg",
        link:"https://www.mclaren.com/"
    },
    {
        name: "bugatti",
        description: "French luxury sports car manufacturer",
        image:"https://www.zbrushcentral.com/uploads/default/optimized/4X/b/e/4/be46954fd4497625db78025b948e2f32b19e4034_2_2000x1124.jpeg",
        link:"https://www.bugatti.com/en"
    },
    
];

const vehicles = [
    // Featured of 2&4 Door Cars/Motorcycles
    {
        name: 'Lamborghini Revuelto ',
        price:608358 ,
        image: 'https://cdn.autopapo.com.br/box/uploads/2023/03/29161911/lamborghini-revuelto-2024-laranja-frente-e-lateraljpg.jpg',
        bounty: 'BUY NOW',
        category: '2 DOOR',
         specs: {
            engine: "6.5-liter V12",
            power: "814 HP",
            acceleration: "0-100 mph: 5.1s",
            topSpeed: "218 mph"
         }
    },
    {
        name: 'BMW E30 sport evolution',
        price: 202871,
        image: 'https://i.pinimg.com/originals/7d/a3/d5/7da3d56b99705746e858323046f7fbed.jpg',
        bounty: 'BUY NOW',
        category: '2 DOOR',
         specs: {
            engine: "2.5L I4 S14",
            power: "238 HP",
            acceleration: "0-100 km/h: 6.5 s",
            topSpeed: "248 km/h / 154 mph"
        }
    },
    
    {
        name: 'NINJA ZX-6R KRT',
        price: 15500,
        image: 'https://content2.kawasaki.com/ContentStorage/KMB/ProductTopFeature/1121/c380e648-d17c-4fb3-9ff3-fa7b2273ad0a.jpg?w=800',
        bounty: 'BUY NOW',
        category: 'MOTORCYCLES',
         specs: {
            engine: "636 cc,4-stroke in-line V4",
            power: "124 HP",
            acceleration: "0 to 100 km/h:3.47 s",
            topSpeed: "264 km/h / 164 mph"
        }
        
    },
    {
        name: 'Mustang 1969 Boss 429',
        price: 475000,
        image: 'https://images.mecum.com/image/upload/c_fill,f_auto,g_center,q_auto,w_1920/v1732569547/auctions/FL25/1134500/221758.jpg?',
        category: '2 DOOR',
        bounty: 'BUY NOW',
         specs: {
            engine: "7.0L  V8",
            power: "375 HP",
            acceleration: "0-100 km/h:5.3 s",
            topSpeed: "179 km/h / 111 mph"
        }
    },

   // 2 Door Cars
        
    {
        name: 'Porsche 911 GT3 RS',
        price: 241300,
        image: 'https://www.autobics.com/wp-content/uploads/2022/08/2023-Porsche-911-GT3-RS-Rear-Quarter-View.jpg',
        category: '2 DOOR',
         specs: {
            engine: "4.0L V6",
            power: "518 HP",
            acceleration: "0-100 km/h: 3.0s",
            topSpeed: "296km/h / 184 mph" 
        }
    },
    {
        name: 'Ferrari F40',
        price: 1000000,
        image: 'https://th.bing.com/th/id/R.6d6330bc1496a3196940eb5af2692b3b?rik=NgLhbp9eTtje5Q&riu=http%3a%2f%2fwww.supercarreport.com%2fwp-content%2fuploads%2f2018%2f01%2f2-11.jpg&ehk=AfnOrd9MsTFTmYjlM5swh3jofrFiGBLG7oFJqaLUR8o%3d&risl=&pid=ImgRaw&r=0',
        category: '2 DOOR',
         specs: {
            engine: "2.9 liters V8",
            power: "478 HP",
            acceleration: "0-100 km/h: 4.1s",
            topSpeed: "324km/h / 201 mph"
        }
    },{
        name: 'Aston Martin DB12',
        price: 248086,
        image: 'https://media.torque.com.sg/public/2023/07/DSC_9359.jpg',
        category: '2 DOOR',
         specs: {
            engine: "4.0-litre V8 ",
            power: "671 HP",
            acceleration: "0-100 km/h: 3.6s",
            topSpeed: "325 km/h / 202 mph"
        }
    },{
        name: 'BMW M4',
        price: 65000,
        image: 'https://wallpapercave.com/wp/wp9659660.jpg',
        category: '2 DOOR',
         specs: {
            engine: "3.0L V6",
            power: "530 HP",
            acceleration: "0-100 km/h: 4.2s",
            topSpeed: "280 km/h / 173 mph"
        }
    },{
        name: ' Rolls-Royce Spectre',
        price: 550000,
        image: 'https://images.playground.com/9a2af02320b04b859094038bdcbb6233.jpeg',
        category: '2 DOOR',
         specs: {
            engine: "6.75-litre V12 ",
            power: "577 HP",
            acceleration: "0-100 km/h: 3.7s",
            topSpeed: "250km/h / 155 mph"
        }
    },

    // 4 Door Cars
    {
        name: 'Lamborghini Urus',
        price: 241843,
        image: 'https://img.pistonheads.com/Fullsize/lamborghini/urus/lamborghini-urus-1009116064-1.jpg',
        category: '4 DOOR',
         specs: {
            engine: "4.0-liter V-8 ",
            power: "657 HP",
            acceleration: "0-100 km/h: 3.1s",
            topSpeed: "312 km/h / 194 mph"
        }
    },
    {
        name: 'rolls-royce ghost',
        price: 314400,
        image: 'https://www.hdcarwallpapers.com/download/rolls_royce_ghost_2020_5k_7-2560x1440.jpg',
        category: '4 DOOR',
         specs: {
            engine: "6.6-liter V-12 ",
            power: "563 HP",
            acceleration: "0-100 km/h: 4.8s",
            topSpeed: "250km/h / 155 mph"
        }
    }, {
        name: 'Porsche Panamera',
        price: 100000,
        image: 'https://performancedrive.com.au/wp-content/uploads/2020/10/2021-Porsche-Panamera-E-Hybrid-rear.jpg',
        category: '4 DOOR',
         specs: {
            engine: "2.9 L 	V6",
            power: "440 HP",
            acceleration: "0-100 km/h: 4.3s",
            topSpeed: "295km/h / 183 mph"
        }
    }, {
        name: 'Ferrari Purosangue',
        price: 402050,
        image: 'https://www.cardesigntv.com/wp-content/uploads/2022/09/Screenshot-2022-09-14-123704.jpg',
        category: '4 DOOR',
         specs: {
            engine: "6.5L V-12",
            power: "715 HP",
            acceleration: "0-100 km/h: 	 3.2s",
            topSpeed: "	310 km/h / 193 mph"
        }
    }, {
        name: 'Bentley Bentayga',
        price: 200000,
        image: 'https://cdn.autoissue.co.kr/news/photo/202406/5546_12701_3056.jpg',
        category: '4 DOOR',
         specs: {
            engine: "3.0-liter V-6",
            power: "443 HP",
            acceleration: "0-100 km/h: 4.5s",
            topSpeed: "260km/h / 158 mph"
        }
    },
    
    {
        name: ' Mercedes-Benz G-Class ',
        price: 131000,
        image: 'https://i.pinimg.com/originals/20/6a/b6/206ab662fb70ea5eb4686ccaae731ef8.jpg',
        category: '4 DOOR',
         specs: {
            engine: "4.0-liter V-8 ",
            power: "416 HP",
            acceleration: "0-60 mph: 7 s",
            topSpeed: "220 km/h / 130 mph"
        }
    },

    // Motorcycles
    {
        name: 'AMB 011',
        price: 116000,
        image: 'https://cdni.autocarindia.com/ExtraImages/20200626020805_AMB-001.jpg',
        category: 'MOTORCYCLES',
         specs: {
            engine: "V-twin of 997 cc",
            power: "180 HP",
            acceleration: "-",
            topSpeed: "-"
        }
    },
    
    {
        name: 'BMW S 1000 RR',
        price: 16000,
        image: 'https://4.bp.blogspot.com/-J3SgI9YRDtI/WWQTrKNZ_gI/AAAAAAABB5Q/a5nE3E7S33gRaGuspa2Vb6ulS3p79L-YgCLcBGAs/s1600/p90234034-highres-bmw-s-1000-rr-10-201.jpg',
        category: 'MOTORCYCLES',
         specs: {
            engine: "999CC In-line V4",
            power: "195.8 HP",
            acceleration: "0-60 mph: 2.9s",
            topSpeed: "305 km/h / 190 mph"
        }
    },

    //Special cars
    {
        name: 'Porsche Spyder 918',
        price: 840000,
        image: 'https://www.thespeedjournal.com/wp-content/uploads/2019/12/2015-porsche-918-weissach-for-sale-1-wpcf_872x581.jpg',
        bounty: '1 of 918',
        category: 'SPECIAL',
        specs: {
            engine: "4.6L V8 ",
            power: "885 HP",
            acceleration: "0-100 km/h: 2.6s",
            topSpeed: "345 km/h / 214 mph"
        }
    }, {
        name: 'Bugatti Tourbillon',
        price: 4100000,
        image: 'https://www.car-concept-carrosserie.fr/wp-content/uploads/2024/06/bugatti-tourbillon-2026-chiron-nachfolger-mit-1800-ps.jpg',
        bounty: '1 of 250',
        category: 'SPECIAL',
        specs: {
            engine: " 8.3-litre V16-Sauger ",
            power: "1,800 HP",
            acceleration: "0-100 km/h: 2s",
            topSpeed: "444 km/h / 275 mph"
        }
    }, {
        name: 'koenigsegg jesko absolut',
        price: 2800000,
        image: 'https://uncrate.com/p/2022/04/koenigsegg-jesko-absolut-1.jpg',
        bounty: '1 of 125',
        category: 'SPECIAL',
        specs: {
            engine: "5L V8 ",
            power: "1600  HP",
            acceleration: "0-400-0 km/h: 27.8s",
            topSpeed: "402 km/h / 250 mph"
        }
    }, {
        name: 'Pagani Zonda R',
        price: 5340000,
        image: 'https://rmsothebys-cache.azureedge.net/d/a/b/8/4/0/dab84043ee6f12d44413771e33ee0d365f0213c6.jpg',
        bounty: '1 of 15',
        category: 'SPECIAL',
        specs: {
            engine: "6.0-liter V-12 ",
            power: "780 HP",
            acceleration: "0-100 km/h: 2.7s",
            topSpeed: "370 km/h / 230 mph"
        }
    },{
        name: 'McLaren Senna by Novitec',
        price: 1000000,
        image: 'https://th.bing.com/th/id/OIP.iNYbQXEuhGlUP6pbTs9LhwHaEt?rs=1&pid=ImgDetMain',
        bounty: '1 of 500',
        category: 'SPECIAL',
         specs: {
            engine: "4-liter v8",
            power: "902 HP",
            acceleration: "0-100 km/h : 2.7s",
            topSpeed: "335 km/h / 211 mph"
        }
    },
     {
        name: 'McLaren reveal MCL38',
        price: 15000000,
        image: 'https://e0.365dm.com/24/02/2048x1152/skysports-mcl38-mclaren-launch_6455032.jpg?20240214085455',
        bounty: '1 of 1',
        category: 'SPECIAL',
        specs: {
            engine: "	Mercedes-AMG F1 M15 E ",
            power: "740 HP",
            acceleration: "0-100 km/h: 2.5s",
            topSpeed: "370 km/h (230 mph)"
        }
    },

];