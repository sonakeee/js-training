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

// 접두사인지 확인하기
function ex46(my_string, is_prefix) {
    let a = [...my_string]
    let b = []
    for(let i = 1; i <= my_string.length; i++) {
        b.push(a.slice(0, i).join(''))
    }
    if(b.includes(is_prefix)) {
        return 1
    }
    return 0
}


// 문자열 뒤집기 
function ex47(my_string, s, e) {
    let q = [...my_string]
    let a = q.slice(s, e+1).reverse().join('')
    q.splice(s, a.length, a )
    
    return q.join('')
}

// 세로 읽기
function ex48(my_string, m, c) {
    let arr = [...my_string]
    let a = ''
    for(let i = 0; i < my_string.length/m; i++) {
        a += arr.splice(0, m)[c-1]
    }
    return a
}

// qr code
function ex49(q, r, code) {
    let a = [...code]
    let b = ''
    a.map((ele, idx)=> {
        if (idx%q === r) {
            b += ele
        }
    })
    
    return b
}


// 문자 개수 세기
function ex50(my_string) {
    let a = [...my_string]
    const b = Array(52).fill(0);
    
    
    a.map((ele)=> {
        const c = ele.charCodeAt()
        if ( 64 < c && c < 91 ) {
            b[c - 65] += 1
        } else if (96 < c && c < 123) {
            b[c - 71] += 1
        }
    })
    return b
}

// 배열 만들기 1
function ex51(n, k) {
    let a = []
    for(let i =1; i <= n; i++) {
        if(i%k === 0) {
            a.push(i)
        }
    }
    return a
} 

// 글자 지우기
function ex52(my_string, indices) {
    let a = [...my_string]
    indices.slice().sort((a, b) => a - b).reverse().map((ele)=> {
        a.splice(ele, 1)
    })
    return a.join('')
    
}


// 카운트 다운
function ex53(start, end_num) {
    let a = [ ]
    for(let i = start; i >= end_num; i-- ) {
        a.push(i)
    }
    return a
}

// 가까운 1 찾기 
function ex54(arr, idx) {
    let a = -1
     for (let i = idx; i < arr.length; i++) {
        if (arr[i] === 1) {
            a = i;
            break; // 순회 중단
        }
    }
    
    return a
}


// 리스트 자르기
function ex55(n, slicer, num_list) {
    switch (n) {
        case 1:
            return num_list.splice(0, slicer[1]+1)
        case 2:
            return num_list.slice(slicer[0])            
        case 3:
            return num_list.slice(slicer[0], slicer[1]+1)
        case 4:
            return num_list.slice(slicer[0], slicer[1]+1).filter((ele, idx) => idx % slicer[2] === 0);
    }
}

// 첫 번째로 나오는 음수
function ex56(arr, idx) {
    let a = -1;

    for( let i = 0; i < arr.length; i++) {
        if(arr[i] < 0 ) {
            a = i
            break;
        }
    }

    return a;
}

// 배열 만들기 3
function ex57(arr, intervals) {
    let a = []
    intervals.forEach((ele) => {
        a.push(...arr.slice(ele[0], ele[1]+1))
    })
    return a
}

// 2의 영역
// 오래간만에 진짜진짜 맘에안드는 코드가 나와버렸다 

function ex58(arr) {
    let idxBox = []
    arr.map((ele, idx) => {
        if(ele === 2) {
            idxBox.push(idx)
        }
    })
    
    if (idxBox.length > 0) {
        return arr.slice(idxBox[0], idxBox[idxBox.length-1]+1 ?? null )    
    } else {
        return [-1]
    }
         
}


// 일단 gpt 한테 요청한 리팩토링 
function ex58(arr) {
    const idxBox = [];
    
    arr.forEach((ele, idx) => {
        if (ele === 2) {
            idxBox.push(idx);
        }
    });
    
    if (idxBox.length > 0) {
        const [startIdx, endIdx] = [idxBox[0], idxBox[idxBox.length - 1]];
        return arr.slice(startIdx, endIdx + 1);
    } else {
        return [-1];
    }
}
// 맘에안드는건 마찬가지긴한데,, 음 그래도 구조분해할당 한건 좀 깔끔하긴 한듯.. 가독성이 올라감

// 아 그리고 forEach는 return 하는것이 없고 map 은 return 이 있다는것이 가장 큰 차이점이라는데 앞으론 좀 유의하면서 사용해야겠다. 
// 근데 사실 저 코드엔 리턴을 넣어줘도... 넣어주지않아도 괜찮지 않나... ? 
// 관련해서 검색을 좀 해봤는데 
// 변경 사항이 반영된 새 배열의 리턴이 필요한가에 대한 이야기였다, 근데 사실 나는 빈 배열을 미리 선언함으로써 굳이 리턴이 필요한가? 라는 의문... 가독성적인 부분?
// map 함수는 원본 함수를 변경하지않으니 이러한 방식을 생각했는데 흠 ... 약간 조금 더 찾아봐야겠다 


function test(arr) {

    /** 이런식으로 리턴을 할 수 있지만 명시적으로 undefined가 들어가게 된다..
     *   map 은 반환값을 항상 가지기 떄문에 map 안에 if 가 들어가서  쓸모없는 값들을 걸러내야한다면 적합한 선택이 아닌것같다. 
     * 이런 상황에서 index 가 아닌 요소를 얻는다면 filter를 사용할 수 있었을텐데... 하는 아쉬움 
    */  


    // 빈 배열을 선언하는것이 아니라 바로 변수할당
    const idxBox = arr.map((ele)=> {
        if (ele === 2) {
            // 이 부분 또한 간결해지게 되었다. 
            return idx
        }
        return;
    })

    // 결국 이 문제에서는  forEach 가 더욱 간결하게 사용될 수 있을거라고 생각하게 되었다 . 
    const idxBox2 = [];
    
    arr.forEach((ele, idx) => {
        if (ele === 2) {
            idxBox2.push(idx);
        }
    });
}
// 배열의 모든 값을 순회할떄는 map 과 forEach중에 어떤 선택을 해야할까 고민한적이 꽤 있었는데 이번에 조금 더 적합하게 사용가능하게 될것같다. 
// 맵을 상당히 잘못쓰고있었다... 


