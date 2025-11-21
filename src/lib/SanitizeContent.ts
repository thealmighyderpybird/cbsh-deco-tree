import sanitizeHtml from "sanitize-html";

const SanitizeContent = (html: string) => sanitizeHtml(html, {
    allowedTags: [
        "address", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "blockquote", "dd", "div",
        "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre", "img",
        "ul", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em",
        "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "small",
        "strong", "sub", "sup", "time", "u", "var", "wbr", "caption", "col",
        "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"
    ],
    disallowedTagsMode: "discard",
    allowedAttributes: {
        img: [ "src", "srcset", "alt", "title", "width", "height", "loading" ]
    },
    allowedStyles: {
        "*": {
            "color": [/^#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
            "font-weight": [/^[1-9]00$/, /^bold$/, /^normal$/, /^light$/, /^bolder$/],
            "font-style": [/^normal$/, /^italic$/, /^oblique$/, /^revert$/, /^unset$/],
        },
    },
    selfClosing: [ "img", "br", "hr", "area", "base", "basefont" ],
    // URL schemes we permit
    allowedSchemes: [ "http", "https", "ftp" ],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: [ "href", "src", "cite" ],
    allowProtocolRelative: true,
    enforceHtmlBoundary: false,
    parseStyleAttributes: true,
    parser: {
        lowerCaseTags: true,
    },
});

export default SanitizeContent;