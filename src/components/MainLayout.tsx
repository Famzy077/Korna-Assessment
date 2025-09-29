// @ts-nocheck
import styled from 'styled-components';
import { mediaQueries } from '../styles/theme';
import { ArticleCard } from './ArticleCard';
import Header from './Header';
import StaffPicks from './StaffPicks';
import { SidebarContent } from './SidebarContent';
import { mockArticles, } from '../data/mockData';
import { useState } from 'react';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MainContent = styled.main`

  // ${mediaQueries.tablet} { /* I comment  out this tablet screen because it's affecting desktop screen too*/
  //   padding: ${({ theme }) => theme.spacing.lg};
  // }
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;


  ${mediaQueries.mobile} {
    padding: ${({ theme }) => theme.spacing.md};
    flex-direction: column;
  }
`;

const ArticlesList = styled.div`
  display: flex;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[300]};
  margin: 27px 0 7px 0;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing.twoXl};

  // ${mediaQueries.tablet} { /* I comment  out this tablet screen because it's affecting desktop screen too*/
  //   padding: ${({ theme }) => theme.spacing.md};
  //   border-right: none;
  // }

  ${mediaQueries.mobile} {
    padding: ${({ theme }) => theme.spacing.sm};
    border-right: none;
  }
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 55px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  // ${mediaQueries.tablet} { /* I comment  out this tablet screen because it's affecting desktop screen too*/
  //   position: static;
  //   margin-top: ${({ theme }) => theme.spacing.lg};
  // }
`;

const NavContainer = styled.div`
  margin: 28px 0 7px 0;
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  // ${mediaQueries.tablet} { /* I comment  out this tablet screen because it's affecting desktop screen too*/
  //   margin: 78px 0 7px 0;
  // }
  ${mediaQueries.mobile} {
    margin: 78px 0 7px 0;
  }
`;

const NavItem = styled.a`
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.gray[600]};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? 700 : 500)};
  position: relative;
  padding-bottom: 6px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ active, theme }) =>
    active &&
    `
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: ${theme.colors.primary};
      border-radius: 2px;
    }
  `}
  ${mediaQueries.mobile} {
      font-size: 1.2rem;
    }
`;

export const MainLayout = () => {
  const [activeTab, setActiveTab] = useState('For you');

  return (
    <Container>
      <Header />
      <MainContent>
        <ArticlesList>
          <NavContainer>
            <NavItem href="#" active={activeTab === 'For you'}>
              For you
            </NavItem>
            <NavItem href="#" active={activeTab === 'Featured'}>
              Featured
            </NavItem>
          </NavContainer>

          {mockArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </ArticlesList>

        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </MainContent>
    </Container>
  );
}
