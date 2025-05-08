export function gaOptout() {
  document.cookie =
    "ga-disable-G-XXXXXXX=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  window["ga-disable-G-XXXXXXX"] = true;
  alert(
    "Google Analytics wurde deaktiviert. Diese Einstellung bleibt gespeichert."
  );
}
