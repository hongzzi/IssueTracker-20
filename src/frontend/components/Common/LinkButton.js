import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkButton = ({
  SvgIcon, title, link, count, isLeftRounded,
}) => {
  const history = useHistory();
  const handleOnClick = useCallback(() => {
    history.push(`${link}`);
  }, [history]);

  return (
  <LabelsButton onClick={handleOnClick} isLeftRounded={isLeftRounded}>
    <Wrap>
      <SvgIcon></SvgIcon>
      <Title>{title}</Title>
      <Count><div>{count}</div></Count>
    </Wrap>
  </LabelsButton>
  );
};

LinkButton.propTypes = {
  SvgIcon: PropTypes.any,
  title: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  count: PropTypes.number,
  isLeftRounded: PropTypes.bool,
};

const LabelsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 1px solid ${(props) => (props.theme.grayBorderColor)};
  background-color: ${(props) => (props.theme.whiteButtonColor)};
  ${(props) => ((props.isLeftRounded)
    ? `border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 8rem;
    `
    : `border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    width: 9rem;
    `)
}
    &:hover {
    background-color: ${(props) => (props.theme.whiteButtonHoverColor)};
  }
`;

const Count = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.2rem;
  font-size: 0.75rem;
  border-radius: 0.6rem;
  background-color: ${(props) => (props.theme.badgeColor)};
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
`;

const Title = styled.div`
  padding:0px 5px; 
`;

export default LinkButton;
