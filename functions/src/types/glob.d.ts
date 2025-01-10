import * as minimatch from 'minimatch';
declare module 'glob' {
  interface IOptions extends minimatch.IOptions {}
  
  interface IGlob {
    minimatch: {
      Minimatch: minimatch.Minimatch;
    };
  }
}

