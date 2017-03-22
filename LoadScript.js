var LoadScript = function(url, async) {
  async = async || true;
  var script = document.createElement('script'),
    ref = document.getElementsByTagName('head')[0];
  script.type = 'text/javascript';
  script.async = async;
  script.src = url;
  ref.appendChild(script);
};
