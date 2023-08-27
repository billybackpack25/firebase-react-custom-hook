import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const call = async ({ url, config = {}, transform = () => null }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      transform(data);
      return data;
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    call: useCallback(call, []),
  };
};

export default useHttp;
