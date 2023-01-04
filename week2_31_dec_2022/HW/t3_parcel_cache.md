1. Parcel caches everything that it builds to the disk. 
2. When there is a request to rebuild, parcel just rebuilds the changed components - files, configurations and others and invalidates/updates the cache when anything changes.
3. This is why the building of the parcel in development mode is faster.
4. The default cache file path can be configured using the --cache-dir option
5. This folder is included in the .gitignore.