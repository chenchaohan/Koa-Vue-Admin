import config from '../config/index'

export default {
    setItem(key,val){
        let storage = this.getStorage()
        storage[key] = val
        window.localStorage.setItem(config.namespace,JSON.stringify(storage))
    },
    getItem(key){
        return this.getStorage()[key]
    },
    getStorage(){
        return JSON.parse(window.localStorage.getItem(config.namespace) || "{}")
    },
    clearItme(key){
        let storage = this.getStorage()
        delete storage[key]
        window.localStorage.setItem(config.namespace,JSON.stringify(storage))
    },
    clearAll(){
        window.localStorage.clear()
    }
}
