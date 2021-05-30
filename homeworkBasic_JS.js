//1
function draw(n) {
    let star = "";
    for (let i = 1; i <= n; i++){
        star = star + "*"
    }
        console.log(star)
}

//2
function draw(n) {
    let star = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            star += '*'
        }
        star += '\n'
    }
    console.log(star)
}

//3
function draw(n) {
    let num = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            num += j
        }
        num += '\n'
    }
    console.log(num)
}

//4
function draw(n) {
    let num = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            num = num+i;
        }
        num = num+'\n';
    }
    console.log(num)
}

//5
function draw(n) {
    let num = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            num = num+(n-i);
        }
        num = num + '\n';
    }
    console.log(num);
}

//6
function draw(n) {
    let num = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            num = num + j + num + j + 1;
        }
        num = num + '\n';
    }
    console.log(num);
}
draw(1)
console.log(draw(2))


//9
function draw(n) {
    let num = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            num = num + (2 * j)
        }
        num = num + '\n';

    }
    console.log(num);
}

//10
function draw(n) {
    let num = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            num = num+(i*j);
        }
        num = num + '\n';
    }
    console.log(num);
}

//12
function draw(n) {
    let num = '';
    let a = "-";
    let b = "*";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == j) { num += a } else {num += b}; 
        }
        num = num + '\n';
    }
    console.log(num);
}
//14
function draw(n) {
    let num = '';
    let a = "-";
    let b = "*";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (n+1 == i+j) { num += a } else { num += b };
        }
        num = num + '\n';
    }
    console.log(num);
}

//15
function draw(n) {
    let num = '';
    let a = "-";
    let b = "*";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j-i>0) { num += a } else { num += b };
        }
        num = num + '\n';
    }
    console.log(num);
}
//16
function draw(n) {
    let num = '';
    let a = "-";
    let b = "*";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i+j<n) { num += b } else { num += a };
        }
        num = num + '\n';
    }
    console.log(num);
}

//17
function draw(n) {
    let num = '';
    let a = "-";
    let b = "*";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j - i > 0) { num += a } else { num += b };
        }
        num = num + '\n';
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j + i <= n) { num += b } else { num += a };
        }
        num = num + '\n';
    }
    console.log(num);
}
//18
function draw(n) {
    let num = '';
    let b = '-';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i+j<=n) { num+=i } else { num += b };
        }
        num = num + '\n';
    }
    console.log(num);
}

//20
function draw(n) {
    let num = '';
    let a = "-";
    let b = "*";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i + j <= n) { num += a } else { num += b };
        }
        num = num + '\n';
    }
    console.log(num);
}

//23
function draw(n) {
    let num = '';
    let a = "-";
    let b = "*";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i - j >= 1) { num += a } else { num += b };
        }
        num = num + '\n';
    }
    console.log(num);
}

//24
function draw(n) {
  let num = '';
  let a = 1
  let b = '-';
  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
          if (i+j>n) { num +=a; a++ } else { num += b };
      }
      num = num + '\n';
  }
  for (let i = 1; i < n; i++) {
      for (let j = 1; j <= n; j++) {
          if (i-j>=0) { num += b } else { num +=a; a++  };
      }
      num = num + '\n';
  }
  console.log(num);
}

draw(2);
draw(3);
draw(4);