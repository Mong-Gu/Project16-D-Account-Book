import React from 'react';
import styled from 'styled-components';
import { BLUE } from '../../constants/color';

interface ExportButtonProps {
  onClick?: () => void;
}

const ExportButtonWrapper = styled.div`
  cursor: pointer;
  &:hover {
    fill: ${BLUE};
  }
`;

const ExportButton: React.FC<ExportButtonProps> = ({ onClick }: ExportButtonProps) => {
  return (
    <ExportButtonWrapper>
      <svg onClick={onClick} width="30" height="30" style={{ marginLeft: 20 }} viewBox="0 0 512 512">
        <g>
          <g>
            <path
              d="M352,288.994v127.008H64v-288h96v-64H32c-17.664,0-32,14.336-32,32v352c0,17.696,14.336,32,32,32h352
			c17.696,0,32-14.304,32-32V288.994H352z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M505.6,131.202l-128-96c-4.8-3.648-11.328-4.224-16.736-1.504c-5.44,2.72-8.864,8.256-8.864,14.304v48h-48
			c-97.056,0-176,78.944-176,176c0,7.424,5.12,13.888,12.32,15.584c1.216,0.288,2.464,0.416,3.68,0.416
			c5.952,0,11.552-3.328,14.304-8.832l3.776-7.52c24.544-49.12,73.888-79.648,128.8-79.648H352v48
			c0,6.048,3.424,11.584,8.832,14.304c5.408,2.72,11.936,2.144,16.768-1.504l128-96c4.032-3.008,6.4-7.776,6.4-12.8
			S509.632,134.21,505.6,131.202z"
            />
          </g>
        </g>
      </svg>
    </ExportButtonWrapper>
  );
};

export default ExportButton;