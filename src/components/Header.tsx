// @ts-nocheck
import styled from 'styled-components';
import { mediaQueries } from '../styles/theme';
import { BiMenu } from 'react-icons/bi';
import { IoSearchOutline, IoNotificationsOutline } from 'react-icons/io5';
import { SquarePen, Bell } from 'lucide-react';

// Container for the whole header structure
const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

// Top bar container
const TopBarContainer = styled.header`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  ${mediaQueries.mobile} {
    padding: 0 ${({ theme }) => theme.spacing.md};
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

// Left Section (Menu, Logo, Search)

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Logo = styled.div`
  font-size: 1.8rem;
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

const MenuButton = styled(BiMenu)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  cursor: pointer;
  // font-weight: 400;
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
  min-width: 250px;
  gap: 8px;

  ${mediaQueries.mobile} {
    display: none; /* Hide search bar on mobile */
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
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

// --- Right Section (Actions/Profile) ---

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  ${mediaQueries.mobile} {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ActionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[800]};
  font-size: 0.95rem;

  ${mediaQueries.mobile} {
    span {
      display: none; /* Hide text on mobile */
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export default function Header() {
  return (
    <HeaderWrapper>
      {/* Top Bar: Menu, Logo, Search, Write, Notifications, Profile */}
      <TopBarContainer>
        <HeaderContent>
          <LeftSection>

            <Logo> <MenuButton /> Medium</Logo>
            <SearchBar>
              <IoSearchOutline />
              <SearchInput placeholder="Search" />
            </SearchBar>
          </LeftSection>

          <Actions>
            <ActionItem>
              <SquarePen style={{ fontSize: '1.3rem', cursor: 'pointer', color: 'gray' }} />
              <span style={{ color: 'gray' }}>Write</span>
            </ActionItem>
            <Bell style={{ fontSize: '1.3rem', cursor: 'pointer', color: 'gray' }} />
            <ProfilePicture>
              <ProfileImage src="/profileAvatar.jpg" alt="profile image" />
            </ProfilePicture>
          </Actions>

        </HeaderContent>
      </TopBarContainer>
    </HeaderWrapper>
  );
}