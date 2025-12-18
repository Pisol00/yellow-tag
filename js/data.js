// Yellow Tag Sale - Central Data Store

// Products Data
const productsData = [
    {
        id: 1,
        name: 'โต๊ะสำเร็จรูป',
        price: 100,
        discountPrice: 60,
        discount: 40,
        image: 'https://via.placeholder.com/400x400/4E5DB7/F8E291?text=Table',
        shop: 'Yellow Shop',
        shopRating: 4.8,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '2-3 วัน',
        description: 'โต๊ะสำเร็จรูปคุณภาพดี ทนทาน ใช้งานได้จริง',
        stock: 50,
        category: 'recommended'
    },
    {
        id: 2,
        name: 'ทาร์ตไข่',
        price: 80,
        discountPrice: 60,
        discount: 25,
        image: 'https://via.placeholder.com/400x400/4E5DB7/F8E291?text=Egg+Tart',
        shop: 'Bakery Shop',
        shopRating: 4.9,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '1-2 วัน',
        description: 'ทาร์ตไข่อบสดใหม่ทุกวัน หอม อร่อย',
        stock: 100,
        category: 'recommended'
    },
    {
        id: 3,
        name: 'ข้าวมันไก่',
        price: 60,
        discountPrice: 45,
        discount: 25,
        image: 'https://via.placeholder.com/400x400/E8B849/4E5DB7?text=Chicken+Rice',
        shop: 'Thai Food',
        shopRating: 4.7,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '1 วัน',
        description: 'ข้าวมันไก่สูตรต้นตำรับ รสชาติเข้มข้น',
        stock: 30,
        category: 'food'
    },
    {
        id: 4,
        name: 'เสื้อผ้ามือสอง',
        price: 200,
        discountPrice: 140,
        discount: 30,
        image: 'https://via.placeholder.com/400x400/4E5DB7/F8E291?text=Clothes',
        shop: 'Fashion Store',
        shopRating: 4.6,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '3-5 วัน',
        description: 'เสื้อผ้ามือสอง คุณภาพดี สภาพใหม่',
        stock: 20,
        category: 'recommended'
    },
    {
        id: 5,
        name: 'ข้าวซอย',
        price: 70,
        discountPrice: 56,
        discount: 20,
        image: 'https://via.placeholder.com/400x400/E8B849/4E5DB7?text=Khao+Soi',
        shop: 'Northern Food',
        shopRating: 4.8,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '1 วัน',
        description: 'ข้าวซอยสูตรเชียงใหม่ แกงเข้มข้น',
        stock: 25,
        category: 'food'
    },
    {
        id: 6,
        name: 'ก้วยเตี๋ยว',
        price: 50,
        discountPrice: 45,
        discount: 10,
        image: 'https://via.placeholder.com/400x400/E8B849/4E5DB7?text=Noodles',
        shop: 'Noodle House',
        shopRating: 4.5,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '1 วัน',
        description: 'ก้วยเตี๋ยวน้ำใส เนื้อนุ่ม น้ำซุปหอม',
        stock: 40,
        category: 'food'
    },
    {
        id: 7,
        name: 'ข้าวผัด',
        price: 60,
        discountPrice: 54,
        discount: 10,
        image: 'https://via.placeholder.com/400x400/E8B849/4E5DB7?text=Fried+Rice',
        shop: 'Thai Restaurant',
        shopRating: 4.6,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '1 วัน',
        description: 'ข้าวผัดไข่ รสชาติเข้มข้น',
        stock: 35,
        category: 'food'
    },
    {
        id: 8,
        name: 'เสื้อลายสก๊อต',
        price: 450,
        discountPrice: 405,
        discount: 10,
        image: 'https://via.placeholder.com/400x400/F4D483/4E5DB7?text=Dress',
        shop: 'Fashion Store',
        shopRating: 4.7,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '3-5 วัน',
        description: 'ชุดเสื้อและกระโปรงลายสก๊อต สไตล์เกาหลี',
        stock: 15,
        category: 'clothing'
    },
    {
        id: 9,
        name: 'เสื้อเชิตสีน้ำตาล',
        price: 350,
        discountPrice: 315,
        discount: 10,
        image: 'https://via.placeholder.com/400x400/F4D483/4E5DB7?text=Shirt',
        shop: 'Casual Wear',
        shopRating: 4.5,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '3-5 วัน',
        description: 'เสื้อเชิตสีน้ำตาล ผ้าคอตตอน สวมใส่สบาย',
        stock: 25,
        category: 'clothing'
    },
    {
        id: 10,
        name: 'เสื้อสวยน่ารักมีนบอล',
        price: 280,
        discountPrice: 252,
        discount: 10,
        image: 'https://via.placeholder.com/400x400/F4D483/4E5DB7?text=Cute+Top',
        shop: 'Cute Fashion',
        shopRating: 4.8,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '3-5 วัน',
        description: 'เสื้อสวยน่ารักตกแต่งด้วยมินิบอล',
        stock: 18,
        category: 'clothing'
    },
    {
        id: 11,
        name: 'เสื้อฟินลายสก๊อต',
        price: 320,
        discountPrice: 288,
        discount: 10,
        image: 'https://via.placeholder.com/400x400/F4D483/4E5DB7?text=Flannel',
        shop: 'Vintage Shop',
        shopRating: 4.6,
        delivery: 'จัดส่งฟรี',
        deliveryTime: '3-5 วัน',
        description: 'เสื้อฟินลายสก๊อต สไตล์วินเทจ',
        stock: 20,
        category: 'clothing'
    }
];

