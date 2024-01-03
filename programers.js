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

// 조건에 맞게 수열 변환하기 2


// 길이에 따른 연산 
function ex73(num_list) {
    if(num_list.length > 10) {
        return num_list.reduce((acc, cur) => {
            return acc + cur
        })
    } 
    return num_list.reduce((acc, cur) => {
            return acc * cur
    })
}

// 원하는 문자열 찾기 
function ex74(myString, pat) {
    if (myString.toLowerCase().includes(pat.toLowerCase())) {
        return 1
    }
    return 0
}

// 대문자로 바꾸기
function ex75(myString) {
    return myString.toUpperCase()
}

// 소문자로 바꾸기 
function ex76(myString) {
    return myString.toLowerCase()
}


// 배열에서 문자열 대소문자 변환하기
function ex77(strArr) {
    return strArr.map((ele, idx) => {
        if ( idx % 2 === 0) {
            return ele.toLowerCase()
        }
        return ele.toUpperCase()
    })
}

// A 강조하기
function ex78(myString) {
    return [...myString].map((ele) => {
        if(ele === 'a' || ele === 'A') {
            return ele.toUpperCase()
        }
        return ele.toLowerCase()
    }).join('')
}

// 특정한 문자를 대문자로 바꾸기
function ex79(my_string, alp) {
    return [...my_string].map((ele)=> {
        if(ele === alp) {
            return ele.toUpperCase()
        }
        return ele
    }).join('')
}


//	특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
function ex80(myString, pat) {
    let a = []
    for (let i = 0; i < myString.length; i++ ) {
        // pat의 길이에 맞게 자르기
        const slice = myString.slice(i, i+pat.length)        
        
        if (slice === pat) {
            a = myString.slice(0, i+pat.length)
        }
        
    }
    return a
} 


// 문자열이 몇 번 등장하는지 세기
function ex81(myString, pat) {
    let a = 0
    const patLeng = pat.length

    for(let i = 0; i <= myString.length-patLeng; i++) {
        const target =  myString.slice(i, i+patLeng)
        console.log(i, target) 
        if (target === pat) {
            a += 1
        }
    }
    return a
}

// ad 제거하기
function ex82(strArr) {
    let a = [] 
    strArr.forEach((ele)=> {
        if (!ele.includes('ad')) {
            a.push(ele) 
        }
    })
    return a
}

// 공백으로 구분하기 1
function ex83(my_string) {
    return my_string.split(' ')
}

//공백으로 구분하기 2
function ex84(my_string) {
    let a = []
    my_string.split(' ').forEach((ele)=> {
        if (ele !== '') {
            a.push(ele)
        }
    })
    return a
}

// x 사이의 개수
function ex85(myString) {
    return myString.split('x').map((ele)=> {
        return ele.length        
    })
}

// 문자열 잘라서 정렬하기
function ex86(myString) {
    let a = []
    myString.split('x').sort().forEach((ele)=> {
        if (ele !== '') {
            a.push(ele)
        }
    })
    return a
}

// 리팩토링한 코드 
function ex86(myString) {
    // 맵이아닌 필터로 빈 문자열 걸러내기... 이게 훨씬 더 사용성에 맞는것같다. 
    return myString.split('x').filter(Boolean).sort();
}

// 간단한 식 계산하기
function ex87(binomial) {
    let [a, op, b]  = binomial.split(' ')
    const num_a = Number(a)
    const num_b = Number(b)
    switch (op) {
        case '+':
            return num_a + num_b
        case '-':
            return num_a - num_b
        case '*':
            return num_a * num_b
    }
}


// 문자열 바꿔서 찾기
function ex88(myString, pat) {
    let a = [...myString].map((ele)=> {
        if(ele === 'A') {
            return 'B'
        }
        return 'A'
    })
    
    if ( a.join('').includes(pat) ){
        return 1
    }
    return 0
}


// rny_string
function ex89(rny_string) {
    let a  = [...rny_string].map((ele) => {
        if (ele === 'm') {
            return 'rn'
        }
        return ele
    })
    return a.join('')
}

