import React from 'react';
import styled from 'styled-components';

function Header(props) {

    const MyLi = styled.li`
        color: green;
        font-size: 30px;
    `;

    return (
        <div>
            <ul>
                <MyLi>홈</MyLi>
                <MyLi>글쓰기</MyLi>
                <MyLi>로그아웃</MyLi>
            </ul>
        </div>
    );
}

export default Header;