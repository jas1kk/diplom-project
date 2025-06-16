document.addEventListener('DOMContentLoaded', () => {
    // Функция для форматирования даты
    function formatDate(date) {
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];
        const day = date.getDate();
        const month = months[date.getMonth()];
        return `${day} ${month}`;
    }

    // Получаем текущую дату
    const today = new Date();

    // Вставляем дату в соответствующие элементы
    document.getElementById("pickupDate").textContent = formatDate(today);
    document.getElementById("deliveryDate").textContent = formatDate(today);

    // Получение ID товара из URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Пример базы данных товаров с артикулами и дополнительными изображениями
    const products = {
        1: {
            name: "Смартфон Apple iPhone 15",
            price: "299 999 ₸",
            oldPrice: "349 999 ₸",
            sku: "274392", // Артикул
            description: "Это высококачественный смартфон с выдающимися характеристиками. У него отличный экран, мощный процессор и камера с множеством функций для красивых снимков.",
            img: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_black_mu183_274392_1.webp", 
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_black_mu183_274392_1.webp",  // Первая фотка для карусели
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_black_mu183_274392_2.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_black_mu183_274392_3.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_black_mu183_274392_4.webp"
            ],
            colors: {
                black: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_black_mu183_274392_1.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_black_mu183_274392_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_black_mu183_274392_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_black_mu183_274392_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_black_mu183_274392_4.webp",
                    ]
                },
                blue: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_blue_mu1f3_274395_1.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_blue_mu1f3_274395_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_blue_mu1f3_274395_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_blue_mu1f3_274395_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_blue_mu1f3_274395_4.webp"
                    ]
                },
                green: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_green_mu1g3_274396_1.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_green_mu1g3_274396_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_green_mu1g3_274396_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_green_mu1g3_274396_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_plus_256gb_62566748_green_mu1g3_274396_4.webp"
                    ]
                }
            },
            payment: {
                credit: "5 000 ₸",
                installment: "12 500 ₸"  
            },
            specificationsPrimary: {
                modelYear: "2023",
                displaySize: "6.7",
                resolution: "1290x2796",
                matrixType: "OLED",
            },
            specificationsSecondary: {
                simCart: "1",
                simcartSize: "Nano-SIM",
                luminoSityMain: "800 кд/м²",
                stabilization: "Да",
                autofocus: "Да",
                videoResolution: "4K",
                megaPixels: "108 Мп",
                material: "Алюминий, Керамика, Стекло",
                features: "Apple Card, Apple Pay, Поддержка аксессуаров MagSafe, Система Neural Engine",
                sensors: "Акселерометр, Барометр, Датчик приближения, ID лица, Магнитометр, Датчик освещенности",
                protectionStandart: "IP68",
                displaySize: "6.1",
                resolution: "1290x2796",
                matrixType: "IPS",
                refreshRate: "60",
                processor: "Intel Core i9",
                frequency: "2.4 ГГц",
                operatingSystem: "iOS 17",
                cpuManufacturing: "Apple",
                processorModel: "A16 Bionic",
                processorCores: "6",
                memory: "128",
                ramMemory: "6",
                memoryCard: "Не поддерживает",
                height: "160.9",
                width: "77.8",
                thickness: "7.8",
                weight: "201",
                fastCharge: "Да",
                wirelessCharge: "Да",
                talkTime: "26",
                batteryCapacity: "6000mAh",
                connectors: "USB Type-C",
                interfaces: "Bluetooth, NFC, Wi-Fi",
                navigation: "BeiDou, Galileo, Глонасс, GPS, QZSS",
                communication: "2G, 3G (WCDMA/UMTS), 4G (LTE), 5G",
                series: "iPhone 15",
                equipment: "Документация, Кабель USB Type-C, Скрепка для извлечения SIM-карты",
                modelYear: "2023",
                luminoSityFront: "f/1.9",
                stabilizationFront: "Да",
                autofocusFront: "Да",
                videoResolutionFront: "4K",
                megapixelsFront: "12 Мп",
            }
        },
        2: {
            name: "Ноутбук Asus VivoBook 15",
            price: "319 990 ₸",
            sku: "847291", // Артикул
            description: "Ноутбук с высокой производительностью и отличным экраном для работы и игр.",
            img: "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_156_asus_vivobook_15_x1504za_bq146w_279954_tl.webp",
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_156_asus_vivobook_15_x1504za_bq146w_279954_tl.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_156_asus_vivobook_15_x1504za_bq146w_279954_2.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_156_asus_vivobook_15_x1504za_bq146w_279954_3.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_156_asus_vivobook_15_x1504za_bq146w_279954_4.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_156_asus_vivobook_15_x1504za_bq146w_279954_3.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_156_asus_vivobook_15_x1504za_bq146w_279954_3.webp",
            ],
            specificationsPrimary: {
                modelYear: "2022",
                displaySize: "15.6",
                resolution: "1920x1080 pixels",
                matrixType: "IPS",
            },
            specificationsSecondary: {
  videoGpu: "AMD Radeon RX Vega 8",
  videoGigabytes: "Отсутствует",
  videoTypes: "Встроенная",              
  modelYear: "2022",
  series: "Asus Vivobook 15",
  displaySize: "15.6",
  resolution: "2560x1600",
  matrixType: "IPS",
  refreshRate: "120 Гц",
  cpuManufacturing: "Intel",
  processorModel: "Intel Core i5-1235U",
  processorCores: "10",
  material: "Пластик",
  features: "ASUS SonicMaster, MyAsus",
  memory: "512 ГБ",
  ramMemory: "8 ГБ",
  memoryCard: "SSD",
  width: "359.7 мм",
  thickness: "19.9 мм",
  height: "232.5 мм",
  weight: "1.7 кг",
  fastCharge: "Есть",
  wirelessCharge: "Нет",
  batteryCapacity: "42 Вт·ч",
  talkTime: "До 6 часов",
  equipment: "Ноутбук, зарядное устройство, документация",
  operatingSystem: "Windows 11 Pro"
}
,
            payment: {
                credit: "5333.17 ₸",
                installment: "13332.92 ₸"  
            },
        },
        3: {
            name: "Телевизор LG 75\" 75UT80006LA LED UHD Smart Ashed Blue",
            price: "499 999 ₸",
            oldPrice: "749 990 ₸",
            sku: "347892",
            description: "Телевизор с превосходным изображением и широкими углами обзора.",
            img: "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_lg_43_43ut80006la_led_uhd_smart_ashed_blue_280896_01.webp",
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_lg_43_43ut80006la_led_uhd_smart_ashed_blue_280896_01.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_lg_43_43ut80006la_led_uhd_smart_ashed_blue_280896_02.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_lg_43_43ut80006la_led_uhd_smart_ashed_blue_280896_03.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_lg_43_43ut80006la_led_uhd_smart_ashed_blue_280896_04.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_lg_43_43ut80006la_led_uhd_smart_ashed_blue_280896_05.webp"
            ],
            specificationsPrimary: {
                modelYear: "2024",
                displaySize: "75 (190 см)",
                resolution: "3840x2160 Ultra HD (4K)",
                matrixType: "LED",
            },
            specificationsSecondary: {
            modelYear: "2024",
            displaySize: "75 (190 см)",
            resolution: "3840x2160 Ultra HD (4K)",
            matrixType: "LED",
            refreshRate: "60Hz",
            processor: "a5 Gen7 AI Processor 4K",
            operatingSystem: "webOS 24",
            features: "Технология 4K AI масштабирования, AI Управление яркостью, Технология ALLM, Функция Семейные настройки, Режим Filmmaker Mode, Режим HGiG для HDR-игр, Интеллектуальное распознавание голоса, Технологии улучшения время отклика в играх, Технология LG ThinQ, Функция Подключение USB-камеры, Работа с приложением Apple AirPlay 2",
            equipment: "400х400 мм",
            interfaces: "Батарейки (AA x 2 шт), Кабель питания, Пульт ДУ",
            thickness: "36.1",
            height: "102.7",
            width: "167.8",
            weight: "31.8"

            },
            payment: {
                credit: "8333.32 ₸",
                installment: "20833.29 ₸"  
            },

        },
        4: {
            name: "Холодильник LG GC-B459MLWM",
            price: "309 990 ₸",
            sku: "569234", // Артикул
            description: "Энергосберегающий холодильник с удобной системой хранения продуктов.",
            img: "https://api.technodom.kz/f3/api/v1/images/800/800/holodilnik_lg_gc_b459mlwm_278144_1.webp",
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/holodilnik_lg_gc_b459mlwm_278144_1.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/holodilnik_lg_gc_b459mlwm_278144_2.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/holodilnik_lg_gc_b459mlwm_278144_3.webp"
            ],
            specificationsPrimary: {
                modelYear: "2022",
                displaySize: "15.6 inches",
                resolution: "1920x1080 pixels",
                matrixType: "IPS",
            },
            specificationsSecondary: {
                modelYear: "2023",
                displaySize: "16 inches",
                resolution: "2560x1600 pixels",
                matrixType: "IPS",
                refreshRate: "120Hz",
                processor: "Intel Core i9",
                batteryCapacity: "6000mAh",
                storage: "1 TB SSD",
                operatingSystem: "Windows 11 Pro"
            }
        },
        5: {
            name: "Смартфон Apple iPhone 16 Pro",
            price: "729 999 ₸",
            oldPrice: "829 999 ₸",
            sku: "274392", // Артикул
            description: "Это высококачественный смартфон с выдающимися характеристиками. У него отличный экран, мощный процессор и камера с множеством функций для красивых снимков.",
            img: "https://api.technodom.kz/f3/api/v1/images/800/800/284637_1.webp", 
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/284637_1.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/284637_2.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/284637_3.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/284637_4.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/284637_5.webp"
            ],
            colors: {
                black: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/284649.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284649.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284649_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284649_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284649_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284649_4.webp"
                    ]
                },
                blue: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/284638_1.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284638_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284638_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284638_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284638_4.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284638_5.webp"
                    ]
                },
                green: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/284652.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284652.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284652_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284652_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284652_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/284652_4.webp",

                    ]
                }
            },
            payment: {
                credit: "12166.50 ₸",
                installment: "30416.25 ₸"  
            },
            specificationsPrimary: {
                modelYear: "2024",
                displaySize: "6.7",
                resolution: "1290x2796",
                matrixType: "OLED",
            },
            specificationsSecondary: {
                simCart: "1",
                simcartSize: "Nano-SIM",
                luminoSityMain: "800 кд/м²",
                stabilization: "Да",
                autofocus: "Да",
                videoResolution: "4K",
                megaPixels: "108 Мп",
                material: "Алюминий, Керамика, Стекло",
                features: "Apple Card, Apple Pay, Поддержка аксессуаров MagSafe, Система Neural Engine",
                sensors: "Акселерометр, Барометр, Датчик приближения, ID лица, Магнитометр, Датчик освещенности",
                protectionStandart: "IP68",
                displaySize: "6.1",
                resolution: "1290x2796",
                matrixType: "IPS",
                refreshRate: "60",
                processor: "Intel Core i9",
                frequency: "2.4 ГГц",
                operatingSystem: "iOS 18",
                cpuManufacturing: "Apple",
                processorModel: "A16 Bionic",
                processorCores: "6",
                memory: "128",
                ramMemory: "6",
                memoryCard: "Не поддерживает",
                height: "160.9",
                width: "77.8",
                thickness: "7.8",
                weight: "201",
                fastCharge: "Да",
                wirelessCharge: "Да",
                talkTime: "26",
                batteryCapacity: "6000mAh",
                connectors: "USB Type-C",
                interfaces: "Bluetooth, NFC, Wi-Fi",
                navigation: "BeiDou, Galileo, Глонасс, GPS, QZSS",
                communication: "2G, 3G (WCDMA/UMTS), 4G (LTE), 5G",
                series: "iPhone 16",
                equipment: "Документация, Кабель USB Type-C, Скрепка для извлечения SIM-карты",
                modelYear: "2024",
                luminoSityFront: "f/1.9",
                stabilizationFront: "Да",
                autofocusFront: "Да",
                videoResolutionFront: "4K",
                megapixelsFront: "12 Мп",
            }
        },
        6: {
            name: "Смартфон Samsung Galaxy S24 Ultra",
            price: "609 890 ₸",
            oldPrice: "769 890 ₸",
            sku: "274392", // Артикул
            description: "Это высококачественный смартфон с выдающимися характеристиками. У него отличный экран, мощный процессор и камера с множеством функций для красивых снимков.",
            img: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_1.webp", 
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_1.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_2.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_3.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_4.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_5.webp"
            ],
            colors: {
                black: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_1.webp",
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_1.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_2.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_3.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_4.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bztgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_gray_277514_5.webp"
            ]
                },
                blue: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzkgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_black_277515_1.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzkgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_black_277515_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzkgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_black_277515_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzkgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_black_277515_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzkgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_black_277515_4.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzkgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_black_277515_5.webp"
                    ]
                },
                green: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzvgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_violet_277513_1.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzvgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_violet_277513_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzvgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_violet_277513_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzvgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_violet_277513_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzvgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_violet_277513_4.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzvgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_violet_277513_5.webp",

                    ]
                }
            },
            payment: {
                credit: "12166.65 ₸",
                installment: "30416.63 ₸"  
            },
            specificationsPrimary: {
                modelYear: "2024",
                displaySize: "6.8",
                resolution: "3120x1440",
                matrixType: "Dynamic AMOLED 2X",
            },
            specificationsSecondary: {
    simCart: "2",
    simcartSize: "Nano-SIM и eSIM",
    luminoSityMain: "2600 кд/м² (пиковая)",
    stabilization: "Да (оптическая)",
    autofocus: "Да",
    videoResolution: "8K при 30 к/с, 4K при 60 к/с",
    megaPixels: "200 Мп (основная)",
    material: "Титан, Стекло (Gorilla Glass Armor)",
    features: "Поддержка S Pen, Samsung DeX, Ultra Wideband (UWB)",
    sensors: "Акселерометр, Гироскоп, Барометр, Датчик приближения, Освещенности, Сканер отпечатка пальца (в экране), Компас",
    protectionStandart: "IP68",
    displaySize: "6.8",
    resolution: "3120x1440 (QHD+)",
    matrixType: "Dynamic AMOLED 2X",
    refreshRate: "1–120 Гц (адаптивная)",
    processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy",
    frequency: "до 3.39 ГГц",
    operatingSystem: "Android 15",
    cpuManufacturing: "TSMC 4-нм",
    processorModel: "Snapdragon 8 Gen 3 (for Galaxy)",
    processorCores: "8",
    memory: "256 / 512 / 1000 ГБ (в зависимости от версии)",
    ramMemory: "12 ГБ",
    memoryCard: "Не поддерживает",
    height: "162.3",
    width: "79.0",
    thickness: "8.6",
    weight: "232",
    fastCharge: "Да (до 45 Вт)",
    wirelessCharge: "Да (до 15 Вт), обратная беспроводная зарядка",
    talkTime: "до 30 часов (зависит от условий)",
    batteryCapacity: "5000 мА·ч",
    connectors: "USB Type-C (USB 3.2)",
    interfaces: "Bluetooth 5.3, NFC, Wi-Fi 7",
    navigation: "GPS, ГЛОНАСС, Galileo, BeiDou, QZSS",
    communication: "2G, 3G, 4G (LTE), 5G",
    series: "Galaxy S24 Ultra",
    equipment: "Смартфон, Кабель USB Type-C, Скрепка для SIM, Документация",
    modelYear: "2024",
    luminoSityFront: "f/2.2",
    stabilizationFront: "Да",
    autofocusFront: "Да",
    videoResolutionFront: "4K при 60 к/с",
    megapixelsFront: "12 Мп"
}

        },
        7: {
            name: "Смартфон Samsung Galaxy S25 Ultra",
            price: "729 999 ₸",
            oldPrice: "829 999 ₸",
            sku: "274392", // Артикул
            description: "Это высококачественный смартфон с выдающимися характеристиками. У него отличный экран, мощный процессор и камера с множеством функций для красивых снимков.",
            img: "https://api.technodom.kz/f3/api/v1/images/800/800/288460_1.webp", 
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_1.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_2.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_3.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_4.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_5.webp"
            ],
            colors: {
                black: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/288460_1.webp",
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_1.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_2.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_3.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_4.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_5.webp"
            ],
                },
                blue: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/288456_1.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288456_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288456_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288456_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288456_4.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288456_5.webp"
                    ]
                },
                green: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/288458_1.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288458_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288458_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288458_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288458_4.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288458_5.webp",

                    ]
                }
            },
            payment: {
                credit: "12166.65 ₸",
                installment: "30416.63 ₸"  
            },
            specificationsPrimary: {
                modelYear: "2025",
                displaySize: "6.9",
                resolution: "3120x1440",
                matrixType: "Dynamic AMOLED",
            },
            specificationsSecondary: {
  simCart: "2",
  simcartSize: "Nano-SIM и eSIM",
  luminoSityMain: "2600 кд/м² (пиковая)",
  stabilization: "Да (оптическая)",
  autofocus: "Да",
  videoResolution: "8K при 30 к/с, 4K при 60 к/с",
  megaPixels: "200 Мп (основная)",
  material: "Титан, Стекло (Gorilla Glass Armor 2)",
  features: "Поддержка S Pen, Samsung DeX, Ultra Wideband (UWB), Galaxy AI",
  sensors: "Акселерометр, Гироскоп, Барометр, Датчик приближения, Освещенности, Сканер отпечатка пальца (в экране), Компас",
  protectionStandart: "IP68",
  displaySize: "6.9",
  resolution: "3120x1440 (QHD+)",
  matrixType: "Dynamic AMOLED",
  refreshRate: "1–120 Гц (адаптивная)",
  processor: "Qualcomm Snapdragon 8 Elite for Galaxy",
  frequency: "до 4.47 ГГц",
  operatingSystem: "Android 15",
  cpuManufacturing: "TSMC 3-нм",
  processorModel: "Snapdragon 8 Elite (for Galaxy)",
  processorCores: "8",
  memory: "128 / 256 / 512",
  ramMemory: "12 / 16 ГБ",
  memoryCard: "Не поддерживает",
  height: "162.8",
  width: "77.6",
  thickness: "8.2",
  weight: "218",
  fastCharge: "Да (до 45 Вт)",
  wirelessCharge: "Да (до 15 Вт), обратная беспроводная зарядка",
  talkTime: "до 31 часа (зависит от условий)",
  batteryCapacity: "5000 мА·ч",
  connectors: "USB Type-C (USB 3.2)",
  interfaces: "Bluetooth 5.3, NFC, Wi-Fi 7",
  navigation: "GPS, ГЛОНАСС, Galileo, BeiDou, QZSS",
  communication: "2G, 3G, 4G (LTE), 5G",
  series: "Galaxy S25 Ultra",
  equipment: "Смартфон, Кабель USB Type-C, Скрепка для SIM, Документация",
  modelYear: "2025",
  luminoSityFront: "f/2.2",
  stabilizationFront: "Да",
  autofocusFront: "Да",
  videoResolutionFront: "4K при 60 к/с",
  megapixelsFront: "12 Мп"
}


        },
            8: {
            name: "Смартфон Samsung Galaxy S25 Ultra",
            price: "729 999 ₸",
            oldPrice: "829 999 ₸",
            sku: "274392", // Артикул
            description: "Это высококачественный смартфон с выдающимися характеристиками. У него отличный экран, мощный процессор и камера с множеством функций для красивых снимков.",
            img: "https://api.technodom.kz/f3/api/v1/images/800/800/288460_1.webp", 
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_1.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_2.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_3.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_4.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_5.webp"
            ],
            colors: {
                black: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/288460_1.webp",
            gallery: [
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_1.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_2.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_3.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_4.webp",
                "https://api.technodom.kz/f3/api/v1/images/800/800/288460_5.webp"
            ],
                },
                blue: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/288456_1.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288456_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288456_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288456_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288456_4.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288456_5.webp"
                    ]
                },
                green: {
                    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/288458_1.webp",
                    gallery: [
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288458_1.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288458_2.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288458_3.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288458_4.webp",
                        "https://api.technodom.kz/f3/api/v1/images/800/800/288458_5.webp",

                    ]
                }
            },
            payment: {
                credit: "12166.65 ₸",
                installment: "30416.63 ₸"  
            },
            specificationsPrimary: {
                modelYear: "2025",
                displaySize: "6.9",
                resolution: "3120x1440",
                matrixType: "Dynamic AMOLED",
            },
            specificationsSecondary: {
  simCart: "2",
  simcartSize: "Nano-SIM и eSIM",
  luminoSityMain: "2600 кд/м² (пиковая)",
  stabilization: "Да (оптическая)",
  autofocus: "Да",
  videoResolution: "8K при 30 к/с, 4K при 60 к/с",
  megaPixels: "200 Мп (основная)",
  material: "Титан, Стекло (Gorilla Glass Armor 2)",
  features: "Поддержка S Pen, Samsung DeX, Ultra Wideband (UWB), Galaxy AI",
  sensors: "Акселерометр, Гироскоп, Барометр, Датчик приближения, Освещенности, Сканер отпечатка пальца (в экране), Компас",
  protectionStandart: "IP68",
  displaySize: "6.9",
  resolution: "3120x1440 (QHD+)",
  matrixType: "Dynamic AMOLED",
  refreshRate: "1–120 Гц (адаптивная)",
  processor: "Qualcomm Snapdragon 8 Elite for Galaxy",
  frequency: "до 4.47 ГГц",
  operatingSystem: "Android 15",
  cpuManufacturing: "TSMC 3-нм",
  processorModel: "Snapdragon 8 Elite (for Galaxy)",
  processorCores: "8",
  memory: "128 / 256 / 512",
  ramMemory: "12 / 16 ГБ",
  memoryCard: "Не поддерживает",
  height: "162.8",
  width: "77.6",
  thickness: "8.2",
  weight: "218",
  fastCharge: "Да (до 45 Вт)",
  wirelessCharge: "Да (до 15 Вт), обратная беспроводная зарядка",
  talkTime: "до 31 часа (зависит от условий)",
  batteryCapacity: "5000 мА·ч",
  connectors: "USB Type-C (USB 3.2)",
  interfaces: "Bluetooth 5.3, NFC, Wi-Fi 7",
  navigation: "GPS, ГЛОНАСС, Galileo, BeiDou, QZSS",
  communication: "2G, 3G, 4G (LTE), 5G",
  series: "Galaxy S25 Ultra",
  equipment: "Смартфон, Кабель USB Type-C, Скрепка для SIM, Документация",
  modelYear: "2025",
  luminoSityFront: "f/2.2",
  stabilizationFront: "Да",
  autofocusFront: "Да",
  videoResolutionFront: "4K при 60 к/с",
  megapixelsFront: "12 Мп"
}
        },
        9: {
  name: "Смартфон Samsung Galaxy Z Flip6",
  price: "559 890 ₸",
  oldPrice: "609 890 ₸",
  sku: "282049",
  description: "Складной смартфон с гибким 6.7-дюймовым Dynamic AMOLED 2X дисплеем, мощным процессором Snapdragon 8 Gen 3 и продвинутыми камерами. Поддерживает 5G, беспроводную зарядку и защищён по стандарту IPX8.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_1.webp",
      gallery: [
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_1.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_2.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_3.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_4.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_5.webp"
      ],
  colors: {
    silver: {
      mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_1.webp",
      gallery: [
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_1.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_2.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_3.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_4.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_silver_shadow_sm_f741bzshskz_282053_5.webp"
      ]
    },
    blue: {
      mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_blue_sm_f741blbhskz_282049_1.webp",
      gallery: [
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_blue_sm_f741blbhskz_282049_1.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_blue_sm_f741blbhskz_282049_2.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_blue_sm_f741blbhskz_282049_3.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_blue_sm_f741blbhskz_282049_4.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_blue_sm_f741blbhskz_282049_5.webp"
      ]
    },
    yellow: {
      mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_yellow_sm_f741bzyhskz_282055_1.webp",
      gallery: [
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_yellow_sm_f741bzyhskz_282055_1.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_yellow_sm_f741bzyhskz_282055_2.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_yellow_sm_f741bzyhskz_282055_3.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_yellow_sm_f741bzyhskz_282055_4.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_galaxy_z_flip6_125126712_yellow_sm_f741bzyhskz_282055_5.webp"
      ]
    },
  },
  
  payment: {
    credit: "9331.50 ₸",
    installment: "23328.75 ₸"
  },
  specificationsPrimary: {
    modelYear: "2024",
    displaySize: "6.7",
    resolution: "2640x1080",
    matrixType: "Dynamic AMOLED 2X"
  },
specificationsSecondary: {
    simCart: "2",
    simcartSize: "Nano-SIM и eSIM",
    luminoSityMain: "до 2600 кд/м² (пиковая)",
    stabilization: "Да (оптическая)",
    autofocus: "Да (Dual Pixel PDAF)",
    videoResolution: "4K при 30/60 к/с, 1080p при 60/120/240 к/с, 720p при 960 к/с",
    megaPixels: "50 Мп (широкоугольная) + 12 Мп (ультраширокоугольная)",
    material: "Armor Aluminum, Gorilla Glass Victus 2",
    features: "Galaxy AI, FlexCam, Flex Mode, Live Translate, Chat Assist, HDR10+, Always-On Display",
    sensors: "Акселерометр, Гироскоп, Барометр, Датчик приближения, Освещенности, Сканер отпечатка пальца (на боковой панели), Компас",
    protectionStandart: "IP48",
    displaySize: "6.7",
    resolution: "1080x2640",
    matrixType: "Dynamic AMOLED 2X",
    refreshRate: "1–120 Гц (адаптивная)",
    processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy",
    frequency: "до 3.39 ГГц",
    operatingSystem: "Android 14 (One UI 6.1.1)",
    cpuManufacturing: "4-нм",
    processorModel: "Snapdragon 8 Gen 3 (for Galaxy)",
    processorCores: "8",
    memory: "256 / 512 ГБ",
    ramMemory: "12 ГБ",
    memoryCard: "Не поддерживает",
    height: "165.1 мм (в разложенном виде)",
    width: "71.9 мм",
    thickness: "6.9 мм (в разложенном виде), 14.9 мм (в сложенном виде)",
    weight: "187 г",
    fastCharge: "Да (до 25 Вт)",
    wirelessCharge: "Да (до 15 Вт), обратная беспроводная зарядка (до 4.5 Вт)",
    talkTime: "до 29 часов (зависит от условий)",
    batteryCapacity: "4000 мА·ч",
    connectors: "USB Type-C (USB 3.2)",
    interfaces: "Bluetooth 5.3, NFC, Wi-Fi 6E, Wi-Fi 7",
    navigation: "GPS, ГЛОНАСС, Galileo, BeiDou, QZSS",
    communication: "2G, 3G, 4G (LTE), 5G",
    series: "Galaxy Z Flip6",
    equipment: "Смартфон, Кабель USB Type-C, Скрепка для SIM, Документация",
    modelYear: "2024",
    luminoSityFront: "f/2.2",
    stabilizationFront: "Нет",
    autofocusFront: "Нет",
    videoResolutionFront: "4K при 30 к/с",
    megapixelsFront: "10 Мп"
}
},
    10: {
  name: "Смартфон Samsung Galaxy S24 FE 8/128 ГБ Чёрный",
  price: "289 990 ₸",
  oldPrice: "349 890 ₸",
  sku: "285383",
  description: "Samsung Galaxy S24 FE — это мощный смартфон с 6.7-дюймовым Dynamic AMOLED 2X дисплеем, тройной камерой с основным модулем 50 Мп и поддержкой 5G. Оснащён процессором Exynos 2400e, 8 ГБ оперативной памяти и аккумулятором на 4700 мА·ч с поддержкой быстрой и беспроводной зарядки.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/285387_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/285387_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/285387_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/285387_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/285387_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/285387_5.webp"
  ],
  colors: {
    black: {
      mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/285387_1.webp",
      gallery: [
        "https://api.technodom.kz/f3/api/v1/images/800/800/285387_1.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285387_2.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285387_3.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285387_4.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285387_5.webp"
      ]
    },
    blue: {
      mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/285385_1.webp",
      gallery: [
        "https://api.technodom.kz/f3/api/v1/images/800/800/285385_1.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285385_2.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285385_3.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285385_4.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285385_5.webp"
      ]
    },
    mint: {
      mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/285383_1.webp",
      gallery: [
        "https://api.technodom.kz/f3/api/v1/images/800/800/285383_1.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285383_2.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285383_3.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285383_4.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/285383_5.webp"
      ]
    }
  },
  payment: {
    credit: "6664.83 ₸",
    installment: "16662.08 ₸"
  },
  specificationsPrimary: {
    modelYear: "2024",
    displaySize: "6.7",
    resolution: "2340x1080",
    matrixType: "Dynamic AMOLED 2X"
  },
