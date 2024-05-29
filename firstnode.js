const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// Cấu hình tùy chọn CORS
const corsOptions = {
  origin: '*', // Cho phép tất cả các nguồn
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Chỉ cho phép các phương thức này
  allowedHeaders: ['Content-Type', 'Authorization'] // Chỉ cho phép các header này
};

app.use(cors(corsOptions));
app.options('*', cors());
app.use(express.json());

const accounts = [
  {
    "userId": "1",
    "email": "user1@gmail.com",
    "username": "user1",
    "password": "1",
    "role": "user",
    "id": "3f1d",
    "isEdit": false
  },
  {
    "userId": "2",
    "email": "user2@gmail.com",
    "username": "user2",
    "password": "2",
    "role": "user",
    "id": "1fc1",
    "isEdit": false
  },
  {
    "userId": "3",
    "email": "user3@gmail.com",
    "username": "user3",
    "password": "3",
    "role": "user",
    "id": "071a",
    "isEdit": false
  },
  {
    "userId": "4",
    "email": "user4@gmail.com",
    "username": "user4",
    "password": "4",
    "role": "user",
    "id": "ec66",
    "isEdit": false
  },
  {
    "userId": "6",
    "email": "user5@gmail.com",
    "username": "admin",
    "password": "admin",
    "role": "admin",
    "id": "abc6",
    "isEdit": false
  }
]

