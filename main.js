const redirect = new Redirector(hosts, path);
const extractor = new Extractor();
const manualRedirect = document.getElementById("redirect");

function main() {
  let _host = "",
    _path = "";

  if (!extractor.has("host") || !extractor.has("path")) {
    exception(MAIN__UNDEFINED_PARAMS + MAIN__URL_MALFORMALED);
  }

  _host = extractor.get("host");
  _path = extractor.get("path");

  if (!redirect.hasHost(_host) || !redirect.hasPath(_path)) {
    exception(MAIN__PARAMS_INVAILD + MAIN__URL_MALFORMALED);
  }

  redirect.setHost(_host).setPath(_path);
  manualRedirect.href = redirect.build();
  //redirect.redirect();
}