specificationsSecondary: {
    simCart: "2",
    simcartSize: "Nano-SIM и eSIM",
    luminoSityMain: "до 1900 кд/м² (пиковая)",
    stabilization: "Да (оптическая)",
    autofocus: "Да",
    videoResolution: "4K при 30/60 к/с, 1080p при 30/60/120 к/с",
    megaPixels: "50 Мп (широкоугольная) + 12 Мп (ультраширокоугольная) + 8 Мп (телеобъектив с 3x оптическим зумом)",
    material: "Алюминиевая рамка, стекло (Gorilla Glass 5)",
    features: "Galaxy AI, ProVisual Engine, Circle to Search, Live Translate, HDR10+, Always-On Display",
    sensors: "Акселерометр, Гироскоп, Барометр, Датчик приближения, Освещенности, Сканер отпечатка пальца (в экране), Компас",
    protectionStandart: "IP68",
    displaySize: "6.7",
    resolution: "2340x1080",
    matrixType: "Dynamic AMOLED 2X",
    refreshRate: "1–120 Гц (адаптивная)",
    processor: "Samsung Exynos 2400e",
    frequency: "до 3.1 ГГц",
    operatingSystem: "Android 14 (One UI 6.1)",
    cpuManufacturing: "4-нм",
    processorModel: "Exynos 2400e",
    processorCores: "10",
    memory: "128 / 256 ГБ",
    ramMemory: "8 ГБ",
    memoryCard: "Не поддерживает",
    height: "162.3 мм",
    width: "77.6 мм",
    thickness: "8.1 мм",
    weight: "209 г",
    fastCharge: "Да (до 25 Вт)",
    wirelessCharge: "Нет",
    talkTime: "до 46 часов",
    batteryCapacity: "4700 мА·ч",
    connectors: "USB Type-C (USB 2.0)",
    interfaces: "Bluetooth 5.3, NFC, Wi-Fi 6",
    navigation: "GPS, ГЛОНАСС, Galileo, BeiDou, QZSS",
    communication: "2G, 3G, 4G (LTE), 5G",
    series: "Galaxy S24 FE",
    equipment: "Смартфон, Кабель USB Type-C, Скрепка для SIM, Документация",
    modelYear: "2024",
    luminoSityFront: "f/2.2",
    stabilizationFront: "Нет",
    autofocusFront: "Нет",
    videoResolutionFront: "4K при 30 к/с",
    megapixelsFront: "10 Мп"
}

    },
    11: {
  name: "Смартфон Samsung Galaxy A36 5G 8/128 ГБ Чёрный",
  price: "189 890 ₸",
  sku: "SM-A366EZKDSKZ",
  description: "Samsung Galaxy A36 5G — это стильный и производительный смартфон с 6.7-дюймовым Super AMOLED дисплеем, частотой обновления 120 Гц и поддержкой 5G. Оснащён процессором Snapdragon 6 Gen 3, 8 ГБ оперативной памяти и аккумулятором на 5000 мА·ч с поддержкой быстрой зарядки 45 Вт. Основная тройная камера с 50 Мп позволяет делать чёткие снимки, а фронтальная камера на 12 Мп поддерживает съёмку в 4K.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/289298_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/289298_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/289298_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/289298_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/289298_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/289298_5.webp"
  ],
  colors: {
    black: {
      mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/289298_1.webp",
      gallery: [
        "https://api.technodom.kz/f3/api/v1/images/800/800/289298_1.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289298_2.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289298_3.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289298_4.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289298_5.webp"
      ]
    },
    lavender: {
      mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/289294_1.webp",
      gallery: [
        "https://api.technodom.kz/f3/api/v1/images/800/800/289294_1.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289294_2.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289294_3.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289294_4.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289294_5.webp"
      ]
    },
    lime: {
      mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/289296_1.webp",
      gallery: [
        "https://api.technodom.kz/f3/api/v1/images/800/800/289296_1.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289296_2.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289296_3.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289296_4.webp",
        "https://api.technodom.kz/f3/api/v1/images/800/800/289296_5.webp"
      ]
    }
  },
  payment: {
    credit: "3164.83 ₸",
    installment: "7912.08 ₸"
  },
  specificationsPrimary: {
    modelYear: "2025",
    displaySize: "6.7",
    resolution: "2340x1080",
    matrixType: "Super AMOLED"
  },
