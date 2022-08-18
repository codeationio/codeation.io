import Image from 'next/future/image';
import { ImageProps } from 'next/image';
import { FC, memo, useState } from 'react';

import ChatBubble from './ChatBubble';
const animationTextArr = ['Planning', 'Analysis', 'Developing', 'Testing', 'Delivery'];

const ProcessAnimationBase: FC<Pick<ImageProps, 'height' | 'width'>> = ({ height, width }) => {
  const [textIndex] = useState(0);

  return (
    <div className="relative mt-2 flex items-center justify-end">
      <figure className="mt-20 aspect-square md:m-0 md:-translate-y-[8vh]">
        <Image
          alt="Codeation way of doing things."
          className="aspect-square max-h-[calc(100vh_-_9rem_-_10vh)] md:min-h-[500px]"
          height={height}
          loading="eager"
          src="/images/hero-section-img.svg"
          width={width}
        />
        <span className="chat-bubble animate-chat-bubble">
          <ChatBubble />
        </span>
        <div id="stage-text">{animationTextArr[textIndex]}</div>
      </figure>
    </div>
  );
};

ProcessAnimationBase.defaultProps = {
  height: 500,
  width: 500,
};

const ProcessAnimation = memo(ProcessAnimationBase);
ProcessAnimation.displayName = 'ProcessAnimation';

export default ProcessAnimation;
