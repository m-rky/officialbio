import * as TooltipBase from '@radix-ui/react-tooltip';

import { styled } from '../../stitches.config';

const ToolTipMessage = styled(TooltipBase.Content, {
  backgroundColor: '$gray6',
  padding: '0.5rem 1rem',
  borderRadius: '$button',
  boxShadow: '$tooltip',
});
const TooltipArrow = styled(TooltipBase.Arrow, {
  fill: '$gray6',
});

function Tooltip({ message, children }) {
  return (
    <TooltipBase.Provider delayDuration={200}>
      <TooltipBase.Root>
        <TooltipBase.Trigger asChild>{children}</TooltipBase.Trigger>
        <ToolTipMessage sideOffset={5}>
          <TooltipArrow offset={5} width={11} height={5} />
          {message}
        </ToolTipMessage>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  );
}

export default Tooltip;
