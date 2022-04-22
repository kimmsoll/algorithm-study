// 같은 레벨 단어들을 모두 확인 후 다음 레벨로 넘어가므로, bfs 를 써서 풀이할 수 있다

function sliceWord(word, i) {
    const wordToArray = word.split('');
    wordToArray.splice(i, 1);
    return wordToArray.join('');
}

function solution(begin, target, words) {
    // target 이 words 안에 없다면 답이 없으므로, 0을 리턴
    if (!words.includes(target)) return 0;
    let answer = 0;
    // visited 에 word 가 중복 없이 들어가야 하므로 Set 을 사용한다
    const visited = new Set();
    let temp = [];
    const queue = [];

    queue.push(begin);

    while (queue.length) {
        // queue 에서 하나씩 뽑아서 target과 일치하는지 확인 후, 방문 처리한다
        const word = queue.shift();
        visited.add(word);

        if (word === target) return answer;

        // word와 한 글자만 다른 글자들 중 방문하지 않은 글자들을 temp 에 넣어준다
        for (let i=0; i<word.length; i++) {
            const letter = sliceWord(word, i);
            const matched = words.filter((v) => !visited.has(v) && sliceWord(v, i) === letter);
            temp.push(...matched);
        }

        // queue 가 비었다면, temp 에 추가한 단어들을 추가한다
        if (queue.length < 1) {
            answer++;
            queue.push(...temp);
            temp = [];
        }
    }

    return answer;
}