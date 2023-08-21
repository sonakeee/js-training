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
    let a = num_list.reduce((acc, cur) => {
        return cur + acc
    })
    let b = num_list.reduce((acc, cur) => {
        return cur * acc
    })
    
    if (b < a ** 2) {
        return 1
    } 
    return 0
}

// 이어 붙인 수
function ex24(num_list) {
    let a = ''
    let b = ''
    for(let ele of num_list) {
        if (ele % 2 === 0) {
            a += ele
        } else {
        b += ele
        }
    }
    return Number(a) + Number(b)
}

// 마지막 두 원소
// 음 좀 개떡같다 그냥 풀리는대로 푼 느낌이라서 리팩토링을 하고싶다.
function ex25(num_list) {
    const leng = num_list.length
    const a =  num_list[leng-2]
    const b = num_list[leng-1]
    let check = num_list
    
    let answer = 0
    if (a < b ) {
        answer = b-a 
    } else {
        answer = b*2
    }
    check.push(answer)
    return check
}

// 이렇게 변경했지만 구조분해할당 외엔 마음에든다는 느낌이없다..
function ex25(num_list) {
    let check = num_list
    const [a, b] = num_list.slice(-2); 
    let answer = 0
    
    if (a < b ) {
        answer = b-a 
    } else {
        answer = b*2
    }
    
    check.push(answer)
    return check
}

// 이건 그나마 조금 괜찮다.  
function ex25(num_list) {
    const [a, b] = num_list.slice(-2); 
    
    if (a < b ) {
        num_list.push(b-a)
        return num_list 
    } 
    num_list.push(b*2)
    return num_list
}


// 수 조작하기
function ex26(n, control) {
    for (let ele of control) {
        switch(ele) {
            case 'w':
                n += 1   
                break;
            case 's':
                n -= 1
                break;
            case 'd':
                n += 10
                break;
            case 'a':
                n -= 10
                break;
        }    
    }
    return n
}

// 수 조작하기 2
function ex27(numLog) {
    let a = ''
    
    for(let i = 0; i < numLog.length; i++) {
        switch (true) {
            case numLog[i]+1 === numLog[i+1]:
                a += 'w';
                break;
            case numLog[i]-1 === numLog[i+1]:
                a += 's';
                break;
            case numLog[i]+10 === numLog[i+1]:
                a += 'd';
                break;
            case numLog[i]-10 === numLog[i+1]:
                a += 'a';
                break;
        }
    }
    return a
}
// 음... 좀 더 괜찮은 방법이 있을듯...

// chatGPT에 리팩토링 요청, forEach를 사용해서 순회 
// 이것도 마찬가지로 index를 사용하기는 하지만 위에 저것보단 좀 나은듯... 
function ex27(numLog) {
    let a = '';

    numLog.forEach((cur, index) => {
        const next = numLog[index + 1];
        const diff = next - cur;

            switch (diff) {
                case 1:
                    a += 'w';
                    break;
                case -1:
                    a += 's';
                    break;
                case 10:
                    a += 'd';
                    break;
                case -10:
                    a += 'a';
                    break;
            }
    });

    return a;
}

// 수열과 구간 쿼리 3
function ex28(arr, queries) {
    queries.forEach((ele)=> {
        [arr[ele[0]], arr[ele[1]]] = [arr[ele[1]], arr[ele[0]]];
    })
    return arr
}


// 수열과 구간 쿼리 2
function ex29(arr, queries) {
    let answer = []
    queries.forEach((ele)=> {
        let b = arr.filter((val, idx) => ele[0] <= idx && ele[1] >= idx && ele[2] < val)

        answer.push(Math.min(...b) === Infinity ? -1 : Math.min(...b))
    })
    return answer
}
// 그냥 진짜 되는대로 풀어버렸다 ...

// 그럼 바로 리팩토링이지
function ex29(arr, queries) {
    // forEach 가 아닌 map 으로 2차원배열을 순회
    return queries.map(query => {
        // slice 를 통해서 잘라낸다는걸 명확히 ? , filter 를 통해서 낮은값의 val를 걸러냄
        const filteredArr = arr.slice(query[0], query[1] + 1).filter(val => val > query[2]);
        // 위에서도 인피니티를 쓸까 길이를 쓸까 고민했었는데... 흠...
        return filteredArr.length > 0 ? Math.min(...filteredArr) : -1;
    });
}
// 약간 아쉽긴한데 위에것보단 좀 나은것같다


