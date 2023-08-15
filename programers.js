// atomic한 코드를 복붙하는것 X 코드 재사용성 생각하기 
// index 없이 해결

function solveThis(solveFunction){
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.on('line', function (line) {
        input = [line][0]; 
    }).on('close', solveFunction);
        
    return rl;
}; 

let input

solveThis(ex);

function ex() {

}

// 문자열 출력하기
function ex1() {
    console.log(input);
}

// a와 b 출력하기 
function ex2() {
    const [a, b] = input.split(' ')
    console.log(`a = ${a}`)
    console.log(`b = ${b}`)
}

// 문자열 반복해서 출력하기
function ex3() {
    const [a, b] = input.split(' ')
    console.log(a.repeat(b))
}

// 대소문자 바꿔서 출력하기
function ex4() {
    const arr = input.split('').map((ele) => {
        if (ele === ele.toUpperCase()) {
            return ele.toLowerCase()
        }
        return ele.toUpperCase()
    })

    console.log(arr.join(''))
}

// 특수문자 출력하기 
function ex5() {
    console.log(`!@#$%^&*(\\'"<>?:;`)
}

//덧셈식 출력하기
function ex6() {
    const [a, b] = input.split(' ')
    const c = parseInt(a)  + parseInt(b) 
    console.log(`${a} + ${b} = ${c}`)
}

// 문자열 붙여서 출력하기
function ex7() {
    const [a, b] = input.split(' ')
    console.log(a+b)
}

// 문자열 돌리기
function ex8() {
    const arr = input.split('')
    for (const ele of arr) {
        console.log(ele)
    }
}


// 홀짝 구분하기 
function ex9() {
    if (input % 2 === 0) {
        return console.log(`${input} is even`)
    }
    return console.log(`${input} is odd`)
}

// 문자열 겹쳐쓰기
function ex10(my_string, overwrite_string, s) {
    const start = my_string.slice(0, s)
    const end = my_string.slice(s + overwrite_string.length )
    
    return start + overwrite_string + end
}

// 문자열 섞기
function ex11(str1, str2) {
    let a = ''    
    for (let i = 0; i < str1.length; i++ ) {
        a += str1[i] + str2[i]
    }
    
    return a
}

//문자 리스트를 문자열로 변환하기
function ex12(arr) {
    return arr.join('');
}

// 문자열 곱하기 
function ex13(my_string, k) {
    return my_string.repeat(k);
}

// 더 크게 합치기
function ex14(a, b) {
    const ab = Number(String(a) + String(b))
    const ba = Number(String(b) + String(a))
    if (ab > ba) {
        return ab
    }
    return ba
}

// 두 수의 연산값 비교하기
function ex15(a, b) {
    const multi = 2 * a * b
    const add = Number(String(a)+String(b))
    if (multi > add) {
        return multi
    }
    return add
}

// n의 배수
function ex16(num, n) {
    if(num % n === 0) {
        return 1
    }
    return 0
}

// 공배수
function ex17(number, n, m) {
    if(number % n === 0 && number % m === 0) {
        return 1
    }
    return 0
}

// 홀짝에 따라 다른 값 반환하기
// 처음 생각한 코드 .. 
// else 는 없지만 for 문이 두개나 들어가서 매우 불만족스러움..
function ex18(n) {
    let a = 0

    if ( n % 2 === 0 ) {
        // 짝수
        for (let i = 0; i <= n; i+= 2) {
            a += i*i
        }
        return a
    }
    
    for (let i = 1; i <= n; i+= 2) {
        a += i
    }
    return a;
}

// while 문으로 변경하였으나 조금 ... 아쉬움 ...  
function ex18(n) {
    let a = 0;
    let i = n % 2;
    
    while (i <= n) {
        if (n % 2 === 0) {
            a += i * i; // 짝수
        } else {
            a += i; // 홀수
        }
        i += 2;
    }

    return a;
}

// 조건 문자열
function ex19(ineq, eq, n, m) {
    const obj = {
        '>=': n >= m,
        '<=': n <= m,
        '>!': n > m,
        '<!': n < m
    }

    if ( obj[ineq+eq] ) {
        return 1
    }
    return 0
}

// flag에 따라 다른 값 반환하기
function ex20(a, b, flag) {
    if (flag) {
        return a + b
    }
    return a - b
}

// 코드 처리하기
function ex21(code) {
    let mode = 0;
    let ret = ''
    
    for (let idx = 0; idx < code.length; idx++) {
        switch (true) {
            case code[idx] === '1':
                mode = mode === 1 ? 0 : 1
                continue;
            case mode === 1 && idx % 2 === 1 :
                ret += code[idx]
                break;
            case mode === 0 && idx % 2 === 0:
                ret += code[idx]
                break;
        }    
    }

    return ret === '' ? "EMPTY" : ret
}

// 등차수열의 특정한 항만 더하기

// reduce를 써야겠다! 라는 생각은 만족하였지만 그 외에는 전체적으로 불만족스러움 개선 필요.. 
function ex21(a, d, included) {
    let arr = []
    
    for (let [idx, ele] of included.entries()) {
        if (ele) {
            arr.push(idx)
        }
    }
    
    let check = arr.reduce((acc, cur) => {
        let calculatedValue = a + (cur * d);
        console.log(acc, cur, d, calculatedValue, 'reduce');
        return acc + calculatedValue;
        
    }, a)
    
    return check - a
}

/** chatGPT 에게 리팩토링을 요청했는데 이러한 형식으로 나왔고 
*   프로그래머스 상에선 성능이 오히려 별로였다 ... 그리고 음... 굳이 윗부분도 reduce를 사용해야하나 생각도 하고...
*   차라리 그럴거면 위의 for..of 문을 그냥 for 문으로 바꾸는게 낫지않나 생각도 하는중...
*/

function ex21(a, d, included) {
    // included 안의 true값을 가진 index 만 찾음 
    const arr = included.reduce((acc, cur, idx) => {
        if (cur) {
            acc.push(idx);
        }
        return acc;
    }, []);

    // 누산기를 통해서 그 값들을 계산함 
    const answer = arr.reduce((sum, idx) => {
        const calculatedValue = a + (idx * d);
        return sum + calculatedValue;
    }, 0);

    return answer;
}



// 주사위 게임2
function ex22(a, b, c) {
    let answer = 0;
    if (a === b && b === c) {
        answer =   (a + b + c) * (a**2 + b**2 + c**2 ) * (a ** 3 + b ** 3 + c ** 3 )
    } else if (a === b || a === c || b === c) {
        answer =   (a + b + c) * (a **2 + b **2 + c **2 );
    } else {
        answer = a + b + c  
    }
    return answer    
}


// 원소들의 곱과 합
function ex23(num_list) {
    let add = 0 
    let multiple = num_list[0]
    
    for(let ele of num_list) {
        add += ele
        multiple *= ele
    }
    
    console.log(add**2, multiple )
    if (multiple/3 < add**2) {
        return 1
    } 
    return 0 
}

