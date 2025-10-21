# DIYET VE SPOR TAKIBİ

## Hızlı Başlangıç (Node.js minimal scaffold)

Bu repo şu an küçük bir örnek Node.js API içerir. Lokal olarak çalıştırmak için:

```bash
npm install
npm start
```

API varsayılan olarak `http://localhost:3000/` adresinde bir JSON selamlama döner.

API uç noktaları (örnek):

- GET / -> selamlama
- GET /meals -> yemek listesini döner
- POST /meals { name } -> yeni yemek ekler
- DELETE /meals/:id -> yemek siler
- GET /exercises -> egzersiz listesini döner
- POST /exercises { name } -> yeni egzersiz ekler

## Docker ile çalıştırma

İmajı oluşturup konteyneri çalıştırmak için:

```bash
docker build -t diyet-spor:latest .
docker run -p 3000:3000 diyet-spor:latest
```

<!-- ghcr-publish-trigger: commit to trigger GHCR publish workflow -->

## Kurulum - tek komut (yerel)

Depoyu klonladıktan sonra hızlıca tüm hazırlıkları yapan bir `setup.sh` eklendi. Aşağıdaki komutları çalıştırın:

```bash
# tek komutla kurulum, test ve kullanım önerisi
./setup.sh
```

`setup.sh` şu adımları yapar:

- `npm install` — bağımlılıkları kurar
- `npm test` — testleri çalıştırır


## Docker Compose

Hazır image kullanarak tek komutla çalıştırmak için `docker-compose.yml` dosyası ekledim:

```bash
docker compose up -d
docker compose logs -f
```



