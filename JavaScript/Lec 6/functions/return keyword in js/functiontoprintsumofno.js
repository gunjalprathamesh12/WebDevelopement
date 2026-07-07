    function sum(n) {
    let som = 0;
    for (let i = 1; i <= n; i++) {
        som = som + i;
    }
    return som;
    }

    let sm = sum(100);
    console.log(sm);
