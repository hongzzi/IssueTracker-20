import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import useFetch from '@Util/useFetch';
import makeFilterQueryString from '@Util/makeFilterQueryString';

import Issue from '@Components/Issue';
import Button from '@Common/Button';
import FilterButton from '@Components/IssuePage/FilterButton';
import LinkButton from '@Common/LinkButton';
import AuthorSortButton from '@Components/IssuePage/AuthorSortButton';
import AssigneeSortButton from '@Components/IssuePage/AssigneeSortButton';
import LabelSortButton from '@Components/IssuePage/LabelSortButton';
import MilestoneSortButton from '@Components/IssuePage/MilestoneSortButton';

import labelIcon from '@Images/comment.svg';
import milestoneIcon from '@Images/milestone.svg';
import FilterInputBox from '@Components/IssuePage/FilterInputBox';
import { useHistory } from 'react-router';

const getIssueList = (issues) => issues.map((issue) => <Issue key={issue.id} data={issue} />);

const IssuePage = () => {
  const [list, setList] = useState([]);
  const [labelCount, setLabelCount] = useState(0);
  const [milestoneCount, setMilestoneCount] = useState(0);
  const [filter, setFilter] = useState(['is:open']);
  const history = useHistory();
  const onClickCreateIssue = () => {
    history.push('issue/template');
  };

  useEffect(async () => {
    const result = await useFetch(`/api/issues?${makeFilterQueryString(filter)}`, 'GET');
    const issueList = getIssueList(result.issues);
    setList(issueList);
    setLabelCount(result.labelCount);
    setMilestoneCount(result.milestoneCount);
  }, []);

  return (
    <Main>
      <Topbar>ISSUE CRACKER</Topbar>
      <Content>
      <FlexRowBar>
        <MenuBox>
          <FilterButton></FilterButton>
          <FilterInputBox placeholder='필터를 입력해주세요' filter={filter}></FilterInputBox>
        </MenuBox>
        <MenuBox>
          <LinkButton
            SvgIcon={labelIcon}
            title={'Labels'}
            count={labelCount}
            isLeftRounded={true}
            link={'/labels'}
          />
          <LinkButton
            SvgIcon={milestoneIcon}
            title={'Milestones'}
            count={milestoneCount}
            isLeftRounded={false}
            link={'/milestones'}
          />
        </MenuBox>
        <CreateIssueButton type="confirm" text="New Issue" onClick={onClickCreateIssue}></CreateIssueButton>
      </FlexRowBar>
        <FlexColumnBar>
          <SortMenuBar>
            <input type="checkbox"></input>
            <MenuBox>
              <AuthorSortButton></AuthorSortButton>
              <AssigneeSortButton></AssigneeSortButton>
              <LabelSortButton></LabelSortButton>
              <MilestoneSortButton></MilestoneSortButton>
            </MenuBox>
          </SortMenuBar>
          {list}
        </FlexColumnBar>
      </Content>
    </Main>
  );
};

const FlexColumnBox = `
  display: flex;
  flex-flow: column;
`;

const FlexRowBox = `
  display: flex;
  flex-flow: row;
`;

const Main = styled.div`
  ${FlexColumnBox}
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

const Topbar = styled.div`
  ${FlexRowBox}
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.headerColor};
  align-items: center;
  justify-content: center;
  color: white;
`;

const Content = styled.div`
  ${FlexColumnBox}
  width: 1020px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const FlexRowBar = styled.div`
  ${FlexRowBox}
  width: 100%;
  height: 30px;
  justify-content: space-between;
`;

const FlexColumnBar = styled.div`
  ${FlexColumnBox}
  height: 30px;
`;

const LabelsButton = styled.button`
  width: 8rem;
  border: 1px solid ${(props) => props.theme.grayBorderColor};
  background-color: ${(props) => props.theme.whiteButtonColor};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  &:hover {
    background-color: ${(props) => props.theme.whiteButtonHoverColor};
  }
`;

const MilestonesButton = styled.button`
  width: 8rem;
  border: 1px solid ${(props) => props.theme.grayBorderColor};
  background-color: ${(props) => props.theme.whiteColor};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-left: -1px;
  &:hover {
    background-color: ${(props) => props.theme.whiteButtonHoverColor};
  }
`;

const CreateIssueButton = styled(Button)`
  width: 10rem;
`;

const SortMenuBar = styled.div`
  ${FlexRowBox}
  margin-top: 1rem;
  background-color: ${(props) => props.theme.menuBarBgColor};
  padding: 0.6rem;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border: 1px solid ${(props) => props.theme.menuBarBorderColor};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const MenuBox = styled.div`
  ${FlexRowBox}
  position: relative;
`;

export default IssuePage;
