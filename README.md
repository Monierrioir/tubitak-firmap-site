# 🔥 TÜBİTAK 2209-A Projesi  
## Uydu Verilerinden İnteraktif Yangın Haritası Oluşturulması: Muğla Örneği

Bu çalışma, TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Desteği kapsamında yürütülen bir bilimsel projedir.  
Ana hedef, Muğla ili özelinde orman yangınlarının mekânsal ve zamansal dağılımını analiz etmek, uydu verilerine dayalı interaktif haritalar üretmek ve bu bilgileri hem halk hem de öğrenci gruplarıyla paylaşarak farkındalık ve önleyici bilinç oluşturmaktır.

---
## 🗞️ Proje Özeti
Orman yangınları, günümüzde yalnızca ekosistemler üzerinde değil, aynı zamanda sosyal ve ekonomik alanlarda da ciddi etkiler yaratmaktadır. Özellikle Akdeniz İklimi’ne sahip bölgelerde yaz aylarında artış gösteren yangın olayları, yüksek sıcaklık ve düşük nem oranlarının etkisiyle geniş alanlara yayılabilmektedir. Bu projenin temel amacı, 2012–2022 yılları arasında Muğla ilinde yaşanan orman yangınlarını yüksek çözünürlüklü uydu verileri (VIIRS S-NPP 375m) yardımıyla analiz etmek ve sonuçları görselleştirerek kamuoyuna sunmaktır.

Veriler, sınıflandırma algoritmaları ve coğrafi görselleştirme teknikleri yardımıyla analiz edilmiş; yangın yoğunluğu, sıcaklık dağılımı, nem seviyeleri gibi göstergelere dayalı risk haritaları oluşturulmuştur. Bu haritalar, Python ve JavaScript destekli web arayüzü ile etkileşimli hale getirilmiştir. Projenin çıktıları sadece akademik düzeyde değil; ilkokul, ortaokul öğrencilerine ve genel kamuya hitap eden sadeleştirilmiş içeriklerle sunulmaktadır.

---

## 🌐 Projenin Bileşenleri

### 🔥 Isı Yoğunluk Haritaları (2012–2022)
Muğla iline ait uydu görüntülerinden faydalanılarak 10 yıla yayılmış yangın sıcaklık verileri analiz edilmiştir. Ortaya çıkan haritalar, hem yangınların yıl içi dağılımını hem de zamansal eğilimleri görselleştirmektedir.

### 📍 Yangın Noktaları Haritası
NASA'nın FIRMS platformundan alınan verilerle, her yangın olayının konumu ve tarihi etiketlenmiş; noktasal haritalar HTML ortamına aktarılmıştır. Böylece kullanıcılar hangi mahallede ne zaman yangın çıktığını doğrudan harita üzerinden gözlemleyebilmektedir.

### 🕒 Zaman Etiketli Harita (Animasyonlu Harita)
Yangın verileri zaman serisi formatında işlenerek günlük/aylık ilerlemeli animasyonlar ile görselleştirilmiştir. Kullanıcılar seçilen tarih aralığında yangınların nasıl yayıldığını zaman akışı içinde izleyebilir.

### 📚 Blog Yazıları
Her yaştan kullanıcıya hitap edecek şekilde hazırlanmış blog içerikleri ile yangınların etkileri, korunma yolları, erken müdahale sistemleri gibi konular sade ve anlaşılır biçimde anlatılmıştır. Özellikle çocuklar için geliştirilen içerikler renkli görseller, emojiler ve sade dil ile desteklenmiştir.

---

## 🧭 Projenin Amaç ve Hedefleri

- Veri temelli karar destek altyapısı oluşturmak  
- Orman yangınlarının mekânsal analizini yaparak riskli bölgeleri belirlemek  
- İlköğretim ve ortaöğretim seviyesindeki öğrencilere yönelik eğitici içerikler geliştirmek  
- Devlet planlamalarına ve afet stratejilerine destek olacak haritalar sağlamak  
- Akademik yayınlara zemin hazırlayacak örnek veri ve harita setleri sunmak

---

## 📌 Uygulama Linki

👉 [Proje Web Sitesi](https://monierrioir.github.io/tubitak-firmap-site/)

---

## 🧩 Klasör Yapısı

```plaintext
📁 img/                 → Harita ve blog görselleri
📁 haritalar/           → HTML tabanlı interaktif harita dosyaları
📁 bloglar/             → Her blog yazısı için özel sayfa
📄 index.html           → Ana sayfa
📄 hakkimizda.html      → Proje hakkında bilgiler
📄 blog.html            → Blog yazılarını listeleyen sayfa
📄 style.css            → Tüm site için kullanılan stil dosyası

```

## 🖥️ Kullanılan Teknolojiler

- Python: Pandas, GeoPandas, Folium, Matplotlib  
- HTML / CSS / JavaScript  
- GitHub Pages ile barındırma  
- FIRMS (NASA) – Uydu tabanlı yangın verileri  
- Mapbox / Leaflet – Harita görselleştirme

## 👥 Proje Ekibi

👨‍💻 **Berkant Ağur** – Proje Yürütücüsü, Python Geliştirme  
👩‍💻 **Ayşenur Ekiz** – Harita Görselleştirme ve Blog İçerik  
👩‍💻 **Tuğçe Çalışoğlu** – Veri Analizi ve Raporlama  
👩‍💻 **Beyza Erdemir** – Web Tasarımı ve Test Süreci

---

## 📜 Lisans Bilgisi

Bu proje açık kaynaklıdır ve **MIT Lisansı** kapsamında lisanslanmıştır. Kodları kullanabilir, geliştirebilir ve referans vererek paylaşabilirsiniz.

---

## 📌 Ek Hedefler ve Gelecek Planları

- [ ] Türkiye genelindeki diğer yangın risk bölgeleri için genişletme  
- [ ] Web sitesinde mobil kullanıcılar için iyileştirme  
- [ ] Gönüllü raporlama sistemi entegrasyonu  
- [ ] Yerel yönetimlerle veri paylaşımı için API geliştirme  
- [ ] İngilizce versiyon hazırlanması

---

## 🙌 Katkı Sağlamak İster misiniz?

Bu projeye katkıda bulunmak isterseniz:  
⭐ Repo'yu yıldızlayın  
🐛 Hata bildirin ya da öneride bulunun (Issues sekmesi)  
📥 Yeni içerik ya da kod katkısı yapın (Pull Request)

---

> Bu proje, sadece bir teknik çalışma değil, aynı zamanda toplum yararına açık veri ve açık bilinç projesidir.  
> Bilgi paylaştıkça çoğalır. 🔥🌲
