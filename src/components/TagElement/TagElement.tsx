import Image from 'next/image';

import { tagDataSelector } from './TagElement.helpers';
import { DescriptionBox, IconBox, TagBody } from './TagElement.styled';
import type { TagElement as TagElementType } from './TagElement.types';

export const TagElement: TagElementType = ({ tagName, extendedTag }) => {
  const tagData = tagDataSelector(tagName);

  if (extendedTag) {
    return (
      <TagBody extend={true}>
        <IconBox>
          <Image
            src={tagData.icon}
            alt={tagData.title}
            width={70}
            height={70}
          />
          <h5>{tagData.title}</h5>
        </IconBox>
        <DescriptionBox>{tagData.description}</DescriptionBox>
      </TagBody>
    );
  }

  return (
    <TagBody extend={false}>
      <Image
        src={tagData.icon}
        alt={tagData.title}
        width={50}
        height={50}
        title={tagData.title}
      />
    </TagBody>
  );
};