// 세 개의 구분자 
function ex90(myStr) {
    // abc를 한번에 split 해버리기 그리고 필터로 여백 제거
    const resultArray = myStr.split(/[abc]/).filter(Boolean);
    return resultArray.length === 0 ? ["EMPTY"] : resultArray;
}



// 배열의 원소만큼 추가하기
function ex91(arr) {
    let a = []
    arr.forEach((ele)=> {
        for(let i =0; i< ele; i++) {
            a.push(ele)
        }
    })
    return a
}

// 리팩토링
function ex91(arr) {
    // Array.from(유사배열 객체들을 배열형태로,
    // 두번째 파라미터는 매핑 함수 ele크기의 Array 를 만든 후 그 안을 ele 값으로fill 채워준다음 flat 으로 2차원인걸 풀어줌
    return Array.from(arr, ele => Array(ele).fill(ele)).flat();
}

function ex91(arr) {
    // reduce ..에 concat 을 써서 누산기를 사용한다...? 처음보는 방식이고 생각도 못했는데 좋은 방법이다.. 익혀둬야겠다
    // acc 에 지속적으로 Array.fill (이부분은 위와 같다) 를 추가해줘서 완성 ... 솔직히 이게 제일 맘에 듦...
    return arr.reduce((acc, ele) => acc.concat(Array(ele).fill(ele)), []);
}

//빈 배열에 추가, 삭제하기
function ex92(arr, flag) {
    let x = []
    flag.forEach((ele, idx)=> {
        if(ele) {
            for(let i = 0; i < arr[idx]*2; i++) {
                x.push(arr[idx])
            }
        } else {
            x.splice(x.length-arr[idx], arr[idx])
        }
    })
    return x
}

// 리팩토링 한 코드
function ex92(arr, flag) {
    const result = [];

    flag.forEach((ele, idx) => {
        if (ele) {
            // for문을 사용하지않고 스프레드연산자, Array를 통해서 넣어야 하는 횟수를 조정하고 , fill 로 value를 채워줌
            result.push(...Array(arr[idx] * 2).fill(arr[idx]));
        } else {
            result.splice(result.length - arr[idx], arr[idx]);
        }
    });

    return result;
}


// 배열 만들기 6
function ex93(arr) {
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] !== arr[i]) {
            stack.push(arr[i]);
        } else {
            stack.pop();
        }
    }

    return stack.length === 0 ? [-1] : stack;
}


// 무작위로 K개의 수 뽑기
function ex94(arr, k) {
    // set ,  오랜만에 들어봄... set을 통해서 array안의 값이 중복되지않게함
    // 중복된 값들을 제거하기위한 방법.
    // Array.from() 은 순회가능한 이터러블 객체를 배열로 변환함, set은 이터러블 내장 객체,
    // new Set(arr) , 배열 arr에서 중복된 값을 제거하고 set 객체로 생성
    // Array.from() 으로 객체를 배열로 변환.
    const uniqueElements = Array.from(new Set(arr));

    // set 안의 개수를 k개로만 유지시키기 위해서 한번 걸러냄
    const result = uniqueElements.slice(0, k);

    // 만약 개수가 모자라다면 -1을 채워주기위해 while문 사용
    while (result.length < k) {
        result.push(-1);
    }

    return result;
}
// 음 원래 풀었던 코드는 for문을 통해서 돌렸었는데 set이라는 자료구조를 아예 염두조차 안했었다...
// 근데 다행이 gpt한테 리팩토링 맡기니까 잘 수정해줘서 이런 상황에서 set을 쓸 수 있구나 하는걸 배웠다..


// 배열의 길이를 2의 거듭제곱으로 만들기
function ex95(arr) {
    let number = 1;
    // 거듭제곱으로 가장 가까운 거듭제곱 값을 구함
    while (number < arr.length) {
        number *= 2;
    }

    const endPoint = number - arr.length;
    // 그 숫자만큼 0 을 집어넣음
    for (let i = 0; i < endPoint; i++) {
        arr.push(0);
    }

    return arr;
}


