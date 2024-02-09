import Image from 'next/image';
import { useState } from 'react';

import { CloseX, TagBody, TagModal } from './TagElement.styled';
import type { TagElement as TagElementType } from './TagElement.types';

export const TagElement: TagElementType = ({
  tagName,
  tagDescription,
  icon,
}) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const modalHandler = () => {
    setIsModalActive(prevState => !prevState);
  };

  return (
    <TagBody>
      <button onClick={modalHandler}>
        <Image {...icon} width={50} height={50} />
      </button>
      <TagModal isModalOpen={isModalActive}>
        <button onClick={modalHandler}>
          <CloseX />
          <h3>{tagName}</h3>
          <p>{tagDescription}</p>
        </button>
      </TagModal>
    </TagBody>
  );
};
