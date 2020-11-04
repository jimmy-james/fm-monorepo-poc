import React, { ReactElement, Suspense } from 'react';
const Renderer = React.lazy(() => import('ItemRendererApp/Renderer'));

const Assessment = (): ReactElement => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        ASSESSMENT
        {Renderer && <Renderer />}
      </Suspense>
    </>
  );
};

export default Assessment;
