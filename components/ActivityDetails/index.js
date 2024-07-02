import StyledImageComponent from "@/components/StyledImageComponent";
import { StyledLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import styled from "styled-components";
import { StyledButton } from "../StyledButton";

export default function ActivityDetails({ activity, onDeleteActivity }) {
  return (
    <article>
      <StyledImageComponent src={activity.image} alt={activity.title} />
      <StyledDiv>
        <h2>{activity.title}</h2>
        <div>
          <StyledLink href={`/${activity.id}/edit`}>
            <Icon name="edit" />
          </StyledLink>
          <StyledButton
            type="button"
            $variant="delete"
            onClick={() => onDeleteActivity(activity.id)}
          >
            <Icon name="delete" />
          </StyledButton>
        </div>
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
  /* margin-bottom: -1.5rem; */
`;