const products = [
  {
    "id": "1",
    "type": "phone",
    "description": "iPhone 15 Pro Max",
    "info": "Màn hình OLED, 6.7\", Super Retina XDR | iOS 17 | Camera Chính 48 MP & Phụ 12 MP | Apple A17 Pro 6 nhân | RAM 8GB | Dung lượng lưu trữ 256GB | 1 Nano SIM & 1 eSIM | Pin 4422 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
    "price": 29990000,
    "quantity": 99,
    "like": 2,
    "sold": 18,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "2",
    "type": "phone",
    "description": "iPhone 15 Pro",
    "info": "Màn hình OLED, 6.1\", Super Retina XDR | iOS 17 | Camera Chính 48 MP & Phụ 12 MP | Apple A17 Pro 6 nhân | RAM 8GB | Dung lượng lưu trữ 128GB | 1 Nano SIM & 1 eSIM | Pin 3274 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg",
    "price": 25990000,
    "quantity": 29,
    "like": 4,
    "sold": 8,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "3",
    "type": "phone",
    "description": "iPhone 15 Plus",
    "info": "Màn hình OLED, 6.7\", Super Retina XDR | iOS 17 | Camera Chính 48 MP & Phụ 12 MP | Apple A17 Pro 6 nhân | RAM 6GB | Dung lượng lưu trữ 128GB | 1 Nano SIM & 1 eSIM | Pin 4383 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
    "price": 23090000,
    "quantity": 90,
    "like": 17,
    "sold": 20,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "4",
    "type": "phone",
    "description": "iPhone 15",
    "info": "Màn hình OLED, 6.1\", Super Retina XDR | iOS 17 | Camera Chính 48 MP & Phụ 12 MP | Apple A17 Pro 6 nhân | RAM 6GB | Dung lượng lưu trữ 128GB | 1 Nano SIM & 1 eSIM | Pin 3349 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-hong-thumb-1-600x600.jpg",
    "price": 19890000,
    "quantity": 20,
    "like": 4,
    "sold": 2,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "5",
    "type": "phone",
    "info": "Màn hình Dynamic AMOLED 2X6.2\"Full HD+ | Android 14 | Camera sau: Chính 50 MP & Phụ 12 MP, 10 MP | Camera trước: 12 MP | Chip Exynos 2400 | RAM 8GB | Dung lượng lưu trữ 256GB | 2 Nano SIM hoặc 2 eSIM hoặc 1 Nano SIM + 1 eSIMHỗ trợ 5G | Pin 4000 mAh",
    "description": "Samsung Galaxy S24 5G",
    "image": "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png",
    "price": 21990000,
    "quantity": 20,
    "like": 1,
    "sold": 4,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "6",
    "type": "phone",
    "description": "Xiaomi Redmi 12 4GB",
    "info": "Màn hình IPS LCD 6.71\" HD+ | Android 14 | Camera sau: Chính 8 MP & Phụ 0.08 MP | Camera trước: 5 MP | Chip MediaTek Helio G36 8 nhân | RAM 3GB | Dung lượng lưu trữ 64GB | 2 Nano SIMHỗ trợ 4G | Pin 5000 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/307556/xiaomi-redmi-12-den-thumb-text-600x600.jpg",
    "price": 3490000,
    "quantity": 20,
    "like": 0,
    "sold": 2,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "7",
    "type": "phone",
    "description": "Xiaomi 13T Pro 5G",
    "info": "Màn hình AMOLED6.67\"Full HD+ | Android 13 | Camera sau: Chính 108 MP & Phụ 8 MP, 2 MP | Camera trước: 16 MP | Chip Snapdragon 685 8 nhân | RAM 8GB | Dung lượng lưu trữ 128GB | 2 Nano SIMHỗ trợ 4G | Pin 5000 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/309816/xiaomi-13t-pro-xanh-thumb-600x600.jpg",
    "price": 14990000,
    "quantity": 20,
    "like": 1,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "8",
    "type": "phone",
    "description": "iPhone 15 Pro 256GB",
    "info": "Màn hình OLED6.1\"Super Retina XDR | iOS 17 | Camera sau: Chính 48 MP & Phụ 12 MP, 12 MP | Camera trước: 12 MP | Chip Apple A17 Pro 6 nhân | RAM 8GB | Dung lượng lưu trữ 256GB | 1 Nano SIM & 1 eSIMHỗ trợ 5G | Pin 3274 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/303831/iphone-15-pro-blue-thumbnew-600x600.jpg",
    "price": 28490000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "9",
    "type": "phone",
    "description": "iPhone 15 128GB",
    "info": "Màn hình OLED6.1\"Super Retina XDR | iOS 17 | Camera sau: Chính 48 MP & Phụ 12 MP, 12 MP | Camera trước: 12 MP | Chip Apple A17 Pro 6 nhân | RAM 8GB | Dung lượng lưu trữ 256GB | 1 Nano SIM & 1 eSIMHỗ trợ 5G | Pin 3274 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-hong-thumb-1-600x600.jpg",
    "price": 19990000,
    "quantity": 20,
    "like": 0,
    "sold": 7,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "10",
    "type": "phone",
    "description": "OPPO A17",
    "info": "Màn hình IPS LCD6.56\"HD+ | Android 12 | Chính 50 MP & Phụ 0.3 MP | Camera trước: 5 MP | MediaTek Helio G35 | RAM 4GB | Dung lượng lưu trữ 64GB | 2 Nano SIMHỗ trợ 4G | Pin 5000 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/288401/oppo-a17-xanh-thumb-1-600x600.jpg",
    "price": 12990000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "11",
    "type": "phone",
    "description": "Vivo Y22s 8GB",
    "info": "Màn hình IPS LCD6.55\"HD+ | Android 12 | Chính 50 MP & Phụ 0.3 MP | Camera trước: 5 MP | MediaTek Helio G35 | RAM 4GB | Dung lượng lưu trữ 64GB | 2 Nano SIMHỗ trợ 4G | Pin 5000 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/285224/vivo-y22s-vang-thumb-600x600.jpg",
    "price": 5990000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "12",
    "type": "phone",
    "description": "iPhone 13 128GB",
    "info": "Màn hình OLED6.1\"Super Retina XDR | iOS 17 | Camera sau: Chính 48 MP & Phụ 12 MP, 12 MP | Camera trước: 12 MP | Chip Apple A17 Pro 6 nhân | RAM 8GB | Dung lượng lưu trữ 256GB | 1 Nano SIM & 1 eSIMHỗ trợ 5G | Pin 3274 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg",
    "price": 14490000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "13",
    "type": "phone",
    "description": "OPPO A57 128GB",
    "info": "Màn hình IPS LCD6.56\"HD+ | Android 12 | Chính 50 MP & Phụ 0.3 MP | Camera trước: 5 MP | MediaTek Helio G35 | RAM 4GB | Dung lượng lưu trữ 64GB | 2 Nano SIMHỗ trợ 4G | Pin 5000 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/285082/oppo-a57-vang-thumb-600x600.jpg",
    "price": 4390000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "14",
    "type": "phone",
    "description": "Realmi 11 Pro 5G",
    "info": "Màn hình IPS LCD6.56\"HD+ | Android 12 | Chính 50 MP & Phụ 0.3 MP | Camera trước: 5 MP | MediaTek Helio G35 | RAM 4GB | Dung lượng lưu trữ 64GB | 2 Nano SIMHỗ trợ 4G | Pin 5000 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/304222/realme-11-pro-5g-green-thumb-1-600x600.jpg",
    "price": 11990000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "15",
    "type": "phone",
    "description": "Vivo Y35",
    "info": "Màn hình IPS LCD6.56\"HD+ | Android 12 | Chính 50 MP & Phụ 0.3 MP | Camera trước: 5 MP | MediaTek Helio G35 | RAM 4GB | Dung lượng lưu trữ 64GB | 2 Nano SIMHỗ trợ 4G | Pin 5000 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/286697/vivo-y35-thumb-1-600x600.jpg",
    "price": 6990000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "16",
    "type": "phone",
    "description": "OPPO Reno10 5G 128GB",
    "info": "Màn hình IPS LCD6.56\"HD+ | Android 12 | Chính 50 MP & Phụ 0.3 MP | Camera trước: 5 MP | MediaTek Helio G35 | RAM 4GB | Dung lượng lưu trữ 64GB | 2 Nano SIMHỗ trợ 4G | Pin 5000 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/309722/oppo-reno10-blue-thumbnew-600x600.jpg",
    "price": 9390000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "17",
    "type": "phone",
    "description": "OPPO Find N2 Flip 5G",
    "info": "Màn hình IPS LCD6.56\"HD+ | Android 12 | Chính 50 MP & Phụ 0.3 MP | Camera trước: 5 MP | MediaTek Helio G35 | RAM 4GB | Dung lượng lưu trữ 64GB | 2 Nano SIMHỗ trợ 4G | Pin 5000 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/299034/oppo-n2-flip-den-thumb-600x600.jpg",
    "price": 18990000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "18",
    "type": "phone",
    "description": "iPhone 15 Pro Max 512GB",
    "info": "Màn hình OLED6.1\"Super Retina XDR | iOS 17 | Camera sau: Chính 48 MP & Phụ 12 MP, 12 MP | Camera trước: 12 MP | Chip Apple A17 Pro 6 nhân | RAM 8GB | Dung lượng lưu trữ 256GB | 1 Nano SIM & 1 eSIMHỗ trợ 5G | Pin 3274 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/305659/iphone-15-pro-max-black-thumbnew-600x600.jpg",
    "price": 36990000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "19",
    "type": "phone",
    "description": "iPhone 15 Pro Max 256GB",
    "info": "Màn hình OLED6.1\"Super Retina XDR | iOS 17 | Camera sau: Chính 48 MP & Phụ 12 MP, 12 MP | Camera trước: 12 MP | Chip Apple A17 Pro 6 nhân | RAM 8GB | Dung lượng lưu trữ 256GB | 1 Nano SIM & 1 eSIMHỗ trợ 5G | Pin 3274 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
    "price": 29990000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "20",
    "type": "phone",
    "description": "iPhone 15 Plus 256GB",
    "info": "Màn hình OLED6.1\"Super Retina XDR | iOS 17 | Camera sau: Chính 48 MP & Phụ 12 MP, 12 MP | Camera trước: 12 MP | Chip Apple A17 Pro 6 nhân | RAM 8GB | Dung lượng lưu trữ 256GB | 1 Nano SIM & 1 eSIMHỗ trợ 5G | Pin 3274 mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/42/303823/iphone-15-plus-256gb-xanh-thumb-600x600.jpg",
    "price": 26690000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "21",
    "type": "laptop",
    "description": "Asus Vivobook 16 X1605VA",
    "info": "CPU: i51335U1.3GHz | RAM: 16 GBDDR4 2 khe (8 GB onboard + 1 khe 8 GB)3200 MHz | Ổ cứng: 512 GB SSD NVMe PCIe | Màn hình: 16\"WUXGA (1920 x 1200) | Card màn hình: Card tích hợpIntel Iris Xe | Cổng kết nối: Jack tai nghe 3.5 mmHDMI2 x USB 3.21 x USB Type-C (chỉ hỗ trợ Power Delivery)1 x USB 2.0 | Hệ điều hành: Windows 11 Home SL | Thiết kế: Vỏ nhựa | Kích thước, khối lượng: Dài 358.7 mm - Rộng 249.5 mm - Dày 19.9 mm - Nặng 1.88 kg | Thời điểm ra mắt: 2023",
    "image": "https://cdn.tgdd.vn/Products/Images/44/309375/asus-vivobook-16-x1605va-i5-mb360w-thumb-laptop-600x600.jpg",
    "price": 15990000,
    "quantity": 30,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "22",
    "type": "laptop",
    "description": "Acer Aspire 3 A314 35 C3KS",
    "info": "CPU: CeleronN51001.1GHz | RAM: 4 GBDDR4 2 khe (1 khe 4 GB + 1 khe rời)Từ 2400 MHz (Hãng công bố) | Ổ cứng: Hỗ trợ khe cắm HDD SATA256 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1 TB) | Màn hình: 14\"HD (1366 x 768) | Card màn hình: Card tích hợpIntel UHD | Cổng kết nối: LAN (RJ45)Jack tai nghe 3.5 mmHDMI2 x USB 3.21 x USB 2.0 | Hệ điều hành: Windows 11 Home SL | Thiết kế: Vỏ nhựa | Kích thước, khối lượng: Dài 328 mm - Rộng 236 mm - Dày 19.9 mm - Nặng 1.45 kg | Thời điểm ra mắt: 2021",
    "image": "https://cdn.tgdd.vn/Products/Images/44/320870/acer-aspire-lite-15-51m-5542-i5-nxks5sv001-thumb-2-600x600.jpg",
    "price": 12290000,
    "quantity": 10,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "23",
    "type": "laptop",
    "description": "Laptop Apple MacBook Air 13",
    "info": "CPU: Apple M2100GB/s | RAM: 16 GB | Ổ cứng: 512 GB SSD | Màn hình: 13.6\"Liquid Retina (2560 x 1664) | Card màn hình: Card tích hợp10 nhân GPU | Cổng kết nối: MagSafe 3Jack tai nghe 3.5 mm2 x Thunderbolt 3 | Hệ điều hành: macOS | Thiết kế: Vỏ kim loại | Kích thước, khối lượng: Dài 304.1 mm - Rộng 215 mm - Dày 11.3 mm - Nặng 1.24 kg | Thời điểm ra mắt: 6/2022",
    "image": "https://cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gray-600x600.jpg",
    "price": 18790000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "24",
    "type": "watch",
    "description": "SDRIATICA 32 mm Nữ A3172",
    "info": "Đối tượng sử dụng: Nữ | Đường kính mặt: 33mm | Chất liệu mặt kính: Kính khoáng Mineral | Chất liệu dây: Hợp kim | Bộ máy: Pin (Quartz) | Chống nước: 3 ATM - Rửa tay, đi mưa | Thương hiệu: Thụy Sỹ | Hãng: ADRIATICA",
    "image": "https://cdn.tgdd.vn/Products/Images/7264/218893/adriatica-a3172-2121q-nu-100320-100306-600x600.jpg",
    "price": 2390000,
    "quantity": 99,
    "like": 0,
    "sold": 3,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "25",
    "type": "watch",
    "description": "CASIO 25 mm Nữ LQ-139AMV",
    "info": "Đối tượng sử dụng: Nữ | Đường kính mặt: 25mm | Chất liệu mặt kính: Nhựa | Chất liệu dây: Nhựa | Bộ máy: Pin (Quartz) | Chống nước: 3 ATM - Rửa tay, đi mưa | Thương hiệu: Nhật Bản | Hãng: CASIO",
    "image": "https://cdn.tgdd.vn/Products/Images/7264/199440/casio-lq-139amv-7b3ldf-den-thumb-600x600.jpg",
    "price": 290000,
    "quantity": 99,
    "like": 1,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "26",
    "type": "watch",
    "description": "ELIO 32 mm Nữ EL140-02",
    "info": "Đối tượng sử dụng: Nữ | Đường kính mặt: 32mm | Chất liệu mặt kính: Kính khoáng Mineral | Chất liệu dây: Da tổng hợp | Bộ máy: Pin (Quartz) | Chống nước: 3 ATM - Rửa tay, đi mưa | Thương hiệu: Việt Nam | Hãng: ELIO",
    "image": "https://cdn.tgdd.vn/Products/Images/7264/292904/elio-el140-02-nu-thumb-fix-600x600.jpg",
    "price": 344000,
    "quantity": 99,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "27",
    "type": "watch",
    "description": "G-SHOCK 40.4 mm Nữ",
    "info": "Đối tượng sử dụng: Nữ | Đường kính mặt: 40.4mm | Chất liệu mặt kính: Kính khoáng Mineral | Chất liệu dây: Nhựa | Bộ máy: Pin (Quartz) | Chống nước: 20 ATM - Bơi, lặn | Thương hiệu: Nhật Bản | Hãng: G-SHOCK",
    "image": "https://cdn.tgdd.vn/Products/Images/7264/283079/g-shock-gm-s2100pg-1a4dr-nu-thumb-fix-600x600.jpg",
    "price": 4190000,
    "quantity": 99,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "28",
    "type": "tablet",
    "description": "Samsung Galaxy Tab 9+",
    "info": "Màn hình: 10.9\"TFT LCD | Hệ điều hành: Android 13 | Chip: Exynos 1380 8 nhân | RAM: 6GB | Dung lượng lưu trữ 128GB | Camera sau: 8 MP | Camera trước: 12 MP | Pin: 8000mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/522/317623/samsung-galaxy-a9-plus-den-thumb-600x600.jpg",
    "price": 6390000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "29",
    "type": "tablet",
    "description": "OPPO Pad Neo WiFi",
    "info": "Màn hình: 11.4\"IPS LCD | Hệ điều hành: Android 13 | Chip: MediaTek Helio G99 | RAM: 6GB | Dung lượng lưu trữ 128GB | Camera sau: 8 MP | Camera trước: 12 MP | Pin: 8000mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/522/322613/oppo-pad-neo-6gb-thumb-1-600x600.jpg",
    "price": 6990000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "30",
    "type": "tablet",
    "description": "Honor Pad X9",
    "info": "Màn hình: 11.5\"TFT LCD | Hệ điều hành: Android 13 | Chip: Snapdragon 685 8 nhân | RAM: 4GB | Dung lượng lưu trữ 128GB | Camera sau: 8 MP | Camera trước: 12 MP | Pin: 7250mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg",
    "price": 4590000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  },
  {
    "id": "31",
    "type": "tablet",
    "description": "Lenovo Tab M9",
    "info": "Màn hình: 9\"IPS LCD | Hệ điều hành: Android 12 | Chip: MediaTek Helio G80 | RAM: 4GB | Dung lượng lưu trữ 64GB | Camera sau: 8 MP | Camera trước: 12 MP | Pin: 5100mAh",
    "image": "https://cdn.tgdd.vn/Products/Images/522/306923/lenovo-tab-m8-xanh-thumb-1-600x600.jpg",
    "price": 4490000,
    "quantity": 20,
    "like": 0,
    "sold": 0,
    "isLiked": false,
    "isEdit": false
  }
]

