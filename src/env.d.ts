/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_NDA_PASSWORD_HASH: string;
  readonly PUBLIC_UNSPLASH_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
