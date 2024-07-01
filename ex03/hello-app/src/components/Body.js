import React, {useState} from "react";

function Body() {
    // number면 무조건 setNumber가 됨
    // 구조 분해 할당을 하면 number를 하고 setNumber를 통해 값을 바꿔야함 이렇게 하면 화면이 바뀐다. (리덕스의 훅스)
    // Redux는 Flutter의 riverpod 같은 것 훅스는 Redux를 쉽게 사용하게 해주는 기술
    const [number, setNumber] = useState("0102222");

    const changeNumber = () => {
        setNumber("0103333"); 
    }

    return (
        <div>
            <div>이름 : 홍길 동</div>
            <div>전화번호 : {number}</div>
            <button onClick={changeNumber}>전화번호변경</button>
        </div>
    )
}

export default Body;