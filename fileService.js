import { v4 } from 'uuid';
import * as path from 'path';

class FileService {
  saveFile(file) {
    try {
      const fileName = v4() + '.jpg';
      //generate a path to the static folder
      const filePath = path.resolve('static', fileName);
      //download file to the server
      file.mv(filePath);
      return fileName;
    } catch (error) {
      throw new Error('file dont saved');
    }
  }
}

export default new FileService();
