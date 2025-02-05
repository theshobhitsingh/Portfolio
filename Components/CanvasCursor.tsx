'use client';

import useCanvasCursor from './background_effects';

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className='pointer-events-none fixed -z-50 inset-0' id='canvas' />;
};
export default CanvasCursor;
