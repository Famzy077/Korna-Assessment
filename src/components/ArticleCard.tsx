// // @ts-nocheck
// import styled from 'styled-components';
// import { mediaQueries } from '../styles/theme';
// import type { Article } from '../types';

// const Card = styled.article`
//   display: flex;
//   gap: ${({ theme }) => theme.spacing.lg};
//   padding: ${({ theme }) => theme.spacing.xl} 0;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
//   cursor: pointer;

//   &:hover {
//     h2 {
//       color: ${({ theme }) => theme.colors.gray[600]};
//     }
//   }

//   ${mediaQueries.mobile} {
//     flex-direction: column;
//     gap: ${({ theme }) => theme.spacing.md};
//     padding: ${({ theme }) => theme.spacing.lg} 0;
//   }
// `;

// const Content = styled.div`
//   flex: 1;
// `;

// const MetaInfo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing.sm};
//   margin-bottom: ${({ theme }) => theme.spacing.sm};
// `;

// const AuthorImage = styled.img`
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   object-fit: cover;
// `;

// const AuthorName = styled.span`
//   font-weight: 500;
//   color: ${({ theme }) => theme.colors.gray[900]};
// `;

// const Title = styled.h2`
//   ${({ theme }) => theme.typography.h2};
//   margin-bottom: ${({ theme }) => theme.spacing.sm};
//   color: ${({ theme }) => theme.colors.gray[900]};
//   font-size: 19px;
//   font-weight: 700;

//   ${mediaQueries.mobile} {
//     font-size: 16px;
//   }
// `;

// const Preview = styled.p`
//   ${({ theme }) => theme.typography.body1};
//   color: ${({ theme }) => theme.colors.gray[600]};
//   margin-bottom: ${({ theme }) => theme.spacing.md};
// `;

// const ArticleImage = styled.img`
//   width: 200px;
//   height: 134px;
//   object-fit: cover;
//   border-radius: 4px;

//   ${mediaQueries.mobile} {
//     width: 100%;
//     height: 200px;
//   }
// `;

// const MetaFooter = styled.div`
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing.md};
//   color: ${({ theme }) => theme.colors.gray[500]};
//   font-size: 0.813rem;

//   > span {
//     display: flex;
//     align-items: center;
//     gap: ${({ theme }) => theme.spacing.xs};
//   }
// `;

// const EngagementMetrics = styled.div`
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing.md};
//   margin-left: auto;
// `;

// const IconButton = styled.button`
//   background: none;
//   border: none;
//   padding: ${({ theme }) => theme.spacing.xs};
//   color: ${({ theme }) => theme.colors.gray[500]};
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing.xs};
//   font-size: 0.813rem;
//   border-radius: 4px;

//   &:hover {
//     color: ${({ theme }) => theme.colors.gray[900]};
//     background: ${({ theme }) => theme.colors.gray[50]};
//   }
// `;

// export default function ArticleCard(props: Article) {
//   const {
//     author,
//     title,
//     preview,
//     image,
//     readTime,
//     date,
//     topic,
//     engagement
//   } = props;

//   return (
//     <Card>
//       <Content>
//         <MetaInfo>
//           <AuthorImage src={author.image} alt={author.name} />
//           <AuthorName>{author.name}</AuthorName>
//           {author.verified && (
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path d="M8 0L14.9282 2.97179L16 10.1795L8 16L0 10.1795L1.07179 2.97179L8 0Z" fill="#1A8917" />
//               <path d="M7.42 10.5L11.14 6.78L10.44 6.08L7.42 9.1L6.12 7.8L5.42 8.5L7.42 10.5Z" fill="white" />
//             </svg>
//           )}
//         </MetaInfo>
//         <Title>{title}</Title>
//         <Preview>{preview}</Preview>
//         <MetaFooter>
//           <span>{date}</span>
//           <span>·</span>
//           <span>{readTime} read</span>
//           <span>·</span>
//           <span>{topic}</span>
//           {engagement && (
//             <EngagementMetrics>
//               {engagement.likes && (
//                 <IconButton>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5" fill="none" />
//                   </svg>
//                   {engagement.likes}
//                 </IconButton>
//               )}
//               {engagement.comments && (
//                 <IconButton>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                     <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
//                   </svg>
//                   {engagement.comments}
//                 </IconButton>
//               )}
//               <IconButton>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V21L12 17.5L5 21V5Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
//                 </svg>
//               </IconButton>
//             </EngagementMetrics>
//           )}
//         </MetaFooter>
//       </Content>
//       <ArticleImage src={image} alt={title} />
//     </Card>
//   );
// }

// @ts-nocheck
import styled from 'styled-components';
import { mediaQueries } from '../styles/theme';
import type { Article } from '../types';

const Card = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  cursor: pointer;
  transition: background 0.2s ease;

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
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.4;

  ${mediaQueries.mobile} {
    font-size: 1.1rem;
  }
`;

const Preview = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
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
  gap: 14px;
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

const ArticleImage = styled.img`
  width: 200px;
  height: 134px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;

  ${mediaQueries.mobile} {
    width: 100%;
    height: 200px;
  }
`;

export default function ArticleCard(props: Article) {
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
                <path d="M8 0L14.9282 2.97179L16 10.1795L8 16L0 10.1795L1.07179 2.97179L8 0Z" fill="#1A8917" />
                <path d="M7.42 10.5L11.14 6.78L10.44 6.08L7.42 9.1L6.12 7.8L5.42 8.5L7.42 10.5Z" fill="white" />
              </svg>
            </VerifiedBadge>
          )}
        </MetaInfo>

        <Title>{title}</Title>
        <Preview>{preview}</Preview>

        <MetaFooter>
          <span>{date}</span>
          <span>·</span>
          <span>{readTime} read</span>
          {topic && (
            <>
              <span>·</span>
              <span>{topic}</span>
            </>
          )}
          {engagement && (
            <EngagementMetrics>
              {engagement.likes && (
                <IconButton>
                  ❤️ {engagement.likes}k
                </IconButton>
              )}
              {engagement.comments && (
                <IconButton>
                  💬 {engagement.comments}
                </IconButton>
              )}
              <IconButton>🔖 Save</IconButton>
            </EngagementMetrics>
          )}
        </MetaFooter>
      </Content>

      <ArticleImage src={image} alt={title} />
    </Card>
  );
}
