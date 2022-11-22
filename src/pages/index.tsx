import { FC } from 'react';
import { Package } from 'react-feather';

const Component: FC = () => {
  return (
    <main className='h-screen flex flex-col justify-center items-center gap-12'>
      <Package width={160} height={160} strokeWidth={0.3} />
      静的HTMLジェネレータ
      <div className='grid grid-cols-2 gap-y-2 gap-x-8 items-center'>
        <p>HTML出力</p>
        <code>
          <pre className='bg-slate-100 border border-slate-200 py-2 px-4'>yarn export</pre>
        </code>
        <p>出力先フォルダ</p>
        <code>
          <pre className='bg-slate-100 border border-slate-200 py-2 px-4'>./out</pre>
        </code>
      </div>
    </main>
  );
};

export default Component;
