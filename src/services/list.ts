import { get } from '../utils/request';

export function setList(): void {}
export function getList(major: number): Promise<any> {
    return get('/list', { major });
}
