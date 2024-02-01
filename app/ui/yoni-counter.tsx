'use client';

import { Button } from './button';
import { useState } from 'react';

export function YoniCounter() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => {setCount(count+1)}}>
      {count}
    </Button>
  );
}
