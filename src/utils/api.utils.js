import { getLogger } from './debug.utils';
const log = getLogger('api');

export const baseUrl = 'http://127.0.0.1:5000';
// export const baseUrl = 'http://188.27.128.61:5000';

export function withLogs(promise, fnName) {
    log(`${fnName} - started`);
    return promise
      .then(res => {
        log(`${fnName} - succeeded`);
        return Promise.resolve(res.data);
      })
      .catch(err => {
        log(`${fnName} - failed`, err);
        return Promise.reject(err);
      });
}

export const config = {
    headers: {
      'Content-Type': 'application/json'
    }
};

export const authConfig = (token) => ({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
});