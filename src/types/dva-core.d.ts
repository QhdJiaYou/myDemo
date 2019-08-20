import { Store } from '../../node_modules/redux/index.d';
import { DvaInstance } from './dva.d';

export interface Dva extends DvaInstance {
    _store: Store;
}

export function create(hooksAndOpts: any, createOpts?: any): Dva;
