import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { fetcherPatch } from '../util/fetcher';

const validation = () => {
  const router = useRouter();
  const { token } = router.query;
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    fetcherPatch(token ? '/api/user/validation' : null, { token })
      .then(() => {
        setIsValidated(true);
        console.log('good');
      })
      .catch((err) => {
        setIsValidated(false);
        console.error(err);
      });
  }, [token]);

  if (!isValidated) {
    return (
      <>
        <div>인증이 완료되었거나, 유효시간이 지났습니다.</div>
        <div>인증을 다시 시도하려면, 인증메일을 요청해 주세요!</div>
      </>
    );
  }

  return <div>인증됨!</div>;
};

export default validation;
