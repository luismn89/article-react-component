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

  @media (min-width: 640px) and (max-width: 940px) {
    flex-basis: 48%;
    &:nth-child(odd) {
      margin-right: 15px;
    }
  }

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

  @media (min-width: 940px) {
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

const ArticlePreview = ({
  id,
  author,
  published,
  description,
  title,
  url,
  image,
}) => {
  const [shareActive, setShareActive] = useState(false);

  return (
    <Article>
      <ImgPost src={image === "None" ? ImagePost : image} alt={title} />
      <DetailArticle>
        <h2>{title}</h2>
        <p>{description}</p>
        <AuthorDetail {...{ shareActive, setShareActive, author, published }} />
      </DetailArticle>
      <SharePopup {...{ shareActive }} />
    </Article>
  );
};

export default ArticlePreview;
