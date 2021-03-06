import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Emoji } from "../../components/atoms/Emoji";
import { NewPostButton } from "../../components/molecules/NewPostButton";
import { Category } from "../../components/organisms/Category";

const QuestionPage = () => {
  const router = useRouter();
  const recentCategory = router.asPath.split("/")[2];
  const recentCategoryObj = questionCategories.find(
    (category) => category.Id === parseInt(recentCategory)
  )
    ? questionCategories.find(
        (category) => category.Id === parseInt(recentCategory)
      )
    : {
        content: "μ μ²΄λ³΄κΈ°",
        symbol: "πββοΈ",
        label: "Man Raising Hand",
        Id: 3,
      };

  return (
    <div css={questionPageStyle}>
      <Category categoryList={questionCategories} />
      <div>
        <Emoji
          symbol={recentCategoryObj?.symbol}
          label={recentCategoryObj?.label || "label"}
          padding="10px"
          emojiSize="30px"
        />
        <span>{recentCategoryObj?.content}</span>
      </div>
      <NewPostButton />
    </div>
  );
};

const questionPageStyle = css`
  width: 1060px;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  margin: 0 auto;
`;

export default QuestionPage;

const questionCategories = [
  {
    content: "Dev-Ops",
    symbol: "βοΈ",
    label: "Gear",
    Id: 6,
  },
  {
    content: "JAVA",
    symbol: "π±",
    label: "Mobile Phone",
    Id: 7,
  },
  {
    content: "μκ³ λ¦¬μ¦",
    symbol: "π»",
    label: "Laptop",
    Id: 5,
  },
  {
    content: "μ½λ©νμ€νΈ",
    symbol: "π",
    label: "Memo",
    Id: 4,
  },
];
