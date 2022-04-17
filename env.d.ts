declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_USERNAME: string;
      EMAIL_PASSWORD: string;
      CLOUDINARY_API_KEY: string;
      CLOUDINARY_API_SECRET: string;
      DB_CONN_STRING: string;
      DB_NAME: string;
      DB_COLLECTION_NAME: string;
    }
  }
}

export {}
