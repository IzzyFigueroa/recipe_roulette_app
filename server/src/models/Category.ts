
// Exporting a module from Category.ts

import User from "./User";

class Category {
    static belongsTo(_User: User, _arg1: { foreignKey: string; }) {
        throw new Error('Method not implemented.');
    }

    // Define properties and methods for Category
  
  }
  
  
  
  export default Category;
  