// @ts-nocheck
import styled from 'styled-components';
import { mediaQueries } from '../styles/theme';

const TabsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background: ${({ theme }) => theme.colors.background};
  margin-top: 56px;
`;

const TabsContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  
  ${mediaQueries.mobile} {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const TabsList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries.mobile} {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

interface TabItemProps {
  active?: boolean;
}

const TabItem = styled.button<TabItemProps>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xs};
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.gray[600]};
  background: none;
  border: none;
  border-bottom: 2px solid ${({ theme, active }) => active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: ${({ active }) => active ? '600' : '400'};
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = ['For you', 'Featured', 'Following', 'Data Science', 'UX', 'Python', 'Coding'];

  return (
    <TabsContainer>
      <TabsContent>
        <TabsList>
          {tabs.map((tab) => (
            <TabItem
              key={tab}
              active={activeTab === tab}
              onClick={() => onTabChange(tab)}
            >
              {tab}
            </TabItem>
          ))}
        </TabsList>
      </TabsContent>
    </TabsContainer>
  );
}