import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '30s',
};

export default function () {
  const daftar = http.get('http://localhost:3000/destinasi');

  check(daftar, {
    'GET daftar destinasi - status 200': (r) => r.status === 200,
  });

  const detail = http.get('http://localhost:3000/destinasi/2');

  check(detail, {
    'GET detail destinasi - status 200': (r) => r.status === 200,
  });

  sleep(1);
}