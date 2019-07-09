import React from 'react';
import { dom } from '@fortawesome/fontawesome-svg-core';

export const FontawesomeSSR = () => {
  return (
    <style dangerouslySetInnerHTML={{__html: dom.css()}} />
  )
}
