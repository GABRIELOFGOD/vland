"use client";

import { aProperties } from '@/data/properties';
import { IProperty } from '@/model/propertyTypes';
import { useState } from 'react';

const useProperty = () => {
  const [properties, setProperties] = useState<IProperty[]>(aProperties);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<Error | null>(null);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   const fetchProperties = async () => {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data: IProperty[] = await response.json();
  //       setProperties(data);
  //     } catch (error: any) {
  //       if (error.name !== 'AbortError') {
  //         setError(error);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProperties();

  //   return () => {
  //     controller.abort();
  //   };
  // }, [url]);

  return { properties, setProperties };
};

export default useProperty;
