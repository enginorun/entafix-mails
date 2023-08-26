const http = require('http');
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
 res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
 res.write('Merhaba Dünya! TEST');

 res.end();
});


server.listen(PORT, () => {
 console.log('Uygulama çalıştırıldı.');

var config = {
 method: 'GET',
 url: 'https://0797-95-70-128-223.ngrok-free.app/entafix/includes/php/queue-code-generation.php'
};
 
setInterval(function(){
  axios(config)
  .then(function(response) {
    console.log("\n"+response.data+"\n");
  })
  .catch(function (error) {
    console.log("HATA -BAŞLANGIÇ");
    console.log(error.response);
    console.log("HATA -BİTİŞ");
  });
},10000);
});