// 배열 비교하기
function ex96(arr1, arr2) {
    let a = 0
    const firstValue = arr1.reduce((acc, cur) => acc + cur)
    const secondValue = arr2.reduce((acc, cur) => acc + cur)

    switch (true) {
        case arr1.length > arr2.length:
            a = 1
            break;
        case arr1.length < arr2.length:
            a = -1
            break;
        default:
            if (firstValue > secondValue) {
                a = 1
            } else if (firstValue < secondValue) {
                a = -1
            } else {
                a = 0
            }
            break;
    }
    return a
}
// 가장 간단하게 만든건데 세상에서 제일 개떡같다 . 수정해야겠다
function ex96(arr1, arr2) {
    const firstValue = arr1.reduce((acc, cur) => acc + cur);
    const secondValue = arr2.reduce((acc, cur) => acc + cur);

    function check(first, second, firstCondition, secondCondition) {
        switch (true) {
            case firstCondition:
                return 1;
            case secondCondition:
                return -1;
            default:
                return 0;
        }
    }
    const firstAnswer = check(arr1.length, arr2.length, arr1.length > arr2.length, arr1.length < arr2.length)
    const secondAnswer = check(firstValue, secondValue, firstValue > secondValue , firstValue < secondValue)
    if ( firstAnswer === 0) {
        return secondAnswer
    }

    return firstAnswer
}
// 흠.. 나는 이게 조금 더 나은것같기도한데  괜히 일만 더 크게 벌린것같기도하고... 흐음.....좀 ... 그렇다 ... 애매하다 ..



// 문자열 묶기
function ex96(strArr) {
    // 일단 문자열 길이를 배열로 뽑아낸다
    let a = strArr.map((ele)=> {
        return ele.length
    })


    function findCount(arr) {
        // 배열을 정렬
        arr.sort((a, b) => a - b);

        let maxCount = 0;
        let currentCount = 1;

        // 문자열 순회
        arr.forEach((ele, idx)=> {
            // 현재 값과 이전 값이 같으면 카운터를 1올려주는것을 반복
            if (arr[idx] === arr[idx - 1]) {
                currentCount++;
            } else {
                // 현재값과 이전값이 다르게되면 초기화 시켜준다
                currentCount = 1;
            }

            // 계속 올려온 값이 maxCount (현재까지 가장 크게 카운트를 쌓아올린 값) 보다 크면 maxCount 를 변경해준다
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        })

        // 마지막으로 가장 큰 값을 리턴함.
        return maxCount;
    }

    return findCount(a)
}

// 배열의 길이에 따라 다른 연산하기
function ex97(arr, n) {
    const arrLeng = arr.length

    if (arrLeng % 2 === 0) {
        return arr.map((ele, idx)=> {
            if(idx % 2 !== 0) {
                return ele+n
            }
            return ele
        })
    }

    return arr.map((ele, idx)=> {
        if(idx % 2 === 0) {
            return ele + n
        }
        return ele
    })
}
// 흠... 이거 리팩토링 할 수 있을것같은데...


/** 음 iterate 함수만 만들어서 하려고했었는데 안의 condition 을 파라미터로 넣자니 정말 애매한 상황이 나왔었다.
 *  그리고 if 문은 그대로 외부에 빠져나와있었고...
 *
 * */
function ex97(arr, n) {
    const arrLeng = arr.length

    function condition(idx) {
        if (arrLeng % 2 === 0) {
            return idx % 2 !== 0
        }
        return idx % 2 === 0
    }


    function iterate(array) {
        return array.map((ele, idx) => {
            // 단순하게 arr 의 길이에 따라 홀수 idx 에 n 을 더할지 , 짝수 idx 에 n 을 더할지 구분할 수 있는 함수가 되었다
            if (condition(idx)) {
                return ele + n;
            }
            return ele;
        });
    }

    return iterate(arr);
}
// 근데 음.. 의존성이 좀 생겨서 불편하지않을까?... 이런생각이 들었다 이정도 수준까진 그래도 ok 일것같은데 ....이런식으로 함수가 좀만 많아져도....