// https://emewjin.github.io/array-map/#-map%EC%97%90%EC%84%9C-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98%EB%A5%BC-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0
// 보다가 정리가 잘 되어있어 일단 저장. 


// 배열 조각하기
function ex59(arr, query) {
    query.forEach((ele,idx) => {
        if (idx % 2 === 0) {
            arr.splice(ele + 1)
        } else {
            arr.splice(0, ele)        
        }
    })
    return arr
}

// 이런식으로도 가능 , 좀 return 이 많긴하다..... 
// 위의 forEach에서는 return 을 사용하거나 else 문을 사용해야하는데 , return 을 사용한다면 forEach말고 map으로도 할수 있지않을까 하는 생각에 map으로 만들었다 
// 근데 조금 리턴이 많아보인다는 생각이 들긴하는데 ... 
// 프로그래머스 성능상으로는 이게 좀 더 나은 성능을 보여준다
function ex59(arr, query) {
    
    query.map((ele,idx) => {
        if (idx % 2 === 0) {
            return arr.splice(ele + 1)
        } 
            return arr.splice(0, ele)        
    })
    return arr
}

// n 번째 원소부터
function ex60(num_list, n) {
    return num_list.slice(n-1)
}

// 순서 바꾸기 
// 솔직히 좀 가독성 낮추면... 
function ex61(num_list, n) {
    const end = num_list.slice(0, n)
    const start = num_list.slice(n)
    return [...start, ...end]
}

// 이런것도 안될건 없지만... 
function ex61(num_list, n) {
    return [...num_list.slice(n), ...num_list.slice(0, n)]
}

// 왼쪽 오른쪽
function ex62(str_list) {
    let a = []
    for(let i = 0; i < str_list.length; i++) {
        if (str_list[i] === 'l') {
            a = str_list.slice(0, i)
            break;
        } else if (str_list[i] === 'r') {
            a = str_list.slice(i+1)
            break;
        }
    }
    return a
    
}


// n 번째 원소까지
function ex63(num_list, n) {
    return num_list.slice(0, n)
}

// n개 간격의 원소들
function ex64(num_list, n) {
    let a = []
    for (let i = 0; i < num_list.length; i+=n) {
        a.push(num_list[i])
    }
    return a
}


// 홀수 vs 짝수
function ex65(num_list) {
    let a = 0 
    let b = 0
    num_list.map((ele, idx) => {
        if (idx % 2 === 0) {
           return a += ele 
        }
        return b += ele
    })
    if (a>b) {
        return a
    }
    return b
}
// 역시나 맘에들지않음 , 초기값 설정도 그렇고 , return 너무 남발함 적합한가 싶은 map 사용 등 


// 완전 처음에 구조분해할당을 사용해볼까 했었는데 이러한 방법도 있었다 ,,, reduce의 새로운 사용방법도 있었음 
function ex65(num_list) {
    // 누산기를 a와 b로 나누는건 생각도못했는데 이러한 방식도 있었다... 
    const [a, b] = num_list.reduce(([accA, accB], ele, idx) => {
        if (idx % 2 === 0) {
            // acc B 에는 아무것도 더하지않고 그냥 넘겨줌 
            return [accA + ele, accB];
        } else {
            return [accA, accB + ele];
        }
        // 초기값은 0 으로 
    }, [0, 0]);

    // 더 큰 값을 찾는것 
    return Math.max(a, b);
}

// 5명씩
function ex66(names) {
    let a = []
    names.map((ele, idx)=> {
        if(idx%5 === 0) {
            a.push(ele)
        }
    })
    return a
}


// 할 일 목록
function ex67(todo_list, finished) {
    let a = []
        
    finished.forEach((ele, idx) => {
        if(ele === false) {
            a.push(idx)
        }
    })
    let b = []
    todo_list.map((ele, idx)=> {
        if(a.includes(idx)) {
            b.push(ele)
        }
    })
    return b
}

// n보다 커질 때까지 더하기
function ex68(numbers, n) {
    return numbers.reduce((acc, cur) => {
        if (acc > n) {
            return acc
        }
        return acc + cur
    })
}


//수열과 구간 쿼리 1
function ex69(arr, queries) {
    let a = arr
    queries.forEach((ele)=> {
        a = a.map((val, idx)=> {
            if ( ele[0] <= idx && idx <= ele[1]) {
                return val += 1
            } else {
                return val
            }
        })
    })
    return a
}

// 리팩토링 리스트
function ex69(arr, queries) {
    // 항상 두개의쌍을 가지기때문에 이런식으로 구조분해할당을 가능하겠구나...
    for (const [s, e] of queries) {
        for (let i = s; i <= e; i++) {
            arr[i] += 1;
        }
    }
    return arr;
}

// 성능적으로는 괜찮은데,,
function ex69(arr, queries) {
    queries.forEach((ele) => {
        for (let i = ele[0]; i <= ele[1]; i++) {
            arr[i] += 1;
        }
    });
    return arr;
}


//  조건에 맞게 수열 변환하기 1
function ex70(arr) {
    return arr.map((ele)=> {
        if (ele < 50 && ele % 2 === 1) {
            return ele * 2
        } else if (ele >= 50 && ele % 2 ===0) {
            return ele / 2
        }
        return ele
    })
}

