const http = require('http');
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
 res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
 res.write('Merhaba Dünya! TEST');
 res.end();
});

function makeRequest() {
  var config = {
    method: 'GET',
    url: 'https://entafix.com/custom-xml-feeds/includes/php/mailing/control-and-send-mails.php'
  };

  axios(config)
    .then(function(response) {
      console.log("\n" + response.data + "\n");
      // İstek tamamlandıktan sonra tekrar isteği başlatmak için makeRequest'i çağırıyoruz
      setTimeout(makeRequest, 60000);
    })
    .catch(function(error) {
      console.log("HATA -BAŞLANGIÇ");
      console.log(error.response);
      console.log("HATA -BİTİŞ");
      // Hata durumunda da tekrar isteği başlatmak için makeRequest'i çağırıyoruz
      makeRequest();
    });
}

server.listen(PORT, () => {
 console.log('Uygulama çalıştırıldı.');
 // İlk isteği başlatıyoruz
 makeRequest();
});
