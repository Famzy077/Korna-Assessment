// @ts-nocheck
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 1.5;
`;

const BookmarkIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
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

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.black};
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
            <BookmarkIcon>🔖</BookmarkIcon>
            <Description>{data.description}</Description>

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