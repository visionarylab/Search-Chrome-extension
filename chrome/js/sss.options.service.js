angular.module('sss', ['ngAnimate', 'ui.sortable', 'ngSanitize', 'ui.bootstrap', 'ui.utils']).service('sssService', function () {
    var service = this;

    function applyLocalization(tempConfig) {
        var languageFound = false;
        for (i in service.amazonSites) {
            if (window.navigator.language.toLowerCase() == service.amazonSites[i].locale) {
                tempConfig.searchEngines.splice(tempConfig.searchEngines.length, 0, JSON.parse('{"name": "' + service.amazonSites[i].name + '", "url": "' + service.amazonSites[i].url + '"}'));
                languageFound = true;
            }
        }
        if (!languageFound) {
            tempConfig.searchEngines.splice(tempConfig.searchEngines.length, 0, JSON.parse('{"name": "' + service.amazonSites[0].name + '", "url": "' + service.amazonSites[0].url + '"}'));
            tempConfig.searchEngines.splice(tempConfig.searchEngines.length, 0, JSON.parse('{"name": "' + service.amazonSites[1].name + '", "url": "' + service.amazonSites[1].url + '"}'));
        }
        return tempConfig;
    }

    service.i18n = function (key) {
        return service.bg.i18n(key);
    };

    service.defaultConfig = {
        "newTab": true,
        "newTabSelected": true,
        "newTabPosition": "Last",
        "trackGA": true,
        "searchEverywhere": true,
        "searchEverywhereGroups": false,
        "searchEngines": [
            {
                "name": "Simkl in TV Shows",
                "url": "https://simkl.com/search?q=%s&type=tv",
                "incognito": false,
                "plus": false,
                "group": null
            },
            {
                "name": "Simkl in Anime",
                "url": "https://simkl.com/search?q=%s&type=anime",
                "incognito": false,
                "plus": false,
                "group": null
            },
            {
                "name": "Simkl in Movies",
                "url": "https://simkl.com/search?q=%s&type=movies",
                "incognito": false,
                "plus": false,
                "group": null
            },
            {
                "name": "Google for 'watch online'",
                "url": "https://www.google.com/search?q=%s+watch+online",
                "incognito": false,
                "plus": true,
                "group": null
            },
            {
                "name": "IMDB",
                "url": "https://www.imdb.com/find?q=%s&s=all",
                "incognito": false,
                "plus": true,
                "group": "Databases"
            },
            {
                "name": "TVDB",
                "url": "https://www.thetvdb.com/?string=%s&tab=listseries&function=Search",
                "incognito": false,
                "plus": true,
                "group": "Databases"
            },
            {
                "name": "TMDB",
                "url": "https://www.themoviedb.org/search/movie?query=%s",
                "incognito": false,
                "plus": false,
                "group": "Databases"
            },
            {
                "name": "MAL",
                "url": "https://myanimelist.net/search/all?q=%s",
                "incognito": false,
                "plus": false,
                "group": "Databases"
            },
            {
                "name": "Youtube",
                "url": "https://www.youtube.com/results?search_query=%s&aq=f",
                "incognito": false,
                "plus": true,
                "group": null
            },
            {
                "name": "Wikipedia",
                "url": "https://en.wikipedia.org/w/index.php?title=Special:Search&search=%s",
                "incognito": false,
                "plus": false,
                "group": null
            }
        ]
    };

    service.amazonSites = [
        {
            "locale": "en-us",
            "name": "Amazon",
            "url": "https://www.amazon.com/gp/search?ie=UTF8&keywords=%s&tag=sisese-20&index=aps&linkCode=ur2&camp=1789&creative=9325",
            "type": "Comerce",
            "language": "English"
        },
        {
            "locale": "de-de",
            "name": "Amazon DE",
            "url": "https://www.amazon.de/gp/search?ie=UTF8&keywords=%s&tag=sisese0b-21&index=aps&linkCode=ur2&camp=1638&creative=6742",
            "type": "Comerce",
            "language": "English"
        },
        {
            "locale": "es-es",
            "name": "Amazon ES",
            "url": "https://www.amazon.es/gp/search?ie=UTF8&keywords=%s&tag=sisese0c-21&index=aps&linkCode=ur2&camp=3626&creative=24790",
            "type": "Comerce",
            "language": "English"
        },
        {
            "locale": "it",
            "name": "Amazon IT",
            "url": "https://www.amazon.it/gp/search?ie=UTF8&keywords=%s&tag=sisese07-21&index=aps&linkCode=ur2&camp=3370&creative=23322",
            "type": "Comerce",
            "language": "English"
        },
        {
            "locale": "en-gb",
            "name": "Amazon UK",
            "url": "https://www.amazon.co.uk/gp/search?ie=UTF8&keywords=%s&tag=sisese-21&index=aps&linkCode=ur2&camp=1634&creative=6738",
            "type": "Comerce",
            "language": "English"
        },
        {
            "locale": "en-ca",
            "name": "Amazon Canada",
            "url": "https://www.amazon.ca/gp/search?ie=UTF8&camp=15121&creative=330641&index=aps&keywords=%s&linkCode=ur2&tag=sisese0b-20",
            "type": "Comerce",
            "language": "English"
        }
    ];

    service.featuredSearchEngines = [
        {
            "name": "Amazon",
            "url": "https://www.amazon.com/gp/search?ie=UTF8&keywords=%s&tag=sisese-20&index=aps&linkCode=ur2&camp=1789&creative=9325",
            "type": "Commerce",
            "language": "English"
        },
        {
            "name": "Amazon Kindle",
            "url": "https://www.amazon.com/gp/search?ie=UTF8&keywords=%s&tag=sisese-20&index=digital-text&linkCode=ur2&camp=1789&creative=9325",
            "type": "Commerce",
            "language": "English"
        },
        {
            "name": "Amazon DE",
            "url": "https://www.amazon.de/gp/search?ie=UTF8&keywords=%s&tag=sisese0b-21&index=aps&linkCode=ur2&camp=1638&creative=6742",
            "type": "Commerce",
            "language": "English"
        },
        {
            "name": "Amazon ES",
            "url": "https://www.amazon.es/gp/search?ie=UTF8&keywords=%s&tag=sisese0c-21&index=aps&linkCode=ur2&camp=3626&creative=24790",
            "type": "Commerce",
            "language": "English"
        },
        {
            "name": "Amazon IT",
            "url": "https://www.amazon.it/gp/search?ie=UTF8&keywords=%s&tag=sisese07-21&index=aps&linkCode=ur2&camp=3370&creative=23322",
            "type": "Commerce",
            "language": "English"
        },
        {
            "name": "Amazon JP",
            "url": "https://www.amazon.co.jp/gp/search?ie=UTF8&keywords=%s&tag=sisese05-22&index=aps&linkCode=ur2&camp=247&creative=1211",
            "type": "Commerce",
            "language": "Japanese"
        },
        {
            "name": "Amazon Mp3",
            "url": "https://www.amazon.com/gp/search?ie=UTF8&keywords=%s&tag=sisese-20&index=digital-music&linkCode=ur2&camp=1789&creative=9325",
            "type": "Commerce",
            "language": "English"
        },
        {
            "name": "Amazon Music",
            "url": "https://www.amazon.com/gp/search?ie=UTF8&keywords=%s&tag=sisese-20&index=music&linkCode=ur2&camp=1789&creative=9325",
            "type": "Commerce",
            "language": "English"
        },
        {
            "name": "Amazon UK",
            "url": "https://www.amazon.co.uk/gp/search?ie=UTF8&keywords=%s&tag=sisese-21&index=aps&linkCode=ur2&camp=1634&creative=6738",
            "type": "Commerce",
            "language": "English"
        },
        {
            "name": "BBC",
            "url": "https://www.bbc.co.uk/search/?q=%s",
            "type": "News",
            "language": "English"
        },
        {
            "name": "Bing",
            "url": "https://www.bing.com/search?q=%s&go=&qs=n&sk=&sc=8-9&form=QBLH",
            "type": "Search tools",
            "language": "Multi"
        },
        {
            "name": "btjunkie",
            "url": "https://btjunkie.org/search?q=%s",
            "type": "Downloads",
            "language": "English"
        },
        {
            "name": "Chrome Extensions",
            "url": "httpss://chrome.google.com/webstore/search?q=%s",
            "type": "Tools",
            "language": "English"
        },
        {
            "name": "CNN",
            "url": "https://edition.cnn.com/search/?query=%s&primaryType=mixed&sortBy=date&intl=true",
            "type": "News",
            "language": "English"
        },
        {
            "name": "CodePlex",
            "url": "https://www.codeplex.com/site/search?query=%s&ac=8",
            "type": "IT",
            "language": "English"
        },
        {
            "name": "COOKPAD",
            "url": "https://cookpad.com/レシピ/%s ",
            "type": "Food",
            "language": "Japanese"
        },
        {
            "name": "Amashow",
            "url": "https://amashow.com/past.php?i=All&kwd=%s",
            "type": "Commerce",
            "language": "Japanese"
        },
        {
            "name": "DeviantArt",
            "url": "https://browse.deviantart.com/?qh=&section=&q=%s",
            "type": "Social",
            "language": "English"
        },
        {
            "name": "DMOZ",
            "url": "https://www.dmoz.org/search?q=%s",
            "type": "Knowledge",
            "language": "English"
        },
        {
            "name": "Facebook",
            "url": "https://www.facebook.com/search.php?q=%s&init=quick",
            "type": "Social",
            "language": "English"
        },
        {
            "name": "Gmail",
            "url": "httpss://mail.google.com/mail/#search/%s",
            "type": "Tools",
            "language": "English"
        },
        {
            "name": "Kickass",
            "url": "https://kickass2.st/usearch/%s/",
            "type": "Download",
            "language": "English"
        },
        {
            "name": "Filmaffinity",
            "url": "httpss://www.filmaffinity.com/es/search.php?stext=%s",
            "type": "Movies",
            "language": "Español"
        },
        {
            "name": "Google",
            "url": "https://www.google.com/#q=%s&fp=1",
            "type": "Search tools",
            "language": "Multi"
        },
        {
            "name": "Google Docs",
            "url": "httpss://docs.google.com/#advanced-search/q=%s&view=0&hidden=1",
            "type": "Tools",
            "language": "English"
        },
        {
            "name": "Google Images",
            "url": "https://www.google.com/search?num=10&hl=en&site=imghp&tbm=isch&source=hp&q=%s",
            "type": "Tools",
            "language": "English"
        },
        {
            "name": "Google Translate En/Es",
            "url": "https://translate.google.com/?hl=en&ie=UTF8&text=%s&langpair=en|es#",
            "type": "Translation",
            "language": "Español"
        },
        {
            "name": "Google Translate En/It",
            "url": "https://translate.google.com/?hl=en&ie=UTF8&text=%s&langpair=en|it#",
            "type": "Translation",
            "language": "Italiano"
        },
        {
            "name": "Google Translate En/Pt",
            "url": "https://translate.google.com/?hl=en&ie=UTF8&text=%s&langpair=en|pt#",
            "type": "Translation",
            "language": "Português"
        },
        {
            "name": "Google ニュース",
            "url": "https://news.google.co.jp/news?hl=ja&ie=UTF-8&ned=jp&q=%s",
            "type": "Search tools",
            "language": "Japanese"
        },
        {
            "name": "Google マップ",
            "url": "https://maps.google.co.jp/maps?hl=ja&ie=UTF-8&q=%s",
            "type": "Search tools",
            "language": "Japanese"
        },
        {
            "name": "Google 画像検索",
            "url": "https://images.google.co.jp/images?hl=ja&ie=UTF-8&q=%s",
            "type": "Search tools",
            "language": "Japanese"
        },
        {
            "name": "Google+",
            "url": "https://www.google.com/search?q=%s&hl=en&tbs=prfl:e&authuser=0&tok=RuSDPFgadUcK6QvAU9edEA",
            "type": "Social",
            "language": "English"
        },
        {
            "name": "GrooveShark",
            "url": "https://grooveshark.com/#/search?q=%s",
            "type": "Music",
            "language": "English"
        },
        {
            "name": "IMDB",
            "url": "https://www.imdb.com/find?s=all;q=%s",
            "type": "Movies",
            "language": "English"
        },
        {
            "name": "ISOHunt",
            "url": "https://isohunt.com/torrents/?ihq=%s",
            "type": "Downloads",
            "language": "English"
        },
        {
            "name": "Jigsaw",
            "url": "https://www.jigsaw.com/FreeTextSearch.xhtml?opCode=search&autoSuggested=true&freeText=%s",
            "type": "Business",
            "language": "English"
        },
        {
            "name": "jQuery plugins",
            "url": "https://plugins.jquery.com/search/node/%s",
            "type": "IT",
            "language": "English"
        },
        {
            "name": "Last.fm",
            "url": "https://www.last.fm/search?q=%s",
            "type": "Music",
            "language": "English"
        },
        {
            "name": "OKWave ",
            "url": "https://okwave.jp/searchkeyword/%s/?sc=true",
            "type": "Social",
            "language": "Japanese"
        },
        {
            "name": "OpenSubtitles",
            "url": "https://www.opensubtitles.org/pb/search2/sublanguageid-pob/moviename-%s",
            "type": "Movies",
            "language": "Português"
        },
        {
            "name": "Pandora",
            "url": "https://www.pandora.com/backstage?type=all&q=%s",
            "type": "Music",
            "language": "English"
        },
        {
            "name": "Rotten Tomatoes",
            "url": "https://www.rottentomatoes.com/search/full_search.php?search=%s",
            "type": "Movies",
            "language": "English"
        },
        {
            "name": "stackoverflow",
            "url": "https://stackoverflow.com/search?q=%s",
            "type": "IT",
            "language": "English"
        },
        {
            "name": "Tokyo Tosho",
            "url": "https://www.tokyotosho.info/search.php?terms=%s&type=0&size_min=&size_max=&username=",
            "type": "Anime",
            "language": "English"
        },
        {
            "name": "Torrentz.eu",
            "url": "https://torrentz.eu/search?f=%s",
            "type": "Downloads",
            "language": "English"
        },
        {
            "name": "TPB",
            "url": "https://thepiratebay.org/search/%s/0/7/0",
            "type": "Downloads",
            "language": "English"
        },
        {
            "name": "Twitter",
            "url": "https://twitter.com/#!/search/%s",
            "type": "Social",
            "language": "English"
        },
        {
            "name": "Urban Dictionary",
            "url": "https://www.urbandictionary.com/define.php?term=%s",
            "type": "Knowledge",
            "language": "English"
        },
        {
            "name": "Wikipedia",
            "url": "https://en.wikipedia.org/w/index.php?title=Special:Search&search=%s",
            "type": "Knowledge",
            "language": "English"
        },
        {
            "name": "Wikipedia ES",
            "url": "https://es.wikipedia.org/wiki/Special:Search?search=%s&go=Go",
            "type": "Knowledge",
            "language": "Español"
        },
        {
            "name": "Wikipedia JP",
            "url": "https://ja.wikipedia.org/wiki/%s ",
            "type": "Knowledge",
            "language": "Japanese"
        },
        {
            "name": "Word Reference En/Es",
            "url": "https://www.wordreference.com/enes/%s",
            "type": "Translation",
            "language": "Español"
        },
        {
            "name": "Word Reference En/It",
            "url": "https://www.wordreference.com/enit/%s",
            "type": "Translation",
            "language": "Italiano"
        },
        {
            "name": "Yahoo! ニュース",
            "url": "https://nsearch.yahoo.co.jp/search?p=%s&ei=UTF-8",
            "type": "Search tools",
            "language": "Japanese"
        },
        {
            "name": "Yahoo! ブログ検索",
            "url": "https://blog.search.yahoo.co.jp/search?p=%s&ei=UTF-8",
            "type": "Search tools",
            "language": "Japanese"
        },
        {
            "name": "Yahoo! 知恵袋",
            "url": "https://chiebukuro.search.yahoo.co.jp/search?p=%s&ei=UTF-8",
            "type": "Search tools",
            "language": "Japanese"
        },
        {
            "name": "Yahoo! JP",
            "url": "https://search.yahoo.co.jp/search?p=%s&ei=UTF-8 ",
            "type": "Search tools",
            "language": "Japanese"
        },
        {
            "name": "Youtube",
            "url": "https://www.youtube.com/results?search_query=%s&aq=f",
            "type": "Social",
            "language": "English"
        },
        {
            "name": "リアルタイム検索",
            "url": "https://realtime.search.yahoo.co.jp/search?p=%s&ei=UTF-8 ",
            "type": "Search tools",
            "language": "Japanese"
        },
        {
            "name": "楽天",
            "url": "https://search.rakuten.co.jp/search/mall/%s/-/",
            "type": "Commerce",
            "language": "Japanese"
        },
        {
            "name": "Anime News Network",
            "url": "httpss://www.animenewsnetwork.com/search?q=%s&type=all",
            "type": "Anime",
            "language": "English"
        },
        {
            "name": "DramaWiki",
            "url": "https://wiki.d-addicts.com/index.php?title=Special:Search&search=%s",
            "type": "Knowledge",
            "language": "English"
        },
        {
            "name": "AsianMediaWiki",
            "url": "https://asianwiki.com/index.php?title=Special%3ASearch&search=%s&go=Go",
            "type": "Movies",
            "language": "English"
        }
    ];

    service.bg = chrome.extension.getBackgroundPage();

    if (typeof localStorage["config"] == "undefined") {
        service.bg.config = applyLocalization(service.defaultConfig);
        localStorage["config"] = JSON.stringify(service.bg.config);
        service.bg.createMenu();
    }

    localStorage['newOptionsSeen'] = service.bg.currVersion;

});