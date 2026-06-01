const scale = 3;

/**
 * CHANGE WHEN THE LIST CHANGES OR WE WILL ALL FUCKING DIE DUDE
 */
const LIST_SIZE = 13;

/**
 * minimum fraction of max score for bottom level
 */
const BOTTOM_FLOOR = 0.12;

/**
 * how "top-heavy" the list is
 * lower = smoother top (recommended 0.3–0.6)
 */
const CURVE = 0.45;

export function score(rank, percent, minPercent) {
    if (!LIST_SIZE || LIST_SIZE <= 1) return 0;

    const t = (rank - 1) / (LIST_SIZE - 1);

    // blended curve:
    // linear reduces harsh early drop
    // power keeps overall ranking shape
    const curved = (1 - CURVE) * (1 - t) + CURVE * (1 - Math.pow(t, 0.6));

    let baseScore = 200 * curved;

    // bottom safety floor
    const minScore = 200 * BOTTOM_FLOOR;
    baseScore = Math.max(baseScore, minScore);

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
        return +(Math.round(num + "e+3") + "e-3");
    } else {
        const arr = ("" + num).split("e");
        let sig = "";
        if (+arr[1] + 3 > 0) sig = "+";

        return +(
            Math.round(+arr[0] + "e" + sig + (+arr[1] + 3)) +
            "e-3"
        );
    }
}