const carts = [
  {
    "id": "1",
    "type": "phone",
    "image": "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
    "description": "iPhone 15 Plus",
    "price": 23090000,
    "quantity": 2,
    "subtotal": 46180000,
    "deliveryOption": "",
    "delivery": 0,
    "total": 23090000,
    "isChecked": false,
    "user": "2"
  },
  {
    "id": "8",
    "type": "phone",
    "image": "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg",
    "description": "iPhone 15 Pro",
    "price": 25990000,
    "quantity": 2,
    "subtotal": 51980000,
    "deliveryOption": "",
    "delivery": 0,
    "total": 25990000,
    "isChecked": true,
    "user": "1"
  },
  {
    "id": "2",
    "type": "phone",
    "image": "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
    "description": "iPhone 15 Plus",
    "price": 23090000,
    "quantity": 1,
    "subtotal": 23090000,
    "deliveryOption": "",
    "delivery": 0,
    "total": 23090000,
    "isChecked": true,
    "user": "1"
  }
]

const orders = [
  {
    "id": "63",
    "quantity": 2,
    "code": "#613",
    "name": "iPhone 15 Plus",
    "total": 46180000,
    "phone": "0976123782",
    "address": "Bac Ninh",
    "status": "Cancel",
    "user": "user1"
  },
  {
    "id": "31",
    "quantity": 1,
    "code": "#398",
    "name": "CASIO 25 mm Nữ LQ-139AMV",
    "total": 290000,
    "phone": "0972734785",
    "address": "Ha Noi",
    "status": "Pending",
    "user": "user2"
  }
]

