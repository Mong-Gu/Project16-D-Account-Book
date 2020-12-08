import React from 'react';
import styled from 'styled-components';
import { BLUE } from '../../../constants/color';

const AdminSettingButton = (): JSX.Element => {
  return (
    <svg fill={BLUE} viewBox="0 0 512 512">
      <g id="outline">
        <path d="M126.3,128l68.547,30.465L207.4,175.2a41.947,41.947,0,0,0,12.885,11.3A56.07,56.07,0,0,0,216,208v32a56.069,56.069,0,0,0,32,50.586V320a24,24,0,0,0,48,0V290.586A56.069,56.069,0,0,0,328,240V208a56.16,56.16,0,0,0-2.358-16H336a8,8,0,0,0,8-8V129.811a33.737,33.737,0,0,0,29.794,17.93,34.533,34.533,0,0,0,8.38-1.038l11.766-2.942a8,8,0,0,0,5.413-10.912l-7.2-16.8c.973-.144,1.944-.324,2.91-.565l14.878-3.72a8,8,0,0,0,5.215-11.339l-7.671-15.343a47.628,47.628,0,0,0,21.343-26.262l.13-.39A14,14,0,0,0,415.675,40H376.443l-71.56-7.951-.026,0-.02,0-152-16A8.062,8.062,0,0,0,152,16H24a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8ZM280,320a7.954,7.954,0,0,1-4.422,7.155,8.047,8.047,0,0,1-7.156,0A7.956,7.956,0,0,1,264,320V295.419a55.368,55.368,0,0,0,16,0Zm32-80a40,40,0,0,1-80,0V208a40.017,40.017,0,0,1,3.518-16.378A41.335,41.335,0,0,0,241,192h1a13.893,13.893,0,0,0,6.136-1.435A7.978,7.978,0,0,0,248,192v64a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V192a8,8,0,0,0-8-8H256a8.07,8.07,0,0,0-1.435.135A13.885,13.885,0,0,0,256,178v-6.652a40,40,0,0,1,35.061,1.475c.151.082.305.149.459.22a34.221,34.221,0,0,0,15.417,15.427c.045.09.083.182.132.271A40.032,40.032,0,0,1,312,208ZM244.032,120.719,233.06,109.746a11.67,11.67,0,0,1,10.17-19.764l24.4,4.067a14.043,14.043,0,0,1,10.221,7.549l9.723,19.448a4.01,4.01,0,0,1,.422,1.787v31.522a55.78,55.78,0,0,0-32-.022v-4.722A40.589,40.589,0,0,0,244.032,120.719ZM280,232v16H264V232Zm-16-16V200h16v16ZM412.808,56a31.7,31.7,0,0,1-12.5,14.727L392.944,56Zm-34.017,7.47,17.594,35.188-5.2,1.3a13.885,13.885,0,0,1-5.8.212l-.034,0-9.993-23.317a8,8,0,0,0-3.113-3.633L351.86,60.478ZM361.634,85.456l19.312,45.061-2.653.663a17.892,17.892,0,0,1-20.465-9.412c-.016-.033-.033-.066-.05-.1L340.771,88.8a39.582,39.582,0,0,0-2.042-4.143l-12.01-21.019ZM32,32H151.58L299.087,47.527l25.751,45.064A24.033,24.033,0,0,1,328,104.5V176h-6a18.021,18.021,0,0,1-18-18V122.833a20.08,20.08,0,0,0-2.112-8.944l-9.722-19.447a30.1,30.1,0,0,0-21.9-16.175L245.86,74.2a27.67,27.67,0,0,0-24.114,46.86l10.973,10.972A24.7,24.7,0,0,1,240,149.611v16.906c0,.056,0,.11,0,.165v9.3a26.132,26.132,0,0,1-19.8-10.38l-13.8-18.4a8,8,0,0,0-3.151-2.511l-72-32A8.011,8.011,0,0,0,128,112H32Z" />
        <path d="M488,360H440a8,8,0,0,0-8,8v8H417.889l-35.754-17.876A58.288,58.288,0,0,0,356.2,352h-31a77.753,77.753,0,0,0-43.266,13.1L253.578,384H234a41.949,41.949,0,0,0-32.963,16H150.88a30.88,30.88,0,0,0-8.713,60.505l119.576,35.17A7.984,7.984,0,0,0,264,496h56a8,8,0,0,0,2.105-.282L409.071,472H432v8a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V368A8,8,0,0,0,488,360Zm-56,96H408a8,8,0,0,0-2.105.282L318.929,480H265.152l-118.47-34.844A14.88,14.88,0,0,1,150.88,416H193.2a41.951,41.951,0,0,0-1.2,10,14.015,14.015,0,0,0,14,14h93a8,8,0,0,0,0-16H208.076A26.035,26.035,0,0,1,234,400h22a8,8,0,0,0,4.438-1.344L290.8,378.413A61.806,61.806,0,0,1,325.194,368h31a42.2,42.2,0,0,1,18.782,4.434l37.443,18.721A7.994,7.994,0,0,0,416,392h16Zm48,16H448V376h32Z" />
      </g>
    </svg>
  );
};

export default AdminSettingButton;