specificationsSecondary: {
    simCart: "2",
    simcartSize: "Nano-SIM и eSIM",
    luminoSityMain: "до 1000 кд/м² (HBM), 1300 кд/м² (пиковая)",
    stabilization: "Да (оптическая)",
    autofocus: "Да",
    videoResolution: "4K при 30 к/с, 1080p при 60 к/с",
    megaPixels: "50 Мп (широкоугольная) + 8 Мп (ультраширокоугольная) + 5 Мп (макро)",
    material: "Пластик, Стекло (Gorilla Glass Victus+)",
    features: "Поддержка 5G, Always-On Display, IP67, Circle to Search, Object Eraser",
    sensors: "Акселерометр, Гироскоп, Датчик освещенности, Компас, Сканер отпечатка пальца (в экране), Барометр",
    protectionStandart: "IP67",
    displaySize: "6.6",
    resolution: "2340x1080",
    matrixType: "Super AMOLED",
    refreshRate: "120 Гц",
    processor: "Qualcomm Snapdragon 6 Gen 1",
    frequency: "до 2.2 ГГц",
    operatingSystem: "Android 14",
    cpuManufacturing: "4-нм",
    processorModel: "Snapdragon 6 Gen 1",
    processorCores: "8",
    memory: "128 / 256 ГБ",
    ramMemory: "8 ГБ",
    memoryCard: "Не поддерживает",
    height: "162.3 мм",
    width: "77.6 мм",
    thickness: "8.1 мм",
    weight: "202 г",
    fastCharge: "Да (до 25 Вт)",
    wirelessCharge: "Нет",
    talkTime: "до 29 часов",
    batteryCapacity: "5000 мА·ч",
    connectors: "USB Type-C (USB 2.0)",
    interfaces: "Bluetooth 5.3, NFC, Wi-Fi 6",
    navigation: "GPS, ГЛОНАСС, Galileo, BeiDou, QZSS",
    communication: "2G, 3G, 4G (LTE), 5G",
    series: "Galaxy A36",
    equipment: "Смартфон, Кабель USB Type-C, Скрепка для SIM, Документация",
    luminoSityFront: "f/2.2",
    stabilizationFront: "Нет",
    autofocusFront: "Нет",
    videoResolutionFront: "4K при 30 к/с",
    megapixelsFront: "13 Мп"
}
},
    12: {
  name: "Смартфон Vivo X200 16/512 ГБ Серый",
  price: "549 990 ₸",
  sku: "289712",
  description: "Vivo X200 — флагманский смартфон с 6.67-дюймовым AMOLED-дисплеем, частотой обновления 120 Гц и разрешением 1260x2800 пикселей. Оснащён процессором MediaTek Dimensity 9400, 16 ГБ оперативной памяти и аккумулятором на 5800 мА·ч с поддержкой быстрой зарядки 90 Вт. Тройная камера с модулями 50 Мп, 50 Мп и 200 Мп обеспечивает высококачественные снимки, а фронтальная камера на 32 Мп поддерживает съёмку в 4K.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512gb_grey_289712_main.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512gb_grey_289712_main.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512gb_grey_289712_03.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512gb_grey_289712_04.webp"
  ],
  colors: {
    grey: {
      mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512gb_grey_289712_main.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512gb_grey_289712_main.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512gb_grey_289712_03.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512gb_grey_289712_04.webp"
  ],
  },
    green: {
    mainImg: "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512_green_289713_main.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512_green_289713_main.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512_green_289713_01.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_vivo_x200_512_green_289713_02.webp"
  ],
    }
  },
  payment: {
    credit: "9166.50 ₸",
    installment: "22916.25 ₸"
  },
  specificationsPrimary: {
    modelYear: "2024",
    displaySize: "6.67",
    resolution: "1260x2800",
    matrixType: "AMOLED"
  },
  specificationsSecondary: {
    simCart: "2",
    simcartSize: "Nano-SIM и eSIM",
    luminoSityMain: "до 4500 кд/м² (пиковая)",
    stabilization: "Да (оптическая)",
    autofocus: "Да",
    videoResolution: "8K при 30 к/с, 4K при 60 к/с",
    megaPixels: "50 Мп (широкоугольная) + 50 Мп (ультраширокоугольная) + 200 Мп (перископическая)",
    material: "Стекло, Стекловолокно",
    features: "Поддержка 5G, Always-On Display, IP68/IP69, Dolby Vision, Zeiss оптика",
    sensors: "Акселерометр, Гироскоп, Датчик освещенности, Компас, Сканер отпечатка пальца (в экране), Датчик цветовой температуры",
    protectionStandart: "IP68/IP69",
    displaySize: "6.67",
    resolution: "1260x2800",
    matrixType: "AMOLED",
    refreshRate: "120 Гц",
    processor: "MediaTek Dimensity 9400",
    frequency: "до 3.6 ГГц",
    operatingSystem: "Android 15",
    cpuManufacturing: "3-нм",
    processorModel: "Dimensity 9400",
    processorCores: "8",
    memory: "512 ГБ",
    ramMemory: "16 ГБ",
    memoryCard: "Не поддерживает",
    height: "160.2 мм",
    width: "74.8 мм",
    thickness: "7.99 мм",
    weight: "202 г",
    fastCharge: "Да (до 90 Вт)",
    wirelessCharge: "Да (до 30 Вт), обратная беспроводная зарядка",
    talkTime: "до 31 часа",
    batteryCapacity: "5800 мА·ч",
    connectors: "USB Type-C",
    interfaces: "Bluetooth 5.4, NFC, Wi-Fi 7",
    navigation: "GPS, ГЛОНАСС, Galileo, BeiDou, QZSS, NavIC",
    communication: "2G, 3G, 4G (LTE), 5G",
    series: "Vivo X200",
    equipment: "Смартфон, Кабель USB Type-C, Скрепка для SIM, Документация, Чехол, Защитная плёнка",
    luminoSityFront: "f/2.0",
    stabilizationFront: "Да",
    autofocusFront: "Да",
    videoResolutionFront: "4K при 60 к/с",
    megapixelsFront: "32 Мп"
  }
},
    13: {
  name: "Телевизор Samsung 55\" UE55DU8000UXCE Crystal UHD 4K",
  price: "299 990 ₸",
  oldPrice: "409 990 ₸",
  sku: "280630",
  description: "Телевизор Samsung с диагональю 55 дюймов, разрешением Crystal UHD 4K, поддержкой HDR10+ и смарт-платформой Tizen. Отличное качество изображения и широкие углы обзора для комфортного просмотра.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_43_ue43du8000uxce_crystal_uhd_4k_280628_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_43_ue43du8000uxce_crystal_uhd_4k_280628_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_43_ue43du8000uxce_crystal_uhd_4k_280628_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_43_ue43du8000uxce_crystal_uhd_4k_280628_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_43_ue43du8000uxce_crystal_uhd_4k_280628_4.webp",
  ],
  specificationsPrimary: {
    modelYear: "2023",
    displaySize: "55 (140 см)",
    resolution: "3840x2160 Ultra HD (4K)",
    matrixType: "Crystal UHD",
  },
  specificationsSecondary: {
        modelYear: "2023",
    displaySize: "55 (140 см)",
    resolution: "3840x2160 Ultra HD (4K)",
    matrixType: "LED",
    refreshRate: "50 Гц",
    processor: "Crystal Processor 4K",
    operatingSystem: "Tizen",
    features: "HDR10+, PurColor, Motion Xcelerator, Ambient Mode, Smart TV",
    interfaces: "3x HDMI, 2x USB, Ethernet, Wi-Fi, Bluetooth",
    thickness: "57.1 мм",
    height: "71.6 см",
    width: "123.1 см",
    weight: "14.7 кг",
    equipment: "Пульт ДУ, Кабель питания, Крепление для стены"
  },
  payment: {
    credit: "4999.83 ₸",
    installment: "12499.58 ₸"
  }
},
14: {
  name: "Телевизор Hisense 55\" 55A6N UHD Smart Чёрный",
  price: "199 990 ₸",
  oldPrice: "279 990 ₸",
  sku: "283645",
  description: "Телевизор Hisense с диагональю 55 дюймов, разрешением UHD 4K, поддержкой HDR10+ и смарт-платформой VIDAA U. Отличное качество изображения с живыми цветами и удобный интерфейс.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_hisense_55_55a6n_uhd_smart_black_283645_01.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_hisense_55_55a6n_uhd_smart_black_283645_01.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_hisense_55_55a6n_uhd_smart_black_283645_02.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_hisense_55_55a6n_uhd_smart_black_283645_03.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_hisense_55_55a6n_uhd_smart_black_283645_04.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_hisense_55_55a6n_uhd_smart_black_283645_05.webp"
  ],
  specificationsPrimary: {
    modelYear: "2023",
    displaySize: "55 (140 см)",
    resolution: "3840x2160 Ultra HD (4K)",
    matrixType: "LED"
  },
  specificationsSecondary: {
    modelYear: "2023",
    displaySize: "55 (140 см)",
    resolution: "3840x2160 Ultra HD (4K)",
    matrixType: "LED",
    refreshRate: "60 Гц",
    processor: "Quad-core Processor",
    operatingSystem: "VIDAA U 5.0",
    features: "HDR10+, HLG, Dolby Audio, Game Mode, Wi-Fi, Bluetooth",
    equipment: "Пульт ДУ, Кабель питания, Крепление VESA 200x200 мм",
    interfaces: "3x HDMI, 2x USB, Ethernet, Wi-Fi, Bluetooth",
    thickness: "70 мм",
    height: "72.4 см",
    width: "123.4 см",
    weight: "13.9 кг"
  },
  payment: {
    credit: "3333.17 ₸",
    installment: "8332.92 ₸"
  }
},
15: {
  name: "Телевизор Samsung 75\" QE75QN900 Neo QLED 8K Smart Stainless Steel",
  price: "1 485 990 ₸",
  oldPrice: "4 249 990 ₸",
  sku: "263452",
  description: "Телевизор Samsung Neo QLED с диагональю 75 дюймов и разрешением 8K Ultra HD, обеспечивающий невероятную детализацию и яркость. Оснащён процессором Neo Quantum 8K, поддержкой HDR10+, Smart TV на базе Tizen и стильным корпусом из нержавеющей стали.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_75_qe75qn900_neoqled_8k_smart_stainless_steel_263452_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_75_qe75qn900_neoqled_8k_smart_stainless_steel_263452_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_75_qe75qn900_neoqled_8k_smart_stainless_steel_263452_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_75_qe75qn900_neoqled_8k_smart_stainless_steel_263452_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_75_qe75qn900_neoqled_8k_smart_stainless_steel_263452_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_75_qe75qn900_neoqled_8k_smart_stainless_steel_263452_5.webp"
  ],
  specificationsPrimary: {
    modelYear: "2022",
    displaySize: "75 (190 см)",
    resolution: "7680x4320 Ultra HD (8K)",
    matrixType: "Neo QLED"
  },
  specificationsSecondary: {
    modelYear: "2022",
    displaySize: "75 (190 см)",
    resolution: "7680x4320 Ultra HD (8K)",
    matrixType: "Neo QLED",
    refreshRate: "120 Гц",
    processor: "Neo Quantum Processor 8K",
    operatingSystem: "Tizen",
    features: "Quantum HDR 32X, Infinity One Design, Object Tracking Sound Pro, Multi View, SmartThings, Bixby, Alexa, Google Assistant",
    equipment: "Пульт ДУ, Кабель питания, Крепление VESA 400x400 мм",
    interfaces: "4x HDMI 2.1, 3x USB, Ethernet, Wi-Fi 6, Bluetooth 5.2, AV вход",
    thickness: "26.9 мм",
    height: "96.1 см",
    width: "167.1 см",
    weight: "39.6 кг"
  },
  payment: {
    credit: "24766.50 ₸",
    installment: "61916.25 ₸"
  }
},
16: {
  name: "Телевизор Sony 55\" KD55X81JR LED UHD Smart Black",
  price: "281 991 ₸",
  oldPrice: "399 990 ₸",
  sku: "245990",
  description: "Телевизор Sony с диагональю 55 дюймов, разрешением 4K UHD и технологией LED обеспечивает чёткое и яркое изображение. Встроенный Smart TV на базе Android с доступом к популярным приложениям и голосовым помощником Google Assistant.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/245990_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/245990_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/245990_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/245990_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/245990_4.webp",
  ],
  specificationsPrimary: {
    modelYear: "2023",
    displaySize: "55 (139 см)",
    resolution: "3840x2160 Ultra HD (4K)",
    matrixType: "LED"
  },
  specificationsSecondary: {
    modelYear: "2023",
    displaySize: "55 (139 см)",
    resolution: "3840x2160 Ultra HD (4K)",
    matrixType: "LED",
    refreshRate: "60 Гц",
    processor: "X1™ 4K HDR Processor",
    operatingSystem: "Android TV",
    features: "4K HDR, Dolby Vision, Google Assistant, Chromecast, Triluminos Pro",
    equipment: "Пульт ДУ, Кабель питания, Руководство пользователя",
    interfaces: "4x HDMI, 2x USB, Ethernet, Wi-Fi, Bluetooth",
    thickness: "7.5 см",
    height: "71.6 см",
    width: "123 см",
    weight: "17.6 кг"
  },
  payment: {
    credit: "4699.85 ₸",
    installment: "11749.63 ₸"
  }
},
17: {
  name: "Телевизор Samsung 85\" QE85Q60DAUXCE QLED 4K",
  price: "1 089 990 ₸",
  oldPrice: "1 599 990 ₸",
  sku: "280667",
  description: "Телевизор Samsung с диагональю 85 дюймов, технологией QLED и разрешением 4K UHD. Обеспечивает яркое и насыщенное изображение с поддержкой Quantum HDR и улучшенным игровым режимом. Встроенный Smart TV на базе Tizen OS с доступом к популярным приложениям и голосовым помощником.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_85_qe85q60dauxce_qled_4k_280667_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_85_qe85q60dauxce_qled_4k_280667_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_85_qe85q60dauxce_qled_4k_280667_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_85_qe85q60dauxce_qled_4k_280667_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_85_qe85q60dauxce_qled_4k_280667_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/televizor_samsung_85_qe85q60dauxce_qled_4k_280667_5.webp"
  ],
  specificationsPrimary: {
    modelYear: "2023",
    displaySize: "85 (215 см)",
    resolution: "3840x2160 Ultra HD (4K)",
    matrixType: "QLED"
  },
  specificationsSecondary: {
    modelYear: "2023",
    displaySize: "85 (215 см)",
    resolution: "3840x2160 Ultra HD (4K)",
    matrixType: "QLED",
    refreshRate: "60 Гц",
    processor: "Quantum Processor Lite 4K",
    operatingSystem: "Tizen OS",
    features: "Quantum HDR, Game Enhancer, Adaptive Picture, Multi View, Ambient Mode, Voice Assistant (Bixby, Alexa, Google Assistant)",
    equipment: "Пульт ДУ, Кабель питания, Руководство пользователя",
    interfaces: "4x HDMI, 2x USB, Ethernet, Wi-Fi, Bluetooth",
    thickness: "5.9 см",
    height: "108.6 см",
    width: "189.2 см",
    weight: "34.3 кг"
  },
  payment: {
    credit: "42222.14 ₸",
    installment: "105555.71 ₸"
  }
},
18: {
  name: "Игровой ноутбук Asus TUF Gaming A15 FA506NC-HN063",
  price: "399 990 ₸",
  oldPrice: "429 990 ₸",
  sku: "288281",
  description: "Мощный игровой ноутбук с 15.6-дюймовым IPS-дисплеем 144 Гц, процессором AMD Ryzen 5 7535HS, 16 ГБ оперативной памяти DDR5 и видеокартой NVIDIA GeForce RTX 3050 4 ГБ. Идеален для геймеров и профессионалов.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/288281_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/288281_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288281_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288281_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288281_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288281_5.webp"
  ],
  specificationsPrimary: {
    modelYear: "2023",
    displaySize: "15.6",
    resolution: "1920x1080",
    matrixType: "IPS"
  },
