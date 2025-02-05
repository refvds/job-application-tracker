import { useState } from 'react';

export const useTableActions = () => {
  const [initialData, setInitialData] = useState();
  const [openModal, setOpenModal] = useState(false);

  const handleClickModal = () => {
    setOpenModal(false);
  };

  return {
    initialData,
    openModal,
    setInitialData,
    setOpenModal,
    handleClickModal,
  };
};
