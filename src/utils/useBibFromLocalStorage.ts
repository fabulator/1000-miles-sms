const bibStorageKey = 'bib';

const getFromLocalStorage = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return undefined;
  }
};

export const useBibFromLocalStorage = () => {
  const value = getFromLocalStorage(bibStorageKey);
  if (value == null) {
    return undefined;
  }

  return Number(value) > 0 ? Number(value) : undefined;
};

export const setBibToLocalStorage = (value?: string) => {
  try {
    if (!value) {
      localStorage.clear();
      return;
    }
    localStorage.setItem(bibStorageKey, value);
  } catch {
    /* empty */
  }
};