specificationsSecondary: {
  modelYear: "2023",
  series: "Asus TUF Gaming A15",
  cpuManufacturing: "AMD",
  processorModel: "AMD Ryzen 5 7535HS",
  processorCores: "6",
  frequency: "3.3 ГГц (до 4.55 ГГц)",
  videoGpu: "NVIDIA GeForce RTX 3050",
  videoGigabytes: "4 ГБ",
  videoTypes: "Дискретная",
  memoryCard: "SSD",
  memory: "512 ГБ SSD",
  ramMemory: "16 ГБ DDR5",
  operatingSystem: "Без ОС",
  displaySize: "15.6",
  resolution: "1920x1080",
  matrixType: "IPS",
  refreshRate: "144 Гц",
  material: "HD",
  features: "Подсветка клавиатуры",
  height: "256 мм",
  width: "359 мм",
  thickness: "22.8 мм",
  weight: "1.7 кг",
  equipment: "Ноутбук, адаптер питания, документация",
},


  payment: {
    credit: "12 877 ₸",
    installment: "16 583 ₸"
  }
},
19: {
  name: "Игровой Компьютер Neo Game 69 (Ci5 12400F/RTX 4060 8GB/16GB/SSD 1TB/H610M/G5 DUO Black)",
  price: "419 990 ₸",
  oldPrice: "430 990 ₸",
  sku: "288432",
  description: "Мощный игровой ПК с процессором Intel Core i5-12400F, видеокартой NVIDIA GeForce RTX 4060 8 ГБ, 16 ГБ оперативной памяти DDR4 и SSD на 1 ТБ. Идеален для игр в Full HD и 2K разрешении.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/288432_1a.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/288432_1a.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288432_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288432_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288432_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288432_5.webp"
  ],
  specificationsPrimary: {
    modelYear: "2023",
    videogpuMain: "NVIDIA GeForce RTX 4060",
    videogigabytesMain: "8 Гб",
    videotypesMain: "GDDR6",
    processorMain: "Intel Core i5-12th",
  },
