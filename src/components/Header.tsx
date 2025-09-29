// @ts-nocheck
import styled from 'styled-components';
import { mediaQueries } from '../styles/theme';
import { IoSearchOutline, IoNotificationsOutline } from 'react-icons/io5';
import { SquarePen, Bell, Menu, MoveUpRight } from 'lucide-react';

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const OpenMobile = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 0;
  text-align: center;
  display: none;
  font-size: 1.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  &:hover{
    color: ${({ theme }) => theme.colors.primary};
  }
  // ${mediaQueries.tablet}{ /* I comment  out this tablet screen because it's affecting desktop screen too*/
  //   display: block;
  // }
  ${mediaQueries.mobile}{
    display: flex;
    justify-content: center;
    gap: 6px;
  }
`;

const TopBarContainer = styled.header`
  width: 100%;
  padding: 5px ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  ${mediaQueries.mobile} {
    padding: 10px ${({ theme }) => theme.spacing.md};
  }
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Logo = styled.div`
  font-size: 1.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
  display: flex;
  gap: 7px;
  align-items: center;
  cursor: pointer;
`;

const MenuButton = styled(Menu)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;
  display: block;
  ${mediaQueries.mobile} {
    font-size: 1.6rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  padding: 8px 12px;
  border-radius: 99px;
  min-width: 200px;
  gap: 8px;

  ${mediaQueries.mobile} {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: 1.2rem;
  }
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.lg};

  ${mediaQueries.mobile} {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ActionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[800]};
  font-size: 0.95rem;

  ${mediaQueries.mobile} {
    span {
      display: none;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  svg {
    font-size: 1.3rem;
  }
`;

const ProfilePicture = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
`;
const IconDiv = styled.div`
  color: ${({ theme }) => theme.colors.gray[500]};
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <OpenMobile href="#">Open in app <MoveUpRight size={19} style={{ marginRight: '4px' }} /> </OpenMobile>
      <TopBarContainer>
        <HeaderContent>
          <LeftSection>

            <Logo> <MenuButton size={21} /> Medium</Logo>
            <SearchBar>
              <IoSearchOutline />
              <SearchInput placeholder="Search" />
            </SearchBar>
          </LeftSection>

          <Actions>
            <ActionItem>
              <IconDiv> <SquarePen style={{ fontSize: '1.3rem', cursor: 'pointer' }} /> </IconDiv>
              <span style={{ color: 'gray', fontWeight: '400' }}>Write</span>
            </ActionItem>
            <IconDiv>
              <Bell style={{ fontSize: '1.3rem', cursor: 'pointer' }} />
            </IconDiv>
            <ProfilePicture>
              <ProfileImage src="/profileAvatar.jpg" alt="profile image" />
            </ProfilePicture>
          </Actions>

        </HeaderContent>
      </TopBarContainer>
    </HeaderWrapper>
  );
}

export default Header