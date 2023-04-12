import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('favorites.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS favorites (id INTEGER NOT NULL PRIMARY KEY, name TEXT NOT NULL, image TEXT NOT NULL, gender TEXT NOT NULL, species TEXT NOT NULL, originName TEXT NOT NULL, status TEXT NOT NULL, numEpisodes INT NOT NULL)',
                [],
                () => { resolve() },
                (_, error) => { reject(error) }
            )
        })
    })

    return promise;
}

export const insertFavorite = (id, name, image, gender, species, origin, status, episode) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`INSERT INTO favorites (id, name, image, gender, species, originName, status, numEpisodes) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
                [id, name, image, gender, species, origin, status, episode],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })

    return promise;
}

export const removeFavorite = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`DELETE FROM favorites where id = ${id}`,
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })

    return promise;
}

export const fetchFavorites = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM favorites;',
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })

    return promise;
}
