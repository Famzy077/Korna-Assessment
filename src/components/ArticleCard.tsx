// @ts-nocheck
import styled from 'styled-components';
import { mediaQueries } from '../styles/theme';
import type { Article } from '../types';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { CircleMinus, Ellipsis } from 'lucide-react';
import { FaComment, FaHandsClapping } from 'react-icons/fa6';
import { PiStarFourFill } from 'react-icons/pi';

const Card = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  cursor: pointer;
  transition: background 0.2s ease;
  overflow-x: hidden; 

  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
    h2 {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  ${mediaQueries.mobile} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const AuthorImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.span`
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const VerifiedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.2;

  ${mediaQueries.mobile} {
    font-size: 1.3rem;
  }
`;

const Preview = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 1.3;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  ${mediaQueries.mobile} {
    font-size: 0.9rem;
  }
`;

const MetaFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 0.85rem;
`;

const EngagementMetrics = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.gray[100]};
  }
`;
const BookMarkIcon = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.gray[100]};
  }

  // ${mediaQueries.tablet} { /* I comment  out this tablet screen because it's affecting desktop screen too*/
  //   display: none;
  // }

  ${mediaQueries.mobile} {
    display: none;
  }
`;

const ArticleImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 3px;
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${mediaQueries.mobile} {
    width: 100%;
    height: 200px;
  }
`;

export const ArticleCard = (props: Article) => {
  const {
    author,
    title,
    preview,
    image,
    readTime,
    date,
    topic,
    engagement
  } = props;

  return (
    <Card>
      <Content>
        <MetaInfo>
          <AuthorImage src={author.image} alt={author.name} />
          <AuthorName>{author.name}</AuthorName>
          {author.verified && (
            <VerifiedBadge>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L14.9282 2.97179L16 10.1795L8 16L0 10.1795L1.07179 2.97179L8 0Z" fill="#2c27c2ff" />
                <path d="M7.42 10.5L11.14 6.78L10.44 6.08L7.42 9.1L6.12 7.8L5.42 8.5L7.42 10.5Z" fill="white" />
              </svg>
            </VerifiedBadge>
          )}
        </MetaInfo>

        <Title>{title}</Title>
        <Preview>{preview}</Preview>

        <MetaFooter>
          <PiStarFourFill style={{ color: '#FFD53E' }} />
          <span style={{ color: 'gray', fontWeight: '500' }}>{date}</span>
          {engagement.likes && (
            <IconButton>
              <FaHandsClapping /> {engagement.likes}k
            </IconButton>
          )}

          {engagement.comments && (
            <IconButton>
              <FaComment /> {engagement.comments}
            </IconButton>
          )}
          {topic && (
            <>
              <span>·</span>
              <span>{topic}</span>
            </>
          )}

          {engagement && (
            <EngagementMetrics>

              <IconButton>
                <CircleMinus size={18} />
              </IconButton>

              <BookMarkIcon>
                <MdOutlineBookmarkAdd size={20} />
              </BookMarkIcon>

              <IconButton>
                <Ellipsis style={{ color: '#1f2937c5' }} />
              </IconButton>

            </EngagementMetrics>
          )}
        </MetaFooter>
      </Content>

      <ArticleImage src={image} alt={title} />
    </Card>
  );
}
