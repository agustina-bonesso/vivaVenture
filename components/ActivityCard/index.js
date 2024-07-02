import StyledImageComponent from "@/components/StyledImageComponent";
import { StyledLink } from "@/components/StyledLinks";
import styled from "styled-components";
import createGlobalStyle from "styled-components";

export default function ActivityCard({ activity }) {
  return (
    <StyledArticle>
      <StyledLink href={`/${activity.id}`}>
        <StyledImageComponent src={activity.image} alt={activity.title} />
        <h2>{activity.title}</h2>
      </StyledLink>
      <div>
        <p>
          {activity.area}, {activity.country}
        </p>
        <p>{activity.category.join(", ")}</p>
      </div>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  box-shadow: var(--box-shadow);
  background-color: #fff;
  border-radius: var(--border-radius);
  padding: 1rem;
  margin: 1rem;
`;