specificationsSecondary: {
  modelYear: "2023",
  series: "Neo Game 69",
  cpuManufacturing: "Intel",
  processorModel: "Intel Core i5-12400F",
  processorCores: "6",
  frequency: "2.5 ГГц (до 4.4 ГГц)",
  videoGpu: "NVIDIA GeForce RTX 4060",
  videoGigabytes: "8 ГБ",
  videoTypes: "Дискретная",
  memoryCard: "SSD",
  memory: "1 ТБ SSD",
  ramMemory: "16 ГБ DDR4",
  operatingSystem: "Без ОС",
  material: "Металл/пластик",
  features: "RGB-подсветка",
  height: "410 мм",
  width: "180 мм",
  thickness: "390 мм",
  weight: "7.5 кг",
  equipment: "Системный блок, кабель питания, документация",
  motherboard: "ASRock H610M-HVS/M.2 R2.0"
},

  payment: {
    credit: "6999.83 ₸",
    installment: "17499.58 ₸"
  }
},
20: {
  name: "Ноутбук Apple MacBook Air 13 M2 256 Midnight 2024 MC7X4RU/A",
  price: "499 990 ₸",
  oldPrice: "694 990 ₸",
  sku: "286857",
  description: "Стильный и мощный ультратонкий ноутбук Apple MacBook Air с процессором Apple M2, 13.6-дюймовым Liquid Retina дисплеем, 8 ГБ оперативной памяти и 256 ГБ SSD. Идеален для работы, учебы и творчества.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/286857_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/286857_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/286857_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/286857_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/286857_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/286857_5.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    displaySize: "13.6",
    resolution: "2560x1664",
    matrixType: "Liquid Retina"
  },
  specificationsSecondary: {
    modelYear: "2024",
    series: "MacBook Air M2",
    cpuManufacturing: "Apple",
    processorModel: "Apple M2",
    processorCores: "8",
    frequency: "3.49 ГГц",
    videoGpu: "Apple M2 GPU",
    videoGigabytes: "10 (встроенная)",
    videoTypes: "Встроенная",
    memoryCard: "SSD",
    memory: "256 ГБ SSD",
    ramMemory: "8 ГБ LPDDR5",
    operatingSystem: "macOS Ventura",
    displaySize: "13.6",
    resolution: "2560x1664",
    matrixType: "Liquid Retina",
    refreshRate: "60 Гц",
    material: "Full HD",
    features: "True Tone, P3 цветовой охват, Touch ID",
    height: "15.6 мм",
    width: "304.1 мм",
    thickness: "221.6 мм",
    weight: "1.24 кг",
    equipment: "Ноутбук, адаптер питания, кабель USB-C, документация",
  },
  payment: {
    credit: "8333.17 ₸",
    installment: "20832.92 ₸"
  }
},
21: {
  name: "Ноутбук Huawei MateBook D16 i5 12450H / 8ГБ / 512SSD / 16.1 / Win11 (MitchellF-W5851)",
  price: "299 990 ₸",
  oldPrice: "359 990 ₸",
  sku: "277008",
  description: "Мощный ноутбук с 16.1-дюймовым IPS-дисплеем, процессором Intel Core i5-12450H, 8 ГБ оперативной памяти и 512 ГБ SSD. Идеален для работы и мультимедиа.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_16_huawei_matebook_d16_mitchellf_w5851_277008_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_16_huawei_matebook_d16_mitchellf_w5851_277008_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_16_huawei_matebook_d16_mitchellf_w5851_277008_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_16_huawei_matebook_d16_mitchellf_w5851_277008_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/noutbuk_16_huawei_matebook_d16_mitchellf_w5851_277008_4.webp"
  ],
  specificationsPrimary: {
    modelYear: "2023",
    displaySize: "16.1",
    resolution: "1920x1200",
    matrixType: "IPS"
  },
  specificationsSecondary: {
    modelYear: "2023",
    series: "Huawei MateBook D16",
    cpuManufacturing: "Intel",
    processorModel: "Intel Core i5-12450H",
    processorCores: "8",
    frequency: "1.5 ГГц (до 4.4 ГГц)",
    videoGpu: "Intel Iris Xe Graphics",
    videoGigabytes: "Динамическая из оперативной памяти",
    videoTypes: "Встроенная",
    memoryCard: "SSD",
    memory: "512 ГБ SSD",
    ramMemory: "8 ГБ LPDDR4x",
    operatingSystem: "Windows 11 Home",
    displaySize: "16.1",
    resolution: "1920x1200",
    matrixType: "IPS",
    refreshRate: "60 Гц",
    material: "Алюминий",
    features: "Сканер отпечатков пальцев, цифровой блок на клавиатуре",
    height: "18.4 мм",
    width: "357 мм",
    thickness: "249 мм",
    weight: "1.7 кг",
    connectors: "1x USB 2.0, 1x USB 3.2 Gen 1, 1x USB Type-C, 1x HDMI, комбинированный аудиоразъём",
    interfaces: "Wi-Fi 5, Bluetooth 5.0",
    communication: "LAN, Wi-Fi, Bluetooth",
    equipment: "Ноутбук, адаптер питания, документация"
  },
  payment: {
    credit: "4999.83 ₸",
    installment: "12499.58 ₸"
  }
},
22: {
  name: "Игровой Компьютер Neo Game 68 (Ci5 12400F/RTX 3060 12GB/16GB/SSD 1TB/H610M Crystal Z1 Black)",
  price: "379 990 ₸",
  oldPrice: "390 990 ₸",
  sku: "288431",
  description: "Мощный игровой ПК с процессором Intel Core i5-12400F, видеокартой NVIDIA GeForce RTX 3060 12 ГБ, 16 ГБ оперативной памяти DDR4 и SSD на 1 ТБ. Отличный выбор для игр в Full HD и 2K разрешении.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/288431_1a.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/288431_1a.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288431_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288431_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288431_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/288431_5.webp"
  ],
  specificationsPrimary: {
    modelYear: "2023",
    videogpuMain: "NVIDIA GeForce RTX 3060",
    videogigabytesMain: "12 ГБ",
    videotypesMain: "GDDR6",
    processorMain: "Intel Core i5-12th",
  },
  specificationsSecondary: {
    modelYear: "2023",
    series: "Neo Game 68",
    cpuManufacturing: "Intel",
    processorModel: "Intel Core i5-12400F",
    processorCores: "6",
    frequency: "2.5 ГГц (до 4.4 ГГц)",
    videoGpu: "NVIDIA GeForce RTX 3060",
    videoGigabytes: "12 ГБ",
    videoTypes: "Дискретная",
    memoryCard: "SSD",
    memory: "1 ТБ SSD",
    ramMemory: "16 ГБ DDR4",
    operatingSystem: "Без ОС",
    material: "Металл/пластик",
    features: "RGB-подсветка",
    height: "410 мм",
    width: "180 мм",
    thickness: "390 мм",
    weight: "7.5 кг",
    equipment: "Системный блок, кабель питания, документация",
    motherboard: "ASRock H610M-HVS/M.2 R2.0"
  },
  payment: {
    credit: "6333.17 ₸",
    installment: "15832.92 ₸"
  }
},
23: {
  name: "Стиральная машина Samsung WW80AGAS26AELD",
  price: "234 990 ₸",
  oldPrice: "264 990 ₸",
  sku: "272132",
  description: "Стиральная машина с фронтальной загрузкой до 8 кг, инверторным двигателем, технологией Eco Bubble и функцией обработки паром. Обеспечивает эффективную и бережную стирку с низким уровнем шума.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26aeld_272132_10.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26aeld_272132_10.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26aeld_272132_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26aeld_272132_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26aeld_272132_1.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    loadCapacity: "8 кг",
    spinSpeed: "1200 об/мин",
    motorType: "Инверторный",
  },
  specificationsSecondary: {
    height: "850 мм",
    width: "600 мм",
    thickness: "450 мм",
    weight: "55 кг",
    specialProgram: "Быстрая стирка, Цветные вещи, Деликатная стирка, Очистка барабана, Эко хлопок, Экономичная стирка, Гигиеничная, Хлопок, Постельное белье, Полоскание + отжим, Синтетика, Отжим/Слив, Верхняя одежда",
    obrabotkaParom: "Да",
    features: "AquaProtect, Bubble Soak, Технология Eco Bubble, Функция Пар, Очистка барабана, Быстрая стирка, Функция Smart Check, Volt Control"
  },
  payment: {
    credit: "3916.50 ₸",
    installment: "9791.25 ₸"
  }
},
24: {
  name: "Стиральная машина LG F2V5PS2S",
  price: "259 990 ₸",
  oldPrice: "274 990 ₸",
  sku: "275030",
  description: "Стиральная машина с фронтальной загрузкой до 8 кг, инверторным двигателем с прямым приводом, технологией AI DD и функцией обработки паром. Обеспечивает эффективную и бережную стирку с низким уровнем шума.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_lg_f2v5ps2s_275030_1a.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_lg_f2v5ps2s_275030_1a.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_lg_f2v5ps2s_275030_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_lg_f2v5ps2s_275030_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_lg_f2v5ps2s_275030_1.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    loadCapacity: "8 кг",
    spinSpeed: "1200 об/мин",
    motorType: "Инверторный",
  },
  specificationsSecondary: {
    height: "850 мм",
    width: "600 мм",
    thickness: "475 мм",
    weight: "60 кг",
    specialProgram: "Бесшумная стирка, Быстрая стирка, Деликатная стирка, Детские вещи, Очистка барабана, Гипоаллергенная стирка, Хлопок, Моя программа, Повседневная, Шерсть, Спортивная одежда, Стирка пуховых изделий, Стирка смешанных тканей",
    obrabotkaParom: "Да",
    features: "AI DD, 6 Motion DD, Управление со смартфона (LG ThinQ), Функция дозагрузки, Smart Diagnosis, Защита от детей, Контроль дисбаланса, Отсрочка запуска, Контроль за уровнем пены"
  },
  payment: {
    credit: "4333.17 ₸",
    installment: "10832.92 ₸"
  }
},
25: {
  name: "Стиральная машина Toshiba TW-BL70A2UZ(WK)",
  price: "154 990 ₸",
  oldPrice: "179 990 ₸",
  sku: "265061",
  description: "Компактная стиральная машина с фронтальной загрузкой до 6 кг, инверторным двигателем, пузырьковой системой стирки и функцией обработки паром. Обеспечивает эффективную и бережную стирку с низким уровнем шума.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_toshiba_tw_bl70a2uzwk_265061_7.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_toshiba_tw_bl70a2uzwk_265061_7.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_toshiba_tw_bl70a2uzwk_265061_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_toshiba_tw_bl70a2uzwk_265061_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_toshiba_tw_bl70a2uzwk_265061_1.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    loadCapacity: "6 кг",
    spinSpeed: "1200 об/мин",
    motorType: "Инверторный",
  },
  specificationsSecondary: {
    height: "850 мм",
    width: "595 мм",
    thickness: "440 мм",
    weight: "56 кг",
    specialProgram: "Быстрая стирка, Очистка барабана, Эко, Гипоаллергенная стирка, Моя программа, Отжим, Постельное белье, Шерсть, Стирка смешанных тканей, Холодная стирка",
    obrabotkaParom: "Да",
    features: "Пузырьковая стирка, Обработка паром, Контроль дисбаланса, Отложенный старт, Предварительная стирка, Режим таймера, Выбор скорости отжима, Wi-Fi управление, Защита от детей"
  },
  payment: {
    credit: "2583.17 ₸",
    installment: "6457.92 ₸"
  }
},
26: {
  name: "Стиральная машина Samsung WW80AGAS26AXLD",
  price: "239 990 ₸",
  oldPrice: "269 990 ₸",
  sku: "272131",
  description: "Стиральная машина с фронтальной загрузкой до 8 кг, инверторным двигателем, технологией Eco Bubble и функцией обработки паром. Обеспечивает эффективную и бережную стирку с низким уровнем шума.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26axld_272131_4.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26axld_272131_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26axld_272131_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26axld_272131_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26axld_272131_1.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    loadCapacity: "8 кг",
    spinSpeed: "1200 об/мин",
    motorType: "Инверторный",
  },
  specificationsSecondary: {
    height: "410 мм",
    width: "180 мм",
    thickness: "390 мм",
    weight: "7.5 кг",
    specialProgram: "Быстрая стирка, Цветные вещи, Очистка барабана, Эко, Гипоаллергенная стирка, Хлопок, Микс, Постельное белье, Предварительная стирка, Полоскание + отжим, Шерсть, Синтетика, Отжим/Слив, Верхняя одежда",
    obrabotkaParom: "Да",
    features: "AquaProtect, Bubble Soak, Технология Eco Bubble, Функция Пар, Очистка барабана, Быстрая стирка, Функция Smart Check, Volt Control"
  },
  payment: {
    credit: "3999.83 ₸",
    installment: "9999.58 ₸"
  }
},
26: {
  name: "Стиральная машина Samsung WW80AGAS26AXLD",
  price: "239 990 ₸",
  oldPrice: "269 990 ₸",
  sku: "612218",
  description: "Узкая стиральная машина с фронтальной загрузкой до 8 кг, инверторным двигателем, EcoBubble и функцией пара. Обеспечивает эффективную стирку с бережным отношением к ткани и сниженным энергопотреблением.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26axld_272131_4.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26axld_272131_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26axld_272131_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26axld_272131_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_samsung_ww80agas26axld_272131_1.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    loadCapacity: "8 кг",
    spinSpeed: "1200 об/мин",
    motorType: "Инверторный"
  },
  specificationsSecondary: {
    height: "850 мм",
    width: "600 мм",
    thickness: "450 мм",
    weight: "55 кг",
    specialProgram: "Быстрая стирка, Эко стирка, Хлопок, Синтетика, Шерсть, Постельное белье, Полоскание + отжим, Очистка барабана, Антиаллергенная стирка, Темные вещи",
    obrabotkaParom: "Да",
    features: "EcoBubble, Отложенный старт, Предварительная стирка, Защита от детей, Очистка барабана, Контроль пенообразования, Smart Check"
  },
  payment: {
    credit: "3999.83 ₸",
    installment: "9999.58 ₸"
  }
},
27: {
  name: "Стиральная машина Ava WMW-7000",
  price: "114 990 ₸",
  oldPrice: "119 990 ₸",
  sku: "276762",
  description: "Компактная стиральная машина с фронтальной загрузкой до 7 кг, коллекторным двигателем, LED-индикацией и широким набором программ. Обеспечивает эффективную и бережную стирку с низким уровнем шума.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_ava_wmw_7000_276762_4.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_ava_wmw_7000_276762_4.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_ava_wmw_7000_276762_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_ava_wmw_7000_276762_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/stiralnaya_mashina_ava_wmw_7000_276762_1.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    loadCapacity: "7 кг",
    spinSpeed: "1000 об/мин",
    motorType: "Коллекторный"
  },
  specificationsSecondary: {
    height: "850 мм",
    width: "595 мм",
    thickness: "470 мм",
    weight: "53 кг",
    specialProgram: "Быстрая стирка, Деликатная стирка, Гипоаллергенная стирка, Интенсивная стирка, Хлопок, Отжим, Постельное белье, Полоскание + отжим, Рубашки, Шерсть, Синтетика, Спортивная одежда, Стирка смешанных тканей, Темные вещи",
    obrabotkaParom: "Нет",
    features: "Беззвучный режим, Очистка барабана, Отложенный старт, Предварительная стирка, Выбор скорости отжима, Выбор температуры стирки, Защита от детей"
  },
  payment: {
    credit: "1916.50 ₸",
    installment: "4791.25 ₸"
  }
},
28: {
  name: "Холодильник LG GC-B459MLWM",
  price: "309 990 ₸",
  oldPrice: "314 990 ₸",
  sku: "278144",
  description: "Двухкамерный холодильник с нижней морозильной камерой, полезным объемом 341 л, инверторным компрессором и технологиями DoorCooling+ и LinearCooling. Обеспечивает равномерное охлаждение и длительное сохранение свежести продуктов.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/holodilnik_lg_gc_b459mlwm_278144_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/holodilnik_lg_gc_b459mlwm_278144_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/holodilnik_lg_gc_b459mlwm_278144_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/holodilnik_lg_gc_b459mlwm_278144_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/holodilnik_lg_gc_b459mlwm_278144_4.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    fridgeType: "Двухкамерный",
    volumeFridgemain: "341 л",
    controlType: "Электромеханический",
    defrostingSystem: "No Frost"
  },
  specificationsSecondary: {
    height: "1860 мм",
    width: "595 мм",
    thickness: "682 мм",
    weight: "70 кг",
    quantityPolok: "3",
    materialPolok: "Стекло",
    volumeFridge: "234 л",
    systemFridge: "No Frost",
    numberSections: "3",
    volumeFrezzer: "107 л",
    systemFrezzer: "No Frost"
  },
  payment: {
    credit: "5166.50 ₸",
    installment: "12916.25 ₸"
  }
},
29: {
  name: "Холодильник AVA TFDF-220MW",
  price: "99 990 ₸",
  oldPrice: "129 990 ₸",
  sku: "276429",
  description: "Компактный двухкамерный холодильник с верхней морозильной камерой, полезным объемом 204 л, механическим управлением и системой размораживания Low Frost. Идеален для небольших кухонь и обеспечивает надежное хранение продуктов.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/kholodilnik_ava_tfdf_220mw_276429_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/kholodilnik_ava_tfdf_220mw_276429_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/kholodilnik_ava_tfdf_220mw_276429_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/kholodilnik_ava_tfdf_220mw_276429_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/kholodilnik_ava_tfdf_220mw_276429_4.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    fridgeType: "Двухкамерный",
    volumeFridgemain: "204 л",
    controlType: "Механический",
    defrostingSystem: "Low Frost"
  },
  specificationsSecondary: {
    height: "1430 мм",
    width: "550 мм",
    thickness: "550 мм",
    weight: "Не указано",
    quantityPolok: "3",
    materialPolok: "Стекло",
    volumeFridge: "163 л",
    systemFridge: "Ручная",
    numberSections: "2",
    volumeFrezzer: "41 л",
    systemFrezzer: "Low Frost"
  },
  payment: {
    credit: "1666.50 ₸",
    installment: "4166.25 ₸"
  }
},
30: {
  name: "Холодильник Samsung RS63R5571SL",
  price: "649 990 ₸",
  oldPrice: "809 990 ₸",
  sku: "148465",
  description: "Трехдверный холодильник Side-by-Side с полезным объемом 634 л, инверторным компрессором, системой охлаждения No Frost и встроенным льдогенератором. Обеспечивает равномерное охлаждение и длительное сохранение свежести продуктов.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/13817018449950.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/13817018449950.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/13817019203614.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/13817020055582.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/13817020645406.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    fridgeType: "Side-by-Side",
    volumeFridgemain: "634 л",
    controlType: "Электронный",
    defrostingSystem: "No Frost"
  },
  specificationsSecondary: {
    height: "1780 мм",
    width: "912 мм",
    thickness: "716 мм",
    weight: "103 кг",
    quantityPolok: "3",
    materialPolok: "Закаленное стекло",
    volumeFridge: "405 л",
    systemFridge: "No Frost",
    numberSections: "2",
    volumeFrezzer: "229 л",
    systemFrezzer: "No Frost"
  },
  payment: {
    credit: "10833.17 ₸",
    installment: "27082.92 ₸"
  }
},
31: {
  name: "Морозильная камера AVA CFR-300W",
  price: "118 990 ₸",
  oldPrice: "169 990 ₸",
  sku: "276422",
  description: "Морозильный ларь с полезным объемом 293 л, механическим управлением, классом энергопотребления A++ и системой Low Frost. Идеален для хранения большого количества продуктов при стабильной температуре.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/morozilnik_ava_cfr_300w_276422_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/morozilnik_ava_cfr_300w_276422_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/morozilnik_ava_cfr_300w_276422_2.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/morozilnik_ava_cfr_300w_276422_3.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/morozilnik_ava_cfr_300w_276422_4.webp"
  ],
  specificationsPrimary: {
    modelYear: "2024",
    fridgeType: "Ларь",
    volumeFridgemain: "293 л",
    controlType: "Механический",
    defrostingSystem: "Low Frost"
  },
  specificationsSecondary: {
    height: "845 мм",
    width: "1065 мм",
    thickness: "600 мм",
    weight: "Не указано",
    quantityPolok: "Нет",
    materialPolok: "Нет",
    volumeFridge: "Нет",
    systemFridge: "Нет",
    numberSections: "Нет",
    volumeFrezzer: "293 л",
    systemFrezzer: "Low Frost"
  },
  payment: {
    credit: "1983.17 ₸",
    installment: "4957.92 ₸"
  }
},
32: {
  name: "Морозильная камера Midea MDRC345FZF01",
  price: "134 990 ₸",
  oldPrice: "139 990 ₸",
  sku: "276923",
  description: "Морозильный ларь с полезным объемом 249 л, механическим управлением, классом энергопотребления A+ и функцией суперзаморозки. Идеален для хранения большого количества продуктов при стабильной температуре.",
  img: "https://api.technodom.kz/f3/api/v1/images/800/800/276923_1.webp",
  gallery: [
    "https://api.technodom.kz/f3/api/v1/images/800/800/276923_1.webp",
    "https://api.technodom.kz/f3/api/v1/images/800/800/276923_2.webp",
  ],
  specificationsPrimary: {
    modelYear: "2024",
    fridgeType: "Ларь",
    volumeFridgemain: "249 л",
    controlType: "Механический",
    defrostingSystem: "Ручная"
  },
  specificationsSecondary: {
    height: "850 мм",
    width: "985 мм",
    thickness: "600 мм",
    weight: "37 кг",
    quantityPolok: "2",
    materialPolok: "Металл",
    volumeFridge: "Нет",
    systemFridge: "Нет",
    numberSections: "Нет",
    volumeFrezzer: "249 л",
    systemFrezzer: "Ручная"
  },
  payment: {
    credit: "2666.50 ₸",
    installment: "6666.25 ₸"
  }
}


    };


    // Получаем товар по ID из URL
    const product = products[productId];

    // Глобальная переменная для текущего индекса изображения
    let currentImageIndex = 0; let currentGallery = product.gallery;

    if (product) {
        // Основное изображение
        const mainImage = document.getElementById('product-img');
        if (mainImage) {
            mainImage.src = product.gallery[currentImageIndex]; // Начальное изображение
        }

        // Изображения карусели
        const carouselTrack = document.querySelector('.carousel-track');
        if (carouselTrack) {
            carouselTrack.innerHTML = ""; // Очистка предыдущих элементов
            product.gallery.forEach((imgSrc, index) => {
                const slide = document.createElement('li');
                slide.classList.add('carousel-slide');
                const img = document.createElement('img');
                img.src = imgSrc;
                img.classList.add('secondary-image');
                if (index === currentImageIndex) {
                    img.classList.add('active'); // Устанавливаем начальное активное изображение
                }
                img.addEventListener('click', () => {
                    if (mainImage) {
                        mainImage.src = imgSrc; // При клике обновляем основное изображение
                    }
                    updateActiveImage(index); // Обновляем активное изображение
                });
                slide.appendChild(img);
                carouselTrack.appendChild(slide);

                console.log(`Image ${index + 1} added to carousel: ${imgSrc}`); // Логируем добавление изображения
            });
        }

// Пример функции добавления в избранное
function addToFavorites(productId) {
    let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || {};
    const product = products[productId];
    favoriteItems[productId] = {
        id: productId,
        name: product.name,
        price: product.price,
        image: product.img // Добавьте это поле
    };
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
}

        function addToCart() {
            const price = parseInt(product.price.replace(/\s|₸/g, ''), 10);
            if (!cartItems[productId]) {
                cartItems[productId] = { 
                    id: productId, 
                    name: product.name, 
                    price, 
                    quantity: 0,
                    image: product.img // Добавляем изображение товара
                };
            }
            cartItems[productId].quantity++;
        
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCartCounter();
        
            showNotification('Товар добавлен в корзину');
            addToCartBtn.innerHTML = 'Перейти в корзину';
            addToCartBtn.removeEventListener('click', addToCart);
            addToCartBtn.addEventListener('click', () => {
                window.location.href = 'cart.html';
            });
        }

// Отображение цветов в карусели
const colorCarousel = document.querySelector('.color-carousel');
if (colorCarousel && product.colors) {
    colorCarousel.innerHTML = ""; // Очистка предыдущих элементов

    Object.entries(product.colors).forEach(([colorName, colorData]) => {
        const colorItem = document.createElement('li');
        colorItem.classList.add('color-item');
        colorItem.dataset.color = colorName;

        const colorImage = document.createElement('img');
        colorImage.src = colorData.mainImg; // Используем основное изображение для миниатюры
        colorImage.alt = colorName;

        colorItem.appendChild(colorImage);
        colorCarousel.appendChild(colorItem);

        // Обработчик для изменения основного изображения и карусели при выборе цвета
        colorItem.addEventListener('click', () => {
            // Обновляем основное изображение
            const mainImage = document.getElementById('product-img');
            if (mainImage) {
                mainImage.src = colorData.mainImg;
            }
        
            // Обновляем карусель изображений
            const carouselTrack = document.querySelector('.carousel-track');
            if (carouselTrack) {
                carouselTrack.innerHTML = ""; // Очистка предыдущих элементов
                colorData.gallery.forEach((imgSrc, index) => {
                    const slide = document.createElement('li');
                    slide.classList.add('carousel-slide');
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.classList.add('secondary-image');
                    if (index === 0) {
                        img.classList.add('active');
                    }
                    img.addEventListener('click', () => {
                        if (mainImage) {
                            mainImage.src = imgSrc;
                        }
                        updateActiveImage(index);
                    });
                    slide.appendChild(img);
                    carouselTrack.appendChild(slide);
                });
            }
        
            // Обновляем текущий индекс изображения
            currentImageIndex = 0; currentGallery = colorData.gallery;
        });
    });
}
   
        if (document.getElementById('credit')) {
             document.getElementById('credit').textContent = product.payment.credit;
        }
        if (document.getElementById('installment')) {
            document.getElementById('installment').textContent = product.payment.installment;
       }
        if (document.getElementById('product-name')) {
            document.getElementById('product-name').textContent = product.name;
        }
        if (document.getElementById('product-price')) {
            document.getElementById('product-price').textContent = product.price;
        }
        if (document.getElementById('product-description')) {
            document.getElementById('product-description').textContent = product.description;
        }
        if (document.getElementById('product-sku')) {
            document.getElementById('product-sku').textContent = `Артикул: ${product.sku}`;
        }


        // Отображение старой цены
        if (product.oldPrice && document.getElementById('old-price')) {
            document.getElementById('old-price').textContent = product.oldPrice;
        }

        // Отображение характеристик
          if (document.getElementById('fridge-type')) {
            document.getElementById('fridge-type').textContent = product.specificationsPrimary.fridgeType;
        }    
         if (document.getElementById('volume-fridgemain')) {
            document.getElementById('volume-fridgemain').textContent = product.specificationsPrimary.volumeFridgemain;
        } 
          if (document.getElementById('control-type')) {
            document.getElementById('control-type').textContent = product.specificationsPrimary.controlType;
        }  
         if (document.getElementById('defrosting-system')) {
            document.getElementById('defrosting-system').textContent = product.specificationsPrimary.defrostingSystem;
        }                             
         if (document.getElementById('quantity-polok')) {
            document.getElementById('quantity-polok').textContent = product.specificationsSecondary.quantityPolok;
        }  
         if (document.getElementById('material-polok')) {
            document.getElementById('material-polok').textContent = product.specificationsSecondary.materialPolok;
        }  
         if (document.getElementById('volume-fridge')) {
            document.getElementById('volume-fridge').textContent = product.specificationsSecondary.volumeFridge;
        }   
         if (document.getElementById('volume-frezzer')) {
            document.getElementById('volume-frezzer').textContent = product.specificationsSecondary.volumeFrezzer;
        }  
         if (document.getElementById('system-fridge')) {
            document.getElementById('system-fridge').textContent = product.specificationsSecondary.systemFridge;
        }   
         if (document.getElementById('system-frezzer')) {
            document.getElementById('system-frezzer').textContent = product.specificationsSecondary.systemFrezzer;
        }
        if (document.getElementById('number-sections')) {
            document.getElementById('number-sections').textContent = product.specificationsSecondary.numberSections;
        }                                                  
        if (document.getElementById('spec-program')) {
            document.getElementById('spec-program').textContent = product.specificationsSecondary.specialProgram;
        }
        if (document.getElementById('obrabotka-parom')) {
            document.getElementById('obrabotka-parom').textContent = product.specificationsSecondary.obrabotkaParom;
        }
        if (document.getElementById('motor-type')) {
            document.getElementById('motor-type').textContent = product.specificationsPrimary.motorType;
        }
        if (document.getElementById('load-capacity')) {
            document.getElementById('load-capacity').textContent = product.specificationsPrimary.loadCapacity;
        }  
        if (document.getElementById('spin-speed')) {
            document.getElementById('spin-speed').textContent = product.specificationsPrimary.spinSpeed;
        }    
        if (document.getElementById('model-year')) {
            document.getElementById('model-year').textContent = product.specificationsPrimary.modelYear;
        }
        if (document.getElementById('display-size')) {
            document.getElementById('display-size').textContent = product.specificationsPrimary.displaySize;
        }
        if (document.getElementById('resolution')) {
            document.getElementById('resolution').textContent = product.specificationsPrimary.resolution;
        }
        if (document.getElementById('matrix-type')) {
            document.getElementById('matrix-type').textContent = product.specificationsPrimary.matrixType;
        }
        if (document.getElementById('sim-cart')) {
            document.getElementById('sim-cart').textContent = product.specificationsSecondary.simCart;
        }
        if (document.getElementById('sim-cart-size')) {
            document.getElementById('sim-cart-size').textContent = product.specificationsSecondary.simcartSize;
        }
        if (document.getElementById('lumino-sity-main')) {
            document.getElementById('lumino-sity-main').textContent = product.specificationsSecondary.luminoSityMain;
        }
        if (document.getElementById('stabilization')) {
            document.getElementById('stabilization').textContent = product.specificationsSecondary.stabilization;
        }
        if (document.getElementById('autofocus')) {
            document.getElementById('autofocus').textContent = product.specificationsSecondary.autofocus;
        }
        if (document.getElementById('video-resolution')) {
            document.getElementById('video-resolution').textContent = product.specificationsSecondary.videoResolution;
        }
        if (document.getElementById('video-gpu-main')) {
            document.getElementById('video-gpu-main').textContent = product.specificationsPrimary.videogpuMain;
        }
        if (document.getElementById('video-gigabytes-main')) {
            document.getElementById('video-gigabytes-main').textContent = product.specificationsPrimary.videogigabytesMain;
        }
        if (document.getElementById('video-types-main')) {
            document.getElementById('video-types-main').textContent = product.specificationsPrimary.videotypesMain;
        }
        if (document.getElementById('proccesor-main')) {
            document.getElementById('proccesor-main').textContent = product.specificationsPrimary.processorMain;
        }
        if (document.getElementById('video-gpu')) {
            document.getElementById('video-gpu').textContent = product.specificationsSecondary.videoGpu;
        }
        if (document.getElementById('video-gigabytes')) {
            document.getElementById('video-gigabytes').textContent = product.specificationsSecondary.videoGigabytes;
        }
        if (document.getElementById('video-types')) {
            document.getElementById('video-types').textContent = product.specificationsSecondary.videoTypes;
        }
        if (document.getElementById('motherboard')) {
            document.getElementById('motherboard').textContent = product.specificationsSecondary.motherboard;
        }
        if (document.getElementById('mega-pixels')) {
            document.getElementById('mega-pixels').textContent = product.specificationsSecondary.megaPixels;
        }
        if (document.getElementById('material')) {
            document.getElementById('material').textContent = product.specificationsSecondary.material;
        }
        if (document.getElementById('features')) {
            document.getElementById('features').textContent = product.specificationsSecondary.features;
        }
        if (document.getElementById('sensors')) {
            document.getElementById('sensors').textContent = product.specificationsSecondary.sensors;
        }
        if (document.getElementById('protection-standart')) {
            document.getElementById('protection-standart').textContent = product.specificationsSecondary.protectionStandart;
        }
        if (document.getElementById('frequency')) {
            document.getElementById('frequency').textContent = product.specificationsSecondary.frequency;
        }
        if (document.getElementById('processor-model')) {
            document.getElementById('processor-model').textContent = product.specificationsSecondary.processorModel;
        }
        if (document.getElementById('operatingSystem-secondary')) {
            document.getElementById('operatingSystem-secondary').textContent = product.specificationsSecondary.operatingSystem;
        }
        if (document.getElementById('cpu-manufacturing')) {
            document.getElementById('cpu-manufacturing').textContent = product.specificationsSecondary.cpuManufacturing;
        }
        if (document.getElementById('processor-cores')) {
            document.getElementById('processor-cores').textContent = product.specificationsSecondary.processorCores;
        }
        if (document.getElementById('memory')) {
            document.getElementById('memory').textContent = product.specificationsSecondary.memory;
        }
        if (document.getElementById('ram-memory')) {
            document.getElementById('ram-memory').textContent = product.specificationsSecondary.ramMemory;
        }
        if (document.getElementById('memory-card')) {
            document.getElementById('memory-card').textContent = product.specificationsSecondary.memoryCard;
        }
        if (document.getElementById('height')) {
            document.getElementById('height').textContent = product.specificationsSecondary.height;
        }
        if (document.getElementById('width')) {
            document.getElementById('width').textContent = product.specificationsSecondary.width;
        }
        if (document.getElementById('thickness')) {
            document.getElementById('thickness').textContent = product.specificationsSecondary.thickness;
        }
        if (document.getElementById('weight')) {
            document.getElementById('weight').textContent = product.specificationsSecondary.weight;
        }
        if (document.getElementById('fast-charge')) {
            document.getElementById('fast-charge').textContent = product.specificationsSecondary.fastCharge;
        }
        if (document.getElementById('wireless-charge')) {
            document.getElementById('wireless-charge').textContent = product.specificationsSecondary.wirelessCharge;
        }
        if (document.getElementById('talk-time')) {
            document.getElementById('talk-time').textContent = product.specificationsSecondary.talkTime;
        }
        if (document.getElementById('batteryCapacity-secondary')) {
            document.getElementById('batteryCapacity-secondary').textContent = product.specificationsSecondary.batteryCapacity;
        }
        if (document.getElementById('connectors')) {
            document.getElementById('connectors').textContent = product.specificationsSecondary.connectors;
        }
        if (document.getElementById('interfaces')) {
            document.getElementById('interfaces').textContent = product.specificationsSecondary.interfaces;
        }
        if (document.getElementById('navigation')) {
            document.getElementById('navigation').textContent = product.specificationsSecondary.navigation;
        }
        if (document.getElementById('communication')) {
            document.getElementById('communication').textContent = product.specificationsSecondary.communication;
        }
        if (document.getElementById('series')) {
            document.getElementById('series').textContent = product.specificationsSecondary.series;
        }
        if (document.getElementById('equipment')) {
            document.getElementById('equipment').textContent = product.specificationsSecondary.equipment;
        }
        if (document.getElementById('luminosity-front')) {
            document.getElementById('luminosity-front').textContent = product.specificationsSecondary.luminoSityFront;
        }
        if (document.getElementById('stabilization-front')) {
            document.getElementById('stabilization-front').textContent = product.specificationsSecondary.stabilizationFront;
        }
        if (document.getElementById('autofocus-front')) {
            document.getElementById('autofocus-front').textContent = product.specificationsSecondary.autofocusFront
        }
        if (document.getElementById('video-resolution-front')) {
            document.getElementById('video-resolution-front').textContent = product.specificationsSecondary.videoResolutionFront;
        }
        if (document.getElementById('megapixels-front')) {
            document.getElementById('megapixels-front').textContent = product.specificationsSecondary.megapixelsFront;
        }
        if (document.getElementById('model-year-secondary')) {
            document.getElementById('model-year-secondary').textContent = product.specificationsSecondary.modelYear;
        }
        if (document.getElementById('display-size-secondary')) {
            document.getElementById('display-size-secondary').textContent = product.specificationsSecondary.displaySize;
        }
        if (document.getElementById('resolution-secondary')) {
            document.getElementById('resolution-secondary').textContent = product.specificationsSecondary.resolution;
        }
        if (document.getElementById('matrix-type-secondary')) {
            document.getElementById('matrix-type-secondary').textContent = product.specificationsSecondary.matrixType;
        }
        if (document.getElementById('refreshRate-secondary')) {
            document.getElementById('refreshRate-secondary').textContent = product.specificationsSecondary.refreshRate;
        }
        if (document.getElementById('processor-secondary')) {
            document.getElementById('processor-secondary').textContent = product.specificationsSecondary.processor;
        }
        if (document.getElementById('storage-secondary')) {
            document.getElementById('storage-secondary').textContent = product.specificationsSecondary.storage;
        }
    } else {
        document.body.innerHTML = "<h1>Товар не найден</h1>";
    }

    // Функция для обновления активного изображения
    function updateActiveImage(newIndex) {
        const carouselImages = document.querySelectorAll('.secondary-image');
        carouselImages.forEach((img, index) => {
            if (index === newIndex) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
        currentImageIndex = newIndex; // Обновляем индекс текущего изображения
    }

// Переключение карусели (вверх/вниз)
const upButton = document.querySelector('.carousel-button-up');
const downButton = document.querySelector('.carousel-button-down');

function updateMainImage(index) {
    const mainImage = document.getElementById('product-img');
    if (mainImage && currentGallery[index]) {
        mainImage.src = currentGallery[index];
    }
    updateActiveImage(index);
}


// Обработчики для кнопок вверх/вниз
if (upButton) {
    upButton.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
        } else {
            currentImageIndex = currentGallery.length - 1;
        }
        updateMainImage(currentImageIndex);
    });
}

