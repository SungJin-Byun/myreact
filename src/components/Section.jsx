import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
const Section = ()=>{
    //const mode = 'READ';
    const [mode, setMode] = useState('WELCOME');  //useState 첫 번째 인자 welcome  두 번째 인자 funcion
    const [id, setId] = useState(null);
    const [topics, setTopics] = useState([
      {id:1, title:"시맨틱 에러 대본집", author:"제이선", com:"blackD(블랙디)", etc:"2022년 5월", body:"‘드에러단’이라는 단어를 탄생시키며 엄청난 흥행 돌풍을 일으킨 왓챠 오리지널 드라마 <시맨틱 에러>를 대본집으로 만날 수 있게 되었다. 저수리 작가의 동명 웹소설(리디)을 원작으로 한 드라마 <시맨틱 에러>는 왓챠 종영 이후 시간이 흘러도 1위의 자리에서 좀체 내려올 줄을 모르며 기분 좋은 신드롬을 이어가고 있다."},
      {id:2, title:"여학교의 별 2 ", author:"와야마 야마 (지은이), 현승희 (옮긴이)", com:"문학동네", etc:"2022년 5월", body:"학교라는 좁디좁은 세계. 그곳에 모인 학생들에게 '선생님'이란 존재는 성숙한 지도자이자 유능한 교육자이다. (그러기를 바란다.) 동시에 선생님을 향한 학생들의 넘치는 호기심과 유쾌한 장난을 보고 있으면 한편으론 연예인 같은 존재로 느껴진다. 그런 학생들과 때로는 아웅다웅해도 누구보다 다정하게 감싸주는 선생님들이 있기에 이들의 학교생활을 그저 즐겁기만 하다."},
      {id:3, title:"지박소년 하나코 군 17 (특장판) ", author:"아이다이로 (지은이), 장혜영 (옮긴이)", com:"서울미디어코믹스(서울문화사)", etc:"2022년 5월", body:"하나코가 있는 \"경계\"로 통하는 단서를 찾는 네네 일행. 저주받은 【빨간 집】에서 만난 꼬마는 어린 시절의 츠카사였다. 츠카사와 함께 집에서 탈출을 시도하지만 앞이 가로막히는데…."},
      {id:4, title:"흔한남매 10", author:"흔한남매 (지은이), 백난도 (글), 유난희 (그림), 흔한컴퍼니 (감수)", com:"미래엔아이세움", etc:"2022년 4월", body:"으뜸이와 에이미의 우당탕탕 다이어트 대작전, 사랑에 빠진 장민철, 에이미의 웃음 가득한 브이로그, 투명 인간이 된 으뜸이, 공포의 안내 방송, 10년 뒤 에이미와 만난 으뜸이 등 흔한남매의 일상 속엔 생기 넘치는 공감과 웃음이 가득하다."},
      {id:5, title:"도쿄 리벤저스 24 ", author:"와쿠이 켄 (지은이)", com:"학산문화사(만화)", etc:"2022년 4월", body:"과거를 바꿔 죽은 여자친구를 구해라! 일본 현지 실사 영화화 및 애니메이션화 결정!"}
    ]);
  
    let _title=null, _desc=null, _author=null, _com=null, _etc=null;
    switch(mode) {
       case 'WELCOME':
          _title="도서제목";
          _author="저자";
          _com="출판사";
          _etc="기타정보";
          _desc="내가 해야할 일들의 목록 입니다.";
       break;
       case 'READ':
         console.log(id);
         for(let i in topics){
           if(topics[i].id === id){ 
               _title=topics[i].title;
               _author=topics[i].author;
               _com=topics[i].com;
               _etc=topics[i].etc;
               _desc=topics[i].body;
           }
        }  
       break;
    }
  
  
    return(
      <>
      <Header 
      title="베스트 셀러 도서목록" 
      desc="베스트 셀러 도서목록 입니다."  
      getChangeMode={()=>{
        setMode('WELCOME');
       }}
      />
      <section className="row mt-5">
         <div className="col-3">
            <Nav topics = {topics}  getChangeMode={(_id)=>{
                setMode('READ');
                setId(_id);
            }}/>              
         </div>
         <Article title={_title} author={_author} com={_com} etc={_etc} desc={_desc} />
      </section>
      </>
    );
  }
export default Section;