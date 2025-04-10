import styled from "styled-components";

import BuleteImg from "../../../assets/images/defi/list-bulete.svg";

const MetaverseStyle = styled.section`
  margin-top: 200px;
  .tiwlogo{
    width: 46px;
    height: 59px;
    margin-bottom: 16px;
  }
  .bi-weekly-gathering-bg {
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    z-index: 0;
    object-fit: cover;
  }
  .defi-metaverse-card {
    padding: 70px;
    backdrop-filter: blur(25px);
    border-radius: 30px;
    margin-bottom: 50px;
    overflow: hidden;
    background: rgba(92, 92, 92, 0.05);
    height: 541px;
    .blur-shape {
      position: absolute;
      top: -25px;
      left: -10px;
      height: 100%;
      width: 70%;
      z-index: -1;
    }
    .card-left-content {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      .arrow {
        min-width: 36.56px;
      }
    }
    .card-left-text {
      p {
        color: ${({ theme }) => theme.colors.whiteColor}cc;
        margin-bottom: 55px;
      }
    }
  }

  .defi {
    margin-bottom: 25px;
    &.title{
      margin-bottom: 80px;
    }
    &.center{
      text-align: center;
    }
    .sub-title {
      color: #EFBA30;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 18px;
      letter-spacing: 2.8px;
    }
    .title {
      &.resize{
        font-size: 30px;
        max-width: 326px;
      } 
      color: ${({ theme }) => theme.colors.whiteColor};
      span.liniar {
        background: linear-gradient(90deg, #37ea8e 35.54%, #bdf93f 65.12%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }

  .metavarse-card-img {
    max-width: 311px;
    margin-left: auto;
  }

  .defi-metaverse-card2 {
    border-radius: 30px;
    overflow: hidden;
    max-width: 100%;
    width: 100%;
    margin-bottom: 50px;
    position: relative;
    
    .metavarse-card-bg2 {
      top: -20px;
      left: 0px;
      width: 100%;
      height: 150%;
      position: absolute;
      z-index: 0;
      object-fit: cover;
    }
    .overlay {
      background: rgba(92, 92, 92, 0.05);
      border-radius: 30px;
      height: 100%;
      width: 100%;
      padding: 60px 70px 70px 70px;
      position: relative;
      z-index: 2;
      height: 595px;
    }
    .card2-text {
      h3 {
        line-height: 167%;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      p {
        margin-bottom: 27px;
        color: ${({ theme }) => theme.colors.whiteColor}cc;
      }
      a {
        color: ${({ theme }) => theme.colors.whiteColor};
        img {
          filter: brightness(100);
          margin-left: 14px;
          transition: 0.3s;
        }
        &:hover {
          img {
            transform: rotate(-45deg);
          }
        }
      }
    }
    .card2-img {
      max-width: 170px;
      margin-left: auto;
      margin-top: 16px;
    }
  }

  .defi-metaverse-card3 {
    border-radius: 30px;
    overflow: hidden;
    max-width: 100%;
    width: 100%;
    margin-bottom: 50px;
    position: relative;
    .metavarse-card-bg3 {
      top: -20px;
      left: -77px;
      min-width: 130%;
      min-height: 125%;
      position: absolute;
      z-index: 0;
      object-fit: cover;
      opacity: .2;
    }
    .overlay {
      background: rgba(92, 92, 92, 0.05);
      border-radius: 30px;
      width: 100%;
      padding: 68px 40px 45px 40px;
      position: relative;
      height: 595px;
      padding: 60px 70px 70px 70px;

      z-index: 1;
    }
    h3 {
      margin-bottom: 25px;
      color: ${({ theme }) => theme.colors.whiteColor};
    }
    p{
      color: #fff;}
    ul {
      margin-bottom: 0px;
      list-style: url(${BuleteImg});
      li {
        color: ${({ theme }) => theme.colors.whiteColor}cc;
        line-height: 267%;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .defi-metaverse-card2 {
      .overlay {
        padding: 50px;
      }
    }
    .defi-metaverse-card3 {
      .overlay {
        padding: 40px 40px 20px 40px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .defi-metaverse-card {
      padding: 50px;
    }
    .defi-metaverse-card {
      margin-bottom: 30px;
    }
    .defi-metaverse-card2,
    .defi-metaverse-card3 {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 767px) {
    .metaverse-card .overlay {
      padding: 50px 30px;
    }
    .defi-metaverse-card2 {
      .card2-img {
        margin-right: auto;
      }
    }
    .card-left{
      .title{
        font-size: 36px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .defi-metaverse-card {
      .card-left-text {
        margin-left: 20px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .defi-metaverse-card {
      padding: 40px 30px;
    }
  }
`;

export default MetaverseStyle;
