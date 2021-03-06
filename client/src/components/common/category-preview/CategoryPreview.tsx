import React from 'react';
import styled from 'styled-components';
import ColorPicker from '../color-picker/ColorPicker';
import Category from '../category/Category';

interface PreviewProps {
  color: string;
  name: string;
  onChange: (color: { hex: string }) => void;
}

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const CategoryPreview: React.FC<PreviewProps> = ({ name, color, onChange }: PreviewProps) => {
  return (
    <PreviewWrapper>
      <Category id={1} name={name} color={color} minWidth={'115px'} preview={'none'} />
      <ColorPicker inputColor={{ hex: color }} setInputColor={onChange} />
    </PreviewWrapper>
  );
};

export default CategoryPreview;
