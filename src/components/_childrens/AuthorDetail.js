import React from "react";
import styled from "styled-components";
import ImageAuthor from "../../images/avatar-michelle.jpg";

const AuthorDetail = ({ shareActive, setShareActive }) => {
  /* Component Styles */
  const colors = {
    veryDarkGrayishBlue: "#48556a",
    desaturatedDarkBlue: "#6d7f97",
    grayishBlue: "#6E8098",
    lightGrayishBlue: "#ecf2f8",
  };

  const AuthorBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    position: relative;
  `;

  const ImgAuthor = styled.img`
    border-radius: 50%;
    width: 35px;
    height: 35px;
  `;

  const AuthorDescription = styled.div`
    margin-left: 15px;
    p {
      color: ${colors.desaturatedDarkBlue};
      margin: 0;
    }
    p:first-child {
      color: ${colors.veryDarkGrayishBlue};
      font-weight: bold;
    }
  `;

  const ShareButton = styled.button`
    background-color: ${shareActive
      ? colors.desaturatedDarkBlue
      : colors.lightGrayishBlue};
    border: none;
    border-radius: 50%;
    padding: 7px;
    cursor: pointer;
    position: absolute;
    right: 0;
    z-index: 2;
    outline: none;
  `;

  return (
    <AuthorBlock>
      <ImgAuthor src={ImageAuthor} alt="Author" />
      <AuthorDescription>
        <p>Michelle Appleton</p>
        <p>01 Ago 2020</p>
      </AuthorDescription>
      <ShareButton onClick={() => setShareActive(!shareActive)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
          <path
            fill={shareActive ? colors.lightGrayishBlue : colors.grayishBlue}
            d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          />
        </svg>
      </ShareButton>
    </AuthorBlock>
  );
};

export default AuthorDetail;
