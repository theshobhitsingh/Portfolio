'use client';

import useCanvasCursor from './background_effects';

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className='absolute top-0 pointer-events-none  -z-50 inset-0' id='canvas' />;
};
export default CanvasCursor;
