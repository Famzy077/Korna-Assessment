// @ts-nocheck
import styled from 'styled-components';
import StaffPicks from './StaffPicks';
import WhoToFollow from './WhoToFollow';
import ReadingList from './ReadingList';
import { staffPicks, whoToFollow, readingList } from '../data/mockData';

const SidebarWrapper = styled.div`
  display: flex;
  margin: 0 ${({ theme }) => theme.spacing.lg};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.twoXl};
`;

export default function SidebarContent() {
    return (
        <SidebarWrapper>
            <StaffPicks picks={staffPicks} />
            <WhoToFollow list={whoToFollow} />
            <ReadingList data={readingList} />
        </SidebarWrapper>
    );
}