if (downButton) {
    downButton.addEventListener('click', () => {
        if (currentImageIndex < currentGallery.length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }
        updateMainImage(currentImageIndex);
    });
}



    // Функция для показа уведомлений
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        notification.innerHTML = ` 
        <i class="fas fa-check icon-check circle-icon"></i> 
        <span>${message}</span> 
        <button class="close-btn">
            <i class="fas fa-times"></i>
        </button> 
        <div class="progress-bar"></div> <!-- Полоса загрузки -->
    `;

        document.body.appendChild(notification);

        // Делает уведомление видимым
        setTimeout(() => {
            notification.classList.add('visible');
        }, 10);

        setTimeout(() => {
            notification.classList.add('closing');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // Добавление товара в корзину
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};

    // Функция для обновления счетчика корзины
    function updateCartCounter() {
        const totalItems = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cart-counter').textContent = totalItems;
    }

    // Обработчик добавления товара в корзину
    function addToCart() {
        const price = parseInt(product.price.replace(/\s|₸/g, ''), 10);
        if (!cartItems[productId]) {
            cartItems[productId] = { id: productId, name: product.name, price, quantity: 0 };
        }
        cartItems[productId].quantity++;

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartCounter();

        showNotification('Товар добавлен в корзину');
        addToCartBtn.innerHTML = 'Перейти в корзину';
        addToCartBtn.removeEventListener('click', addToCart);
        addToCartBtn.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }

    addToCartBtn.addEventListener('click', addToCart);

    if (cartItems[productId]) {
        addToCartBtn.innerHTML = 'Перейти в корзину';
        addToCartBtn.removeEventListener('click', addToCart);
        addToCartBtn.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }

    updateCartCounter();
});

