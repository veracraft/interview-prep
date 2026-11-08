# Mülakat hazırlığı: API ve mimari

API tasarımı ve sistem mimarisi mülakatları için Türkçe çalışma notları.

**Site:** https://veracraft.github.io/interview-prep/

## İçerik

Üstte dört başlık var: **Ana sayfa**, **Knowledge Sync**, **Agent Tasks**, **Deployment API**. Her sistemin alt menüsü mülakat playbook'unun sırasını izler:

| Alt sayfa | Ne var? |
| --- | --- |
| 1 · Kapsam | Soru, ürün, netleştirme soruları, gereksinimler, kaba ölçek |
| 2 · API | API sözleşmesi adım adım (butonlu): endpoint'ler → tam istek → durumlar → hatalar → kurallar |
| 3 · Minimum çözüm | Minimum tablolar, aşamalı diyagram (ilk çizim), okların açıklaması |
| 4 · Hata ve güvenlik | Karar soruları: karar → gerekçe → bedel |
| 5 · Ölçek ve follow-up | Diyagramın follow-up aşamaları ve follow-up soruları |
| Sözlük | Sadece o sistemin kavramları; her biri için hangi problemi çözdüğü, neden şimdi, daha basit alternatifi |
| Mock | İki rollü kısa görüşme; aday cevapları gizlenip prova edilebilir |

| Sistem | Klasör |
| --- | --- |
| [Knowledge Sync](knowledge-sync/kapsam.html) | `knowledge-sync/` |
| [Agent Tasks](agent-tasks/kapsam.html) | `agent-tasks/` |
| [Deployment API](deployment-api/kapsam.html) | `deployment-api/` |

Ana sayfanın altında: [Playbook](index.html), [Bugünün planı](plan.html), [Nasıl anlatırım?](anlatim.html), [Genel takip soruları](sorular.html), [Ortak konular](ortak.html) ve baskı paketleri ([AI Company](paket/ai-company.html) · [PDF](pdf/ai-company.pdf), [Delivery Company](paket/delivery-company.html) · [PDF](pdf/delivery-company.pdf)).

Eski adresler (`urun.html`, `diyagramlar.html`, `sozluk.html`, `mock.html`, `akis.html`, `deploy.html`, `derinlik.html`) yeni sayfalara yönlendirir.

Senaryolar alıştırma tasarımlarıdır ve hiçbir şirketin gerçek iç mimarisini anlatmaz. Şirket adları anonimleştirilmiştir.

## Yerelde açmak

Derleme adımı yoktur; düz HTML, CSS ve JavaScript.

```bash
python3 -m http.server 8000
```

Sonra tarayıcıda `http://localhost:8000` adresini aç.
