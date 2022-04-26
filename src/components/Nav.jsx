import React from 'react'

const Nav = (props) => {
    const alist = [];
    let t;
    for(let i =0; i<props.topics.length; i++){
       t = props.topics[i];
       alist.push(
                <div> 
                  <a href="/" 
                    className="list-group-item" 
                    key={t.id}
                    id={t.id}
                    onClick={(event)=>{
                      event.preventDefault();
                      props.getChangeMode(Number(event.target.id));  //부모값(section함수) getChangeMode를 실행하고 id값에 해당하는 topic을 보여주자.

                    }}  
                  >
                    <img src='https://picsum.photos/70/70' alt='gallery'/>
                  {t.title} </a>
                </div>
                ); 
    }
    return (
        <nav className="list-group mb-3">
            {alist}
        </nav>  
      )
  }
export default Nav;