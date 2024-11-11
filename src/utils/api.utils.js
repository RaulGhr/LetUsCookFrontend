import { getLogger } from './debug.utils';
const log = getLogger('api');

export const baseUrl = 'localhost:3000';

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