// 뒤에서 5등까지
function ex98(num_list) {
    return num_list.sort(function(a, b)  {
        return a - b;
    }).splice(0,5)
}


//뒤에서 5등 위로
function ex99(num_list) {
    return num_list.sort(function(a, b)  {
        return a - b;
    }).slice(5, num_list.length)
}

// 전국 대회 선발 고사
// 진짜 완전 개떡같다 ... 그래도 2중 for문은 피했지만...  하아.... 한숨...
function ex100(rank, attendance) {

    // attendance에서 True로 적힌 index 값을 뽑음
    let trueIndex = []
    attendance.forEach((ele, idx)=> {
        if (ele) {
            trueIndex.push(idx)
        }
    })

    // trueIndex 로 어떤 학생들이 참여가 가능한지 확인함
    let studentNumber = []
    trueIndex.forEach((ele) => {
        studentNumber.push(rank[ele])
    })

    // 참여가 가능한 학생중 위세서 3명만 남김
    let topStudent = studentNumber.sort(function(a,b) {
        return a-b
    }).slice(0,3)

    // 그 학생들의 index 값을 찾음
    let topStudentIndex = []
    topStudent.forEach((value)=> {
        rank.forEach((ele, idx) => {
            if (value === ele) {
                topStudentIndex.push(idx)
            }
        })
    })

    // 연산
    return 10000 * topStudentIndex[0] + 100 * topStudentIndex[1] + topStudentIndex[2]
}

// 정수 부분
function ex101(flo) {
    return Math.floor(flo)
}

// 문자열 정수의 합
function ex102(num_str) {
    return [...num_str].reduce((cur, acc)=> {
        return Number(cur) + Number(acc)
    })
}

// 문자열을 정수로 변환하기
function ex102(n_str) {
    return Number(n_str)
}


// 0 빼기
function ex103(n_str) {
    let a = []

    let arr = [...n_str]
    // 0 이 몇번째 index 에서 나오는지 확인
    arr.forEach((ele,idx) => {
        if ( ele > 0 ) {
            a.push(idx)
        }
    })

    let point = a[0]-1

    let answer = []

    // point index 밑의 수는 모두 0이므로 그 이후의 숫자들만 answer에 집어넣음
    arr.forEach((ele, idx)=> {
        if (idx > point) {
            answer.push(ele)
        }
    })

    // 스트링으로 변환
    return answer.join('')
}
// 아 근데 마음에들진않는다...

function ex103(n_str) {
    // forEach 보다 훨씬 직관적이고 적합한 함수사용..
    // 예에에에에전에 잠깐 보고 넘어갔던 함수인데... 이런경우에 써야겠다...
    // 내가 설정한 조건에 해당하는 가장 첫번째 index 를 리턴함.
    const findIndex = [...n_str].findIndex((char) => char !== '0')

    return  n_str.slice(findIndex)
}

// 두 수의 합
function ex104(a, b) {
    return String(BigInt(a) + BigInt(b))
}

// 문자열로 변환
function ex105(n) {
    return String(n);
}

// 배열의 원소 삭제하기
function ex106(arr, delete_list) {
    let a = []
    arr.forEach((ele,idx) => {
        if(!delete_list.includes(ele)) {
            a.push(ele)
        }
    })
    return a
}

// 부분 문자열인지 확인하기
// 파이썬에서 이런 방식으로 풀려있길래 해봤더니 되었다..
function ex107(my_string, target) {
    return my_string.includes(target) ? 1 : 0
}

// 부분 문자열
function ex108(str1, str2) {
    return str2.includes(str1) ? 1 : 0
}

// 꼬리 문자열
function ex109(str_list, ex) {
    let a = []
    str_list.forEach((ele)=> {
        if(!ele.includes(ex)) {
            a.push(ele)
        }
    })

    return a.join('')
}


// 정수 찾기
function ex109(num_list, n) {
    return num_list.includes(n) ? 1 : 0
}

