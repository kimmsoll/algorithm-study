function solution(genres, plays) {
    let genreCount = {};
    let bestAlbum = [];
    genres.map((v, idx) => {
        genreCount[v] = genreCount[v] ? genreCount[v] + plays[idx] : plays[idx];
    });
    genreCount = Object.entries(genreCount).sort((a, b) => b[1] - a[1]);
    genreCount.forEach((v) => {
        let g = v[0];
        let temp = [];
        genres.map((v, idx) => {
            if (v === g) {
                temp.push([v, idx, plays[idx]]);
            }
        });
        temp.sort((a, b) => b[2] - a[2] || a[1] - b[1]).splice(2);
        bestAlbum.push(...temp.map((v) => v[1]));
    });
    return bestAlbum;
}