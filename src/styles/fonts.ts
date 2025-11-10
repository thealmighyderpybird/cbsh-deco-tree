import localFont from "next/font/local";

export const segoe = localFont({
    src: "/fonts/SegUIVar.ttf",
    variable: "--segoe",
    // @ts-expect-error axes may not exist, but is used
    axes: ["opsz"],
});

export const torus = localFont({
    src: "/fonts/Torus.woff2",
    variable: "--torus",
});

export const studySans = localFont({
    src: "/fonts/CroomsschedSans/regular.woff2",
    variable: "--study-sans",
});

export const avenir = localFont({
    src: [
        { path: "/fonts/AvenirLTPro/45.otf" },
        { path: "/fonts/AvenirLTPro/35.otf", weight: "300" },
        { path: "/fonts/AvenirLTPro/65.otf", weight: "700" },
        { path: "/fonts/AvenirLTPro/85.otf", weight: "800" },
        { path: "/fonts/AvenirLTPro/95.otf", weight: "900" },
    ],
    variable: "--avenir",
});

enum fontEnum {
    studySans = "StudySans",
    avenir = "Avenir",
    segoe = "SegoeUI",
    torus = "Torus",
}

const fonts = {
    [fontEnum.studySans]: studySans,
    [fontEnum.avenir]: avenir,
    [fontEnum.segoe]: segoe,
    [fontEnum.torus]: torus,
};

export default fonts;