// 주사위 게임 1
function ex110(a, b) {
    if ( a % 2 === 0 && b % 2 === 0) {
        return Math.abs(a-b)
    } else if (a % 2 === 1 && b % 2 === 1) {
        return a*a + b*b
    } else {
        return 2*(a+b)
    }
}

// 날짜 비교하기
function ex111(date1, date2) {

    let a = 0
    for (let i =0; i < 3; i++) {
        if(date1[i] > date2[i]) {
            return a = 0
        } else if (date1[i] < date2[i]){
            return a = 1
        } else {
            continue;
        }
    }
    return a
}

// 커피 심부름
function ex112(order) {
    let value = {
        "iceamericano": 4500,
        "americanoice": 4500,
        "hotamericano": 4500,
        "americanohot": 4500,
        "icecafelatte": 5000,
        "cafelatteice": 5000,
        "hotcafelatte": 5000,
        "cafelattehot": 5000,
        "americano": 4500,
        "cafelatte": 5000,
        "anything": 4500
    }
    let a = 0
    order.forEach((ele)=>{
        a += value[ele]
    })
    return a
}

// 그림 확대
function ex113(picture, k) {
    let result = [];
    picture.forEach((row) => {
        let repeatRow = [...row].map((ele) => ele.repeat(k)).join('')
        result.push(repeatRow);
    });


    let a = []
    result.forEach((ele)=> {
        for(let i = 0; i < k; i++) {
            a.push(ele)
        }
    })
    return a
}

// 조건에 맞게 수열 변환하기 3
function ex114(arr, k) {
    return arr.map((ele)=> {
        if (k % 2 === 1) {
            return ele * k
        }
        return ele + k
    })
}


// l로 만들기
function ex115(myString) {
    return [...myString].map((ele)=> {
        if (ele < 'l' ) {
            return 'l'
        }
        return ele
    }).join('')
}

// 특별한 이차원 배열 1
function ex116(n) {
    let a = []
    for(let i =0; i<n; i++) {
        a.push(Array(n).fill(0))
    }

    for(let j=0; j<n; j++) {
        a[j][j] = 1
    }
    return a
}

// 정수를 나선형으로 배치하기
// 어려워서 적당한 솔루션은 찾았지만 해설정도만 달고 다시하는걸로...
function reject(n) {
    // 2차원 배열 생성, 길이가 n 값이 0 , 위의 ex116에서 for문으로 구현한것과 유사한 방식
    const answer = Array.from(Array(n), () => Array(n).fill(0))

    // 움직임의 방향을 미리 제시함 이중 배열 안의 배열의 원소는 각각 x,y를 나타내며 [[y,x]~~] 꼴이라고 생각하면 될듯.
    const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    // x,y 의 초기값, 지정 , num은 배열안에 할당되어야할 값
    // dir 은 move를 컨트롤 하는 요소로서 사용될것이고 0은 우측 1은 아래 , 2는 좌측, 3은 위를 나타냄 , 가야할 방향지표 핸들러로서 작용
    let x = 0, y = 0, dir = 0, num = 1;

    // num 이 n의 제곱수가 될 때 까지 반복
    while(num <= n**2) {

        // answer 배열안의 값 할당
        answer[x][y] = num;

        // 다음 위치값을 구하는 방식, 미리 지정해둔 move를 이용
        let nextX = x + move[dir][0];
        let nextY = y + move[dir][1];

        // 값이 이미 할당된 경우, 배열을 벗어나는 경우 등을 제외하기 위한 if문
        if (nextX >= n || nextX < 0 || nextY >= n || nextY < 0 || answer[nextX][nextY] !== 0) {
            // 4방향이라 4의나머지
            dir = (dir + 1) % 4;
            // 값 변경
            nextX = x + move[dir][0];
            nextY = y + move[dir][1];
        }

        // 초기값 변경
        x = nextX;
        y = nextY;

        num++;
    }

    return answer;
}

// 특별한 이차원 배열 2
function ex118(arr) {
    let leng = arr[0].length
    let a = []

    for(let i=0; i<leng; i++) {
        for(let j=0; j<leng; j++) {
            a.push(arr[i][j] === arr[j][i])
        }
    }

    return a.includes(false) ? 0 : 1
}


