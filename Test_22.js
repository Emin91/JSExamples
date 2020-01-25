//Функия с рекрсией

function pow(x, n) {
  if (n == 1) {
      let iks = x;
      console.log(iks, '---iks');
    return iks;
  } else {
      let y = x * pow(x, n - 1);
      console.log(x, n, '---prinimaem');
      console.log(y + '---y'); 
    return y;
  }
}

pow(2, 3); // 8