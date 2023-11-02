import React, { useState } from 'react'
import styled from 'styled-components';
import more from '../../Assets/icons/s-icon-more-vertical.svg'
import FooterModal from '../Modal/FooterModal';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import accountNameAtom from '../../Recoil/accountNameAtom'; 
import ReportModal from '../Modal/ReportModal';

MyPostMoreBtn.propTypes = {
  postid: PropTypes.string,
  accountname: PropTypes.string
}

export default function MyPostMoreBtn({accountname, postid}) {
  const accountName = useRecoilValue(accountNameAtom);
  const [showModal, setShowModal] = useState(true);
  const openModal = () => {
    setShowModal((prev)=>!prev)    
  }

  return (
    <>
      <PostMoreBtn onClick={openModal}><MoreImg src={more} alt="더보기" /></PostMoreBtn>
      {/* { !showModal ? <FooterModal postid={postid} accountname={accountname.accountname} closeFooter={showModal} setCloseFooter={setShowModal}/>:null} */}
      { !showModal ? (accountname.accountname === accountName ? <FooterModal postid={postid} closeFooter={showModal} setCloseFooter={setShowModal}/> : <ReportModal postid={postid} closemodal={showModal} setclosemodal={setShowModal}/>):null}
    </>
  )

  
}

const PostMoreBtn = styled.button`
  width: 6rem;
  height: 1.8rem;
  cursor: pointer;
  position: relative;
` ;
const MoreImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  right: 0;
  top: 0;
`;
