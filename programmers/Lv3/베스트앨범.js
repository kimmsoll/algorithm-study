function solution(genres, plays) {
    let genreCount = {};
    let bestAlbum = [];
    // 장르별 재생 수를 계산하여 genreCount obj에 '장르 : 횟수' 형태로 담는다
    genres.map((v, idx) => {
        genreCount[v] = genreCount[v] ? genreCount[v] + plays[idx] : plays[idx];
    });
    // 많이 재생된 순서로 정렬한다
    genreCount = Object.entries(genreCount).sort((a, b) => b[1] - a[1]);
    genreCount.forEach((v) => {
        let g = v[0];
        let temp = [];
        genres.map((v, idx) => {
            if (v === g) {
                temp.push([v, idx, plays[idx]]);
            }
        });
        // 한 장르에 두 곡씩만 베스트 앨범에 담으므로, 2개를 넘어가면 잘라준다
        temp.sort((a, b) => b[2] - a[2] || a[1] - b[1]).splice(2);
        bestAlbum.push(...temp.map((v) => v[1]));
    });
    return bestAlbum;
}