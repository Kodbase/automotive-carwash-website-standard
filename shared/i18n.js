// shared/i18n.js

export const i18n = {
  tr: {

    nav: {
      home:     "Ana Sayfa",
      services: "Hizmetler",
      about:    "Hakkımızda",
      contact:  "İletişim",
      cta:      "Randevu Al",
    },

    hero: {
      title:    "Aracınız, En İyi Haliyle.",
      subtitle: "Profesyonel detaylı temizlik ve koruma hizmetleri.",
      cta:      "Hemen Randevu Al",
    },

    services: {
      title:    "Hizmetlerimiz",
      subtitle: "Her araca özel, uzman ellerde profesyonel bakım.",
      list: [
        {
          id:          "exterior",
          icon:        "🚿",
          name:        "Dış Yıkama",
          description: "Detaylı dış yüzey temizliği, jant ve lastik bakımı dahil.",
          tag:         "Temel",
        },
        {
          id:          "interior",
          icon:        "🪑",
          name:        "İç Temizlik",
          description: "Derin iç mekan temizliği, döşeme ve tavan yıkama.",
          tag:         "Popüler",
        },
        {
          id:          "paint",
          icon:        "✨",
          name:        "Boya Koruma & Cila",
          description: "Kil bar, polish ve wax ile boya yüzeyini yenile.",
          tag:         "Önerilen",
        },
        {
          id:          "ceramic",
          icon:        "🛡️",
          name:        "Seramik Kaplama",
          description: "2–5 yıl uzun ömürlü nano seramik koruma katmanı.",
          tag:         "Premium",
        },
        {
          id:          "engine",
          icon:        "⚙️",
          name:        "Motor Temizliği",
          description: "Motor bölgesi detaylı temizlik ve koruyucu uygulama.",
          tag:         "Detay",
        },
        {
          id:          "film",
          icon:        "🪟",
          name:        "Cam Filmi",
          description: "UV koruyucu, ısı yalıtımlı profesyonel cam filmi.",
          tag:         "Konfor",
        },
      ],
    },

    trust: {
      title:    "Neden Biz?",
      subtitle: "Yüzlerce mutlu müşteri, kanıtlanmış kalite.",
      stats: [
        { value: "500+", label: "Mutlu Müşteri"    },
        { value: "5★",   label: "Ortalama Puan"    },
        { value: "3+",   label: "Yıllık Deneyim"   },
        { value: "%98",  label: "Memnuniyet Oranı" },
      ],
      reviews: [
        {
          id:     1,
          name:   "Ahmet K.",
          rating: 5,
          text:   "Aracım showroom'dan çıkmış gibi oldu. Seramik kaplama mükemmeldi, kesinlikle tavsiye ederim.",
          service: "Seramik Kaplama",
          date:   "Mart 2024",
        },
        {
          id:     2,
          name:   "Selin T.",
          rating: 5,
          text:   "İç temizlik için geldim, aracımı tanıyamadım. Ekip çok titiz ve ilgili çalıştı.",
          service: "İç Temizlik",
          date:   "Şubat 2024",
        },
        {
          id:     3,
          name:   "Murat D.",
          rating: 5,
          text:   "Boya koruma işlemi sonrası araba yepyeni göründü. Fiyat/performans açısından çok başarılı.",
          service: "Boya Koruma",
          date:   "Ocak 2024",
        },
      ],
      before:       "Önce",
      after:        "Sonra",
      beforeAfterTitle: "Farkı Görün",
      beforeAfterSub:   "Aynı araç, tamamen farklı bir görünüm.",
    },

    pricing: {
      title:    "Paketler",
      subtitle: "İhtiyacınıza göre seçin, farkı hissedin.",
      popular:  "En Popüler",
      cta:      "WhatsApp'tan Yaz",
      packages: [
        {
          id:       "basic",
          name:     "Basic",
          price:    "₺500",
          desc:     "Temel bakım ve temizlik",
          features: [
            "Dış yıkama & kurulama",
            "Jant & lastik temizliği",
            "Cam temizliği",
            "İç süpürge",
          ],
          excluded: [
            "İç derin temizlik",
            "Cila & polish",
            "Seramik kaplama",
          ],
          popular: false,
        },
        {
          id:       "premium",
          name:     "Premium",
          price:    "₺900",
          desc:     "Komple iç & dış detailing",
          features: [
            "Dış yıkama & kurulama",
            "Jant & lastik temizliği",
            "Cam temizliği",
            "İç derin temizlik",
            "Döşeme temizliği",
            "Cila & polish",
          ],
          excluded: [
            "Seramik kaplama",
          ],
          popular: true,
        },
        {
          id:       "elite",
          name:     "Elite",
          price:    "₺1.400",
          desc:     "Tam koruma & premium bakım",
          features: [
            "Dış yıkama & kurulama",
            "Jant & lastik temizliği",
            "Cam temizliği",
            "İç derin temizlik",
            "Döşeme temizliği",
            "Cila & polish",
            "Seramik kaplama",
            "Motor temizliği",
          ],
          excluded: [],
          popular: false,
        },
      ],
      note: "* Fiyatlar araç tipine göre değişebilir. Kesin fiyat için iletişime geçin.",
    },

    contact: {
      title:       "İletişim",
      subtitle:    "Randevu almak veya bilgi almak için bize ulaşın.",
      form: {
        name:        "Adınız Soyadınız",
        email:       "Email Adresiniz",
        message:     "Mesajınız",
        messagePh:   "Hangi hizmet hakkında bilgi almak istiyorsunuz?",
        send:        "Mesaj Gönder",
        sending:     "Gönderiliyor...",
        success:     "Mesajınız alındı! En kısa sürede dönüş yapacağız.",
        error:       "Bir hata oluştu. Lütfen tekrar deneyin.",
      },
      whatsapp:    "WhatsApp'tan Yaz",
      phone:       "Hemen Ara",
      info: {
        address:     "Adres",
        hours:       "Çalışma Saatleri",
        hoursVal:    "Pzt – Cmt: 09:00 – 18:00",
        hoursNote:   "Pazar günleri randevuyla",
        follow:      "Sosyal Medya",
      },
    },

    cta: {
      whatsapp: "WhatsApp'tan Yaz",
      call:     "Hemen Ara",
    },

    footer: {
      description:  "Bursa'nın en güvenilir profesyonel araç yıkama ve detailing hizmetleri.",
      pages:        "Sayfalar",
      servicesTitle:"Hizmetler",
      contact:      "İletişim",
      rights:       "Tüm hakları saklıdır.",
      servicesList: ["Dış Yıkama", "İç Temizlik", "Boya Koruma", "Seramik Kaplama"],
    },
  },

  en: {
    nav: {
      home:     "Home",
      services: "Services",
      about:    "About",
      contact:  "Contact",
      cta:      "Book Now",
    },

    hero: {
      title:    "Your Car, At Its Best.",
      subtitle: "Professional detailing and protection services.",
      cta:      "Book Now",
    },

    services: {
      title:    "Our Services",
      subtitle: "Expert care tailored to every vehicle.",
      list: [
        {
          id:          "exterior",
          icon:        "🚿",
          name:        "Exterior Wash",
          description: "Full exterior cleaning including wheels and tires.",
          tag:         "Basic",
        },
        {
          id:          "interior",
          icon:        "🪑",
          name:        "Interior Clean",
          description: "Deep interior detailing, upholstery and headliner wash.",
          tag:         "Popular",
        },
        {
          id:          "paint",
          icon:        "✨",
          name:        "Paint Protection & Polish",
          description: "Clay bar, polish and wax to restore paint surface.",
          tag:         "Recommended",
        },
        {
          id:          "ceramic",
          icon:        "🛡️",
          name:        "Ceramic Coating",
          description: "2–5 year nano ceramic protection layer.",
          tag:         "Premium",
        },
        {
          id:          "engine",
          icon:        "⚙️",
          name:        "Engine Clean",
          description: "Detailed engine bay cleaning and protective treatment.",
          tag:         "Detail",
        },
        {
          id:          "film",
          icon:        "🪟",
          name:        "Window Film",
          description: "UV-blocking, heat-insulating professional window tint.",
          tag:         "Comfort",
        },
      ],
    },

    trust: {
      title:    "Why Us?",
      subtitle: "Hundreds of happy customers, proven quality.",
      stats: [
        { value: "500+", label: "Happy Clients"      },
        { value: "5★",   label: "Average Rating"     },
        { value: "3+",   label: "Years Experience"   },
        { value: "98%",  label: "Satisfaction Rate"  },
      ],
      reviews: [
        {
          id:     1,
          name:   "Ahmet K.",
          rating: 5,
          text:   "My car looked like it just left the showroom. The ceramic coating was flawless — highly recommended.",
          service: "Ceramic Coating",
          date:   "March 2024",
        },
        {
          id:     2,
          name:   "Selin T.",
          rating: 5,
          text:   "Came in for an interior clean and barely recognized my own car. The team was meticulous and kind.",
          service: "Interior Clean",
          date:   "February 2024",
        },
        {
          id:     3,
          name:   "Murat D.",
          rating: 5,
          text:   "Paint protection made the car look brand new. Excellent value for money.",
          service: "Paint Protection",
          date:   "January 2024",
        },
      ],
      before:           "Before",
      after:            "After",
      beforeAfterTitle: "See the Difference",
      beforeAfterSub:   "Same car, completely different look.",
    },

    pricing: {
      title:    "Packages",
      subtitle: "Choose what fits your needs, feel the difference.",
      popular:  "Most Popular",
      cta:      "Message on WhatsApp",
      packages: [
        {
          id:       "basic",
          name:     "Basic",
          price:    "₺500",
          desc:     "Essential care & cleaning",
          features: [
            "Exterior wash & dry",
            "Wheel & tire cleaning",
            "Window cleaning",
            "Interior vacuum",
          ],
          excluded: [
            "Deep interior clean",
            "Polish & wax",
            "Ceramic coating",
          ],
          popular: false,
        },
        {
          id:       "premium",
          name:     "Premium",
          price:    "₺900",
          desc:     "Full interior & exterior detail",
          features: [
            "Exterior wash & dry",
            "Wheel & tire cleaning",
            "Window cleaning",
            "Deep interior clean",
            "Upholstery cleaning",
            "Polish & wax",
          ],
          excluded: [
            "Ceramic coating",
          ],
          popular: true,
        },
        {
          id:       "elite",
          name:     "Elite",
          price:    "₺1,400",
          desc:     "Full protection & premium care",
          features: [
            "Exterior wash & dry",
            "Wheel & tire cleaning",
            "Window cleaning",
            "Deep interior clean",
            "Upholstery cleaning",
            "Polish & wax",
            "Ceramic coating",
            "Engine bay cleaning",
          ],
          excluded: [],
          popular: false,
        },
      ],
      note: "* Prices may vary by vehicle type. Contact us for an exact quote.",
    },

    contact: {
      title:       "Contact",
      subtitle:    "Reach out to book an appointment or get information.",
      form: {
        name:        "Full Name",
        meil:        "Your Email Address",
        message:     "Message",
        messagePh:   "Which service would you like to know about?",
        send:        "Send Message",
        sending:     "Sending...",
        success:     "Message received! We'll get back to you shortly.",
        error:       "Something went wrong. Please try again.",
      },
      whatsapp:    "Message on WhatsApp",
      phone:       "Call Now",
      info: {
        address:     "Address",
        hours:       "Working Hours",
        hoursVal:    "Mon – Sat: 09:00 – 18:00",
        hoursNote:   "Sundays by appointment",
        follow:      "Follow Us",
      },
    },

    cta: {
      whatsapp: "Message on WhatsApp",
      call:     "Call Now",
    },
    footer: {
      description:  "Bursa's most trusted professional car wash & detailing services.",
      pages:        "Pages",
      servicesTitle:"Services",
      contact:      "Contact",
      rights:       "All rights reserved.",
      servicesList: ["Exterior Wash", "Interior Clean", "Paint Protection", "Ceramic Coating"],
    },
  },
};