import { Readable, Writable } from 'svelte/store';
import { StorageConfig } from 'storage-helpers';

export type StorageType = 'session' | 'local';

export type SupportedStorageConfigOptions<T> = Omit<
  StorageConfig<T>,
  'getStorage'
>;

export interface PersistedStoreCommonProperties {
  readonly normalizedKey: string;
  readonly storage: string;
}

export interface PersistedWritableOptions<T> {
  readonly storage?: StorageType;
  readonly storageConfig?: SupportedStorageConfigOptions<T>;
}

export interface PersistedWritable<T>
  extends Writable<T>,
    PersistedStoreCommonProperties {}

export interface PersistedReadable<T>
  extends Readable<T>,
    PersistedStoreCommonProperties {}

export type SvelteStorageUpdateEvent<T> = CustomEvent<
  PersistedStoreCommonProperties & { nextValue: T }
>;
