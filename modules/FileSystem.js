import ReactNative from 'react-native'

// noinspection JSUnresolvedVariable
const RNFileSystem = ReactNative.NativeModules.RNFileSystem

export default class FileSystem {
  static storage = {
    backedUp: 'BACKED_UP',
    important: 'IMPORTANT',
    auxiliary: 'AUXILIARY',
    temporary: 'TEMPORARY'
  };

  static async list(path, storage = FileSystem.storage.backedUp) {
    return RNFileSystem.list(path, storage);
  }

  static async writeToFile (path, contents, isAppend = false, storage = FileSystem.storage.backedUp) {
    return RNFileSystem.writeToFile(path, contents, isAppend, storage)
  }

  static async readFile (path, storage = FileSystem.storage.backedUp) {
    return RNFileSystem.readFile(path, storage)
  }

  static async delete (path, storage = FileSystem.storage.backedUp) {
    return RNFileSystem.delete(path, storage)
  }

  static async fileExists (path, storage = FileSystem.storage.backedUp) {
    return RNFileSystem.fileExists(path, storage)
  }

  static async directoryExists (path, storage = FileSystem.storage.backedUp) {
    return RNFileSystem.directoryExists(path, storage)
  }

  static absolutePath (path, storage = FileSystem.storage.backedUp) {
    return RNFileSystem[storage] + '/' + path
  }
}
