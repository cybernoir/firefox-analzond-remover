// This file can be used to configure global preferences for Firefox
// Privacy enhanced Firefox config
// disable reports to NSA
lockPref("browser.safebrowsing.enabled", false);
lockPref("browser.safebrowsing.malware.enabled", false);
// healthreport
lockPref("datareporting.healthreport.uploadEnabled", false);
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
// Fix for http://net.ipcalf.com/
lockPref("media.peerconnection.enabled", false);
// Go hard for privacy
// Prevent sending hashes of downloaded files to google (and greatly speed up downloading in general):
lockPref("browser.safebrowsing.downloads.enabled", false);
// Disable Firefox Identity (for future releases, when they finally will insert this another anal zond)
lockPref("dom.identity.enabled", false)
//TODO: Add those zonds, which are disabled by default in case stupid user enabled them manually
