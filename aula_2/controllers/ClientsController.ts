import { log } from "node:console";

class ClientController {

    list() {
        return [
            { id: 1, name: 'Thiago' },
            { id: 2, name: 'Cyntia' },
            { id: 3, name: 'Cecilia' },
            { id: 4, name: 'Thomas' },
        ]
    }

}

export default new ClientController();