// Cart Data (Initial cart items)
const cartData = [
    {
        id: 1,
        productId: 1,
        quantity: 1,
        selected: true
    },
    {
        id: 2,
        productId: 2,
        quantity: 2,
        selected: true
    },
    {
        id: 3,
        productId: 3,
        quantity: 1,
        selected: true
    }
];

// Orders Data
const ordersData = [
    {
        id: 'YTS-2024-001',
        date: '18 ธันวาคม 2567',
        status: 'completed',
        statusText: 'สำเร็จ',
        items: [
            {
                productId: 1,
                quantity: 1
            }
        ],
        subtotal: 60,
        shipping: 20,
        discount: 0,
        total: 83
    },
    {
        id: 'YTS-2024-002',
        date: '17 ธันวาคม 2567',
        status: 'shipped',
        statusText: 'กำลังจัดส่ง',
        items: [
            {
                productId: 2,
                quantity: 2
            }
        ],
        subtotal: 120,
        shipping: 30,
        discount: 0,
        total: 150
    },
    {
        id: 'YTS-2024-003',
        date: '16 ธันวาคม 2567',
        status: 'processing',
        statusText: 'กำลังเตรียมสินค้า',
        items: [
            {
                productId: 3,
                quantity: 1
            }
        ],
        subtotal: 45,
        shipping: 20,
        discount: 0,
        total: 65
    },
    {
        id: 'YTS-2024-004',
        date: '15 ธันวาคม 2567',
        status: 'completed',
        statusText: 'สำเร็จ',
        items: [
            {
                productId: 4,
                quantity: 1
            }
        ],
        subtotal: 350,
        shipping: 30,
        discount: 0,
        total: 380
    },
    {
        id: 'YTS-2024-005',
        date: '14 ธันวาคม 2567',
        status: 'shipped',
        statusText: 'กำลังจัดส่ง',
        items: [
            {
                productId: 5,
                quantity: 2
            }
        ],
        subtotal: 240,
        shipping: 30,
        discount: 0,
        total: 270
    },
    {
        id: 'YTS-2024-006',
        date: '13 ธันวาคม 2567',
        status: 'processing',
        statusText: 'กำลังเตรียมสินค้า',
        items: [
            {
                productId: 6,
                quantity: 1
            }
        ],
        subtotal: 90,
        shipping: 20,
        discount: 0,
        total: 110
    },
    {
        id: 'YTS-2024-007',
        date: '12 ธันวาคม 2567',
        status: 'completed',
        statusText: 'สำเร็จ',
        items: [
            {
                productId: 7,
                quantity: 1
            }
        ],
        subtotal: 54,
        shipping: 20,
        discount: 0,
        total: 74
    }
];

// User Profile Data
const userProfile = {
    name: 'สมชาย ใจดี',
    email: 'somchai@example.com',
    phone: '098-765-4321',
    address: '123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110',
    avatar: 'https://via.placeholder.com/120x120/4E5DB7/F8E291?text=SC'
};

// Delivery Address Data (for checkout)
const deliveryAddress = {
    name: 'สมชาย ใจดี',
    phone: '098-765-4321',
    address: '123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110'
};

// Payment Methods Data
const paymentMethods = [
    {
        id: 'credit',
        name: 'บัตรเครดิต/เดบิต',
        icon: 'credit-card'
    },
    {
        id: 'bank',
        name: 'โอนผ่านธนาคาร',
        icon: 'bank'
    },
    {
        id: 'cod',
        name: 'เก็บเงินปลายทาง',
        icon: 'cash'
    }
];

// Banner Data (for home page)
const bannersData = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150/F4D483/4E5DB7?text=Sale',
        title: 'โปรโมชันลดแรง!',
        subtitle: 'แซงทุกเรื่องแพง!'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150/F4D483/4E5DB7?text=70%25',
        title: 'ลดสูงสุด 70%',
        subtitle: 'ทุกหมวดหมู่!'
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/150/F4D483/4E5DB7?text=Free',
        title: 'ฟรีค่าส่ง!',
        subtitle: 'สั่งขั้นต่ำ 299฿'
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/150/F4D483/4E5DB7?text=Free',
        title: 'สินค้าพิเศษ!',
        subtitle: 'ดีลเด็ดวันนี้'
    }
];

// Helper Functions
const dataHelpers = {
    // Get product by ID
    getProductById: function(productId) {
        return productsData.find(p => p.id === productId);
    },

    // Get order by ID
    getOrderById: function(orderId) {
        return ordersData.find(o => o.id === orderId);
    },

    // Get cart items with product details
    getCartItemsWithDetails: function() {
        return cartData.map(cartItem => {
            const product = this.getProductById(cartItem.productId);
            return {
                ...cartItem,
                product: product
            };
        });
    },

    // Get order with product details
    getOrderWithDetails: function(orderId) {
        const order = this.getOrderById(orderId);
        if (!order) return null;

        return {
            ...order,
            items: order.items.map(item => {
                const product = this.getProductById(item.productId);
                return {
                    ...item,
                    product: product
                };
            })
        };
    },

    // Calculate cart total
    calculateCartTotal: function(selectedOnly = true) {
        let total = 0;
        const items = selectedOnly
            ? cartData.filter(item => item.selected)
            : cartData;

        items.forEach(cartItem => {
            const product = this.getProductById(cartItem.productId);
            if (product) {
                total += product.discountPrice * cartItem.quantity;
            }
        });

        return total;
    },

    // Get selected cart items count
    getSelectedCartCount: function() {
        return cartData.filter(item => item.selected).length;
    },

    // Get total cart items count
    getTotalCartCount: function() {
        return cartData.length;
    }
};
