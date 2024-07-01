import React, { useState } from "react";

function Body2(props) {

    let { username, password } = props;

    // number면 무조건 setNumber가 됨
    // 구조 분해 할당을 하면 number를 하고 setNumber를 통해 값을 바꿔야함 이렇게 하면 화면이 바뀐다. (리덕스의 훅스)
    // Redux는 Flutter의 riverpod 같은 것 훅스는 Redux를 쉽게 사용하게 해주는 기술
    const [user, setUser] = useState({
        name: "홍길동",
        number: "0102222"
    });

    // 아래의 문법은 map 타입만 가능하다!
    const changeUser = () => {
        setUser({ ...user, name: "임꺽정", number: "0105555" });
    }

    return (
        <div>
            <div>유저네임 : {username} 패스워드 : {password}</div>
            <div>이름 : {user.name}</div>
            <div>전화번호 : {user.number}</div>
            <button onClick={changeUser}>전화번호변경</button>
        </div>
    )
}

export default Body2;