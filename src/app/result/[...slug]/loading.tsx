'use client';
import Loading from '@/app/components/Loading';
import { useEffect, useState } from 'react';

export default function LoadingPage() {
  const [isLoading, setIsLoadindg] = useState<Boolean | null>(null);

  useEffect(() => {
    if (isLoading === null) return;

    const timeoutId = setTimeout(() => {
      setIsLoadindg(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  {
    return <Loading />;
  }
}