// 정사각형으로 만들기
function ex119(arr) {
    let row = arr[0].length
    let col = arr.length
    let value = Math.abs(row - col)

    console.log(value)

    if (row > col) {
        for(let i=0; i<value;i++) {
            arr.push(Array(row).fill(0))
        }
    } else if (row < col) {
        for(let idx=0; idx<value; idx++) {
            console.log(idx)
            arr.forEach((ele, idx)=>{
                ele.push(0)
            })
        }
    }

    return arr
}

// 이차원 배열 대각선 순회하기
function ex120(board, k) {
    const row = board.length;
    const col = board[0].length;
    let a = 0
    for(let i=0; i<row; i++) {
        for(let j =0;j<col; j++) {
            if(i+j <= k) {
                a += board[i][j]
            }
        }
    }
    return a
}


// 옹알이 (1)
function ex121(babbling) {
    let a = ["aya", "ye", "woo", "ma"]
    let answer = 0
    babbling.forEach((ele,idx)=>{
        if(spliter(ele).trim() === '') {
            answer += 1
        }
    })

    function spliter(value) {
        return value.replaceAll('aya', ' ').replaceAll('ye', ' ').replaceAll('woo', ' ').replaceAll('ma', ' ')
    }

    return answer
}

// 다음에 올 숫자
function ex122(common) {
    if(common[1] - common[0] === common[2] - common[1]) {
        const a = common[1] - common[0]
        return common[common.length-1] + a
    }
    const b = common[1] / common[0]
    return common[common.length-1] * b
}

// 종이 자르기
function ex123(M, N) {
    return M * N - 1
}


// 문자열 밀기
function ex124(A, B) {
    return (B+B).indexOf(A);
}
// 처음엔 for문,,, slice , if 등을 사용해서 했었는데 ,, 다른사람 문제 풀이를 보고 이걿 해석하기로 했다.
/** 파라미터 A 와 B 를 각각 'abc' 'bca' 라고 가정할 때
 * bcabca 가 나오게 되고 , 여기서 처음으로 abc 가 등장하는 index 가 2이기때문에 2가 리턴,,,,
 * */


//잘라서 배열로 저장하기
// 일단 언제적인지도 모를정도로 오래된 풀이 ㅋㅋㅋㅋ.... 그냥 for 문 조건보고 읽기도 싫었다
// 아예 다 지워버리고 처음부터 풀이.
function ex125(my_str, n) {
    let a = my_str.split('')
    let ans = []



    for (let i = 1; i <= my_str.split('').length/n +1; i++) {
        let cv = i * n;
        ans.push(a.slice(n*(i-1),cv).join(''))
    }
    return ans.filter(e => e !== "")
}

// 리팩토링한 코드
// 쓸데없는게 많이 줄었다..
function ex125(my_str, n) {
    let answer = [];

    while (my_str.length > 0) {
        // 문자열 필요한 부분 추출
        let subStr = my_str.substring(0, n);
        // 배열에 집어넣음
        answer.push(subStr);
        // 추출하고 남은 부분 문자열을 my_str 에 할당함
        my_str = my_str.substring(n);
    }

    return answer;
}

// 7의 개수
function ex126(array) {
    let a = array.split('')
    console.log(a)
    let b = a.filter((ele) => ele === '7')
    return b.length
}

// 문자열 정렬하기 (2)
function ex127(my_string) {
    return [...my_string.toLowerCase()].sort().join('')
}


// 세균 증식
function ex128(n, t) {
    for (let i = 0; i < t; i++) {
        n *= 2;
    }
    return n;
}

//제곱수 판별하기
function ex129(n) {
    // Math.sqrt는 n 의 제곱근을 반환하는 메서드 ,
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}


//문자열안에 문자열
function ex130(str1, str2) {
    return str1.includes(str2)  ? 1 : 2
}


