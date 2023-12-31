import styled from "styled-components";
import { ReactComponent as burger } from "./assets/icons/burger.svg";
import { ReactComponent as search } from "./assets/icons/search.svg";
import { ReactComponent as bell } from "./assets/icons/bell.svg";
import { ReactComponent as menu } from "./assets/icons/menu.svg";
import { ReactComponent as video } from "./assets/icons/video.svg";

export const Container = styled.div`
  background: #212121;
  color: #fff;
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
  height: 100vh;
  padding: ${({ flex }) => !flex && "0 30px"};
`;

export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${({ end }) => end && "flex-end"};
`;

export const Icons = styled.div``;

Icons.Burger = styled(burger)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

Icons.Search = styled(search)`
  width: 65px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0 2px 2px 0;
  padding: 10px 20px;
  cursor: pointer;
`;

Icons.Logo = styled.img``;

export const Input = styled.input`
  height: 40px;
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px 0 0 2px;
  outline: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  max-width: 500px;
  width: 100%;
  padding-left: 10px;
`;

export const User = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
`;

Icons.Bell = styled(bell)`
  width: 22px;
  height: 22px;
  margin-left: 20px;
  cursor: pointer;
`;

Icons.Video = styled(video)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  cursor: pointer;
`;

Icons.Menu = styled(menu)`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  cursor: pointer;
`;
