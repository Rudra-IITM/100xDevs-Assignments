let cntr = 1;
// setInterval(() => {
//     console.log(cntr);
//     cntr++;
// }, 1000);

function updateCnt() {
    console.log(cntr);
    cntr++;
    setTimeout(updateCnt, 1000);
}

updateCnt();