// 자릿수 더하기
function ex131(n) {
    let a = String(n).split('')
    let b = a.map((ele)=> {
        return Number(ele)
    })
    return b.reduce((acc, cur) => acc + cur)
}


//n의 배수 고르기
function ex132(n, numlist) {
    return numlist.filter(v => v % n === 0)
}

// 영어가 싫어요
function ex133(numbers) {
    const change = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine:9
    }

    let a = []
    let b = []
    numbers.split('').forEach((ele)=> {
        a += ele
        if(change[a] >= 0) {
            b += change[a]
            a = []
        }

    })
    return Number(b)
}


// 리팩토링한 코드
function ex133(numbers) {
    const change = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    }

    let result = 0;
    let currentNum = '';

    // for of 문을 사용해서 numbers 를 순회 , 기존은 forEach로 했었다... split('')을 따로 사용하지않아도 됨.

    for (const char of numbers) {
        currentNum += char;
        if (change[currentNum] !== undefined) {
            // chatGpt 에서는 새로운 자릿수를 추가하기 위해 이러한 방식을 사용했다.
            // 처음에는 이게 뭐야... 이상한데 ? 라는 생각을 했는데
            // 나중에 배열을 순회할 필요가 없어서 오히려 숫자를 대상으로 하는 경우에는 성능적으로는 오히려 좋을것같다는생각이들었다.
            // 하지만 코드를 읽는 사람 입장에서는 조금 ... 이게 뭐지 싶을수도 ...?
            result = result * 10 + change[currentNum];
            currentNum = '';
        }
    }

    return result;
}



//연속된 수의 합
// 진짜 개판으로 풀었다.... 이거 말이되나... 싶을정도로 막풀었는데.... 리팩토링 해야겠다...
function ex134(num, total) {
    let a = []
    let answer = []

    for(let i = total; i > -total; i--) {
        a.push(i)
    }
    if (a.length === 0 ) {
        for(let k = -num; k < num; k++) {
            a.push(k)
        }
    }
    for(let j = 0; j < a.length; j++) {

        let b = a.slice(j, num+j)


        if (total === b.reduce((a,b)=> a+b)) {
            answer = b
        }
    }

    return answer.sort(function(a,b) {
        return a-b
    })

}


// 한 번만 등장한 문자
// 리팩토링 한거보니까 처음 푼 방식 진짜 골치아픔...
function ex135(s) {
    let answer = s.split('')
    answer.sort()

    let a = []
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === answer[i+1]) {
            a.push(i)
        }

    }

    let b = []
    a.forEach((ele) => {
        b.push(answer[ele])
    })


    let c = answer.filter((ele)=> {
        return !b.includes(ele)
    })

    return c.join('')

}

function ex135(s) {
    let res = [];
    // for of 에 indexOf 로 안될까 생각은 했었는데 ,, lastIndexOf 를 생각못했다...
    for (let c of s) {
        // 각 문자열의 첫 index 값과 마지막 index값이 같다면 해당 문자열에는 그 문자가 하나밖에 없다는 뜻이 되므로
        if (s.indexOf(c) === s.lastIndexOf(c)) {
            // 그것만 리턴해주면 됨...
            res.push(c);
        }
    }
    return res.sort().join('');

}

// 문자열 여러번 뒤집기
function ex136(my_string, queries) {
    return queries.reduce((acc, cur) => {
        // 배열을 구조분해할당함
        const [s, e] = cur;
        // 내가 뒤집을 문자열을 떼옴
        const target = acc.slice(s, e + 1);
        // 문자열을 3등분함, 뒤집을 문자열의 앞 문자열 , 뒤집은 문자열 , 뒤집을 문자열의 뒷 문자열
        // 문자열을 3등분하면서 내가 뒤집을 문자열 부분은 제외함
        acc = acc.slice(0, s) + target.split('').reverse().join('') + acc.slice(e + 1);

        return acc;
    }, my_string);
}

// 1로 만들기
function ex137(num_list) {
    let count = 0

    num_list.forEach((ele)=>{
        let a = eleㄴ

        while (a !== 1) {
            if(a % 2 === 0) {
                a = a/2
            } else {
                a = (a-1)/2
            }
            count += 1
        }

    })
    return count
}


