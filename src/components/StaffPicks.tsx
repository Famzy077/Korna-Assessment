
// @ts-nocheck
import styled from 'styled-components';
import type { Article } from '../types';

const StaffPicksContainer = styled.div`
  margin-top: 40px;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const PicksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const PickCard = styled.article`
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Content = styled.div`
  flex: 1;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const AuthorImage = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;

const AuthorName = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const AuthorRole = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[900]};
  font-weight: 700;
`;

const ArticleTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: 5px;
  line-height: 1.2;
`;

const ArticleSubtitle = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const ThumbnailImage = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
`;
const SeeTheFullList = styled.a`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 0.813rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;


interface StaffPicksProps {
  picks: Article[];
}

const StaffPicks = ({ picks }: StaffPicksProps) => {
  return (
    <StaffPicksContainer>
      <Title>Staff Picks</Title>
      <PicksList>
        {picks.map((pick, index) => (
          <PickCard key={index}>
            <Content>
              <AuthorInfo>
                <AuthorImage src={pick.author.image} alt={pick.author.name} />
                <AuthorName>{pick.author.name}</AuthorName>
                {pick.author.role && (
                  <>
                    <AuthorRole>{pick.author.role}</AuthorRole>
                  </>
                )}
              </AuthorInfo>
              <ArticleTitle>{pick.title}</ArticleTitle>
              {pick.subtitle && <ArticleSubtitle>{pick.subtitle}</ArticleSubtitle>}
              {<ArticleSubtitle>{pick.date}</ArticleSubtitle>}
            </Content>
          </PickCard>
        ))}

      </PicksList>
      <SeeTheFullList href="#"> See the full list </SeeTheFullList>
    </StaffPicksContainer>
  );
}
export default StaffPicks