document.addEventListener("DOMContentLoaded", () => {
    const memoryOptions = document.querySelectorAll(".memory-options li");

    memoryOptions.forEach(option => {
        option.addEventListener("click", () => {
            // Убираем выделение у всех перед выбором
            memoryOptions.forEach(opt => opt.classList.remove("selected"));

            // Добавляем класс выделения выбранному
            option.classList.add("selected");

            // Сохраняем выбор пользователя в localStorage
            localStorage.setItem("selectedMemory", option.dataset.memory);
        });
    });

    // Восстанавливаем выбор из localStorage
    const savedMemory = localStorage.getItem("selectedMemory");
    if (savedMemory) {
        // Сначала убираем выделение у всех элементов
        memoryOptions.forEach(opt => opt.classList.remove("selected"));

        // Выделяем только последний сохраненный выбор
        const selectedOption = document.querySelector(`.memory-options li[data-memory="${savedMemory}"]`);
        if (selectedOption) {
            selectedOption.classList.add("selected");
        }
    }
});


function updateProductCard(product) {
    const price = product.price;
    const installments = calculateInstallments(price);

    const creditElement = document.querySelector("credit-payment");
    const installmentElement = document.querySelector("installment-payment");

    if (creditElement) {
        creditElement.textContent = `${installments.credit.split(' ')[0]} ₸`;
    }
    if (installmentElement) {
        installmentElement.textContent = `${installments.installment.split(' ')[0]} ₸`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const favoriteBtn = document.querySelector('.favorite-3');
    const favoriteIcon = favoriteBtn.querySelector('svg path:nth-child(1)');
    const favoriteCounter = document.querySelector('.favorite-counter');
    const notification = document.getElementById('favorite-notification');
    const notificationText = document.getElementById('notification-text');
    const closeBtn = document.querySelector('.close-btn');

    if (!favoriteBtn || !favoriteIcon) {
        console.error("Ошибка: кнопка избранного не найдена.");
        return;
    }

    favoriteBtn.style.cursor = 'pointer';

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        console.error("Ошибка: ID товара не найден в URL.");
        return;
    }

    let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || {};

    const productName = document.getElementById('product-name')?.textContent || 'Неизвестный товар';
    const productPrice = document.getElementById('product-price')?.textContent.replace(/\D/g, '') || '0';
    const productImg = document.getElementById('product-img')?.src || 'default-image.jpg';

    function showNotification(message) {
        if (!notification || !notificationText) return;

        notificationText.textContent = message;
        notification.classList.add('visible');

        // Сброс анимации прогресса
        const progressBar = notification.querySelector('.progress-bar');
        progressBar.style.animation = 'none';
        void progressBar.offsetWidth; // Перезапуск анимации
        progressBar.style.animation = 'progress 3s linear forwards';

        // Автоматическое скрытие уведомления через 3 секунды
        setTimeout(() => {
            notification.classList.add('closing');
            setTimeout(() => {
                notification.classList.remove('visible', 'closing');
            }, 500);
        }, 3000);
    }

    // Функция закрытия уведомления вручную
    function closeNotification() {
        notification.classList.add('closing');
        setTimeout(() => {
            notification.classList.remove('visible', 'closing');
        }, 500);
    }

    // Назначаем обработчик на кнопку закрытия
    if (closeBtn) {
        closeBtn.addEventListener('click', closeNotification);
    }

    function updateFavoriteIcon() {
        if (favoriteItems[productId]) {
            favoriteIcon.setAttribute('fill', '#DF0613');
            favoriteIcon.setAttribute('opacity', '0.3');
        } else {
            favoriteIcon.setAttribute('fill', '#DF0613');
            favoriteIcon.setAttribute('opacity', '0');
        }
    }

    function updateFavoriteCounter() {
        if (favoriteCounter) {
            favoriteCounter.textContent = Object.keys(favoriteItems).length;
        }
    }

    updateFavoriteIcon();
    updateFavoriteCounter();

    function addToFavorites() {
        if (!favoriteItems[productId]) {
            favoriteItems[productId] = {
                id: productId,
                name: productName,
                price: parseInt(productPrice, 10),
                image: productImg
            };
            favoriteIcon.setAttribute('fill', '#DF0613');
            favoriteIcon.setAttribute('opacity', '0.3');
            showNotification('Товар добавлен в избранное');
        } else {
            delete favoriteItems[productId];
            favoriteIcon.setAttribute('fill', '#8E979F');
            favoriteIcon.setAttribute('opacity', '0');
            showNotification('Товар удалён из избранного');
        }

        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        updateFavoriteCounter();
    }

    favoriteBtn.addEventListener('click', addToFavorites);
});

function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // очищаем старые результаты

    const matches = Object.values(products).filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        resultsContainer.innerHTML = "<p>Ничего не найдено</p>";
        return;
    }

    matches.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.img}" alt="${product.name}" style="width:150px">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <p>${product.description}</p>
            </div>
        `;
        resultsContainer.innerHTML += productHTML;
    });
}
window.products = products;