app.use((req, res, next) => {
  const [_, endpoint, id] = req.url.split('/');

  switch (endpoint) {
    case 'accounts':
      handleRequest(req, res, accounts, id);
      break;
    case 'products':
      handleRequest(req, res, products, id);
      break;
    case 'orders':
      handleRequest(req, res, orders, id);
      break;
    case 'carts':
      handleRequest(req, res, carts, id);
      break;
    default:
      res.status(404).json({ message: 'Endpoint not found' });
  }
});

function handleRequest(req, res, collection, id) {
  switch (req.method) {
    case 'GET':
      if (id) {
        const item = collection.find(i => i.id === id);
        if (item) {
          res.json(item);
        } else {
          res.status(404).json({ message: 'Item not found' });
        }
      } else {
        res.json(collection);
      }
      break;
    case 'POST':
      const newItem = req.body;
      collection.push(newItem);
      res.status(201).json(newItem);
      break;
    case 'PUT':
      if (id) {
        const index = collection.findIndex(i => i.id === id);
        if (index !== -1) {
          collection[index] = req.body;
          res.json(collection[index]);
        } else {
          res.status(404).json({ message: 'Item not found' });
        }
      }
      break;
    case 'DELETE':
      if (id) {
        const index = collection.findIndex(i => i.id === id);
        if (index !== -1) {
          collection.splice(index, 1);
          res.status(204).end();
        } else {
          res.status(404).json({ message: 'Item not found' });
        }
      }
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});