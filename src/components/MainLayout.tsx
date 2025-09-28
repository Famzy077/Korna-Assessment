// // @ts-nocheck
// import styled from 'styled-components';
// import { mediaQueries } from '../styles/theme';
// import ArticleCard from './ArticleCard';
// import Header from './Header';
// import TabNavigation from './TabNavigation';
// import TopicTags from './TopicTags';
// import StaffPicks from './StaffPicks';
// import { mockArticles, staffPicks } from '../data/mockData';
// import { useState } from 'react';

// const Container = styled.div`
//   min-height: 100vh;
//   background-color: ${({ theme }) => theme.colors.background};
// `;

// const MainContent = styled.main`
//   // max-width: 1280px;
//   // margin: 0 auto;
//   // padding: ${({ theme }) => theme.spacing.xl};
//   display: flex;
//   // grid-template-columns: 1fr 300px;
//   // gap: ${({ theme }) => theme.spacing.xl};

//   ${mediaQueries.tablet} {
//     grid-template-columns: 1fr;
//     padding: ${({ theme }) => theme.spacing.lg};
//   }

//   ${mediaQueries.mobile} {
//     padding: ${({ theme }) => theme.spacing.md};
//   }
// `;

// const ArticlesList = styled.div`
//   display: flex;
//   // border: 3px solid lime;
//   border-right: 1px solid ${({ theme }) => theme.colors.gray[300]};
//   margin: 27px 0 7px 0;
//   flex-direction: column;
//   padding: 0 ${({ theme }) => theme.spacing.twoXl};
// `;

// const Sidebar = styled.aside`
//   // position: sticky;
//   top: 80px;
//   height: fit-content;

//   ${mediaQueries.tablet} {
//     // display: none;
//   }
// `;

// const NavContainer = styled.div`
//   margin: 20px 0 7px 0;
//   display: flex;
//   gap: ${({ theme }) => theme.spacing.lg};
//   background: ${({ theme }) => theme.colors.background};
//   border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
//   padding: 0 ${({ theme }) => theme.spacing.xl};
//   ${mediaQueries.mobile} {
//     /* Hide the navigation bar on mobile for a cleaner look */
//     display: none;
//   }
// `;

// const NavItem = styled.a`
//   color: ${({ theme, active }) =>
//     active ? theme.colors.primary : theme.colors.gray[600]};
//   text-decoration: none;
//   font-size: 0.9rem;
//   font-weight: ${({ active }) => (active ? 600 : 500)};
//   transition: color 0.2s ease;
//   padding: 10px 0; /* Add padding for click area */

//   &:hover {
//     color: ${({ theme }) => theme.colors.black};
//   }
// `;

// export default function MainLayout() {
//   const [activeTab, setActiveTab] = useState('For you');

//   return (
//     <Container>
//       <Header />
//       {/* <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} /> */}
//       <MainContent>
//         <ArticlesList>
//           <NavContainer>
//             <NavItem href="#" active>For you</NavItem>
//             <NavItem href="#">Featured</NavItem>
//           </NavContainer>
//           {mockArticles.map((article, index) => (
//             <ArticleCard key={index} {...article} />
//           ))}
//         </ArticlesList>
//         <Sidebar>
//           <StaffPicks picks={staffPicks} />
//           <TopicTags />
//         </Sidebar>
//       </MainContent>
//     </Container>
//   );
// }

// @ts-nocheck
import styled from 'styled-components';
import { mediaQueries } from '../styles/theme';
import ArticleCard from './ArticleCard';
import Header from './Header';
import TopicTags from './TopicTags';
import StaffPicks from './StaffPicks';
import SidebarContent from './SidebarContent';
import { mockArticles, staffPicks } from '../data/mockData';
import { useState } from 'react';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MainContent = styled.main`
  // max-width: 1280px;
  // margin: 0 auto;
  // padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  // grid-template-columns: 1fr 300px;
  // gap: ${({ theme }) => theme.spacing.xl};

  ${mediaQueries.tablet} {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.lg};
  }

  ${mediaQueries.mobile} {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const ArticlesList = styled.div`
  display: flex;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[300]};
  margin: 27px 0 7px 0;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing.twoXl};
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 90px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  ${mediaQueries.tablet} {
    position: static;
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

const NavContainer = styled.div`
  margin: 20px 0 7px 0;
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  ${mediaQueries.mobile} {
    display: none;
  }
`;

const NavItem = styled.a`
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.gray[600]};
  text-decoration: none;
  font-size: 0.95rem;
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
`;

export default function MainLayout() {
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

        {/* <Sidebar>
          <StaffPicks picks={staffPicks} />
          <TopicTags />
        </Sidebar> */}

        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </MainContent>
    </Container>
  );
}
