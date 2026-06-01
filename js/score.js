const scale = 3;

/**
 * THIS IS THE FUCKING LIST SIZE CHANGE THIS WHENEVER YOU ADD NEW LEVELS HOLY FUCKING SHIT REMEMBER TO CHANGE IT OR WE WILL ALL DIE
 */
const LIST_SIZE = 13;

/**
 * Calculate score based on rank in a fixed list
 */
export function score(rank, percent, minPercent) {
    if (!LIST_SIZE || LIST_SIZE <= 1) return 0;

    const t = (rank - 1) / (LIST_SIZE - 1);

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
