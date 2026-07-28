/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_NDA_PASSWORD_HASH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
