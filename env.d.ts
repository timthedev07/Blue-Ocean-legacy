declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_USERNAME: string;
      EMAIL_PASSWORD: string;
      CLOUDINARY_API_KEY: string;
      CLOUDINARY_API_SECRET: string;
    }
  }
}

export {}
