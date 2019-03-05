import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {

  _defaults: any;
  _readyPromise: Promise<any>;

  constructor(private storage: Storage)
  { 
    
  }


  setValue(key: string, value: any) {
    //this.settings[key] = value;
     this.storage.set(key, value);
  }


  getValue(key: string) {
     return this.storage.get(key)
      .then(value => {
      //  console.log('val',value)
        return value;
      });
  }


  removeAll() {
    return this.storage.clear()
      .then(value => {
        //  console.log('val',value)
        return value;
      });
  }

  removeOne(key: string) {
    
    return this.storage.remove(key)
      .then(value => {
        //  console.log('val',value)
        return value;
      })
      .catch(err =>
        {
        return err;
      });
  }

 
}







































// import { Injectable } from '@angular/core';
// import { Constants } from "../constants";

// const DEFAULT_STORAGE = Constants.STORAGE_TYPE;
// @Injectable()
// export class StorageService {
//   storageType: string;

//   constructor() { }

//   save(key: string, data: string, storageType:any = "not_set"): void {
//     let storage_type = storageType==="not_set" ? DEFAULT_STORAGE : storageType;
//     storage_type.setItem(key, data);
//   }

//   saveArray(key: string, data: any, storageType: any = "not_set"): void {
//     let storage_type = storageType === "not_set" ? DEFAULT_STORAGE : storageType;
    
//     storage_type.setItem(key, data);
//   }
  
//   fetch(key: string, storageType:any = "not_set"): string {
//     let storage_type = storageType==="not_set" ? DEFAULT_STORAGE : storageType;
//     let value: string;
//     try{
//       value = storage_type.getItem(key);
//     }
//     catch(error){
//       value = "";
//     }
//     return value;
//   }

//   eraseSpecific(key: string, storageType:any = "not_set"): void {
//     let storage_type = storageType==="not_set" ? DEFAULT_STORAGE : storageType;
//     storage_type.removeItem(key);
//   }

//   eraseAll(storageType:any = "not_set"): void {
//     let storage_type = storageType==="not_set" ? DEFAULT_STORAGE : storageType;
//     storage_type.clear();
//   }

// }
