// @ts-nocheck
import styled from 'styled-components';
import StaffPicks from './StaffPicks';
import WhoToFollow from './WhoToFollow';
import { mediaQueries } from '../styles/theme';
import ReadingList from './ReadingList';
import { staffPicks, whoToFollow, readingList } from '../data/mockData';
import TopicTags from './TopicTags';

const SidebarWrapper = styled.div`
    display: flex;
    margin: 0 ${({ theme }) => theme.spacing.lg};
    margin-right: 0;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.twoXl};

    // ${mediaQueries.tablet} {
    //     margin: 0 ${({ theme }) => theme.spacing.sm};
    // }

    ${mediaQueries.mobile} {
        margin: 0 ${({ theme }) => theme.spacing.sm};
    }
`;

export const SidebarContent = () => {
    return (
        <SidebarWrapper>
            <StaffPicks picks={staffPicks} />
            <TopicTags />
            <WhoToFollow list={whoToFollow} />
            <ReadingList data={readingList} />
        </SidebarWrapper>
    );
}
