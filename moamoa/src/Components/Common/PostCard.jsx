import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PostCardUser from './PostCardUser';
import styled from 'styled-components';
import heartBg from '../../Assets/icons/heart.svg'
import heartBgFill from '../../Assets/icons/heart-fill.svg'
import commentBg from '../../Assets/icons/message-circle.svg'



export default function PostCard(post) {

  const [heartCount, setHeartCount] = useState(0);
  const [toggleCount, setToggleCount] = useState(false);
  const [heartcolor, setHeartColor] = useState(heartBg);


  const baseUrl = `https://api.mandarin.weniv.co.kr/`

  const postprop = post.post;
  console.log(postprop);
  const profileImgUrl =`${postprop.author.image}`;
  const postImgUrl =`${baseUrl}${postprop.image}`;
  const postDetailId = post.post.id;
  const postDetailUrl = `/post/${postDetailId}`

  const inputDate = postprop.createdAt
  const dateset = inputDate.split("").slice(0,10).join("");
  const year = dateset.slice(0,4)
  const month = dateset.slice(5,7)
  const day = dateset.slice(8,10)  
  const outputDate = `${year}년 ${month}월 ${day}일`;


    const handleHeartCount = () =>{
      if (toggleCount === true ){
        setHeartColor(heartBgFill);
        setHeartCount(postprop.heartCount+1);
      } else {
        setHeartColor(heartBg);
        setHeartCount(postprop.heartCount-1);
      }
      
      
      console.log(heartCount);      
    }


  return (
    <>
      {post && (
        <li>
          <PostArticle>
            
              <PostCardUser url={profileImgUrl} username={postprop.author.username} accountname={postprop.author.accountname}/>
            <Link to={postDetailUrl}>
              <PostDesc>{post.post.content}</PostDesc>
              <PostImg src={postImgUrl} alt="게시글 사진" />
            </Link>
            <PostFooterContainer>
              <CreateDate>{outputDate}</CreateDate>
              <div>
                <HeartBtn onClick={()=>{setToggleCount((prev)=>!prev);handleHeartCount();}} heartcolor={heartcolor}>{postprop.heartCount}</HeartBtn>
                <Link to={postDetailUrl}><CommentBtn>{postprop.commentCount}</CommentBtn></Link>
              </div>
            </PostFooterContainer>
          </PostArticle>
        </li>
      )}
    </>
      
  )
}

const PostArticle = styled.article`
  margin-bottom: 2rem;
`;

const PostImg = styled.img`
  width: 100%;
  height: 22.8rem;
  margin: 0 auto;
  aspect-ratio: 358/228;
  object-fit: cover;
  border-radius: 1rem;
  &:hover{
    cursor: default;
  }
`;
const PostDesc = styled.p`
  font-size: 1.4rem;
  margin: 1.2rem 0 1.6rem;
  &:hover{
    cursor: default;
  }
`;
const PostFooterContainer = styled.div`
  margin: 1.5rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CreateDate = styled.p`
  font-size: 1rem;
  color: #767676;
`;

const HeartBtn = styled.button`
  padding-left: 2.6rem;
  margin-right: 0.6rem;
  height: 2rem;
  color: #767676;
  background: url(${props => props.heartcolor}) 0.2rem no-repeat;
  &:hover{
    cursor: pointer;
  }
  &:active{
    background: url(${props => props.heartcolor}) 0.2rem no-repeat;
  }
`;

const CommentBtn = styled.button`
  height: 2rem;
  padding-left: 2.6rem;
  color: #767676;
  &:link{
    color: #767676;
  }
  &:hover{
    cursor: pointer;
  }
  background: url(${commentBg}) 0.2rem no-repeat;
`;
