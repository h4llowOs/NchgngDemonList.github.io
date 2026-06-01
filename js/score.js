const scale = 3;

/**
 * change me n shit daddeyyyy...
 */
const LIST_SIZE = 13;

/**
 * lowest possible fraction of top score (never reaches 0)
 */
const MIN_FLOOR = 0.08;

/**
 * how strongly top ranks matter
 * higher = more top-heavy (recommended 2.2–3.5)
 */
const DIFFICULTY = 2.6;

export function score(rank, percent, minPercent) {
    if (!LIST_SIZE || LIST_SIZE <= 1) return 0;

    // normalized position (0 = top, 1 = bottom)
    const t = (rank - 1) / (LIST_SIZE - 1);

    // exponential difficulty curve (strong top emphasis)
    let weight = Math.pow(1 - t, DIFFICULTY);

    // enforce strict floor (so bottom never becomes useless)
    weight = Math.max(weight, MIN_FLOOR);

    // base scaling
    let baseScore = 200 * weight;

    // completion scaling (prevents 0% abuse, rewards full clears)
    const progress =
        (percent - (minPercent - 1)) /
        (100 - (minPercent - 1));

    progress = Math.max(0, Math.min(progress, 1));

    let score = baseScore * progress;

    // partial completion penalty
    if (percent !== 100) {
        score *= 0.7;
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
