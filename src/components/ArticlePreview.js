import React, { useState } from "react";
import styled from "styled-components";
import AuthorDetail from "./_childrens/AuthorDetail";
import SharePopup from "./_childrens/SharePopup";

import ImagePost from "../images/drawers.jpg";

/* Component Styles */
const colors = {
  veryDarkGrayishBlue: "#48556a",
  desaturatedDarkBlue: "#6d7f97",
};

const Article = styled.article`
  border-radius: 1em;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  background: white;
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 940px) {
    flex-direction: row;
    max-width: 700px;
  }
`;

const DetailArticle = styled.div`
  padding: 20px 25px 15px;
  h2 {
    margin: 0;
    color: ${colors.veryDarkGrayishBlue};
    font-size: 16px;
    font-weight: 700;
  }
  p {
    color: ${colors.desaturatedDarkBlue};
    line-height: 1.5;
  }

  @media (min-width: 700px) {
    padding: 30px;
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
  }
`;

const ImgPost = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 1em 1em 0 0;

  @media (min-width: 940px) {
    max-height: initial;
    width: 40%;
    border-radius: 1em 0 0 1em;
  }
`;

const ArticlePreview = () => {
  const [shareActive, setShareActive] = useState(false);

  return (
    <Article>
      <ImgPost src={ImagePost} alt="Imagen de post" />
      <DetailArticle>
        <h2>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
        <AuthorDetail {...{ shareActive, setShareActive }} />
      </DetailArticle>
      <SharePopup {...{ shareActive }} />
    </Article>
  );
};

export default ArticlePreview;
