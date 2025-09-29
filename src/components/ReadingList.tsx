// @ts-nocheck
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import styled from 'styled-components';
import { mediaQueries } from '../styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  ${mediaQueries.tablet} {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  ${mediaQueries.mobile} {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 1.5;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const Link = styled.a`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  text-decoration: none;
  line-height: 0.5rem;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface ReadingListProps {
    data: {
        description: string;
        helpLinks: { text: string; url: string }[];
    };
}

export default function ReadingList({ data }: ReadingListProps) {
    return (
        <Container>
            <Title>Reading list</Title>
            <Description>Click the <MdOutlineBookmarkAdd style={{ color: '#1f2937a9', fontSize: '18px', transform: 'translateY(5px)', fontWeight: '200' }} /> on any story to easily add it to your reading list or a custom list that you can share.</Description>
            <FooterLinks>
                {data.helpLinks.map((link, index) => (
                    <Link key={index} href={link.url}>
                        {link.text}
                    </Link>
                ))}
            </FooterLinks>
        </Container>
    );
}