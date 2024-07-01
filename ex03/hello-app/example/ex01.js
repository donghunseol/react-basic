// 1. 추가하기
let a = [1, 2, 3];    // 변수
let a1 = [...a, 4]; // 스프레드 방식 사용 (불변을 유지하기 위해서 사용한다)
console.log("이전", a);
console.log("이후", a1);

// 2 추가하기 (특이한 것 - update)
let user = { name: "홍길동", age: 20 };

let user1 = { ...user, age: 21 }; // 그대로 복사
console.log(user1);

// 3. 삭제하기
const b = [4, 5, 6];  // 상수(불변) 실행직전에 메모리에 다뜬다
let b1 = b.filter((item) => item !== 5);
console.log(b1);

// 4. 검색하기 (삭제를 이용한)
let userList = [
    { id: 1, name: "홍길동", age: 20 },
    { id: 2, name: "홍길동2", age: 21 },
    { id: 3, name: "홍길동3", age: 22 },
];
let search = userList.filter((item) => item.age > 21);
console.log(search);

// 5. 가공하기
let postList = [
    {id: 1, title: "제목1", content: "내용1"},
    {id: 2, title: "제목2", content: "내용2"},
    {id: 3, title: "제목3", content: "내용3"}
];

let post = postList.map((item) => ({
    ...item,
    content: "내용변경"
}));

console.log(post);