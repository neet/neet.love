import { dom } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

export const FontawesomeSSR = () => {
  return <style dangerouslySetInnerHTML={{ __html: dom.css() }} />;
};
