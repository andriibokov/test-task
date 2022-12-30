import clsx from 'clsx';
import untypedRanges from './ranges.json';
import { items } from '../../core/utils/utils';
import { Item, Range } from '~/core/types/types';
import { colorToClassName, dataSample } from '~/core/constants/constants';
import RangesView from './RangersView';

const ranges = untypedRanges as Range[];

const transform = (el: Item[]): Range[] => {
  const newRanges: Range[] = [];
  let firstItem = el[0];
  
  el.forEach((item, index) => {
    if(firstItem.color !== item.color){
      newRanges.push({
        start: firstItem.date,
        end: el[index - 1].date,
        color: firstItem.color,
      });
      firstItem = item;
    }
  })

  newRanges.push({
    start: firstItem.date,
    end: el[el.length - 1].date,
    color: firstItem.color,
  });

  return newRanges;
};

export const Ranges = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 grid grid-cols-3 gap-8">
      <div className="col-span-3">
        <h2 className="text-2xl mb-4">Convert adjacent items of same type into ranges</h2>
        <p>The data of individual item should look like this: </p>
        <pre>{JSON.stringify(dataSample, null, 2)}</pre>
      </div>

      <h3 className="text-xl font-bold row-start-2">Discretes</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.date}
            className={clsx('h-10 flex items-center px-5 rounded', colorToClassName[item.color])}
          >
            {item.date}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold row-start-2">Ranges example</h3>
      <RangesView ranges={ranges} />

      <h3 className="text-xl font-bold row-start-2">Ranges implementation</h3>
      <RangesView ranges={transform(items)} />
    </div>
  );
};
