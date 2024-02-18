// import React from 'react'
import useSwr from 'swr'
import fetcher from '../libs/fetcher';

function useQuestions() {
    const { data, error, isLoading, mutate} = useSwr('https://dev.pacerlabs.co/api/v1/questions', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      });
      return {
        data,
        error,
        isLoading,
        mutate,
      }
}

export default useQuestions