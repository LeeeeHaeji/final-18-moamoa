import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userTokenAtom from '../../Recoil/userTokenAtom';
import PropTypes from 'prop-types';


ReportModal.propTypes = {
  closemodal: PropTypes.bool.isRequired,
  setclosemodal: PropTypes.func.isRequired,
  postid: PropTypes.string
}

export default function ReportModal({closemodal, setclosemodal,postid}) {
console.log(closemodal)

      {console.log(postid)}


  
  const token = useRecoilValue(userTokenAtom);
  const params = useParams();
  const path = params.post_id;

  const report = async() => {
    try {
    await axios.post(`https://api.mandarin.weniv.co.kr/post/${path}/report`,null,{
        headers:{          
            Authorization: `Bearer ${token}`
        }
      });
        alert('게시물이 신고되었습니다.');
        setclosemodal((prev)=>!prev)
      } catch(error){console.error('게시물 신고를 실패했습니다.',error);    
    }
  }

  const homereport = async() => {
    try {
    await axios.post(`https://api.mandarin.weniv.co.kr/post/${postid}/report`,null,{
        headers:{          
            Authorization: `Bearer ${token}`
        }
      });
        alert('게시물이 신고되었습니다.');
        setclosemodal((prev)=>!prev)
      } catch(error){console.error('게시물 신고를 실패했습니다.',error);    
    }
  }



  return (
    <>
      { !closemodal  ?       
      <BgCont>
        <Modal>
          <Deltext>이 게시물을 신고 하시겠습니까?</Deltext>
          <Btn>
            <BtnDel onClick={path?report:homereport}>신고</BtnDel>
            <BtnCancel onClick={()=>{setclosemodal((prev)=>!prev)}}>취소</BtnCancel>
          </Btn>
        </Modal>
      </BgCont> : null
      }
    </>
  );
}
const BgCont = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.3);
  z-index: 10
  ;
`;

const Modal = styled.div`
  width: 26rem;
  height: 14rem;
  background-color: #fff;
  border-radius: 1rem;
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%);
  padding: 3rem 0 0;
  box-sizing: border-box;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnCancel = styled.button`
  width: 12.5rem;
  height: 6.5rem;
  font-size: 1.4rem;
  &:hover{
    font-weight: bold;
  }
`;

const BtnDel = styled(BtnCancel)`
  color: #EB5757;
  border-right: 1px solid #dbdbdb;
`;



const Deltext = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  padding-bottom: 3rem;
  border-bottom: 1px solid #dbdbdb;
`;