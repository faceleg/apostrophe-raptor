var extend = require('extend');
module.exports = function(options) {
  return new widget(options);
};

function widget(options) {
  var apos = options.apos;
  var app = options.app;

  this.pushAsset = function(type, name, optionsArg) {
    var options = {};
    if (optionsArg) {
      extend(true, options, optionsArg);
    }
    options.fs = __dirname;
    options.web = '/apos-raptor';
    return apos.pushAsset(type, name, options);
  };
  this.pushAsset('script', 'editor', { when: 'user' });
  this.pushAsset('script', 'raptor', { when: 'user' });

  app.get('/apos-raptor/*', apos.static(__dirname + '/public'));
}
