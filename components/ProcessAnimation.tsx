import Image from 'next/future/image';
import { FC, memo, SVGProps, useState } from 'react';

import ChatBubble from './ChatBubble';
const animationTextArr = ['Planning', 'Analysis', 'Developing', 'Testing', 'Delivery'];

const ProcessAnimationBase: FC<SVGProps<SVGSVGElement>> = ({ height, width }) => {
  const [textIndex] = useState(0);

  return (
    <div className="relative flex items-center justify-end">
      <figure className="m-0 -translate-y-[8vh]">
        <Image
          className="max-h-[minmax(500px_,_calc(100vh_-_8rem_-_10vh))]"
          height={height}
          src="/images/hero-section-img.svg"
          width={width}
        />
        <div id="stage-text">{animationTextArr[textIndex]}</div>
        <span className="chat-bubble animate-chat-bubble">
          <ChatBubble />
        </span>
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
