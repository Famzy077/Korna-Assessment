// @ts-nocheck
import styled from 'styled-components';
import { recommendedTopics } from '../data/mockData';

const TagsContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.body1};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TagsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Tag = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 99px;
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 0.813rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
    border-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

const SeeMoreLink = styled.a`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 0.813rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export default function TopicTags() {
  return (
    <TagsContainer>
      <Title>Recommended topics</Title>
      <TagsGrid>
        {recommendedTopics.map((topic) => (
          <Tag key={topic.name}>{topic.name}</Tag>
        ))}
      </TagsGrid>
      <SeeMoreLink href="#">See more topics</SeeMoreLink>
    </TagsContainer>
  );
}