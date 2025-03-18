export interface LocalStorageKeys {
  DATA: string;
  OPTIONS: string;
  SOURCE_CONTENT: string;
}

export function getLocalStorageKeys(): LocalStorageKeys {
  return {
    DATA: 'lets_summary_data',
    OPTIONS: 'lets_summary_options',
    SOURCE_CONTENT: 'lets_summary_source_content',
  };
}
