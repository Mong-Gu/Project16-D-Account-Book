import React, { useState } from 'react';
import AcoountbookDeleteByAdminModal from './accountbook-delete-by-admin/AccountbookDeleteByAdminModal';
import FormModalHeader from './form-modal-header/FormModalHeader';
export default {
  title: 'Modal Example',
};

export const AccountbookDeleteByAdminDefault: React.FC = () => {
  const [state, setState] = useState<boolean>(true);

  const closeModal = () => {
    // 모달을 닫는 함수
  };
  const cancelClick = () => {
    // 선택 취소를 누르는 함수
  };

  const deleteClick = () => {
    // 삭제 버튼을 누르는 함수
  };
  return (
    <AcoountbookDeleteByAdminModal
      cancelClick={cancelClick}
      deleteClick={deleteClick}
      show={state}
      closeModal={closeModal}
    />
  );
};

export const FormModalHeaderDefault: React.FC = () => {
  return <FormModalHeader modalName={'내역 변경'} blueName={'완료'} redName={'삭제'} />;
};
