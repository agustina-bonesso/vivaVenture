import StyledImageComponent from "@/components/StyledImageComponent";
import { TransparentBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import styled from "styled-components";
import { StyledButton } from "../StyledButton";
import { useRouter } from "next/router";

export default function ActivityDetails({ activity, onDeleteActivity }) {
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`/${activity.id}/edit`);
  };

  return (
    <StyledArticle>
      <ImageContainer>
        <TransparentBackLink href="/" title="Back to all Activities">
          <Icon name="chevronLeft" color="black" />
        </TransparentBackLink>
        <StyledImageComponent src={activity.image} alt={activity.title} />
      </ImageContainer>
      <Content>
        <StyledDiv>
          <Title>{activity.title}</Title>
          <ActionIcons>
            <SmallButton
              title="Edit activity"
              type="button"
              $variant="edit"
              onClick={handleEditClick}
            >
              <Icon name="edit" />
            </SmallButton>
            <SmallButton
              title="Delete activity"
              type="button"
              $variant="delete"
              onClick={() => onDeleteActivity(activity.id)}
            >
              <Icon name="delete" />
            </SmallButton>
          </ActionIcons>
        </StyledDiv>

        <Info>{`${activity.area}, ${activity.country}`}</Info>
        <Description>{activity.description}</Description>
        <CategoryTags>
          {activity.category.map((category, index) => (
            <Tag key={index}>{category}</Tag>
          ))}
        </CategoryTags>
      </Content>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  max-width: 50rem;
  margin: 2rem auto;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background: var(--card-background);
`;

const ImageContainer = styled.div`
  position: relative;
  height: 12.5rem;
`;

const ActionIcons = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.625rem;
`;

const SmallButton = styled(StyledButton)`
  padding: 0.1rem 0.3rem;
`;

const Content = styled.div`
  padding: 1.25rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: var(--text-color);
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Info = styled.p`
  font-size: 1rem;
  color: var(--light-orange);
  margin-top: 0.3125rem;
`;

const Description = styled.p`
  margin-top: 0.625rem;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--dark-teal);
`;

const CategoryTags = styled.div`
  margin-top: 0.625rem;
  display: flex;
  gap: 0.3125rem;
`;

const Tag = styled.span`
  background: var(--light-orange);
  color: white;
  padding: 0.3125rem 0.625rem;
  border-radius: var(--border-radius);
`;