// 합성수 찾기
function ex138(n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        if (divider(i) >= 3 ) {
            count +=1
        }
    }
    return count
}

function divider(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    return arr.length
}


// 컨트롤 제트
// 처음 봤을때 스택을 생각하기는 했는데 굳이 라는 생각이 들어서,,,
function ex139(s) {
    const a = s.split(' ')

    let b = a.map((ele, idx)=> {
        if(ele === 'Z') {
            ele = (-a[idx-1])
        }
        return Number(ele)
    })

    return b.reduce((acc, cur) => acc + cur)
}

//문자열 계산하기
// 근데 이거 문제 eval 함수 하나면 string 을 걍 계산해줌 ..
function ex140(my_string) {
    let a = my_string.split(' ')

    let answer = Number(a[0])
    for(let i = 0; i< a.length; i++) {
        if (a[i] === '+') {
            answer += Number(a[i+1] )
        } else if (a[i] === '-') {
            answer -= Number(a[i+1] )
        }
    }
    return answer
}

// 진료순서 정하기
function ex141(emergency) {
    let answer = []
    let stack = 0
    emergency.forEach((ele, idx)=> {
        let check = 1

        emergency.forEach((val) => {
            if (ele < val) {
                check += 1
            }
        })

        answer[idx] = check
        check = 0

    })
    return answer
}


//구슬을 나누는 경우의 수
function ex142(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share) ))

}

function factorial(n) {
    if(n === 0) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}


// 로그인 성공?
function ex143(id_pw, db) {
    let a = 'fail'
    db.forEach((ele)=> {
        if (ele[0] === id_pw[0] && ele[1] !== id_pw[1]) {
            a = 'wrong pw'
        } else if (ele[0] === id_pw[0] && ele[1] === id_pw[1]) {
            a = 'login'
        }
    })

    return a

}


// 숨어있는 숫자의 덧셈 (2)
// 진짜 어거지도 이런 어거지가 없다 진짜 거지같이 코드짰다.... ㅠㅠㅠ 다시... 리팩토링 해야지.
function ex144(my_string) {
    let a = my_string.split('').map((ele) => Number(ele))

    let arr = ['0']
    let stack = ''

    let b = a.forEach((ele, idx)=> {
        if (isNaN(ele) === false ) {
            stack += String(ele)
        } else if (isNaN(ele)) {
            arr.push(stack)
            stack = ''
        }
    })

    arr.push(stack)
    let c = arr.filter((ele) => ele !== '').map((ele)=> Number(ele))
    let d = c.reduce((acc, cur) => acc + cur)
    return d ?? 0
}

//가까운 수
function ex145(array, n) {
    let arr = []


    array.sort((a,b)=> a-b ).forEach((ele)=> {
        arr.push(Math.abs(ele-n))
    })

    let stack = arr[0]
    arr.forEach((ele)=> {
        if (ele < stack) {
            stack = ele
        }
    })

    const find = arr.indexOf(stack)
    return array[find]
}


// 이진수 더하기
function solution(bin1, bin2) {
    let answer = parseInt(bin1, 2) + parseInt(bin2, 2)
    return answer.toString(2)
}

// 공 던지기
function solution(numbers, k) {
    const lastMan = numbers[numbers.length-1]

    let current = 1

    for(let i = 1; i < k; i++ ) {
        if(current > lastMan) {
            current = current - lastMan + 2
        } else {
            current += 2
        }
    }

    if (current > lastMan) {
        return current - lastMan
    }

    return current
}

// 다른사람 풀이 ,, 이런생각 어떻게하는지모르겠다
function solution(numbers, k) {
    // index는 0부터 시작하니 --를 해서 1을 뺴주고 하나를 건너뛰고 이동하니 2를 곱함,
    // number.length 로 나누는건 길이를 초과하지 않게 하기 위해...
    // 해당하는값의 index 의 값 반환...
    return numbers[(--k*2)%numbers.length];
}