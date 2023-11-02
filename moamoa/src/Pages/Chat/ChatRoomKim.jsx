import React, { useRef, useState } from 'react';
import { Container } from '../../Components/Common/Container';
import styled from 'styled-components';
import HeaderChat from '../../Components/Common/HeaderChat';
import Photo from '../../Components/Common/ChatPhoto';
import img from '../../Assets/images/followImg/fog.jpg';
import iconImageButton from '../../Assets/icons/icon-img-button.svg';
export default function ChatRoomKim() {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [ButtonActive, setButtonActive] = useState(false);
  const fileInputRef = useRef(null);
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSendClick = () => {
    if (message.trim() !== '') {
      console.log('메시지 전송:', message);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      console.log(setFile(e.target.files[0]));
      setButtonActive(true);
    } else {
      setFile(null);
      setButtonActive(false);
    }
  };

  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      console.log('test:', fileInputRef);
    }
    setFile(null);
    setButtonActive(false);
  };

  console.log(file);
  console.log(ButtonActive);
  console.log(fileInputRef);

  return (
    <Container>
      <HeaderChat headerText={'양떼목장 김사장'}></HeaderChat>
      <ChatRoom>
        <ChatMessages>
          <div className='talkBox'>
            <Photo src={img} />
            <div>
              <UserName>양떼목장 김사장</UserName>
              <Message>
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈
                따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
              </Message>
            </div>
          </div>
          <div className='talkBox'>
            <Photo src={img} />
            <div>
              <UserName>양떼목장 김사장</UserName>
              <Message>애들이 많이 놀러와~</Message>
            </div>
          </div>
          <MyTalk>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈
            따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
          </MyTalk>
        </ChatMessages>
        {file && (
          <RemoveFile>
            <button onClick={handleRemoveFile}>파일 삭제</button>
            <p className='removeFileName'>{file.name.slice(0, 8)}</p>
          </RemoveFile>
        )}
        <InputArea>
          <FileBox>
            <label htmlFor='file'>
              <img src={iconImageButton} alt='이미지 첨부' className='fileImg' />
            </label>
            <FileInput
              type='file'
              id='file'
              accept='image/*'
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </FileBox>
          <MessageInput
            type='text'
            placeholder='메시지 입력하기...'
            value={message}
            onChange={handleInputChange}
          />
          <SendButton onClick={handleSendClick} disabled={message.trim() === '' && !ButtonActive}>
            전송
          </SendButton>
        </InputArea>
      </ChatRoom>
    </Container>
  );
}
const ChatRoom = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
  .talkBox {
    display: flex;
    flex-direction: row;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const Message = styled.div`
  width: 220px;
  font-size: 14px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 0px 30px 30px 30px;
  margin: 0px 10px 10px;
  padding: 10px 12px 12px;
  line-height: normal;
  box-sizing: border-box;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  background-color: #ffffff;
`;

const MessageInput = styled.input`
  width: 60%;

  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
`;

const SendButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#fff' : '#87B7E4')};
  color: ${(props) => (props.disabled ? '#c4c4c4' : '#fff')};
  border: 1px solid ${(props) => (props.disabled ? '#c4c4c4' : '#fff')};
  border-radius: 10px;
  margin-left: 3px;
  width: 46px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  box-sizing: border-box;
`;
const FileBox = styled.div`
  width: 30px;
  margin-left: 6px;
  .fileImg {
    cursor: pointer;
  }
`;
const FileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;
const UserName = styled.h2`
  display: block;
  margin-left: 8px;
  margin-bottom: 5px;
  font-size: 12px;
  color: gray;
  font-weight: 500;
`;
const MyTalk = styled.p`
  width: 220px;
  font-size: 14px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 30px 0px 30px 30px;
  margin: 0px 80px 10px;
  box-sizing: border-box;
  padding: 10px 12px 12px;
  line-height: normal;
`;
const RemoveFile = styled.div`
  button {
    color: red;
    font-size: 12px;
    border: 1px solid red;
  }
  .removeFileName {
    margin: 3px;
  }
  margin: 0px 10px;
`;
