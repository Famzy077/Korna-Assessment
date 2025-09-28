// @ts-nocheck
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const Role = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const FollowButton = styled.button`
  background: ${({ theme }) => theme.colors.black};
  color: #fff;
  padding: 6px 16px;
  border: none;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[800]};
  }
`;

interface WhoToFollowProps {
    list: {
        name: string;
        role: string;
        image: string;
        url?: string;
    }[];
}

export default function WhoToFollow({ list }: WhoToFollowProps) {
    return (
        <Container>
            <Title>Who to follow</Title>
            <List>
                {list.map((person, index) => (
                    <Item key={index}>
                        <Left>
                            <Avatar src={person.image} alt={person.name} />
                            <Info>
                                <Name>{person.name}</Name>
                                <Role>{person.role}</Role>
                            </Info>
                        </Left>
                        <FollowButton>Follow</FollowButton>
                    </Item>
                ))}
            </List>
        </Container>
    );
}