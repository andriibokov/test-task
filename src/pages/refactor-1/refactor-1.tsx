import clsx from 'clsx';
import { useState } from 'react';
import { CenteredLayout } from '~/components/UI/CenteredLayout';
import Button from '~/components/UI/Button/Button';

const buttons: string[] = ['fast', 'quality', 'cheap'];

export const Refactor1 = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">See the code</div>
      <div className="grid grid-cols-3 gap-2 w-60">
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={() => setSelectedButton(button)}
            className={clsx(
              'h-10 px-5 flex items-center justify-center rounded transition-colors',
              button === selectedButton ? 'bg-green-400' : 'bg-gray-300',
            )}
          >
            {button}
          </Button>
        ))}
      </div>
    </CenteredLayout>
  );
};
