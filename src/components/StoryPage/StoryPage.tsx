import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useScreenContext } from '@/context/ScreenContext/ScreenContext.provider';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import {
  AnimatedPicture,
  PageBody,
  TextBox,
  TextContent,
} from './StoryPage.styled';
import type { StoryPage as StoryPageType } from './StoryPage.types';
export const StoryPage: StoryPageType = ({
  id,
  layout,
  text,
  backgroundPicture,
  backupPicture,
}) => {
  const { settings } = useSettingsContext();
  const { screenData } = useScreenContext();
  const [printBackup, setPrintBackup] = useState<boolean>(false);

  const imageUrl =
    screenData.screenWidth >= 1920
      ? backgroundPicture.picSizes['1080']
      : backgroundPicture.picSizes['720'];

  useEffect(() => {
    const timer = setTimeout(() => setPrintBackup(true), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <PageBody>
      {printBackup && (
        <Image
          src={backupPicture.src}
          alt=""
          layout="fill"
          objectFit="cover"
          priority={true}
          placeholder="blur"
          blurDataURL={backupPicture.src}
          key={backupPicture.src}
        />
      )}
      <AnimatedPicture
        url={imageUrl}
        loop={true}
        controls={false}
        muted={true}
        playing={true}
        width={'100dvw'}
        height={'100dvh'}
        key={imageUrl}
      />
      <TextContent layout={layout} key={id}>
        <TextBox
          className={'textBox'}
          textboxTheme={settings.theme}
          fontSize={settings.fontSize}
        >
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </TextBox>
      </TextContent>
    </PageBody>
  );
};
