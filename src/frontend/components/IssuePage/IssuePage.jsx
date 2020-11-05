import React from 'react';
import styled from 'styled-components';
import Issue from '@Components/Issue';
import Button from '@Common/Button';

import FilterButton from '@Components/IssuePage/FilterButton';
import LinkButton from '@Common/LinkButton';
import labelIcon from '@Images/comment.svg';
import milestoneIcon from '@Images/milestone.svg';

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

const FilterInputBox = styled.input`
  width: 35rem;
  border: 1px solid ${(props) => (props.theme.inputBorderColor)};
  background-color: ${(props) => (props.theme.inputBgColor)};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding-left: 0.5rem;
  margin-left: -1px;
  &:focus {
    background-color: ${(props) => (props.theme.whiteColor)};
    border: 1px solid ${(props) => (props.theme.inputBorderActiveColor)};
    box-shadow:  0 0 0 3px ${(props) => (props.theme.inputShadowColor)};
    z-index: 1;
  }
`;

const CreateIssueButton = styled(Button)`
  width: 10rem;
`;

const SortMenuBar = styled.div`
  ${FlexRowBox}
  margin-top: 1rem;
  background-color: ${(props) => (props.theme.menuBarBgColor)};
  padding: 0.6rem;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border: 1px solid ${(props) => (props.theme.menuBarBorderColor)};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const SortMenuButton = styled.button`
  height: 1.5em;
  border:none;
  cursor: pointer;
  background-color: transparent;
`;

const MenuBox = styled.div`
  ${FlexRowBox}
  position: relative;
`;

const IssuePage = () => (
  <Main>
    <Topbar>ISSUE CRACKER</Topbar>
    <Content>
      <FlexRowBar>
        <MenuBox>
          <FilterButton></FilterButton>
          <FilterInputBox placeholder='필터를 입력해주세요'></FilterInputBox>
        </MenuBox>
        <MenuBox>
          <LinkButton
            SvgIcon={labelIcon}
            title={'Labels'}
            count={11}
            isLeftRounded={true}
            link={'/labels'}
          />
          <LinkButton
            SvgIcon={milestoneIcon}
            title={'Milestones'}
            count={4}
            isLeftRounded={false}
            link={'/milestones'}
          />
        </MenuBox>
        <CreateIssueButton type="confirm" text="New Issue"></CreateIssueButton>
      </FlexRowBar>
      <FlexColumnBar>
        <SortMenuBar>
          <input type='checkbox'></input>
          <MenuBox>
            <SortMenuButton>Author</SortMenuButton>
            <SortMenuButton>Label</SortMenuButton>
            <SortMenuButton>Projects</SortMenuButton>
            <SortMenuButton>Milestones</SortMenuButton>
            <SortMenuButton>Assignee</SortMenuButton>
            <SortMenuButton>Sort</SortMenuButton>
          </MenuBox>
        </SortMenuBar>
        <Issue
          issueIsOpened={true}
          title={'새로운 이슈입니다.'}
          labels={[{ title: 'frontend', color: '#31b50c' }, { title: 'backend', color: '#a2eeef' }, { title: 'env', color: '#a20000' }]}
          author={'boost'}
          issueNumber={61}
          time={new Date('2020-11-04T09:23:00.000Z')}
          milestone={'week1'}
          assignee={['data:image/jpeg;base64,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', 'https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/avatar/160/9428.png', 'data:image/jpeg;base64,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']}
          commentNumber={3}
        />
      </FlexColumnBar>
    </Content>
  </Main>
);

export default IssuePage;
