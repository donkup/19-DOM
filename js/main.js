function time(start, end, step) {
    const pamokuKiekis = Math.floor((end - start) * 60 / step);
    console.log(pamokuKiekis + 1);
    for (let i = start * 60; i <= end * 60; i += step) {
        const h = Math.floor(i / 60);
        const m = i - (h * 60);
        console.log(i, `${h}:${m < 10 ? '0' + m : m}`);

    }
}
time(8, 13, 45);
time(1, 4, 31);