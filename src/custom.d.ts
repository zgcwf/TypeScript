// TS声明文件，在此声明css后缀的文件
declare module "*.css" {
    const css: { [key: string]: string };
    export default css;
  }