// 수열과 구간 쿼리 4
// 첫 답...
function ex30(arr, queries) {
    let answer = arr
    queries.forEach((query)=> {
        answer = arr.map((val, idx)=> {
            if(idx % query[2] === 0 && idx >= query[0] && idx <= query[1]) {
                return answer[idx] + 1
            }
            return answer[idx]
        })
    })
    return answer

}

// 리팩토링 , 아 누산기를 잊고있었다... 누산기능을 위해서 answer 를 따로 빼두었었는데... 굳이... 그럴필요가없었다 . reduce 를 사용하면 누산하는구나 하는게 한번에 와닿을듯...
function ex30(arr, queries) {
    // reduce의 누산기능을 통해 해결 acc, cur , 초기값은 arr 을 사용한다
    return queries.reduce((answer, query) => {
        // map 을 통해서 배열 각 원소에 연산을 할것,
        return answer.map((val, idx) => {
            // 조건식 , 좀 까다롭게 적혀있어서 좀 가볍게 할 수 있는 방법이 없을까 생각해보는것도 괜찮을듯... (변수로 빼는거 제외..)
            if (idx % query[2] === 0 && idx >= query[0] && idx <= query[1]) {
                // 조건에 해당하면 value 에 +1
                return val + 1;
            }
            return val;
        });
    }, arr);
}


// 배열 만들기 2
function ex31(l, r) {
    let a = []
    for(let i = l; i <= r; i++) {
        if (/^[05]+$/.test(String(i))) {
            a.push(i)
        }
    }
    return a.length === 0 ? [-1] : a
}

// 카운트 업
function ex32(start, end) {
    let a = []
    for(let i = start; i <= end; i++) {
        a.push(i)
    }
    return a
}


// 콜라츠 수열 만들기
function ex33(n) {
    let answer = []

    while (true) {
        answer.push(n)

        if (n=== 1) {
            break;
        }

        if(n % 2 === 0) {
            n = n / 2
        } else {
            n = n * 3 + 1
        }
    }
    return answer
}
// 그냥 딱 보자마자 이건 while 이다 생각이 들었다..


// 배열 만들기 4
// else if ... 불편... switch 로 하는게 나을까...? 생각 ...
function ex34(arr) {
    let stack = [];
    let i = 0;

    while (i < arr.length) {
        if (stack.length === 0) {
            stack.push(arr[i]);
            i++;
        } else if (stack[stack.length - 1] < arr[i]) {
            stack.push(arr[i]);
            i++;
        } else {
            stack.pop();
        }
    }

    return stack;
}

// 간단한 논리 연산
function ex35(x1, x2, x3, x4) {
    const a = x1 || x2
    const b = x3 || x4
    if (a && b) {
        return true
    }
    return false
}

// 주사위 게임 3
// 어려움 나중에 다시풀기 36




// 글자 이어 붙여 문자열 만들기
function ex37(my_string, index_list) {
    let a = ''
    for(let i of index_list) {
        a += my_string[i]
    }
    return a
}

// 9로 나눈 나머지
function ex38(number) {
    let a = [...number].reduce((acc, cur) => Number(acc) + Number(cur))
    return Number(a) % 9
}

// 문자열 여러 번 뒤집기
// 나중에 다시풀기 40


// 배열 만들기 5
function ex41(intStrs, k, s, l) {
    let a = []
    intStrs.map((ele)=> {
        if (ele.substring(s, s+l) > k) {
            a.push(Number(ele.substring(s, s+l)))
        }
    })
    return a
}

// 부분 문자열 이어 붙여 문자열 만들기
function ex42(my_strings, parts) {
    let a = ''
    for(let i = 0; i < parts.length; i++) {
        a += my_strings[i].slice(parts[i][0], parts[i][1]+1)
        
    }
    return a
}

// 문자열의 뒤의 n글자
function ex43(my_string, n) {
    let a = [...my_string].reverse().slice(0, n).reverse().join('')
    return a
}

// 접미사 배열
function ex44(my_string) {
    let a = [...my_string].reverse()
    let b = []
    for(let i = 1; i <= my_string.length; i++) {
        b.push(a.slice(0, i).reverse().join(''))
    }
    return b.sort()
}


// 접미사인지 확인하기
function ex45(my_string, is_suffix) {
    let a = [...my_string].reverse()
    let b = []
    for(let i = 1; i <= my_string.length; i++) {
        b.push(a.slice(0, i).reverse().join(''))
    }
    if(b.includes(is_suffix)) {
        return 1
    }
    return 0
}