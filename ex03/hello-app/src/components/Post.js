import React, { useEffect, useState } from "react";

function Post(props) {
    console.log("Post");

    // 페이징
    const [page, setPage] = useState(0);

    function nextPage() {
        let p = page + 1;
        setPage(p);
    }

    // 다운로드 받은건 useState 로 상태를 관리해야한다.
    // 타입은 꼭 맞춰둬야한다!
    const [post, setPost] = useState({
        userId: undefined,
        id: undefined,
        title: "", 
        body: ""
    });

    // 비동기 함수로 바꿔줘야한다. 
    // 만약에 10초 후에 통신이 되는 경우 10초간 대기를 할 순 없기 때문에 비동기로 바꿔야한다.
    // 비동기로 되면 download의 이름이 바인딩 되고 그 뒤에 반응 한다. (메모리에게 일을 맡김)
    // 그러고 cpu가 할 일이 없을때 await 로 돌아가서 값을 넣는다!
    const download = async () => {
        // 통신코드 기입
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/3",
            // get 타입이라 content-type 은 생략가능하다
            {
                method: "GET"
            }
        );
        // get 요청은 fetch("https://jsonplaceholder.typicode.com/posts/3"); 이렇게 만 해도 실행이 된다.

        // Json 을 파싱
        let responseBody = await response.json();
        console.log(responseBody);

        // 파싱한 데이터를 대입
        setPost(responseBody);
    };

    // userEffect는 최초에 한 번만 실행이 되는 함수 (상태가 변경될 때마다 다운로드가 계속 되지 않도록 하기위해서!)
    useEffect(() => {
        console.log("userEffect");
        download();
    }, []);

    return <div>
        userId: {post.userId}, id: {post.id}, title: {post.title} <br />
        body: {post.body}
        <button onClick={nextPage}>다음페이지</button>
    </div>;
}

export default Post;