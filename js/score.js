import fs from "fs";

const scale = 3;

// cache so we don’t read file every call
let cachedListSize = null;

function getListSize() {
    if (cachedListSize !== null) return cachedListSize;

    try {
        const raw = fs.readFileSync("./data/_list.json", "utf8");
        const list = JSON.parse(raw);

        cachedListSize = Array.isArray(list) ? list.length : 0;
    } catch (e) {
        cachedListSize = 0;
    }

    return cachedListSize;
}

/**
 * Calculate score based on dynamic list size
 */
export function score(rank, percent, minPercent) {
    const listSize = getListSize();

    if (listSize <= 1) return 0;

    // normalize rank (0 = top, 1 = bottom)
    const t = (rank - 1) / (listSize - 1);

    const baseScore = 200 * (1 - Math.pow(t, 0.6));

    const progress =
        (percent - (minPercent - 1)) /
        (100 - (minPercent - 1));

    let score = baseScore * progress;

    score = Math.max(0, score);

    if (percent !== 100) {
        score -= score / 3;
    }

    return round(Math.max(score, 0));
}

export function round(num) {
    if (!("" + num).includes("e")) {
        return +(Math.round(num + "e+" + scale) + "e-" + scale);
    } else {
        const arr = ("" + num).split("e");
        let sig = "";
        if (+arr[1] + scale > 0) sig = "+";

        return +(
            Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) +
            "e-" +
            scale
        );
    }
}
