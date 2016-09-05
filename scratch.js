var request = require('./index');

var userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36';

function run(url) {
  //var super_proxy = `http://${username}-session-${idx}-country-us:${password}@zproxy.luminati.io:22225`;
  var options = {
    'url': url,
    time: true,
    //proxy: super_proxy,
    'headers': {
      'Content-Type': 'application/json',
      'User-Agent': userAgent,
    },
  };
  request.get(options, function(error, response, body) {
    if (error) {
      console.log(error);
      return cb(error);
    }
    var resp = {
      httpCode: response.statusCode || 0,
      time: response.elapsedTime || 0,
      headers: response.headers || [],
      body: body
    };
    var sslDomains = response.cert.subjectaltname.split(',').map(val => val.replace('DNS:', '').trim());
    console.log(sslDomains);
  });
}

run('https://prospectify.io');
