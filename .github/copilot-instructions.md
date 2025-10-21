## Kısa Talimatlar — AI Kodlama Ajanları

Bu depo şu anda çok minimal: ana içerik yalnızca `README.md` dosyasıdır. Aşağıdaki talimatlar, bu repo üzerinde hemen üretken olmanız için adım adım yapılacakları ve izlenecek keşif/iş akışını içerir.

1. Öncelikle proje türünü otomatik olarak tespit et:
   - Kökte veya alt klasörlerde şu dosyaları ara: `package.json`, `pubspec.yaml`, `pyproject.toml`, `requirements.txt`, `go.mod`, `Cargo.toml`, `pom.xml`, `build.gradle`, `Makefile`.
   - Eğer hiçbir tanımlayıcı dosya yoksa, repo "boş" sayılır — kullanıcıya hangi dil/çerçeve istediğini sorun veya öneri olarak küçük bir scaffold sunun.

2. Mevcut dosyalar ve konvansiyonlar:
   - Bu depo yalnızca `README.md` içeriyor. Bu nedenle hiçbir proje-spesifik konvansiyon veya build komutu çıkarılamıyor.
   - Her öneride referans olarak `README.md` kullanın ve değişiklik yapmadan önce kullanıcıdan onay isteyin.

3. Eğer kullanıcı bir görev (ör. "API ekle", "CI kur", "yeni Flutter app") verirse:
   - İlk adımda varsayımları açıkça belirtin (ör: dil = Dart/Flutter mı, yoksa Node mı?). Maksimum 2 makul varsayım önerin.
   - Önerdiğiniz scaffold veya değişiklik için küçük bir plan (dosya listesi, ana kod/parça örnekleri, bağımlılıklar) sunun.
   - Scaffold/örnek kod ekleyecekseniz, minimal çalıştırma adımlarını ve testleri de ekleyin.

4. Kodlama ve PR kuralları (bu repoya özel çıkarımlar):
   - Henüz proje yapılandırması yok; bu yüzden yeni feature/boilerplate eklerken `README.md`'yi güncelleyerek nasıl çalıştırılacağını açıklayın.
   - Commit mesajları kısa ve eylem odaklı olsun: `feat:` / `fix:` / `chore:` öneklerini kullanmayı önerin.

5. İleriye dönük öneriler (ajanın yapabileceği eylemler):
   - Kullanıcıdan proje hedefini netleştirmesini isteyin (dil, framework, CI, test hedefleri).
   - Eğer onay gelirse, minimal scaffold oluşturun. Örneğin: Dart/Flutter için `pubspec.yaml` + örnek `lib/main.dart`; Node için `package.json` + `index.js`.
   - Tercih edilirse, geliştirici deneyimi için `.devcontainer` veya `tasks.json` eklemeyi teklif edin.

6. Örnek kısa görev akışı (çıktıya dönük, adım adım):
   - Kullanıcı: "Bu repo için küçük bir Node API başlat".
   - Ajan: 1) Dil kontrolü isteği (varsayım yap/iptal), 2) `package.json` ve `index.js` oluşturma planı, 3) scaffold uygula, 4) çalıştırma talimatlarını `README.md`'ye ekle, 5) basit test (ör. `curl` beklenen 200) ekle.

7. Kısıtlamalar ve uyarılar:
   - Mevcut repo içeriği yetersiz; herhangi bir kod eklemeden önce açık kullanıcı onayı alın.
   - Ağ/CI kimlik bilgilerini sızdırmayın. Gerçek dışı varsayımlar yapmaktan kaçının.

Referans dosyalar:
- `README.md` — depo kökünde mevcut, tüm önerilerde referans alın.

Geri bildirim isteği: Bu dosyada hangi ek bilgilerin olmasını istersiniz? Örneğin tercih edilen commit/branch isimlendirme, PR şablonları veya kullanılacak linter/formatter araçları belirtin; isteğe göre güncellerim.
