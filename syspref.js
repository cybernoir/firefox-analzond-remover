// This file can be used to configure global preferences for Firefox
// Privacy enhanced Firefox config
// disable reports to NSA
lockPref("browser.safebrowsing.enabled", false);
lockPref("browser.safebrowsing.malware.enabled", false);
// automated malicious requests
lockPref("extensions.blocklist.enabled", false);
lockPref("extensions.getAddons.cache.enabled", false);
lockPref("extensions.update.enabled", false);
lockPref("extensions.update.autoUpdateDefault", false);
// search engines
lockPref("browser.search.suggest.enabled", false);
lockPref("browser.search.update", false);
// spellchecking
lockPref("layout.spellcheckDefault", 0);
// prefetching 
lockPref("network.prefetch-next", false);
lockPref("network.dns.disablePrefetch", true);
// geolocation
lockPref("geo.enabled", false);
// homepage autoloading
lockPref("browser.startup.homepage", "about:blank");
lockPref("browser.startup.page", 0);
lockPref("browser.startup.homepage_override.mstone", "ignore");
// new tab
lockPref("browser.newtab.url", "about:blank");
lockPref("browser.newtab.preload", false);
lockPref("browser.newtabpage.enabled", false);
lockPref("browser.newtabpage.directory.ping", "");
lockPref("browser.newtabpage.directory.source", "data:application/json,{}");
lockPref("browser.newtabpage.enhanced", false);
lockPref("browser.newtabpage.introShown", false);
// Go hard for privacy
// Prevent sending hashes of downloaded files to google (and greatly speed up downloading in general):
lockPref("browser.safebrowsing.downloads.enabled", false);
// autoupdates
lockPref("app.update.auto", false);
lockPref("app.update.enabled", false);
lockPref("app.update.silent", false);
// openh264 automatic malicious download
lockPref("media.gmp-gmpopenh264.enabled", false);
lockPref("media.gmp-gmpopenh264.provider.enabled", false);
lockPref("media.gmp-gmpopenh264.autoupdate", false);
lockPref("media.gmp-manager.log", true);
lockPref("media.gmp-manager.url", "http://127.0.0.1/remove/anal/zond/");
// disable loop dns request
lockPref("loop.enabled", false);
lockPref("loop.throttled", false);
lockPref("loop.throttled2", false);
// disable OCSP
lockPref("security.OCSP.enabled", 0);
// Prevent the use of SPDY, Websockets and WebRTC if not supported by the web proxy
lockPref("media.peerconnection.enabled", false);
lockPref("media.websocket.enabled", false);
lockPref("network.websocket.enabled", false);
lockPref("media.http.spdy.enabled", false);
// Disable automatic form filling
lockPref("signon.autofillForms", false);
lockPref("signon.rememberSignons", false);
// Typeahead find
lockPref("accessibility.typeaheadfind", false);
// Disable telemetry and health reporting
lockPref("toolkit.telemetry.enabled", false);
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled", false);
lockPref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("toolkit.telemetry.enabled", false);
lockPref("toolkit.telemetry.prompted", 2);
// Crash reporter
lockPref("breakpad.reportURL", "");
// URL malicious behaviour
lockPref("keyword.enabled", false);
lockPref("browser.fixup.alternate.enabled", false);
//TODO: Add those zonds, which are disabled by default in case stupid user enabled them manually
