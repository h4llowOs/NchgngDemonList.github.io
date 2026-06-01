/**
 * decimal precision
 */
const scale = 3;

/**
 * Calculate score based on rank in a dynamic list
 * @param {Number} rank - 1-based position in list
 * @param {Number} percent - completion percent
 * @param {Number} minPercent - minimum required percent
 * @param {Number} listSize - total number of levels in list
 * @returns {Number}
 */
export function score(rank, percent, minPercent, listSize) {
    if (!listSize || listSize <= 0) return 0;

    // normalize rank (0 = top, 1 = bottom)
    const t = (rank - 1) / (listSize - 1 || 1);

    // curved difficulty scaling (tweak exponent if needed)
    const baseScore = 200 - 200 * Math.pow(t, 0.6);

    // progress factor
    const progress =
        (percent - (minPercent - 1)) /
        (100 - (minPercent - 1));

    let score = baseScore * progress;

    score = Math.max(0, score);

    // partial completion penalty (same behavior as yours)
    if (percent !== 100) {
        score -= score / 3;
    }

    return round(Math.max(score, 0));
}

export function round(num) {
    if (!('' + num).includes('e')) {
        return +(Math.round(num + 'e+' + scale) + 'e-' + scale);
    } else {
        const arr = ('' + num).split('e');
        let sig = '';
        if (+arr[1] + scale > 0) sig = '+';

        return +(
            Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) +
            'e-' +
            scale
        );
    }
}
