// ===== TOUR & HOTEL DATA =====
const TOUR_DATA = {
    // ===== TOUR TRONG NƯỚC =====
    'da-nang': {
        id: 'da-nang',
        name: 'Tour Đà Nẵng - Hội An - Bà Nà Hills',
        type: 'domestic',
        duration: '3 ngày 2 đêm',
        price: 3200000,
        priceOld: 3800000,
        badge: 'HOT',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Khám phá cầu Vàng, phố cổ Hội An lung linh, bãi biển Mỹ Khê tuyệt đẹp.',
        description: `<p>Tham gia tour Đà Nẵng - Hội An - Bà Nà Hills để khám phá những địa danh nổi tiếng nhất miền Trung Việt Nam. Từ Cầu Vàng huyền thoại trên đỉnh Bà Nà Hills đến phố cổ Hội An lung linh ánh đèn lồng, mỗi điểm đến đều mang đến trải nghiệm khó quên.</p>
        <p>Tour bao gồm dịch vụ xe đưa đón, khách sạn 4 sao, hướng dẫn viên chuyên nghiệp và các bữa ăn đặc sản miền Trung.</p>`,
        highlights: ['Cầu Vàng - Bà Nà Hills', 'Phố cổ Hội An đêm', 'Bãi biển Mỹ Khê', 'Ngũ Hành Sơn', 'Chùa Linh Ứng'],
        itinerary: [
            { day: 'Ngày 1', title: 'TP.HCM → Đà Nẵng → Bà Nà Hills', details: 'Đón sân bay, tham quan Bà Nà Hills, check-in cầu Vàng, vui chơi Fantasy Park.' },
            { day: 'Ngày 2', title: 'Đà Nẵng → Hội An', details: 'Tham quan Ngũ Hành Sơn, phố cổ Hội An, thả hoa đăng sông Hoài.' },
            { day: 'Ngày 3', title: 'Đà Nẵng → TP.HCM', details: 'Tắm biển Mỹ Khê, shopping tại chợ Hàn, bay về TP.HCM.' }
        ],
        includes: ['Vé máy bay khứ hồi', 'Khách sạn 4 sao (2 đêm)', 'Bữa ăn theo chương trình', 'Xe đưa đón đời mới', 'Hướng dẫn viên', 'Bảo hiểm du lịch', 'Vé tham quan'],
        excludes: ['Chi phí cá nhân', 'Đồ uống trong bữa ăn', 'Tip cho HDV & tài xế'],
        departure: 'TP.HCM',
        transport: 'Máy bay',
        groupSize: '15-25 người',
        rating: 4.8,
        reviews: 156
    },
    'phu-quoc': {
        id: 'phu-quoc',
        name: 'Tour Phú Quốc nghỉ dưỡng cao cấp',
        type: 'domestic',
        duration: '4 ngày 3 đêm',
        price: 4800000,
        priceOld: 5500000,
        badge: 'NEW',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Tắm biển, lặn ngắm san hô, khám phá đảo ngọc thiên đường.',
        description: `<p>Phú Quốc - Đảo Ngọc của Việt Nam với những bãi biển cát trắng, nước biển trong xanh và cảnh hoàng hôn tuyệt đẹp. Tour nghỉ dưỡng cao cấp giúp bạn thư giãn hoàn toàn.</p>
        <p>Trải nghiệm lặn ngắm san hô, câu cá, thưởng thức hải sản tươi sống và nghỉ dưỡng tại resort 5 sao.</p>`,
        highlights: ['Bãi Sao - bãi biển đẹp nhất', 'Lặn ngắm san hô', 'VinWonders Phú Quốc', 'Grand World', 'Sunset Sanato'],
        itinerary: [
            { day: 'Ngày 1', title: 'TP.HCM → Phú Quốc', details: 'Bay đến Phú Quốc, nhận phòng resort, tự do khám phá.' },
            { day: 'Ngày 2', title: 'Khám phá Nam Đảo', details: 'Câu cá, lặn ngắm san hô, thăm làng chài, sunset Bãi Sao.' },
            { day: 'Ngày 3', title: 'VinWonders & Grand World', details: 'Vui chơi VinWonders, Grand World, show Tinh hoa Việt Nam.' },
            { day: 'Ngày 4', title: 'Phú Quốc → TP.HCM', details: 'Tự do mua sắm, bay về TP.HCM.' }
        ],
        includes: ['Vé máy bay khứ hồi', 'Resort 5 sao (3 đêm)', 'Bữa ăn theo chương trình', 'Xe đưa đón', 'Hướng dẫn viên', 'Bảo hiểm du lịch', 'Vé tham quan'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip'],
        departure: 'TP.HCM',
        transport: 'Máy bay',
        groupSize: '10-20 người',
        rating: 4.9,
        reviews: 203
    },
    'sapa': {
        id: 'sapa',
        name: 'Tour Sapa - Fansipan mùa hoa đào',
        type: 'domestic',
        duration: '3 ngày 2 đêm',
        price: 2900000,
        priceOld: 3500000,
        badge: '',
        image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Chinh phục nóc nhà Đông Dương, ngắm ruộng bậc thang tuyệt đẹp.',
        description: `<p>Sapa luôn quyến rũ du khách bằng vẻ đẹp hoang sơ của ruộng bậc thang, sương mù lãng mạn và nét văn hóa đặc sắc của đồng bào dân tộc.</p>
        <p>Chinh phục đỉnh Fansipan - nóc nhà Đông Dương bằng cáp treo hiện đại, trek qua những bản làng xinh đẹp.</p>`,
        highlights: ['Đỉnh Fansipan 3143m', 'Ruộng bậc thang Mường Hoa', 'Bản Cát Cát', 'Thác Bạc', 'Chợ phiên Sapa'],
        itinerary: [
            { day: 'Ngày 1', title: 'Hà Nội → Sapa', details: 'Xe limousine ra Sapa, check-in, dạo phố Sapa, chợ đêm.' },
            { day: 'Ngày 2', title: 'Fansipan & Bản Cát Cát', details: 'Cáp treo Fansipan, thăm bản Cát Cát, ruộng bậc thang.' },
            { day: 'Ngày 3', title: 'Sapa → Hà Nội', details: 'Thăm Thác Bạc, mua sắm, xe về Hà Nội.' }
        ],
        includes: ['Xe limousine Hà Nội - Sapa', 'Khách sạn 3 sao (2 đêm)', 'Bữa ăn', 'Vé cáp treo Fansipan', 'HDV', 'Bảo hiểm'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip'],
        departure: 'Hà Nội',
        transport: 'Xe limousine',
        groupSize: '10-20 người',
        rating: 4.7,
        reviews: 128
    },
    'ha-long': {
        id: 'ha-long',
        name: 'Tour Hạ Long - Du thuyền 5 sao',
        type: 'domestic',
        duration: '2 ngày 1 đêm',
        price: 3500000,
        priceOld: 4200000,
        badge: '',
        image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Nghỉ đêm trên du thuyền sang trọng, ngắm hoàng hôn trên vịnh.',
        description: `<p>Vịnh Hạ Long - Di sản thiên nhiên thế giới với hàng ngàn đảo đá vôi hùng vĩ. Trải nghiệm nghỉ đêm trên du thuyền 5 sao sang trọng.</p>`,
        highlights: ['Du thuyền 5 sao', 'Hang Sửng Sốt', 'Đảo Ti Tốp', 'Chèo kayak', 'Ngắm hoàng hôn trên vịnh'],
        itinerary: [
            { day: 'Ngày 1', title: 'Hà Nội → Hạ Long', details: 'Lên du thuyền, thăm hang Sửng Sốt, chèo kayak, tiệc BBQ.' },
            { day: 'Ngày 2', title: 'Hạ Long → Hà Nội', details: 'Tai chi buổi sáng, đảo Ti Tốp, về Hà Nội.' }
        ],
        includes: ['Xe đưa đón Hà Nội - Hạ Long', 'Du thuyền 5 sao (1 đêm)', 'Các bữa ăn trên tàu', 'Kayak', 'HDV', 'Bảo hiểm'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip'],
        departure: 'Hà Nội',
        transport: 'Xe + Du thuyền',
        groupSize: '20-30 người',
        rating: 4.9,
        reviews: 312
    },
    'da-lat': {
        id: 'da-lat',
        name: 'Tour Đà Lạt thành phố ngàn hoa',
        type: 'domestic',
        duration: '3 ngày 2 đêm',
        price: 2500000,
        priceOld: 3000000,
        badge: '',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Thung lũng tình yêu, đồi chè Cầu Đất, hồ Tuyền Lâm thơ mộng.',
        description: `<p>Đà Lạt - thành phố ngàn hoa với khí hậu mát mẻ quanh năm. Khám phá những đồi chè xanh mướt, hồ Tuyền Lâm thơ mộng và kiến trúc Pháp cổ kính.</p>`,
        highlights: ['Thung lũng Tình Yêu', 'Đồi chè Cầu Đất', 'Hồ Tuyền Lâm', 'Thiền viện Trúc Lâm', 'Chợ đêm Đà Lạt'],
        itinerary: [
            { day: 'Ngày 1', title: 'TP.HCM → Đà Lạt', details: 'Bay đến Đà Lạt, tham quan Thung lũng Tình Yêu, chợ đêm.' },
            { day: 'Ngày 2', title: 'Khám phá Đà Lạt', details: 'Đồi chè Cầu Đất, hồ Tuyền Lâm, Thiền viện Trúc Lâm.' },
            { day: 'Ngày 3', title: 'Đà Lạt → TP.HCM', details: 'Tự do mua sắm đặc sản, bay về TP.HCM.' }
        ],
        includes: ['Vé máy bay khứ hồi', 'Khách sạn 3 sao (2 đêm)', 'Bữa ăn', 'Xe đưa đón', 'HDV', 'Bảo hiểm'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip'],
        departure: 'TP.HCM',
        transport: 'Máy bay',
        groupSize: '15-25 người',
        rating: 4.6,
        reviews: 97
    },
    'hue': {
        id: 'hue',
        name: 'Tour Huế - Cố đô di sản',
        type: 'domestic',
        duration: '2 ngày 1 đêm',
        price: 1800000,
        priceOld: 2200000,
        badge: '',
        image: 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Tham quan Đại Nội, lăng tẩm, thưởng thức ẩm thực Huế nổi tiếng.',
        description: `<p>Huế - Cố đô với bề dày lịch sử và văn hóa phong phú. Tham quan Đại Nội, các lăng tẩm vua chúa và thưởng thức ẩm thực cung đình nổi tiếng.</p>`,
        highlights: ['Đại Nội Huế', 'Lăng Tự Đức', 'Lăng Khải Định', 'Chùa Thiên Mụ', 'Ẩm thực cung đình'],
        itinerary: [
            { day: 'Ngày 1', title: 'Đà Nẵng → Huế', details: 'Xe đến Huế, tham quan Đại Nội, Lăng Tự Đức, Chùa Thiên Mụ.' },
            { day: 'Ngày 2', title: 'Huế → Đà Nẵng', details: 'Lăng Khải Định, chợ Đông Ba, về Đà Nẵng.' }
        ],
        includes: ['Xe đưa đón', 'Khách sạn 3 sao (1 đêm)', 'Bữa ăn', 'Vé tham quan', 'HDV', 'Bảo hiểm'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip'],
        departure: 'Đà Nẵng',
        transport: 'Xe du lịch',
        groupSize: '15-25 người',
        rating: 4.5,
        reviews: 85
    },

    // ===== TOUR NƯỚC NGOÀI =====
    'nhat-ban': {
        id: 'nhat-ban',
        name: 'Tour Nhật Bản mùa hoa anh đào',
        type: 'international',
        duration: '5 ngày 4 đêm',
        price: 25990000,
        priceOld: 29990000,
        badge: 'HOT',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1550850839-8dc894ed385a?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Tokyo - Kyoto - Osaka. Ngắm hoa anh đào, trải nghiệm văn hóa Nhật.',
        description: `<p>Hành trình khám phá đất nước mặt trời mọc với những cánh hoa anh đào rực rỡ, văn hóa truyền thống đặc sắc và công nghệ hiện đại.</p>
        <p>Từ Tokyo náo nhiệt đến Kyoto cổ kính, Osaka sôi động - bạn sẽ có trải nghiệm trọn vẹn nhất về Nhật Bản.</p>`,
        highlights: ['Núi Phú Sĩ', 'Đền Kinkakuji (Chùa Vàng)', 'Phố Akihabara', 'Công viên Ueno', 'Dotonbori Osaka'],
        itinerary: [
            { day: 'Ngày 1', title: 'TP.HCM → Tokyo', details: 'Bay đến Tokyo, nhận phòng, dạo Shinjuku.' },
            { day: 'Ngày 2', title: 'Tokyo', details: 'Akihabara, chùa Senso-ji, Tokyo Skytree, Shibuya.' },
            { day: 'Ngày 3', title: 'Tokyo → Kyoto', details: 'Shinkansen đến Kyoto, Kinkakuji, rừng tre Arashiyama.' },
            { day: 'Ngày 4', title: 'Kyoto → Osaka', details: 'Fushimi Inari, đến Osaka, Dotonbori, shopping.' },
            { day: 'Ngày 5', title: 'Osaka → TP.HCM', details: 'Tự do mua sắm, bay về TP.HCM.' }
        ],
        includes: ['Vé máy bay quốc tế khứ hồi', 'Khách sạn 4 sao', 'Visa Nhật Bản', 'Bữa ăn theo CT', 'Xe đưa đón', 'Shinkansen', 'HDV', 'Bảo hiểm quốc tế'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip', 'Phí vượt cân hành lý'],
        departure: 'TP.HCM',
        transport: 'Máy bay',
        groupSize: '15-25 người',
        rating: 4.9,
        reviews: 287
    },
    'han-quoc': {
        id: 'han-quoc',
        name: 'Tour Hàn Quốc 6N5D Seoul - Nami - Everland',
        type: 'international',
        duration: '6 ngày 5 đêm',
        price: 18500000,
        priceOld: 22000000,
        badge: 'HOT',
        image: 'https://images.unsplash.com/photo-1550850839-8dc894ed385a?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1550850839-8dc894ed385a?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Khám phá Seoul hiện đại, đảo Nami thơ mộng, công viên Everland.',
        description: `<p>Khám phá xứ sở Kim Chi với Seoul hiện đại, đảo Nami thơ mộng và công viên giải trí Everland đẳng cấp.</p>`,
        highlights: ['Đảo Nami', 'Everland', 'Cung điện Gyeongbokgung', 'Myeongdong', 'Tháp N Seoul'],
        itinerary: [
            { day: 'Ngày 1', title: 'TP.HCM → Seoul', details: 'Bay đến Incheon, nhận phòng, dạo Myeongdong.' },
            { day: 'Ngày 2', title: 'Seoul', details: 'Gyeongbokgung, mặc Hanbok, Bukchon Hanok Village.' },
            { day: 'Ngày 3', title: 'Đảo Nami', details: 'Đảo Nami, Petite France, vườn Morning Calm.' },
            { day: 'Ngày 4', title: 'Everland', details: 'Vui chơi trọn ngày tại Everland.' },
            { day: 'Ngày 5', title: 'Seoul', details: 'Tháp N Seoul, Gangnam, Lotte World Tower.' },
            { day: 'Ngày 6', title: 'Seoul → TP.HCM', details: 'Mua sắm duty free, bay về TP.HCM.' }
        ],
        includes: ['Vé máy bay khứ hồi', 'Khách sạn 4 sao', 'Visa Hàn Quốc', 'Bữa ăn', 'Xe đưa đón', 'HDV', 'Bảo hiểm'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip'],
        departure: 'TP.HCM',
        transport: 'Máy bay',
        groupSize: '15-25 người',
        rating: 4.8,
        reviews: 198
    },
    'chau-au': {
        id: 'chau-au',
        name: 'Tour Châu Âu 4 nước: Pháp - Ý - Thụy Sĩ - Đức',
        type: 'international',
        duration: '10 ngày 9 đêm',
        price: 67990000,
        priceOld: 75000000,
        badge: 'PREMIUM',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Hành trình xuyên Châu Âu, thăm tháp Eiffel, Colosseum, núi Alps.',
        description: `<p>Hành trình đẳng cấp xuyên suốt 4 quốc gia Châu Âu: Pháp, Ý, Thụy Sĩ và Đức. Trải nghiệm văn hóa, kiến trúc và ẩm thực tuyệt vời nhất Châu Âu.</p>`,
        highlights: ['Tháp Eiffel', 'Đấu trường Colosseum', 'Núi Alps', 'Lâu đài Neuschwanstein', 'Venice'],
        itinerary: [
            { day: 'Ngày 1-2', title: 'TP.HCM → Paris', details: 'Bay đến Paris, nhận phòng, cruise sông Seine.' },
            { day: 'Ngày 3-4', title: 'Paris', details: 'Tháp Eiffel, Louvre, Champs-Élysées, Montmartre.' },
            { day: 'Ngày 5-6', title: 'Thụy Sĩ', details: 'Interlaken, Jungfrau, Lucerne.' },
            { day: 'Ngày 7-8', title: 'Ý', details: 'Milan, Venice, Rome, Colosseum, Vatican.' },
            { day: 'Ngày 9', title: 'Đức', details: 'Munich, Neuschwanstein.' },
            { day: 'Ngày 10', title: 'Munich → TP.HCM', details: 'Bay về TP.HCM.' }
        ],
        includes: ['Vé máy bay quốc tế', 'Khách sạn 4-5 sao', 'Visa Schengen', 'Bữa ăn', 'Xe đưa đón', 'Tàu TGV', 'HDV', 'Bảo hiểm'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip'],
        departure: 'TP.HCM',
        transport: 'Máy bay + Tàu',
        groupSize: '15-25 người',
        rating: 5.0,
        reviews: 156
    },
    'singapore': {
        id: 'singapore',
        name: 'Tour Singapore - Malaysia 5N4D',
        type: 'international',
        duration: '5 ngày 4 đêm',
        price: 12500000,
        priceOld: 15000000,
        badge: '',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1550850839-8dc894ed385a?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Marina Bay, Universal Studios, Sentosa, Kuala Lumpur.',
        description: `<p>Khám phá 2 quốc gia Đông Nam Á phát triển nhất: Singapore hiện đại và Malaysia đa văn hóa.</p>`,
        highlights: ['Marina Bay Sands', 'Universal Studios', 'Sentosa Island', 'Tháp đôi Petronas', 'Batu Caves'],
        itinerary: [
            { day: 'Ngày 1', title: 'TP.HCM → Singapore', details: 'Bay đến Singapore, Merlion, Marina Bay.' },
            { day: 'Ngày 2', title: 'Universal Studios', details: 'Trọn ngày tại Sentosa: Universal Studios, bãi biển.' },
            { day: 'Ngày 3', title: 'Singapore → Malaysia', details: 'Gardens by the Bay, xe đến Kuala Lumpur.' },
            { day: 'Ngày 4', title: 'Kuala Lumpur', details: 'Tháp đôi Petronas, Batu Caves, phố Jalan Alor.' },
            { day: 'Ngày 5', title: 'Malaysia → TP.HCM', details: 'Mua sắm, bay về TP.HCM.' }
        ],
        includes: ['Vé máy bay', 'Khách sạn 4 sao', 'Bữa ăn', 'Xe đưa đón', 'HDV', 'Bảo hiểm', 'Vé USS'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip'],
        departure: 'TP.HCM',
        transport: 'Máy bay',
        groupSize: '15-20 người',
        rating: 4.7,
        reviews: 165
    },
    'uc': {
        id: 'uc',
        name: 'Tour Úc - Sydney - Melbourne 7N6D',
        type: 'international',
        duration: '7 ngày 6 đêm',
        price: 42000000,
        priceOld: 48000000,
        badge: '',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Nhà hát Opera, cầu cảng Sydney, Great Ocean Road.',
        description: `<p>Khám phá nuớc Úc xinh đẹp với Sydney hiện đại và Melbourne nghệ thuật. Trải nghiệm Great Ocean Road huyền thoại.</p>`,
        highlights: ['Opera House', 'Harbour Bridge', 'Great Ocean Road', 'Blue Mountains', '12 Apostles'],
        itinerary: [
            { day: 'Ngày 1-2', title: 'TP.HCM → Sydney', details: 'Bay đến Sydney, Opera House, The Rocks.' },
            { day: 'Ngày 3-4', title: 'Sydney', details: 'Blue Mountains, Bondi Beach, Darling Harbour.' },
            { day: 'Ngày 5-6', title: 'Melbourne', details: 'Bay đến Melbourne, Great Ocean Road, 12 Apostles.' },
            { day: 'Ngày 7', title: 'Melbourne → TP.HCM', details: 'Bay về TP.HCM.' }
        ],
        includes: ['Vé máy bay quốc tế', 'Khách sạn 4 sao', 'Visa Úc', 'Bữa ăn', 'Xe đưa đón', 'HDV', 'Bảo hiểm'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip'],
        departure: 'TP.HCM',
        transport: 'Máy bay',
        groupSize: '15-25 người',
        rating: 4.8,
        reviews: 92
    },
    'thai-lan': {
        id: 'thai-lan',
        name: 'Tour Thái Lan Bangkok - Pattaya 4N3D',
        type: 'international',
        duration: '4 ngày 3 đêm',
        price: 6990000,
        priceOld: 8500000,
        badge: '',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1550850839-8dc894ed385a?w=600&h=400&fit=crop'
        ],
        shortDesc: 'Chùa Phật Vàng, Cung điện Hoàng gia, biển Pattaya.',
        description: `<p>Thái Lan - xứ sở chùa vàng với Bangkok nhộn nhịp và Pattaya sôi động. Thưởng thức ẩm thực đường phố và khám phá văn hóa Thái.</p>`,
        highlights: ['Cung điện Hoàng gia', 'Chùa Phật Vàng', 'Biển Pattaya', 'Chợ nổi', 'Alcazar Show'],
        itinerary: [
            { day: 'Ngày 1', title: 'TP.HCM → Bangkok', details: 'Bay đến Bangkok, tham quan Cung điện Hoàng gia.' },
            { day: 'Ngày 2', title: 'Bangkok → Pattaya', details: 'Xe đến Pattaya, Coral Island, Alcazar Show.' },
            { day: 'Ngày 3', title: 'Pattaya → Bangkok', details: 'Nong Nooch, chợ nổi 4 miền, Asiatique.' },
            { day: 'Ngày 4', title: 'Bangkok → TP.HCM', details: 'Mua sắm duty free, bay về TP.HCM.' }
        ],
        includes: ['Vé máy bay', 'Khách sạn 4 sao', 'Bữa ăn', 'Xe đưa đón', 'HDV', 'Bảo hiểm'],
        excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tip'],
        departure: 'TP.HCM',
        transport: 'Máy bay',
        groupSize: '20-30 người',
        rating: 4.6,
        reviews: 234
    }
};

// ===== HOTEL DATA =====
const HOTEL_DATA = {
    'a-dong': {
        id: 'a-dong',
        name: 'Khách Sạn Á Đông',
        stars: 3,
        location: 'Quận 1, TP.HCM',
        price: 450000,
        priceOld: 600000,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop'
        ],
        rating: 3.8,
        reviews: 126,
        description: `<p>Khách sạn Á Đông tọa lạc tại trung tâm Quận 1, TP.HCM, cách Nhà thờ Đức Bà chỉ 500m. Với phong cách thiết kế hiện đại kết hợp nét Á Đông truyền thống, khách sạn mang đến không gian nghỉ ngơi ấm cúng.</p>`,
        amenities: ['WiFi miễn phí', 'Bữa sáng buffet', 'Phòng gym', 'Dịch vụ giặt là', 'Lễ tân 24/7', 'Bãi đỗ xe'],
        roomTypes: [
            { name: 'Standard Double', size: '25m²', beds: '1 giường đôi', price: 450000, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop' },
            { name: 'Superior Twin', size: '30m²', beds: '2 giường đơn', price: 550000, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop' },
            { name: 'Deluxe Suite', size: '45m²', beds: '1 giường king', price: 800000, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop' }
        ],
        policies: ['Check-in: 14:00 | Check-out: 12:00', 'Hủy miễn phí trước 24h', 'Không hút thuốc trong phòng', 'Chấp nhận thẻ tín dụng']
    },
    'hoa-sen': {
        id: 'hoa-sen',
        name: 'Khách Sạn Hoa Sen',
        stars: 3,
        location: 'Quận 3, TP.HCM',
        price: 520000,
        priceOld: 680000,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop'
        ],
        rating: 3.5,
        reviews: 89,
        description: `<p>Khách sạn Hoa Sen nằm trên tuyến đường yên tĩnh tại Quận 3, phù hợp cho du khách muốn tận hưởng không gian bình yên giữa lòng thành phố.</p>`,
        amenities: ['WiFi miễn phí', 'Bữa sáng', 'Hồ bơi', 'Spa', 'Lễ tân 24/7', 'Quầy bar'],
        roomTypes: [
            { name: 'Standard', size: '22m²', beds: '1 giường đôi', price: 520000, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop' },
            { name: 'Deluxe', size: '35m²', beds: '1 giường king', price: 750000, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop' }
        ],
        policies: ['Check-in: 14:00 | Check-out: 12:00', 'Hủy miễn phí trước 48h', 'Không hút thuốc', 'Thẻ tín dụng / tiền mặt']
    },
    'muong-thanh': {
        id: 'muong-thanh',
        name: 'Mường Thanh Luxury',
        stars: 4,
        location: 'Đà Nẵng',
        price: 1200000,
        priceOld: 1600000,
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop'
        ],
        rating: 4.2,
        reviews: 235,
        description: `<p>Mường Thanh Luxury Đà Nẵng - chuỗi khách sạn cao cấp với view biển Mỹ Khê tuyệt đẹp. Thiết kế sang trọng, dịch vụ 4 sao chuẩn quốc tế.</p>`,
        amenities: ['WiFi miễn phí', 'Bữa sáng buffet', 'Hồ bơi vô cực', 'Spa & Sauna', 'Phòng gym', 'Bãi biển riêng', 'Nhà hàng', 'Quầy bar sân thượng'],
        roomTypes: [
            { name: 'Deluxe City View', size: '35m²', beds: '1 giường king', price: 1200000, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop' },
            { name: 'Deluxe Ocean View', size: '38m²', beds: '1 giường king', price: 1600000, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop' },
            { name: 'Executive Suite', size: '55m²', beds: '1 giường king + phòng khách', price: 2500000, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop' }
        ],
        policies: ['Check-in: 14:00 | Check-out: 12:00', 'Hủy miễn phí trước 72h', 'Không hút thuốc', 'Visa / Mastercard / JCB']
    },
    'liberty': {
        id: 'liberty',
        name: 'Liberty Central Saigon',
        stars: 4,
        location: 'Quận 1, TP.HCM',
        price: 1500000,
        priceOld: 1900000,
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop'
        ],
        rating: 4.5,
        reviews: 312,
        description: `<p>Liberty Central Saigon - vị trí đắc địa ngay trung tâm Quận 1, cạnh phố đi bộ Nguyễn Huệ. Thiết kế boutique sang trọng với rooftop bar tuyệt đẹp.</p>`,
        amenities: ['WiFi miễn phí', 'Bữa sáng buffet', 'Hồ bơi rooftop', 'Spa', 'Phòng gym', 'Nhà hàng', 'Rooftop Bar', 'Dịch vụ concierge'],
        roomTypes: [
            { name: 'Superior', size: '28m²', beds: '1 giường đôi', price: 1500000, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop' },
            { name: 'Deluxe', size: '35m²', beds: '1 giường king', price: 2000000, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop' },
            { name: 'Premium Suite', size: '50m²', beds: '1 giường king + sofa bed', price: 3200000, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop' }
        ],
        policies: ['Check-in: 15:00 | Check-out: 11:00', 'Hủy miễn phí trước 48h', 'Không hút thuốc', 'Tất cả thẻ quốc tế']
    },
    'vinpearl': {
        id: 'vinpearl',
        name: 'Vinpearl Resort & Spa',
        stars: 5,
        location: 'Nha Trang',
        price: 3200000,
        priceOld: 4000000,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop'
        ],
        rating: 4.9,
        reviews: 520,
        description: `<p>Vinpearl Resort & Spa Nha Trang - khu nghỉ dưỡng 5 sao đẳng cấp quốc tế với bãi biển riêng, hồ bơi vô cực và dịch vụ hoàn hảo.</p>`,
        amenities: ['WiFi miễn phí', 'Bữa sáng buffet cao cấp', 'Hồ bơi vô cực', 'Spa 5 sao', 'Phòng gym', 'Bãi biển riêng', '3 Nhà hàng', 'Kids club', 'Sân golf mini', 'Dịch vụ butler'],
        roomTypes: [
            { name: 'Deluxe Garden View', size: '40m²', beds: '1 giường king', price: 3200000, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop' },
            { name: 'Premium Ocean View', size: '45m²', beds: '1 giường king', price: 4500000, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop' },
            { name: 'Villa Pool Access', size: '80m²', beds: '1 giường king + bể bơi riêng', price: 8000000, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop' }
        ],
        policies: ['Check-in: 14:00 | Check-out: 12:00', 'Hủy miễn phí trước 7 ngày', 'Không hút thuốc', 'Tất cả phương thức thanh toán']
    },
    'intercontinental': {
        id: 'intercontinental',
        name: 'InterContinental Đà Nẵng',
        stars: 5,
        location: 'Đà Nẵng',
        price: 4500000,
        priceOld: 5800000,
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop'
        ],
        rating: 5.0,
        reviews: 687,
        description: `<p>InterContinental Đà Nẵng Sun Peninsula Resort - resort xa xỉ nhất Việt Nam, nằm trên bán đảo Sơn Trà với kiến trúc độc đáo giữa thiên nhiên.</p>`,
        amenities: ['WiFi miễn phí', 'Bữa sáng fine dining', '3 Hồ bơi', 'HARNN Heritage Spa', 'Phòng gym', 'Bãi biển riêng', '4 Nhà hàng', 'Câu lạc bộ trẻ em', 'Sân tennis', 'Butler 24/7'],
        roomTypes: [
            { name: 'Classic Room', size: '48m²', beds: '1 giường king', price: 4500000, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop' },
            { name: 'Terrace Suite', size: '70m²', beds: '1 giường king + phòng khách', price: 7500000, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop' },
            { name: 'Penthouse', size: '120m²', beds: 'Suite tổng thống', price: 15000000, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop' }
        ],
        policies: ['Check-in: 15:00 | Check-out: 12:00', 'Hủy miễn phí trước 14 ngày', 'Không hút thuốc', 'Tất cả phương thức thanh toán']
    }
};

// Helper: Format price
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

// Helper: Render stars
function renderStars(rating, max = 5) {
    let html = '';
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    for (let i = 0; i < full; i++) html += '<i class="fas fa-star"></i>';
    if (half) html += '<i class="fas fa-star-half-alt"></i>';
    for (let i = full + half; i < max; i++) html += '<i class="far fa-star"></i>';
    return html;
}
