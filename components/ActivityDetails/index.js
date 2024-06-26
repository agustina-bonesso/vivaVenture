import StyledImageComponent from "@/components/StyledImageComponent";
import { StyledButton } from "@/components/StyledButton";
import { StyledLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import styled from "styled-components";

export default function ActivityDetails({ activity }) {
  return (
    <article>
      <StyledImageComponent src={activity.image} alt={activity.title} />
      <StyledDiv>
        <h2>{activity.title}</h2>
        <StyledLink href={`/${activity.id}/edit`}>
          <Icon name="edit" />
        </StyledLink>
      </StyledDiv>
      <div>
        <p>
          {activity.area}, {activity.country}
        </p>
        <p>{activity.category.join(", ")}</p>
      </div>
      <p>{activity.description}</p>
    </article>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -1rem;
`;
