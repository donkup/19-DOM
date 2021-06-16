function time(start, end, step) {
    const pamokuKiekis = Math.floor((end - start) * 60 / step);
    console.log(pamokuKiekis + 1);
    let newEnd = end;
    if (start > end) {
        newEnd = 24 + end;

    }
    for (let i = start * 60; i <= newEnd * 60; i += step) {
        const h = Math.floor(i / 60);
        const m = i - (h * 60);
        const hMod = h % 24;
        console.log(i, `${h % 24 < 10 ? '0' + hMod : hMod}:${m < 10 ? '0' + m : m}`);

    }
}
// time(8, 13, 45);
// time(1, 4, 31);
time(22, 1, 45);
