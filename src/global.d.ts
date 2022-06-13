declare module "*.scss";

declare const window: any;

declare module "*.svg" {
  const value: string;
  export default value;
}
