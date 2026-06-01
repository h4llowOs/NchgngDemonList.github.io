const scale = 3;

// change list_size whenever you add a new level

const LIST_SIZE = 13;

const MIN_FLOOR = 0.08;
const DIFFICULTY = 2.6;

export function score(rank, percent, minPercent) {
    if (!LIST_SIZE || LIST_SIZE <= 1) return 0;

    // clamp rank safety (prevents crashes)
    rank = Math.max(1, Math.min(rank, LIST_SIZE));

    const t = (rank - 1) / (LIST_SIZE - 1);

    // made to prevent the screen from infinitely loading which was SO fucking annoying
    let weight = Math.pow(Math.max(0, 1 - t), DIFFICULTY);

    // enforce floor
    weight = Math.max(weight, MIN_FLOOR);

    let baseScore = 200 * weight;

    // safe progress clamp
    let progress =
        (percent - (minPercent - 1)) /
        (100 - (minPercent - 1));

    progress = Math.max(0, Math.min(progress, 1));

    let score = baseScore * progress;

    if (percent !== 100) {
        score *= 0.7;
    }

    return round(Math.max(score, 0));
}

export function round(num) {
    if (!isFinite(num)) return 0;

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
