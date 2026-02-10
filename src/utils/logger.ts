/* eslint-disable @typescript-eslint/no-explicit-any */
export const logger = {
  info: (message: string, data?: any) => 
    console.log("[INFO]: ", message, data),

  error: (message: string, error: any) => 
    console.error("[ERROR]: ", message, error),
}