for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
      row += `${Math.pow(i, j - 1)} `;
    }
    console.log(row);
  }